
import { auth } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import { SignOutButton } from "./SignOutButton";


const MainDeAppHeader = async () => {
  const authResult = await auth();
 
  console.log(authResult?.user?._doc.username)


  return (
    <header className="w-full bg-[#222] mb-10 flex items-center justify-between p-4 shadow-lg rounded-lg mx-auto">

      <h2 className="font-bold text-[1.2rem]"><Link href="/dashboard" className="flex items-center gap-2">
        
        <span  className="hidden md:block">Urban Forge</span>

        <Image src="/forged.png" alt="slow life" width={92} height={92} className="block"/>

        </Link>
      </h2>


      <nav  className="w-[200px] flex items-center">
        <Link href="/settings">Settings</Link>

        <SignOutButton />
      </nav>


    </header>
  );
};

export default MainDeAppHeader;
