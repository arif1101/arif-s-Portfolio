import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Code2, GraduationCap, Home, Laptop, Mail } from "lucide-react";
import { FaBlog } from "react-icons/fa";
import { Link } from "react-router"

const navigationLinks = [
  { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
  { href: "/skills", label: "Skills", icon: <Code2 className="w-4 h-4" /> },
  { href: "/projects", label: "Projects", icon: <Laptop className="w-4 h-4" /> },
  // { href: "/experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
  { href: "/education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
  { href: "/blogs", label: "Blog", icon: <FaBlog className="w-4 h-4" /> },
  { href: "/contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
];

export default function Navbar() {

  return (
    <header className="sticky top-3 z-50 transition-all">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">

        {/* Center navigation */}
        <div className="flex items-center gap-2 mx-auto w-full ">

          {/* Mobile menu trigger */}
          <div className="md:hidden flex justify-between w-full">
            <p className="text-xl font-semibold">PortFolio</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8"
                  variant="ghost"
                  size="icon"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-36 p-1 md:hidde bg-indigo-950">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className="py-1.5"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          </div>

          {/* Desktop nav */}
<div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-lg max-md:hidden mx-auto">
  <NavigationMenu className="rounded-full px-4 py-1.5 bg-gray-900/90 backdrop-blur-md">
    <NavigationMenuList className="flex gap-2">
      {navigationLinks.map((link, index) => (
        <NavigationMenuItem key={index}>
          <NavigationMenuLink asChild className="flex flex-row">
            <Link
              to={link.href}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all hover:text-cyan-300 "
            >
              {link.icon}
              {link.label}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
</div>
          {/* <NavigationMenu className="max-md:hidden border-2 mx-auto border-cyan-700 rounded-full px-6 py-2.5 bg-gray-900/90 backdrop-blur-md">
            <NavigationMenuList className="gap-4">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link to={link.href} className="hover:text-primary py-1.5 font-medium text-white">
                    {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu> */}
        </div>
      </div>
    </header>
  )
}
