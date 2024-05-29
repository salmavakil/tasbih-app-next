"use client";

import React, { useEffect, useRef, useState } from "react";
import { tasbih } from "../../../public/tasbih";

export default function Dashboard() {
  const [count, setCount] = useState<number>(0);
  const [term, setTerm] = useState<string | null>(null);
  const [goal, setGoal] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // useEffect(()=>{
  //   localStorage.setItem('TASBIH',JSON.stringify({term:term,goal:goal,count:count}));
  // },[]);

  const handleClick = () => {
    if (!term) alert("Please select Tasbih");
    else if (!goal) alert("Please enter Tasbih count");
    else if (goal - count === 0) return;
    else setCount(count + 1);
    // localStorage.setItem('TASBIH' + tasbih.find(x=>x.term === term)?.id,JSON.stringify({term:term,goal:goal,count:count}));}
  };

  const reset = () => {
    setCount(0);
    setGoal(0);
    formRef.current?.reset();
  };

  return (
    <>
      <div>
        <form ref={formRef} className="max-w-sm mx-auto flex">
          <input
            onChange={(e) => setGoal(parseInt(e.target.value))}
            type="number"
            className="bg-gray-50 mr-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tasbih Count"
          />
          <select
            onChange={(e) => setTerm(e.target.value)}
            defaultValue={0}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={0}>Select a tasbih</option>
            {tasbih.map((term) => {
              return <option key={term.id}>{term.term}</option>;
            })}
          </select>
        </form>
      </div>
      <div className="flex mt-36 items-center justify-center">
        <div className="p-10 grid grid-cols-2 gap-2">
          <div>
            <div className="px-4 pb-5">
              <span className="text-5xl w-50">{count}</span>
              <p className="">Done</p>
            </div>
            <div className="px-4 py-4">
              <b className="text-xl">{goal ? goal - count : 0}</b>
              <p>Left</p>
            </div>
          </div>
          <div>
            {/* <p className="md:text-lg sm:text-xs">Press the below button to start tasbih</p> */}
            <button
              onClick={handleClick}
              type="button"
              disabled={goal ? goal - count === 0 : true}
              className="inline-block disabled:opacity-60 rounded bg-cyan-700 px-8 py-14 text-sm font-medium uppercase leading-normal text-white shadow-cyan-3 transition duration-150 ease-in-out hover:bg-cyan-accent-600 hover:shadow-cyan-2 focus:bg-cyan-accent-600 focus:shadow-cyan-2 focus:outline-none focus:ring-0 active:bg-cyan-600 active:shadow-cyan-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Press me
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center itemas-center">
        <button
          onClick={() => reset()}
          type="button"
          className="rounded bg-cyan-700 px-2 py-1 text-xs font-small uppercase leading-normal text-white shadow-cyan-3 transition duration-150 ease-in-out hover:bg-cyan-accent-600 hover:shadow-cyan-2 focus:bg-cyan-accent-600 focus:shadow-cyan-2 focus:outline-none focus:ring-0 active:bg-cyan-600 active:shadow-cyan-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        >
          Reset
        </button>
      </div>
    </>
  );
}
