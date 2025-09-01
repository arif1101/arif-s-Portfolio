
import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div className="max-w-6xl mx-auto pt-3">
    <Navbar/>
    <Outlet/>
    </div>
  )
}
