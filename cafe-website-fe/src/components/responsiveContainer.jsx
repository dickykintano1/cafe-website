//container for contents besides landing page.

export default function ResponsiveContainer({ children, className }) {
    return <div className={`${className} md:mx-[10%] lg:mr-[30%]`}>{children}</div>
}