import img from "@/assets/product_1.webp";

export const mockItem = {
  name: "Cart Item",
  image: img,
  price: 45,
  quantity: 1,
};

export const siteName = "PONCHOVUJ";

export const galleryImages = [
  {
    image: 1,
    url: "https://new-99.myshopify.com/cdn/shop/products/boll_1024x1024.jpg?v=1669047048",
  },
  {
    image: 2,
    url: "https://new-99.myshopify.com/cdn/shop/products/dakna_1024x1024.jpg?v=1669047048",
  },
  {
    image: 3,
    url: "https://new-99.myshopify.com/cdn/shop/products/handmade-product_13_1024x1024.png?v=1669047048",
  },
  {
    image: 4,
    url: "https://new-99.myshopify.com/cdn/shop/products/33_6f6b9ff9-9c16-4909-a446-2419da686aac_1024x1024.jpg?v=1669047048",
  },
  {
    image: 5,
    url: "https://new-99.myshopify.com/cdn/shop/products/bag_fd239023-c9da-45ce-8d2d-9f482c58219e_1024x1024.jpg?v=1669047048",
  },
];

export const productSize = ["S", "M", "L", "XL"];

export const productMaterial = ["Metal", "Resin", "Leather", "Slag", "Fiber"];

export const productColor = [
  { color: "Purple", code: "#A020F0" },
  { color: "Violet", code: "#7F00FF" },
  { color: "Orange", code: "#FFA500" },
  { color: "Pink", code: "#FFC0CB" },
];

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
