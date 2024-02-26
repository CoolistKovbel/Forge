import UserForm from "@/app/components/auth/user-form";
import UserProfileCard from "@/app/components/profile-card";
import { auth } from "@/auth";

const Page = async () => {

  const session = await auth()

  console.log(session?.user?._doc)

  return (
    <main className="w-full min-h-screen bg-[#111] text-white p-4">
      <h2>User profile</h2>
      
      <UserProfileCard user={session?.user?._doc}/>

      <UserForm user={session?.user?._doc} />

    </main>
  );
};

export default Page;
