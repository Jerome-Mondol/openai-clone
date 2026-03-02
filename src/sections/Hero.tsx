import SearchTags from "../components/common/hero/SearchTags"
import Searchbar from "../components/ui/hero/Searchbar"


const Hero = () => {

    const tags = ["Search with ChatGPT", "Talk with ChatGPT", "Research", "Sora", "More"]

  return (
    <div className="mx-auto h-screen w-[80%] flex items-center justify-center" >  
        <div className="w-[55%] flex justify-center items-center flex-col gap-4">
            <h1 className="text-2xl text-white font-semibold" >What can I help with?</h1>
            <Searchbar />
            <div className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag, index) => (
                    <SearchTags key={index}>{tag}</SearchTags>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Hero