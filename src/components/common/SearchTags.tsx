const SearchTags = ({ children }: {children: React.ReactNode}) => {
  return (
    <span className="px-3 font-semibold border-1 border-zinc-500 rounded-full p-1 text-zinc-400" >
        {children}
    </span>
  )
}

export default SearchTags