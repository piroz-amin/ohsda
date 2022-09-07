import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/#about",
    text: "About us",
  },

  {
    id: 3,
    url: "/#myServices",
    text: "Our Services",
  },

  {
    id: 4,
    url: "/#mylatestNews",
    text: "Latest News",
  },

  {
    id: 6,
    url: "/#contact",
    text: "Contact us",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://twitter.com/ohsdafg",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

export default reviews;

//services data
export const sd = [
  {
    id: 1,
    title: "Coaching",
    info: "I have Coached over 5k students around the world.",
    image:
      "https://it.com.sg/wp-content/uploads/2019/10/coding-courses-singapore.jpg",
    action: "Book Me",
  },
  {
    id: 2,
    title: "Web Development",
    info: "I have Developed several web application, hire me to do your projects.",
    image: "http://www.parzlogic.com/wp-content/uploads/2017/10/web-dev.jpg",
    action: "Hire Me",
  },
  {
    id: 1,
    title: "Project Management",
    info: "I have worked as a project manager for years, contact me for employement opportunities",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/5f5a2d56d0844debd57de789/0x0.jpg?format=jpg&width=1200&fit=bounds",
    action: "Contract Me",
  },
];

//end of services data
