import Link from "next/link";

const MainNavbar = () => {
  const navItems = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
  ];

  return (
    <div className="bg-primary2">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-center gap-5">
          {navItems.map((item) => (
            <Link href={item.route} key={item.label} className="font-semibold">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
