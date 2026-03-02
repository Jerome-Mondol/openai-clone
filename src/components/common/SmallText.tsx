const SmallText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <p className={`text-sm font-semibold ${className || ''}`}>{children}</p>
  )
}

export default SmallText