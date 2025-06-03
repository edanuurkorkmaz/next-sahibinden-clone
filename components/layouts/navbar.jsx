import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/toggle-theme";

export default function Navbar() {
  return (
    <div className="flex justify-baseline gap-4 bg-[#19BA1A] dark:bg-[#F97A00] ">
      <span>Ownerly</span>
      <ul className="flex justify-center gap-4">
        <li>
          <Button className="cursor-pointer">
            <a href="/">Home</a>
          </Button>
        </li>
        <li className="flex">
          <input type="text" placeholder="Search by word or store name" />
          <Search className="text-white" />
        </li>
        <li>
          <Button className="cursor-pointer">Contact</Button>
        </li>
      </ul>
      <ThemeToggle />
    </div>
  );
}
