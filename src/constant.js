import img from "@/assets/product_1.webp";

export const mockItem = {
  name: "Cart Item",
  image: img,
  price: 45,
  quantity: 1,
};

export const siteName = "PONCHOVUJ";

export const footerLinks = [
  {
    header: "Company",
    links: [
      { title: "About", url: "/about" },
      { title: "Locations Map", url: "/locations" },
      { title: "FAQ", url: "/faq" },
      { title: "News", url: "/news" },
      { title: "All Products", url: "/products" },
      { title: "Contact", url: "/contact" },
    ],
  },
  {
    header: "Services",
    links: [
      { title: "Order Tracking", url: "/order-tracking" },
      { title: "WishList", url: "/wishlist" },
      { title: "Login", url: "/login" },
      { title: "My Account", url: "/my-account" },
      { title: "Terms of Service", url: "/terms-of-service" },
      { title: "Privacy Policy", url: "/privacy-policy" },
    ],
  },
  {
    header: "Customer Care",
    links: [
      { title: "Login", url: "/login" },
      { title: "My Account", url: "/my-account" },
      { title: "Wishlist", url: "/wishlist" },
      { title: "Order Tracking", url: "/order-tracking" },
      { title: "FAQ", url: "/faq" },
      { title: "Contact", url: "/contact" },
    ],
  },
];
