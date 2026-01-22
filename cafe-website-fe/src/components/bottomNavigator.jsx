import { Link } from "react-router";

export default function BottomNavigation({ leftButton, rightButton, children }) {
  const buttonLinkMap = {
    coffee: "/coffee",
    pastry: "/pastry",
    tea: "/tea",
    pasta: "/pasta",
    accessories: "/accessories",
  }
  const leftButtonLink = buttonLinkMap[leftButton] ?? "";
  const rightButtonLink = buttonLinkMap[rightButton] ?? "";

  return (
    <div className="md:mx-[25%]">
      {/* <div className="mt-15 border-t border-1"></div> */}
      <div className="my-30 text-sm md:text-sm lg:text-base italic text-center">{children}</div>

      <div className="border-t border-1 text-black"></div>
      <div className="flex flex-row justify-between">
        <div>
          {leftButton &&
            <Link to={leftButtonLink} className="flex flex-row">
              <img src="/img/chevronRight.svg" className="w-5 rotate-180" />
              <div className="text-base md:text-lg lg:text-xl py-5 text-black">{leftButton}</div>
            </Link>
          }
        </div>


        {rightButton &&
          <Link to={rightButtonLink} className="flex flex-row">
            <div className="text-base md:text-lg lg:text-xl py-5 text-black">{rightButton}</div>
            <img src="/img/chevronRight.svg" className="w-5" />
          </Link>
        }
      </div>
    </div>

  )
};