import BigText from "../components/common/BigText"
import NewsCard from "../components/common/news/NewsCard"
import SmallText from "../components/common/SmallText"
import SectionCard from "../components/ui/news/SectionCard"

const News = () => {
  return (
    <div className="w-full">
        {/* Change from flex to grid */}
        <div className="w-[80%] h-auto py-10 mx-auto grid grid-cols-[3fr_1fr] gap-8 items-start">
            <div className="sticky top-16">
                <SectionCard />
                <BigText className="mt-5" >Scaling AI for everyone</BigText>
                <span className="flex gap-4 mt-2" >
                    <SmallText className="text-white" >Company</SmallText>
                    <SmallText className="text-neutral-400" >5 min read</SmallText>
                </span>
            </div>
            <div>
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    </div>
  )
}

export default News