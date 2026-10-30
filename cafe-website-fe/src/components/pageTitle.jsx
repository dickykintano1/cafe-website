export default function PageTitle({ children, className }) {
  return (
    <div className={`${className} pl-5 pt-30 text-5xl md:text-6xl lg:text-7xl text-cocoa font-bold font-DMSerif`}>
      {children}
    </div>
  )
}