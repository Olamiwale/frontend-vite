import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    to: "/",
    label: "Home",
    icon: (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7m-9 2v6a2 2 0 002 2h4a2 2 0 002-2v-6m-5 0h6"
        />
      </svg>
    ),
  },
  {
    to: "/products",
    label: "Products",
    icon: (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4"
        />
      </svg>
    ),
  },
  {
    to: "/cart",
    label: "Cart",
    icon: (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v7"
        />
      </svg>
    ),
  },
  {
    to: "/checkout",
    label: "Checkout",
    icon: (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m-7-7h14"
        />
      </svg>
    ),
  },

  {
    to: "/contact",
    label: "Contact",
    icon: (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 10a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <div className="shadow-lg h-screen border-r-4 w-[200px] fixed top-0 left-0 flex flex-col items-center py-8 px-4 z-20">
      <div className="mb-10 flex items-center">
        <svg
          className="w-8 h-8 text-blue-600 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7m-9 2v6a2 2 0 002 2h4a2 2 0 002-2v-6m-5 0h6"
          />
        </svg>
        <span className="text-2xl font-bold text-blue-600 tracking-tight">
          ShopEase
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 w-full">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center px-4 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 ${
              location.pathname === link.to
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700"
            }`}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>

      {/* User Button */}
      <div className="mt-auto w-full flex flex-col items-center gap-4">
        <Link
          to="/users"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold mb-2 w-full justify-center transition"
        >
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>User</span>
        </Link>
        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} ShopEase
        </div>
      </div>
    </div>
  );
}
