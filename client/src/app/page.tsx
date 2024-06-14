"use client";
import React, { useState, useEffect } from "react";
import { handleData, Result } from './Constants/utils';
import Form from './Components/Form';
import MainBody from './Components/Main'
import Error from './Components/Erorr'
import Logo from "./Components/Logo";

export default function Home() {
  const [details, setDetails] = useState<{ username: string; level: number } | undefined>();
  const [data, setData] = useState<Result | undefined>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    if (details) {
      setLoading(true); // Set loading to true when details are set
      const { username: user, level } = details;
      fetch(`http://localhost:5000/id?user=${user}`)
        .then((res) => res.json())
        .then((json) => {
          setData(handleData(json, level));
          setLoading(false); // Set loading to false when data is fetched
        })
        .catch((err) => {
          setError(err);
          setLoading(false); // Set loading to false if there's an error
        });
    }
  }, [details]);

  return (
    <main className="flex flex-col items-center justify-between lg:pt-48 pt-24 lg:pb-24">
      <Logo/>
      <Form onSubmit={setDetails} />
      <MainBody data={data} loading={loading} /> {/* Pass loading state to MainBody */}
      <Error error={error} />
    </main>
  );
};