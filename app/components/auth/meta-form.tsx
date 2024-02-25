"use client"





const MetaForm = () => {




  return (
    <form className="flex items-center justify-center flex-col bg-black text-white p-3 rounded-lg mt-10">
      <h2 className="text-md font-semibold mb-3">
        Metamask Account? Sign in?
      </h2>
      <div className="flex flex-col w-full">
        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
          Enter
        </button>
      </div>
    </form>
  );
};

export default MetaForm;
