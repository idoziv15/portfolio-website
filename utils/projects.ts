export const projects = [
  {
    id: 1,
    title: "Mortgage Master",
    description:
      'I developed a web system for real-estate investments in my final studies project. The platform is designed to assist users in making informed real estate investment decisions by providing comprehensive, quantitative analysis of potential property investments. The core problem the system aims to solve is helping investors compare real estate investments with other investment opportunities, such as the stock market, by offering a detailed assessment of key financial metrics of their investments.',
    tags: ["Flask", "Python", "NumPy", "React", "MongoDB"],
    githubUrl: "https://github.com/idoziv15/MortgageMaster",
    url: "",
    imageUrl: "/mortgage-master.png"
  },
  {
    id: 2,
    title: "AOT Website",
    description:
      "Took the initiative to develop and implement an interactive website (Frontend and backend) assisting the company's security team. The website facilitated streamlined work arrangement submissions, provided a platform for forums, and fulfilled various workrelated requirements.",
    tags: [
      "NodeJs",
      "JavaScript",
      "MongoDB",
      "HTML",
      "CSS",
      "Heroku",
    ],
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
    url: "",
    imageUrl: "aot.png"
  },
  {
    id: 3,
    title: "Whatsapp Clone",
    description:
      "Developed a website (MERN) and Android application for chat service like WhatsApp, using Client-Server",
    tags: ["React", "JavaScript", "NodeJs", "SQL", "MongoDB", "AndroidStudio", "WebSockets", "Express", "MVC", "MVVM"],
    githubUrl: "https://github.com/idoziv15/whatsapp-clone",
    url: "",
    imageUrl: "/whatsapp-clone.png"
  },
  {
    id: 4,
    title: "Arknoid Game",
    description:
      "Developed an Arknoid game in Java, implementing design patterns and OOP principles.",
    tags: ["Java", "OOP"],
    githubUrl: "https://github.com/idoziv15/Arknoid_Game",
    url: "",
    imageUrl: "/arknoid.png"
  },
  {
    id: 5,
    title: "Vector Classifier",
    description:
      "A project in C++ about vector classification using the KNN algorithm and a multithreading server-client connection.",
    tags: ["C++", "KNN", "Algorithm"],
    url: "",
    imageUrl: "/knn.png"
  },
];
