import GitIssuesLogo from "~/assets/github.svg";
import { Link } from "~/components";

export function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <img
            src={GitIssuesLogo}
            className="h-6 mr-3 sm:h-10"
            alt="GitIssues Logo"
          />
          Git Issues
        </Link>
        <span className="font-light">Seguimiento de problemas</span>
      </div>
    </nav>
  );
}
