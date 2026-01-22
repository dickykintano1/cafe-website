//container for contents besides landing page.

export default function ResponsiveContainer({ children, className }) {
    return <div className={`${className} md:mx-[10%] lg:mx-[25%]`}>{children}</div>
}