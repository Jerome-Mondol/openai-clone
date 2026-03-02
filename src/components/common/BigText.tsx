const BigText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <p className={`text-5xl font-semibold text-white ${className || ''}`}>{children}</p>
  )
}

export default BigText