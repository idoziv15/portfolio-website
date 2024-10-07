export const projects = [
  {
    id: "1",
    title: "Ligat Haal X, Interactive Grid Game",
    description:
      "Developed a dynamic web app displaying an interactive grid of football team logos, with a player search functionality using Next.js and TailwindCSS. Integrated Prisma ORM with Azure SQL Server for database management and deployed on Vercel. Implemented server-side rendering, API routes, and cron jobs for weekly data cache updates",
    tags: [
      "Next.js",
      "TailwindCSS",
      "Azure Functions",
      "Azure SQL Server",
      "Vercel",
    ],
    url: "/projects/1",
    youtubeUrl: "https://www.ligathaalx.com/",
    projectPage: {
      title: "Ligat Haal X, Interactive Grid",
      description:
        "Developed a dynamic web app displaying an interactive grid of football team logos, with a player search functionality using Next.js and TailwindCSS. Integrated Prisma ORM with Azure SQL Server for database management and deployed on Vercel. Implemented server-side rendering, API routes, and cron jobs for weekly data cache updates",
      sections: [
        {
          title: "Key Features",
          content: [
            "Interactive Grid: Users can explore different teams and players through an interactive grid layout.",
            "Admin Dashboard: An admin dashboard is implemented for managing the grid and other content.",
            "Authentication: Secure login and authentication mechanisms to protect user data and admin functionalities.",
            "Responsive Design: The application is fully responsive, ensuring a seamless experience across all devices.",
            "Animations: Smooth animations enhance the user experience and make the interface more engaging.",
          ],
        },
        {
          title: "Technologies Used",
          content: [
            "<strong>React:</strong> For building the dynamic user interface.",
            "<strong>Next.js:</strong> To take advantage of server-side rendering and static site generation.",
            "<strong>TailwindCSS:</strong> For efficient and responsive styling.",
            "<strong>Prisma:</strong> As the ORM for database interactions.",
          ],
        },
      ],
      images: [
        {
          src: "/assets/images/ligat-haal/1.jpg",
          alt: "Interactive Grid",
        },
        {
          src: "/assets/images/ligat-haal/2.jpg",
          alt: "Search Player Modal",
        },
        {
          src: "/assets/images/ligat-haal/3.jpg",
          alt: "Finish Game Modal",
        },
        {
          src: "/assets/images/ligat-haal/4.jpg",
          alt: "Admin Dashboard",
        },
      ],
    },
  },
  {
    id: 2,
    title: "this website",
    description:
      "Built a personal portfolio website using Next.js, Tailwind CSS, and TypeScript. Implemented SEO optimization and a responsive design",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/yuvalysh0/portfolio",
  },

  {
    id: 3,
    title: "Startup Booster - Incharge Payment Processing System",
    description:
      "Led the frontend development using React, integrating multiple payment methods like DTS and Multipass to enhance the payment experience.",
    tags: ["React", "JavaScript", "NextJS"],
  },
  {
    id: 4,
    title: "Startup Booster - Hadassah Hospital Web Platform",
    description:
      "Improved user experience and accessibility by implementing responsive design and dynamic features, ensuring compliance with accessibility standards.",
    tags: ["React", "JavaScript", "NextJS"],
  },
  {
    id: 5,
    title: "IronSource - Mobile Development",
    description:
      'Transitioned to mobile development, mastering Unity3D, Android, and iOS. Developed an automatic release process and created the "Alpha Package" tool for easier SDK implementation and testing.',
    tags: ["Unity3D", "Android", "iOS"],
  },
  {
    id: 6,
    title: "FriendsBook",
    description:
      "Developed a social app with CSS, Vue.js, Vuex, and Firebase. Created functionalities for posting, liking, commenting, and real-time updates to deliver a seamless social media experience",
    tags: ["Vue.js", "Vuex", "Firebase"],
    youtubeUrl: "https://www.youtube.com/watch?v=burhfu39e-U&feature=youtu.be",
  },
];
