export const paragraphs = [
  "Hi, I’m Bilal Habib Allah, a full stack web developer who turns ideas into functional, beautiful digital experiences. I specialize in building websites and apps that are fast, intuitive, and a joy to use.",  

   "Beyond just writing code, I focus on solving real problems. I collaborate closely with clients to understand their needs and deliver solutions that drive results. From initial concept to final launch, I ensure every project is user-friendly, reliable, and future-ready.",  

  "Continuous learning and staying ahead of industry trends. This means your project benefits from modern best practices in performance, security, and design—without unnecessary complexity.",  

]
export const skills: string[] = [
  "React.Js",
  "Next.Js",
  "Javascript",
  "Typescript",
  "Php",
  "Laravel",
  "Livewire",
  "Docker",
  "Linux",
  "Prisma",
  "Mongodb",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Payload CMS",
  "Tailwind",
  "Figma",
  "nvim",
  "framer motion",
  "trpc",
  "MySQL",
  "Node.Js",
  "Git",
];

export const projects = [
  {
    name: "funroad",
    description: [
      "Funroad is a CMS platform built to manage and sell digital products with simplicity and power. Perfect for creators and online businesses.",

      "Crafted using Next.js and optimized for performance, SEO, and modern UX. Fast loads and smooth routing built-in.",

      "Powered by MongoDB and Prisma ORM, ensuring clean database relationships and type-safe queries at scale.",

      "Includes a clean dashboard for uploading, organizing, and publishing your digital assets in just a few clicks.",
    ],
    technologies: ["Next.Js", "Payloadcms", "Mongodb"],
    images: [
      "/funroad/dashboard.png",
      "/funroad/main-page.png",
      "/funroad/cart-page.png",
      "/funroad/library-page.png",
      "/funroad/product-page.png",
    ],
    live: "https://funroad-rho.vercel.app/"
  },
  {
    name: "QuizzByte",
    description: [
      "QuizzByte is an interactive quiz platform that generates dynamic tests using AI. Ideal for learners and educators.",

      "Built with Next.js for server-side rendering and seamless navigation with optimized performance.",

      "Secure authentication via OAuth and Auth.js protects user data while PostgreSQL handles complex data.",

      "AI-powered question generation creates personalized quizzes based on user preferences and history.",
    ],
    technologies: ["Next.Js", "Oauth", "Auth.Js","OpenAi", "PostgreSQL", "Prisma"],
    images: [
      "/quizz/dashboard.png",
      "/quizz/main-page.png",
      "/quizz/cart-page.png",
    ],
    live: null
  },
  {
    name: "appointment",
    description: [
      "Appointment is a scheduling system for  doctors to manage bookings efficiently. Saves time for both doctors and clients.",


      "Developed with Laravel for robust backend logic and Livewire for reactive frontend components.",

      "MySQL database ensures reliable storage of appointment records with efficient query performance.",

      "Features include calendar view, client management, and automated reminders for upcoming bookings.",
    ],
    technologies: ["Laravel", "Livewire", "MySQL"],
    images: [
      "/appointment/dashboard.png",
      "/appointment/main-page.png",
      "/appoitment/appointment-page.png",
      "/appointment/library-page.png",
      "/appointment/register-page.png",
    ],
    live: null
  },
  {
    name: "ai interviewer",
    description: [
      "AI Interviewer provides realistic mock interviews with voice interaction. Helps job seekers practice effectively.",

      "Next.js foundation delivers fast performance while Auth.js handles secure user authentication.",

      "Vapi AI powers natural voice conversations and PostgreSQL stores interview history and feedback.",

      "Users receive detailed evaluations on their responses, helping them improve interview skills.",
    ],
    technologies: ["Next.Js", "Oauth", "Auth.Js", "PostgreSQL", "Vapi"],
    images: [
      "/interview/dashboard.png",
      "/interview/main-page.png",
      "/interview/cart-page.png",
    ],
    live: null
  },
]
