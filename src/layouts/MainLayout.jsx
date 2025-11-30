import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div
      className="
        min-h-screen px-6 py-4 
        bg-white text-black 
        dark:bg-gradient-to-br dark:from-slate-900 dark:to-black dark:text-white
        transition-all duration-300
      "
    >
      <Navbar />
      <div className="mt-6">{children}</div>
    </div>
  );
}
