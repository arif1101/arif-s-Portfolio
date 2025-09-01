export type BlogContent = {
  heading: string;
  content: string;
};

export type Blog = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
  fullContent: BlogContent[];
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "5 Tips to Write Cleaner React Code",
    description: "Learn practical techniques to make your React projects more maintainable, readable, and bug-free.",
    image: "/public/blogs/5tipsReact.webp",
    date: "2025-09-01",
    link: "/blogs/cleaner-react-code",
    fullContent: [
      { heading: "1. Use Functional Components and Hooks", content: "Prefer functional components over class components. Hooks like useState, useEffect, and custom hooks make your components cleaner and easier to read, avoiding complex lifecycle methods." },
      { heading: "2. Break Components into Smaller Pieces", content: "Split large components into smaller, reusable components. This improves readability and makes it easier to test, debug, and maintain your code." },
      { heading: "3. Use Descriptive Names", content: "Choose clear and meaningful names for components, props, and state variables. This helps other developers (and future you) understand the code without extra comments." },
      { heading: "4. Keep JSX Clean", content: "Avoid deeply nested JSX and complex inline logic. Use helper functions or separate components to keep your JSX readable and concise." },
      { heading: "5. Consistent Formatting and Linting", content: "Use Prettier, ESLint, and a consistent coding style. This prevents messy code, reduces bugs, and ensures your project stays maintainable as it grows." },
      { heading: "Bonus Tip: Write Reusable Custom Hooks", content: "If you find repeated logic in multiple components, create a custom hook. This reduces duplication and makes your app more modular." }
    ]
  },
  {
    id: 2,
    title: "Building a Modern Portfolio with React & Tailwind",
    description: "A step-by-step guide on creating a responsive, stylish, and professional portfolio website using React and Tailwind CSS.",
    image: "/public/blogs/modernPortfolio.png",
    date: "2025-08-28",
    link: "/blogs/modern-portfolio-react-tailwind",
    fullContent: [
      { heading: "Introduction", content: "In this blog, I share how to build a modern portfolio website using React and Tailwind CSS. This approach ensures responsiveness, clean design, and maintainable code." },
      { heading: "Setting Up the Project", content: "Start by creating a new React project with Vite or Create React App. Install Tailwind CSS and configure your theme and colors for consistency." },
      { heading: "Designing the Layout", content: "Use Tailwind utility classes to create a clean and responsive layout. Focus on a modern, minimalist aesthetic that highlights your projects and skills." },
      { heading: "Adding Components", content: "Break your portfolio into reusable components like Navbar, Hero, Projects, Skills, and Contact. This keeps your code organized and scalable." },
      { heading: "Animating with Framer Motion", content: "Add subtle animations to sections like Hero and Projects using Framer Motion to create a more engaging user experience." },
      { heading: "Deploying Your Portfolio", content: "Finally, deploy your portfolio on platforms like Vercel or Netlify for free hosting and continuous deployment." }
    ]
  },
  {
    id: 3,
    title: "Understanding MERN Stack for Beginners",
    description: "A beginner-friendly overview of building full-stack applications using MongoDB, Express, React, and Node.js.",
    image: "/public/blogs/beginerMernStack.jpg",
    date: "2025-08-20",
    link: "/blogs/mern-stack-for-beginners",
    fullContent: [
      { heading: "What is MERN?", content: "MERN is a combination of MongoDB, Express.js, React, and Node.js. It's a popular full-stack framework for building modern web applications using JavaScript across the stack." },
      { heading: "MongoDB - The Database", content: "MongoDB is a NoSQL database that stores data in flexible JSON-like documents. It allows for quick development and easy scaling of applications." },
      { heading: "Express.js - The Backend Framework", content: "Express.js is a lightweight Node.js framework used to build server-side applications and REST APIs efficiently." },
      { heading: "React - The Frontend Library", content: "React is a powerful JavaScript library for building dynamic and responsive user interfaces. Its component-based architecture helps maintain modular and reusable code." },
      { heading: "Node.js - The Runtime Environment", content: "Node.js allows running JavaScript on the server. It handles requests, communicates with the database, and serves responses to the client efficiently." },
      { heading: "Putting It All Together", content: "By combining MongoDB, Express, React, and Node.js, you can build fully functional web applications that are scalable, maintainable, and performant." }
    ]
  },
  {
    id: 4,
    title: "Boosting Productivity as a Developer",
    description: "Discover the tools, extensions, and techniques I use daily to stay productive and write better code.",
    image: "/public/blogs/developerProductivity.jpg",
    date: "2025-08-15",
    link: "/blogs/developer-productivity-tips",
    fullContent: [
      { heading: "Introduction", content: "Being productive as a developer isn’t just about coding faster; it’s about coding smarter. Here are my top tips to maximize productivity." },
      { heading: "Use a Powerful Code Editor", content: "I rely on VS Code with essential extensions like Prettier, ESLint, and Tailwind Intellisense to speed up development and maintain code quality." },
      { heading: "Organize Your Workflow", content: "Use task managers like Jira, Trello, or Notion to plan features, track bugs, and manage your development workflow efficiently." },
      { heading: "Automate Repetitive Tasks", content: "Use npm scripts, Git hooks, and automation tools to handle repetitive tasks like linting, testing, or building projects." },
      { heading: "Take Regular Breaks", content: "Short breaks increase focus and prevent burnout. Techniques like Pomodoro help maintain consistent productivity throughout the day." },
      { heading: "Learn Continuously", content: "Stay updated with the latest technologies, frameworks, and best practices to continuously improve your skills and workflow." }
    ]
  }
];
