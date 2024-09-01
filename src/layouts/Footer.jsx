import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-muted py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">&copy; 2024 Pizza Delights. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/"className="text-sm font-medium hover:text-primary">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    )
}