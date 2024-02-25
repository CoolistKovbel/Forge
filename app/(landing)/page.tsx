import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#222] text-white w-full min-h-screen">

      <div>
        <h2>Tired of drowning?</h2>
        <p>Ever felt so alone nobody seemed to be there for you, or you had someone just really destroy your mindset and you just dont know how to feel about it</p>
        <p>Fear no longer sign up today and try your very own bot</p>
      </div>

   
      <div>
        <h2>Life isnt so simple and not everyone may understand you or have answer</h2>
        <p>luckly with your own urban bot you will be able to forge your own path towards success</p>
      </div>


      <div>
        <h2>You may either use tokens or get a membership</h2>
        <p>with a monthly member you can ultimatly use your bot without any limit</p>
      </div>
    

      <div>
        <p>Using openai technoloy we are able to make anything possible </p>
        <p>get started today</p>
      </div>


      <div>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </div>


    </main>
  );
}
