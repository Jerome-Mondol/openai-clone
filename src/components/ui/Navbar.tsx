import { Search } from "lucide-react"
import Navlinks from "../common/Navlinks"

const Navbar = () => {

    const navLinks = ["Research", "Safety", "For Business", "For Developers", "ChatGPT", "Sora", "Codex", "Stories", "Company", "News"]


  return (
    <nav className="w-[80%] bg-black fixed top-0 left-1/2 -translate-x-1/2 z-[999] h-16 flex items-center justify-between" >        {/* Logo and Navlinks wrapper */}
        <div className="flex">
            {/* Logo */}
            <div className="text-white text-lg font-semibold" >OpenAI</div>

            {/* Navlinks */}
            <div className="flex items-center gap-8 ml-8">
                {navLinks.map(link => (
                    <Navlinks key={link}>{link}</Navlinks>
                ))}
                <Search className="text-gray-600" width={16} />
            </div>
        </div>

        {/* Buttons and dropdowns*/}
        <div className="flex items-center gap-4 text-white" >
                <button className="text-xs bg-zinc-900 hover:bg-zinc-800 px-5 py-1 rounded-4xl" >Log in</button>
                <button className="text-xs bg-white hover:bg-gray-200 px-5 py-1 rounded-4xl text-black" >Try ChatGPT</button>
        </div>
    </nav>
  )
}

export default Navbar