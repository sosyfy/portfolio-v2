import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'PDF AI Platform',
    description:
      'PDF AI is a full-stack saas platform that redefines how users interact with PDF documents. Using advanced AI and natural language processing (NLP), PDF AI lets users chat with their PDFs to get summaries, ask questions, and extract information instantly. This project demonstrates my skills in integrating cutting-edge AI with intuitive design, creating a tool that streamlines document analysis for researchers, legal professionals, and financial experts.',
    tools: [
      'Next js',
      'Typescript',
      'Postgress DB',
      'vector database - Pinecone',
      'OpenAI API',
      'AWS S3',
      'Tailwind CSS',
      'Stripe',
    ],
    role: 'Full-stack Developer',
    code: 'vjbjgjdj',
    demo: 'vcjbjjvjb',
    image: crefin,
  },
  {
    id: 2,
    name: 'Course-Gen AI Platform',
    description:
      'Course Gen is a full-stack SaaS platform that creates custom course curriculums based on user-defined topics and titles. By harnessing AI agents, it generates structured course outlines, recommends relevant YouTube videos, and creates quizzes for each module. With integrated payment gateways and tiered subscriptions, Course Gen offers a scalable and interactive learning solution. This project showcases my expertise in building AI-driven platforms for e-learning with seamless user experiences',
    tools: [
      'NextJS',
      'Tailwind CSS',
      'TypeScript',
      'Postgres DB',
      'Stripe',
      'OpenAI',
    ],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: travel,
  },
  {
    id: 3,
    name: 'Connect-U',
    description:
      "Connect-U is a social media platform designed to help university graduates transition into the professional world. Built with Next.js and TypeScript, it provides a Twitter-like experience with text and media posts, alongside interactive forums for sharing resources, job listings, and mentorship. Connect-U's user-friendly interface and profile management features create an engaging space for graduates seeking opportunities and networking",
    tools: ['React', 'Next JS', 'TypeScript', 'Tailwind CSS'],
    code: '',
    role: 'Frontend Developer',
    demo: '',
    image: realEstate,
  },
  {
    id: 4,
    name: 'Robust Backend for Connect-U',
    description:
      'The backend for Connect-U is designed to support a high-traffic social media platform with a focus on university graduates. Developed with Node.js, Express, and MongoDB, this backend handles user-generated content, forum discussions, and job listings, while incorporating an intelligent recommendation system to enhance user engagement. This project illustrates my expertise in building scalable, high-performance backend solutions with advanced features for personalized content and seamless user interaction.',
    tools: [
      'NodeJS',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Bcrypt',
      'Nodemailer',
    ],
    code: '',
    demo: '',
    image: ayla,
    role: 'Backend Developer',
  },
  {
    id: 5,
    name: 'Chess Game',
    description:
      'This is a chess game built with React and TypeScript. It features a responsive design, drag-and-drop functionality, and a dynamic board that updates in real-time. The game logic is implemented using the chess.js library, allowing for legal moves, checkmate detection, and game state management. This project showcases my skills in building interactive web applications with complex game mechanics and intuitive user interfaces.',
    tools: ['React', 'TypeScript', 'Chess.js', 'Uwebsockets', 'Tailwind CSS'],
    code: '',
    demo: '',
    image: ayla,
    role: 'Frontend Developer',
  },
]


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },