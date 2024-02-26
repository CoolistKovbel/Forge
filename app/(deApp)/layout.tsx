import { SignOutButton } from "../components/SignOutButton";



export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main>

        <header>
            <SignOutButton />
        </header>

        <section>
          {children}
        </section>

      </main>
    );
  }
  