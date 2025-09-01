
import App from "@/App";
import BlogDetails from "@/pages/Blog/BlogDetails";
import Blogs from "@/pages/Blog/Blogs";
import Contact from "@/pages/Contact/Contact";
import Education from "@/pages/Education/Education";
import Experience from "@/pages/Experience/Experience";
import Homepage from "@/pages/Home/Homepage";
import Projects from "@/pages/Projects/Projects";
import skills from "@/pages/Skills/skills";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: Homepage,
                index: true,
            },
            {
                Component: skills,
                path: "/skills"
            },
            {
                Component: Projects,
                path: "/projects"
            },
            {
                Component: Experience,
                path: "/experience"
            },
            {
                Component: Education,
                path: "/education"
            },
            {
                Component: Contact,
                path: "/contact"
            }
        ]
    },
    {
        Component: Blogs,
        path: "/blogs"
    },
    { 
        Component: BlogDetails,
        path: "/blogs/:slug"
    },
])