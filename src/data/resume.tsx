import { Icons } from "@/components/icons";
import { HomeIcon, icons, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fikar Portfolio",
  initials: "FR",
  url: "https://fikar.io",
  location: "Yogyakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/yogyakarta",
  description:
    "I am a AI Engineer & Web Developer",
  summary:
    "I am a Bachelor of Information Systems from Amikom University Yogyakarta with experience in information system technology development, software engineering, and the digital creative industry. I am interested in Artificial Intelligence, Web Development, Techinal Support and Mobile Application Development with analytical skills, problem solving, and technology-based project management. In addition to being active in system and application development, I also have competencies in visual design, video editing, and digital creative production to support the needs of modern media and digital branding. I am accustomed to working collaboratively, disciplined in achieving targets, and have good adaptability in a dynamic and professional work environment.",
  avatarUrl: "/me.jpeg",
  skills: [
    "HTML",
    "CSS",
    "Typescript",
    "Javascript",
    "Bootstrap5",
    "Node.js",
    "Next.js",
    "React",
    "PHP",
    "CodeIgniter",
    "Laravel",
    "TailwindCSS",
    "C++",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "MongoDB",
    "Pyhton",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "fikarrosyid3@gmail.com",
    tel: "+6282134872268",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Fikarroyal",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fikarrosyid/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/share/161qNe1fuF/?mibextid=wwXIfr",
        icon: Icons.facebook,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/zulfikarsyd",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Coming Soon",
      href: "",
      badges: [],
      location: "on-site work",
      title: "Coming Soon",
      logoUrl: "/y.png",
      start: "NO",
      end: "INFO",
      description:
        "COMING SOON",
    },
    {
      company: "Coming Soon",
      href: "",
      badges: [],
      location: "on-site work",
      title: "Coming Soon",
      logoUrl: "/y.png",
      start: "NO",
      end: "INFO",
      description:
        "COMING SOON",
    },
  ],
  education: [
    {
      school: "Amikom Yogyakarta University",
      href: "https://home.amikom.ac.id/",
      degree: "Bachelor's Degree of Information Systems",
      logoUrl: "/amikom.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Hiresai",
      href: "",
      dates: "2025 - Now",
      active: true,
      description:
        "Artificial Intelligence based recruitment platform designed to help companies carry out the employee selection process more quickly, efficiently and accurately.",
      technologies: [
        "Next.js",
        "Typescript",
      ],
      links: [
        {
          type: "Website Application",
          href: "https://www.hiresai.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hiresai.png",
    },
    {
      title: "Vrise Studio",
      href: "",
      dates: "2025 - Now",
      active: true,
      description:
        "A creative services platform based in the special region of yogyakarta. We provide professional services in videography, photography, video editing, and graphic design, designed to optimally and high quality meet the visual needs of individuals, businesses, and brands.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap5",
      ],
      links: [
        {
          type: "Website Company Profile",
          href: "https://www.vrisestudio.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/vrise studio.png",
    },
    {
      title: "Alora AI",
      href: "",
      dates: "2026 - Now",
      active: true,
      description:
        "A workspace that thinks alongside you. A place to write, research, and get work done, supported by AI that understands your team's context.",
      technologies: [
        "HTML5",
        "CSS3",
        "Javascript",
      ],
      links: [
        {
          type: "Website Landing Page",
          href: "https://aialora.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/alora ai.jpg",
    },
    {
      title: "Network Test",
      href: "",
      dates: "2026 - Now",
      active: true,
      description:
        "Get to Know Network Performance In Real Time. Test internet speed, monitor connection quality, and get accurate information about your network.",
      technologies: [
        "HTML5",
        "CSS3",
        "Javascript",
      ],
      links: [
        {
          type: "Website Application",
          href: "https://networktest-indo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/network test.png",
    },
    {
      title: "Apotek Sukoharjo",
      href: "",
      dates: "2026 - Now",
      active: true,
      description:
        "Sukoharjo Pharmacy website provides information on quality medicines, pharmacist consultations, and various other services.",
      technologies: [
        "HTML5",
        "CSS3",
        "Javascript",
      ],
      links: [
        {
          type: "Website Company Profile",
          href: "https://www.apoteksukoharjo.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/apotek sukoharjo.png",
    },
    {
      title: "RSU Gramedika 10",
      href: "",
      dates: "2026 - Now",
      active: true,
      description:
        "RSU Gramedika 10 website makes it easy for the public to obtain information about health services, doctor's practice schedules, hospital facilities and health education.",
      technologies: [
        "HTML5",
        "CSS3",
        "Javascript",
      ],
      links: [
        {
          type: "Website Company Profile",
          href: "https://www.rsugramedika10.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/rsu gramedika 10.png",
    },
    {
      title: "Task Chart",
      href: "",
      dates: "2026 - Now",
      active: true,
      description:
        "Platform for managing tasks, monitoring progress, and organizing work in a more structured way.",
      technologies: [
        "HTML5",
        "CSS3",
        "Javascript",
      ],
      links: [
        {
          type: "Website Application",
          href: "https://taskchart.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/taskchart.png",
    },
    {
      title: "Kilat Laundry",
      href: "",
      dates: "2026 - Now",
      active: true,
      description:
        "Modern laundry service solution that prioritizes speed, quality, and customer satisfaction.",
      technologies: [
        "HTML5",
        "CSS3",
        "Javascript",
      ],
      links: [
        {
          type: "Website Landing Page",
          href: "https://kilat-laundry.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/kilat laundry.png",
    },
    {
      title: "Hiresai",
      href: "",
      dates: "2025 - Now",
      active: true,
      description:
        "Artificial Intelligence based recruitment platform designed to help companies carry out the employee selection process more quickly, efficiently and accurately.",
      technologies: [
        "Next.js",
        "Typescript",
      ],
      links: [
        {
          type: "Website Application",
          href: "https://www.hiresai.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hiresai.png",
    },
  ],
  hackathons: [
    {
      title: "GEMASI 2025",
      dates: "January, 2025",
      location: "1st Place Programming Competition",
      description:
        "Demonstrated exceptional problem solving & algorithmic skills in C++ programming.",
      image:
        "/badge.png",
      links: [],
    },

    {
      title:
        "AMICTA 2025",
      dates: "July, 2025",
      location: "3rd Place Hackathon Competition",
      description:
        "Successfully developed an innovative technology solution through collaborative problem solving, demonstrating strong analytical thinking, teamwork, and software development skills.",
      image:
        "/badge.png",
      links: [],
    },

    {
      title:
        "GEMASTIK 2025",
      dates: "October, 2025",
      location: "Hopeful winner in the ICT business development category",
      description:
        "Proposed an innovative ICT based business solution by integrating technology and entrepreneurship concepts.",
      image:
        "/badge.png",
      links: [],
    },

    {
      title:
        "ARCADIA 2026",
      dates: "February, 2026",
      location: "1st Place Programming Competition",
      description:
        "Demonstrated outstanding algorithmic thinking, competitive programming proficiency, and efficient problem solving skills.",
      image:
        "/badge.png",
      links: [],
    },
  ],
} as const;
