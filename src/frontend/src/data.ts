import type { MenuCategory, MenuItem, RestaurantInfo } from "./types";

export const restaurant: RestaurantInfo = {
  name: "Ma's House",
  tagline: "Authentic Chinese Cuisine",
  description:
    "A beloved neighborhood gem serving handcrafted Chinese dishes with time-honored recipes. Every plate carries the warmth of a home kitchen and the artistry of traditional Chinese culinary heritage.",
  location: {
    address:
      "Shop No. 2, Bunglow 89, Shiv Mandir, 2green Park, Lodha, Palava, Casa Rio Main Road",
    area: "Palava City, Thane-421204",
    city: "Maharashtra",
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&destination=19.1584,73.0640&travelmode=driving",
  },
  hours: {
    days: "Monday – Sunday",
    open: "4:00 PM",
    close: "11:30 PM",
  },
  contact: {
    whatsapp: "918826392458",
    phone: "+917947104205",
    displayPhone: "+91 79471 04205",
  },
  rating: 4.5,
  reviewCount: 312,
};

export const menuCategories: MenuCategory[] = [
  { id: "all", label: "All" },
  { id: "non-veg-noodles", label: "Non-Veg Noodles" },
  { id: "veg-noodles", label: "Veg Noodles" },
  { id: "fried-rice", label: "Fried Rice" },
  { id: "snacks", label: "Snacks" },
];

export const menuItems: MenuItem[] = [
  // Non-Veg Noodles
  {
    id: "nvn1",
    name: "Chicken Hong Kong Noodles",
    description: "Mild flavored noodles tossed with tender chicken strips",
    price: 252,
    isVeg: false,
    category: "non-veg-noodles",
  },
  {
    id: "nvn2",
    name: "Chicken Burnt Garlic Noodles",
    description: "Roasted garlic flavored noodles with succulent chicken",
    price: 266,
    isVeg: false,
    category: "non-veg-noodles",
  },
  {
    id: "nvn3",
    name: "Chicken Chilli Garlic Noodles With Gravy",
    description: "Spicy chilli garlic noodles in a rich gravy with chicken",
    price: 378,
    isVeg: false,
    category: "non-veg-noodles",
  },
  {
    id: "nvn4",
    name: "Chicken Sherpa Noodles With Gravy",
    description: "Himalayan-style spiced noodles with chicken in savory gravy",
    price: 378,
    isVeg: false,
    category: "non-veg-noodles",
  },
  {
    id: "nvn5",
    name: "Chicken Triple Schezwan Noodles With Gravy",
    description: "Bold triple-spiced Schezwan noodles loaded with chicken",
    price: 406,
    isVeg: false,
    isSignature: true,
    category: "non-veg-noodles",
  },
  {
    id: "nvn6",
    name: "Chicken Triple Manchurian Noodles With Gravy",
    description:
      "Rich Manchurian-flavored noodles with chicken in triple sauce",
    price: 406,
    isVeg: false,
    isSignature: true,
    category: "non-veg-noodles",
  },
  {
    id: "nvn7",
    name: "Chicken Korean Spicy Noodles With Gravy",
    description: "Korean-inspired fiery noodles with chicken in spicy gravy",
    price: 406,
    isVeg: false,
    category: "non-veg-noodles",
  },
  {
    id: "nvn8",
    name: "Chicken Dragon Noodles With Gravy",
    description: "Intensely spiced dragon-sauce noodles with chicken",
    price: 406,
    isVeg: false,
    category: "non-veg-noodles",
  },
  {
    id: "nvn9",
    name: "Chicken Thousand Noodles With Gravy",
    description: "Thousand-island-inspired sauce noodles tossed with chicken",
    price: 406,
    isVeg: false,
    category: "non-veg-noodles",
  },
  {
    id: "nvn10",
    name: "Chicken Peking Noodles With Gravy",
    description:
      "Classic Peking-style noodles in savory-sweet gravy with chicken",
    price: 406,
    isVeg: false,
    isSignature: true,
    category: "non-veg-noodles",
  },

  // Veg Noodles
  {
    id: "vn1",
    name: "Veg Schezwan Noodles",
    description:
      "Wok-tossed noodles with fresh vegetables in bold Schezwan sauce",
    price: 196,
    isVeg: true,
    category: "veg-noodles",
  },
  {
    id: "vn2",
    name: "Veg Hakka Noodles",
    description:
      "Classic thin noodles stir-fried with crisp vegetables and soy",
    price: 196,
    isVeg: true,
    category: "veg-noodles",
  },
  {
    id: "vn3",
    name: "Veg Chilli Garlic Noodles",
    description: "Spicy garlic-infused noodles with colorful garden vegetables",
    price: 210,
    isVeg: true,
    category: "veg-noodles",
  },
  {
    id: "vn4",
    name: "Veg Hong Kong Noodles",
    description:
      "Lightly seasoned Hong Kong style noodles with fresh vegetables",
    price: 210,
    isVeg: true,
    category: "veg-noodles",
  },
  {
    id: "vn5",
    name: "Veg Manchurian Noodles With Gravy",
    description: "Noodles topped with veg Manchurian balls in rich gravy",
    price: 252,
    isVeg: true,
    isSignature: true,
    category: "veg-noodles",
  },

  // Fried Rice
  {
    id: "fr1",
    name: "Veg Fried Rice",
    description:
      "Light and flavorful fried rice with fresh seasonal vegetables",
    price: 196,
    isVeg: true,
    category: "fried-rice",
  },
  {
    id: "fr2",
    name: "Egg Fried Rice",
    description: "Classic wok-fried rice with scrambled eggs and spring onions",
    price: 224,
    isVeg: false,
    category: "fried-rice",
  },
  {
    id: "fr3",
    name: "Chicken Fried Rice",
    description: "Fragrant fried rice with tender chicken pieces and wok char",
    price: 238,
    isVeg: false,
    isSignature: true,
    category: "fried-rice",
  },
  {
    id: "fr4",
    name: "Schezwan Fried Rice",
    description: "Spicy Schezwan-sauce rice with vegetables and a fiery punch",
    price: 210,
    isVeg: true,
    category: "fried-rice",
  },
  {
    id: "fr5",
    name: "Chicken Schezwan Fried Rice",
    description: "Bold Schezwan fried rice loaded with chicken and fresh herbs",
    price: 252,
    isVeg: false,
    category: "fried-rice",
  },

  // Snacks
  {
    id: "sn1",
    name: "Veg Chinese Bhel",
    description:
      "Crispy noodle bhel tossed with fresh vegetables and tangy sauces",
    price: 308,
    isVeg: true,
    category: "snacks",
  },
  {
    id: "sn2",
    name: "Chicken Chinese Bhel",
    description:
      "Crunchy bhel with chicken, noodles, and zesty Chinese dressing",
    price: 238,
    isVeg: false,
    isSignature: true,
    category: "snacks",
  },
];
