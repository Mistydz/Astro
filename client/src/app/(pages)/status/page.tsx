"use client";
import { useEffect, useState } from 'react';

export default function Status() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/status');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="flex items-center justify-center">Loading...</div>;
  if (error) return <div className="flex items-center justify-center">Error: {error.message}</div>;

  return (
    <div className="flex flex-col items-center justify-center lg:pt-48 lg:pb-48 pt-20 pb-20">
      <h1 className="text-2xl font-bold mb-4">Steam Server Status</h1>
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-4 text-center">
        <div className="p-4 rounded-lg">
          <p className="text-lg font-semibold">Version: {data.version}</p>
          <p className="text-lg">Timestamp: {new Date(data.timestamp * 1000).toLocaleString()}</p>
          <h2 className="text-xl font-bold mt-4 mb-2">Services</h2>
          <ul className="list-none">
            <li>Sessions Logon: {data.services.SessionsLogon}</li>
            <li>Steam Community: {data.services.SteamCommunity}</li>
            <li>IEconItems: {data.services.IEconItems}</li>
            <li>Leaderboards: {data.services.Leaderboards}</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Matchmaking</h2>
          <ul className="list-none">
            <li>Scheduler: {data.matchmaking.scheduler}</li>
            <li>Online Servers: {data.matchmaking.online_servers}</li>
            <li>Online Players: {data.matchmaking.online_players}</li>
            <li>Searching Players: {data.matchmaking.searching_players}</li>
            <li>Average Search Time: {data.matchmaking.search_seconds_avg} seconds</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
