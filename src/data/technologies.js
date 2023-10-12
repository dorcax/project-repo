import { v4 as uuid } from "uuid"
// import react from "../assets/react-logo.svg"

const technology = [
  {
    id: uuid(),
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    src: "/images/js-logo.svg",
  },
  { id: uuid(), href: "https://reactjs.org/", src: "/images/react-logo.svg" },
  { id: uuid(), href: "https://nodejs.org/", src: "/images/nodejs-logo.svg" },
  {
    id: uuid(),
    href: "https://expressjs.org/",
    src: "/images/express-logo.svg",
  },
  {
    id: uuid(),
    href: "https://www.mongodb.com/",
    src: "/images/mongodb-logo.svg",
  },
  { id: uuid(), href: "https://git-scm.com", src: "/images/git-logo.png" },
//   {
//     id: uuid(),
//     href: "https://www.mongodb.com/",
//     src: "/images/mongodb-logo.svg",
//   },
  {
    id: uuid(),
    href: "https://www.tailwindcss.com/",
    src: "/images/tailwind-logo.svg",
  },
  {
    id: uuid(),
    href: "https://www.netlify.com/",
    src: "/images/netlify-logo.svg",
  },
  {
    href: "https://www.prisma.io/",
    src: "/images/prisma.svg",
  },
  {
    id: uuid(),
    href: "https://www.postgresql.org/",
    src: "/images/postgres-logo.png",
  },
];
export default technology