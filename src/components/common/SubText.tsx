const SubText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <p className={`text-lg font-semibold text-white ${className || ''}`}>{children}</p>
  )
}

export default SubText