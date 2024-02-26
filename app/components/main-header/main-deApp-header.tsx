
import { auth } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import { UserMenu } from "./usermenu";


const MainDeAppHeader = async () => {
  const authResult = await auth();
 

  return (
    <header className="w-full bg-[#111] text-white mb-10 flex items-center justify-between p-4 shadow-lg  mx-auto">

      <h2 className="font-bold text-[1.2rem]"><Link href="/dashboard" className="flex items-center gap-2">
        
        <span  className="hidden md:block">Urban Forge</span>

        <Image src="/forged.png" alt="slow life" width={92} height={92} className="block"/>

        </Link>
      </h2>


      <UserMenu user={authResult?.user?._doc}/>

    </header>
  );
};

export default MainDeAppHeader;
