import { Outlet } from "react-router-dom"
import Catalogo from "../Catalogo/Catalogo"
import Navbar from "../Navbar/Navbar"

export default function Layout() {
    return <div className="App">
        <Navbar/>
        <Outlet/>
    </div>
}