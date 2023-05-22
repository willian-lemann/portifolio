import { getNavigation } from "@/data/navigation";
import { Navbar } from "./Navbar";

export async function Navigation() {
  const navLinks = await getNavigation();

  return (
    <header className="py-10 mb-12 md:container flex md:justify-between justify-center items-center text-white">
      <Navbar links={navLinks} />
    </header>
  );
}
