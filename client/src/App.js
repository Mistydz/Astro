import React, { useState, useEffect } from "react";
import Font from "react-font";

import Form from "./components/main/form";
import Bar from "./components/main/bar";
import MainBody from "./components/main/main";
import Page from "./components/main/page";
import Error from "./components/error/error";

import { handleData } from './utils'



function App() {
    const [details, setDetails] = useState();
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if (details) {
            const { username: user, level } = details;
            fetch(`/id?user=${user}`)
                .then((res) => res.json())
                .then(json => setData(handleData(json, level)))
                .catch(setError);
        }
    }, [details]);

    return ( <Font family = "Exo 2">
        <Page>
        <Bar/>
        <Form onSubmit = { setDetails }/> 
        <Error error = { error }/> 
        <MainBody data = { data }/>
        </Page> 
        </Font>
    );
}

export default App;