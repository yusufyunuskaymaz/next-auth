import Link from "next/link";
import { INavbar } from "../types/user";

export default function Navbar({
  user,
  signOut,
}: {
  user: INavbar;
  signOut: () => void;
}) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link href="/user">
              <li>User Page</li>
            </Link>
            {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
            <Link href="/editor">
              <li>Editor Page</li>
            </Link>
            <Link href="/admin">
              <li>Admin Page</li>
            </Link>
          </ul>
        </div>
        <a href="/dashboard" className="btn btn-ghost text-xl">
          Next Auth
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <Link href="/user">
            <li>User Page</li>
          </Link>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          <Link href="/editor">
            <li>Editor Page</li>
          </Link>
          <Link href="/admin">
            <li>Admin Page</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <p>Welcome {user?.name}</p>
        <p>Role: {user?.role}</p>
        <a onClick={signOut} className="btn">
          Sign Out
        </a>
      </div>
    </div>
  );
}
