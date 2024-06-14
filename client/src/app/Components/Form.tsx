"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormProps {
  onSubmit: (data: { username: string; level: number }) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [showFaq, setShowFaq] = useState<boolean>(true);

  const Clicked = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit({ username, level: Number(level) });
    setShowFaq(false);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleLevelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLevel(e.target.value);
  };

  return (
    <form className="md:w-full max-w-lg md:mx-auto p-6">
    <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
      <div className="flex-1 md:flex-[3]">
        <label className="sr-only" htmlFor="username">Steam Username</label>
        <input
          id="username"
          type="text"
          spellCheck="false"
          placeholder="Steam Username"
          required
          value={username}
          onChange={handleUsernameChange}
          className="md:w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
        />
      </div>
      <div className="flex-1 md:flex-[1]">
        <label className="sr-only" htmlFor="level">Level Wanted</label>
        <input
          id="level"
          type="number"
          placeholder="Level Wanted"
          required 
          value={level}
          onChange={handleLevelChange}
          className="md:w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={Clicked}
          className="w-full md:w-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Calculate
        </button>
      </div>
    </div>
  </form>
  );
};

export default Form;
