import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({ title, updated, children }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        {updated && <p className="mt-1 text-sm text-white/60">Last updated: {updated}</p>}
        <div className="mt-6 space-y-4 text-white/85 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_a]:text-brand [&_a]:underline">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
