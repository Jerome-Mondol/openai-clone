import { ArrowUp } from "lucide-react"

const Searchbar = () => {
  return (
    <div className="w-full relative" >
        <textarea className="w-full h-32 rounded-4xl outline-none border-none bg-neutral-900 resize-none p-5 placeholder:text-gray-400 text-white" placeholder="Website Domain ideas" ></textarea>
        <ArrowUp className="absolute bottom-6 right-6 text-zinc-500 bg-zinc-700 rounded-full w-10 h-10 p-2"/>
    </div>
  )
}

export default Searchbar