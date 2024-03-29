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

export const productStocks = ["Availability", "SKU", " Vendor", "Type"];

export const productSize = ["S", "M", "L", "XL"];

export const productMaterial = ["Metal", "Resin", "Leather", "Slag", "Fiber"];

export const productColor = [
  { color: "Purple", code: "#A020F0" },
  { color: "Violet", code: "#7F00FF" },
  { color: "Orange", code: "#FFA500" },
  { color: "Pink", code: "#FFC0CB" },
];

export const tabs = [
  {
    id: "description",
    label: "Description",
    content:
      "ut I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
  },
  {
    id: "reviews",
    label: "Reviews",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "policy",
    label: "Shipping Policy",
    content:
      "Orders can be placed on our website. Once an order is placed, you will receive a confirmation email with details of your order. We accept payments via credit card, debit card, PayPal, and other secure payment methods. All payments are processed securely. We offer standard and expedited shipping options. Shipping costs and delivery times may vary depending on the destination and selected shipping method. Customers will receive a tracking number once their order has shipped. We accept returns and exchanges within 30 days of purchase. Items must be unused and in their original packaging. Customers are responsible for return shipping costs unless the item is defective or damaged. Refunds will be issued to the original payment method within 3-5 business days after we receive the returned item. Shipping costs are non-refundable. Our customer support team is available to assist you with any questions or concerns. Please contact us via email or phone for prompt assistance.",
  },
  {
    id: "size",
    label: "Size Chart",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const faqs = [
  {
    title: "How can I place an order?",
    content:
      "To place an order, simply visit our website and browse our products. Once you find the items you'd like to purchase, add them to your cart and proceed to checkout. Follow the prompts to enter your shipping and payment information, and confirm your order. You will receive a confirmation email once your order is placed.",
  },
  {
    title: "What payment methods do you accept?",
    content:
      "We accept payments via credit card, debit card, PayPal, and other secure payment methods. All payments are processed securely to ensure the safety of your personal information.",
  },
  {
    title: "How long will it take to receive my order?",
    content:
      "Shipping times vary depending on your location and the shipping method selected at checkout. We offer both standard and expedited shipping options. You can track the status of your order using the tracking number provided in your shipping confirmation email.",
  },
  {
    title: "Do you offer international shipping?",
    content:
      "Yes, we offer international shipping to select countries. Shipping rates and delivery times may vary depending on the destination. Please note that customers are responsible for any customs duties or taxes that may apply to international orders.",
  },
  {
    title: "Can I cancel or modify my order?",
    content:
      "We strive to process orders quickly to ensure prompt delivery. Once an order is placed, it may not be possible to cancel or modify it. If you need to make changes to your order, please contact our customer support team as soon as possible, and we will do our best to accommodate your request.",
  },
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
