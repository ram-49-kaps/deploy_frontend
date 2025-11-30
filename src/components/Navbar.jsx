import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav
      className="
        flex items-center justify-between py-4 
        text-black dark:text-white
      "
    >
      <h1 className="text-xl font-bold">
        Micro Influencer Platform
      </h1>

      <DarkModeToggle />
    </nav>
  );
}
