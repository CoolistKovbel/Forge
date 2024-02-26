import MainDeAppHeader from "../components/main-header/main-deApp-header";




export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main>

        <MainDeAppHeader />

        <section>
          {children}
        </section>

      </main>
    );
  }
  