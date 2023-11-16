import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  customer1,
  customer2,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  cr1,
  cr2,
  cr3,
  cr4,
  cr5,
  cr6,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Help" },
  { href: "#about-us", label: "Support 24/7" },
  { href: "#products", label: "+1-855-618-0888" },
  { href: "#contact-us", label: "How it Works" },
];
export const statistics = [
  { imgURL: cr1, value: "1k+", label: "Ethiopia" },
  { imgURL: cr2, value: "500+", label: "Kenya" },
  { imgURL: cr3, value: "250k+", label: "Somalia" },
  { imgURL: cr4, value: "250k+", label: "Turkey" },
  { imgURL: cr5, value: "250k+", label: "Uganda" },
  { imgURL: cr6, value: "250k+", label: "Somaliland" },
];
export const products = [
  {
    imgURL: pic1,
    name: "1. Sign up for free",
    price:
      "Register online or via our unique mobile application hassle free. Please make sure to have your email address ready.",
  },
  {
    imgURL: pic2,
    name: "2. Select country & enter amount",
    price:
      "Select the country of your choice, enter the amount you would like to send, see rates and fees applied & the total you have to pay transparently.",
  },
  {
    imgURL: pic3,
    name: "3. Add recipient information",
    price:
      "Add recipient details i.e. mobiles wallets or bank account details. You can also select recipients from previous transactions.",
  },
  {
    imgURL: pic4,
    name: "4. Verify your identity",
    price:
      "To help us verify your identity and keep your money safe, we might ask for a photo of your ID and a proof of address.",
  },
  {
    imgURL: pic5,
    name: "5. Pay for your transfer",
    price:
      "Use your debit or credit to pay for your transfer using our safe and secure payment platform.",
  },
  {
    imgURL: pic6,
    name: "6. That's it",
    price:
      "Let us do the rest. You can follow the status of your transfer on your account and we will notify the recipient.",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Fast",
    subtext: "Instant delivery to mobile money accounts",
    subtext1: "Collect cash at thousands of agents worldwide within minutes",
    subtext2: "Transfer funds to bank accounts instantly",
  },
  {
    imgURL: shieldTick,
    label: "Safe and Secure",
    subtext: "Regulated by the FinCEN (Financial Crimes Enforcement Network)",
    subtext1: "Verified by Visa and Mastercard",
    subtext2: "Trusted by banks and payment institutions worldwide",
  },
  {
    imgURL: support,
    label: "Convenient",
    subtext: "Send money at your convenient time & location",
    subtext1: "Use your Smartphone, Laptop or Desktop",
    subtext2: "We are available 24 hours 7 days a week",
  },
  {
    imgURL: support,
    label: "Cheaper",
    subtext: "Lowest services fees in the market",
    subtext1: "Best exchange rate guaranteed",
    subtext2: "Faster transfer to bank accounts",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Khalid",
    rating: 4.5,
    feedback: "Since my friend referred me to PaySii, I didn’t go back !",
  },
  {
    imgURL: customer2,
    customerName: "Ayan",
    rating: 4.5,
    feedback:
      "I am always on the road. I could never find parking at my local agent. Now I just send money from my!",
  },
];

export const footerLinks = [
  {
    title: "Information",
    links: [
      { name: "About us", link: "/" },
      { name: "Blogs", link: "/" },
      { name: "Mission Statement", link: "/" },
      { name: "How it Works", link: "/" },
      { name: "Contact Us", link: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", link: "/" },
      { name: "Complaints Policy", link: "/" },
      { name: "Privacy Policy", link: "/" },
      { name: "Refund Policy", link: "/" },
      { name: "FAQ's", link: "/" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { name: "customer@Paysii.com", link: "mailto:customer@Paysii.com" },
      { name: "+1-855-618-0888", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
