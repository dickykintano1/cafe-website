import { Link } from "react-router";
import MenuGrid from "./MenuGrid";

export default function BottomNavigation({ children }) {
  const buttons = {
    coffee: "/coffee",
    pastry: "/pastry",
    tea: "/tea",
    pasta: "/pasta",
    accessories: "/accessories",
  }

  return (
    <div className="md:mx-[25%]">
      {/* <div className="mt-15 border-t border-1"></div> */}
      <div className="my-30 text-sm md:text-sm lg:text-base italic text-center">{children}</div>

      <div className="border-t border-1 text-black"></div>
      <MenuGrid animated={false} />
      {/* <div className="flex flex-col justify-center items-center">
        {Object.entries(buttons).map(([label, path]) => (
          <Link key={label} to={path} className="flex flex-row">
            <div className="text-base md:text-lg lg:text-xl py-5 text-black capitalize">{label}</div>
            <img src="/img/chevronRight.svg" className="w-5" />
          </Link>
        ))}
      </div> */}
    </div>

  )
};