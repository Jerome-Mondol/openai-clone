import SmallText from "../SmallText"
import SubText from "../SubText"

const NewsCard = () => {
  return (
    <div className="w-[100%] flex px-3 pb-3 flex flex-col mb-5" > 
        <div className="w-full h-82 bg-red-500 space-y-2 rounded-lg"></div>
        
        <span className="mt-2" >
            <SubText>OpenAI and Amazon announce strategic partnership</SubText>
        </span>

        <span className="flex mt-2">
            <SmallText className="text-white" >Company</SmallText>
            <SmallText className="ml-2 text-neutral-400">2 hours ago</SmallText>
        </span>
    </div>
  )
}

export default NewsCard