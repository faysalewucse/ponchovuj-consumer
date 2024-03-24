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
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8f7b4825232405.56343f4385b3e.jpg",
  },
  {
    image: 2,
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79782525232405.56343f60d0a73.jpg",
  },
  {
    image: 3,
    url: "https://img.freepik.com/premium-photo/sun-painted-sand-with-sunglasses-middle_73944-17706.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais",
  },
  {
    image: 4,
    url: "https://images.squarespace-cdn.com/content/v1/5a1fac7e914e6b30d737146f/1593811931664-Z3GEEUE3BT1PXJJD802K/228A3983.jpg",
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
