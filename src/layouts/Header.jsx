import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background shadow">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <PizzaIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-bold">Inspiring Pizza</span>
        </Link>
        <nav className="hidden gap-4 md:flex">
          <Link to="/menu" className="text-sm font-medium hover:text-primary">
            Menu
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
        <Button className="hidden md:inline-flex">Order Now</Button>
      </div>
    </header>
  );
}

function PizzaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 11h.01" />
      <path d="M11 15h.01" />
      <path d="M16 16h.01" />
      <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
      <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
    </svg>
  );
}
