import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Hung",
  lastName: "Ta",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Engineer",
  avatar: "/images/2a8503457465fc3ba574.jpg",
  email: "hungviettachv@gmail.com",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Vietnamese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about the latest trends in AI/Machine Learning, algorithm design, and share my perspectives on the intersection of data-driven engineering and creative problem-solving.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/VieHung",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hungtaviet194/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/tvhung.194",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:hungviettachv@gmail.com",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between reality and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Voice Bot Assistant</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Hung, a computer engineer at the SoICT Innovation Club. Here, I focus on building an innovative startup environment for our members.
      <br /> After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hung is a Hanoi-based computer engineer with a passion for transforming complex problems into simple, elegant engineering solutions. His work spans software development, system architecture, and the convergence of robust engineering and user-centric design.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SOICT Innovation Club",
        timeframe: "2024 - Present",
        role: "Vice Head of the Startups Department",
        achievements: [
          <>
            Organized the 'Student Creative Ideas Challenge,' a creative competition for students to showcase their innovative technology ideas.
          </>,
          <>
            Fostered and cultivated a vibrant environment for entrepreneurship and innovation within the club.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/SCICQ3.png",
            alt: "SCICQ3 Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Hanoi University of Science and Technology",
        description: <>Computer engineering.</>,
      },
      {
        name: "Hung Vuong Highschool for the Gifted",
        description: <>Math-specialized class.</>,
      },
    ],
  },
  
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Arduino",
        description: <>Highly proficient in programming the ESP32 with Arduino, capable of developing and deploying firmware with exceptional speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/wifi_visualizer.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "ML/DL",
        description: <>Experienced in implementing machine learning and deep learning algorithms, with a focus on real-world applications.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
achievements: {
    display: true, // set to false to hide this section
    title: "Achievements",
    items: [
      {
        year: "2025",
        title: "Second Prize, Student Creative Idea Challenge - SOICT",
        description: <> Awarded for the project idea of using computer vision to detect damaged and dented goods.</>,
      },
      {
        year: "2024",
        title: "Graduated High School with Excellent Standing",
        description: <>Highlighted by a score of 9.6/10.0 in Mathematics on the National Graduation Exam.</>,
      },
      {
        year: "2022",
        title: "Provincial Mathematics Competition for Excellent Students",
        description: <>Second Prize.</>,
      },
      {
        year: "2021",
        title: "Achieved 1st Place, Entrance Examination for the Specialized Mathematics Program at Hung Vuong High School for the Gifted.",
        description: <></>,
      }
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
