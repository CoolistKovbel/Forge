"use client";

import { logout } from "../lib/actions";



export const SignOutButton = () => {
  const onClick = () => {
    logout();
  };

  return (
    <button
      onClick={onClick}
      className="flex h-[48px] text-white w-full grow items-center justify-center gap-2 rounded-md bg-black p-3 text-sm font-medium hover:bg-sky-100 hover:text-orange-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      <div className="hidden md:block">Sign Out</div>
      <div className="md:hidden block">🚪</div>
    </button>
  );
};
