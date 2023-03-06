import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl mb-4 text-white font-bold">Calculator</h1>
      <div className="bg-slate-200 h-[600px] w-[500px] rounded-md shadow-md p-4 font-bold text-2xl">
        <div className=" bg-slate-100 rounded-t-md h-20 w-full shadow-md flex justify-end items-center pr-3">
          <h1>3243</h1>
        </div>
        <div className="w-full h-[480px] mt-3">
          <div className="flex justify-between"></div>
          <div className="grid grid-cols-3 gap-2 mt-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
