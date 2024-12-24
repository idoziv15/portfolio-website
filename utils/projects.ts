export const projects = [
  {
    id: 1,
    title: "Autonomous Taxi Service",
    description:
      'Welcome to the Autonomous Taxi Service Simulation, a live simulation of an autonomous taxi service operating in a futuristic city, futureTLV.\nThis project simulates an autonomous taxi service, where:\n10 taxis move on a 20km x 20km city grid.\nTaxis operate at 72km/h (20 meters/second), restricted to X and Y axes with 90-degree turns.\nThe system processes ride requests every 20 seconds, assigning the nearest available taxi.',
    tags: ["FastAPI", "Python", "Redis", "RabbitMQ", "Nginx", "Docker", "Micro-Services"],
    githubUrl: "https://github.com/idoziv15/autonomous-taxi-service",
    url: "",
    imageUrl: "/autonomous_taxi.jpg"
  },
  {
    id: 2,
    title: "Segmentation Model API",
    description:
      'This project provides tools for converting a PyTorch model to ONNX format, running inferences using the converted model, and serving predictions through an API and Client interactions',
    tags: ["FastAPI", "Python", "NumPy", "PyTorch", "ONNX", "Docker"],
    githubUrl: "https://github.com/idoziv15/SegmentationModelProject",
    url: "",
    imageUrl: "/segmentation_model.png"
  },
  {
    id: 3,
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
    title: "Neural Network",
    description:
      'This project demonstrates essential machine learning techniques using Python, focusing on data preprocessing, model training, and evaluation with algorithms such as classification and regression. I built, trained, and assessed machine learning models through various performance metrics and cross-validation.',
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter", "Supervised Learning", "PyTorch", "CNN"],
    githubUrl: "https://github.com/idoziv15/Neural_Network",
    url: "",
    imageUrl: "/neutral-network.svg"
  },
  {
    id: 2,
    title: "Multithreaded News System",
    description:
      "The purpose of this project is to gain experience with concurrent programming and synchronization mechanisms. The scenario simulates a news broadcasting system, where different types of stories are produced, sorted, and displayed to the public. The assignment involves four types of active actors: Producers, Dispatcher, Co-Editors, and Screen Manager. The Producers generate strings representing news stories and send them to the Dispatcher. The Dispatcher sorts the stories based on their type and sends them to the corresponding Co-Editors. The Co-Editors edit the stories and pass them to the Screen Manager. Finally, the Screen Manager displays the stories on the screen. Each of them works in a different thread, allowing the system to work simultaneously. The system includes a bounded buffer, which is used as a queue between the Producers and the Dispatcher, as well as between the Co-Editors and the Screen Manager. This desgind needs to face the Producer–consumer problem. The Dispatcher's queues are unbounded buffers.",
    tags: ["TCP", "C", "Multithreaded", "Linux"],
    githubUrl: "https://github.com/idoziv15/Multithreaded-News-System",
    url: "",
    imageUrl: "/Multithreaded-News-System.png"
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
    title: "Vector Classifier",
    description:
      "A project in C++ about vector classification using the KNN algorithm and a multithreading server-client connection.",
    tags: ["C++", "KNN", "Algorithm", "TCP"],
    githubUrl: "https://github.com/idoziv15/KNN_classifier",
    url: "",
    imageUrl: "/knn.png"
  },
  {
    id: 5,
    title: "Arknoid Game",
    description:
      "Developed an Arknoid game in Java, implementing design patterns and OOP principles.",
    tags: ["Java", "OOP"],
    githubUrl: "https://github.com/idoziv15/Arknoid_Game",
    url: "",
    imageUrl: "/arknoid.png"
  },
  {
    id: 6,
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
];
