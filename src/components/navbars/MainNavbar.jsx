import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi2";
import { BsInfoSquare, BsSunglasses } from "react-icons/bs";

const MainNavbar = () => {
  const navItems = [
    { label: "Home", route: "/", icon: <HiOutlineHome className="text-lg" /> },
    { label: "About", route: "/about", icon: <BsInfoSquare /> },
    {
      label: "Glasses",
      route: "/product",
      icon: <BsSunglasses className="text-3xl" />,
    },
  ];

  return (
    <div className="bg-primary2">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-center gap-5">
          {navItems.map((item) => (
            <Link
              href={item.route}
              key={item.label}
              className="font-semibold flex items-center gap-1 hover:text-primary transition-300"
            >
              <i>{item.icon}</i>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
