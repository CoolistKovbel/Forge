import React from "react";

const Page = () => {
  return (
    <main className="w-full min-h-screen bg-[#111] text-white  flex items-center justify-center">

      <div className="w-[80%] h-[200px] p-4 border-2 rounded-md bg-white shadow-md">
        <form className="w-full h-full flex flex-col justify-center gap-4">
          <h2 className="font-bold text-center text-3xl text-[#221]">Forge</h2>
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Enter your query"
            className="text-black p-3 border-2 rounded-md focus:outline-none focus:border-[#221]"
          />
          <button
            type="submit"
            className="bg-[#221] text-white p-3 uppercase font-bold rounded-md hover:bg-opacity-80 focus:outline-none"
          >
            Ask Away
          </button>
        </form>
      </div>
    </main>
  );
};

export default Page;
