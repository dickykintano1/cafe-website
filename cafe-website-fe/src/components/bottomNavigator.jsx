import { Link } from "react-router";

export default function BottomNavigation({leftButton, rightButton}){
  const buttonLinkMap = {
    coffee: "/coffee",
    pastry: "/pastry",
    tea: "/tea",
    pasta: "/pasta",
    accessories: "/accessories",
  }
  const leftButtonLink = buttonLinkMap[leftButton] ?? "";
  const rightButtonLink = buttonLinkMap[rightButton] ?? "";

  return(
    <div className="flex flex-row justify-between">
      <div>
        {leftButton && 
          <Link to={leftButtonLink} className="flex flex-row">
            <img src="/img/chevronRight.svg" className="w-5 rotate-180"/>
            <div className="text-base py-5 text-black">{leftButton}</div>
          </Link>
          }
      </div>
      
      
      {rightButton && 
      <Link to={rightButtonLink} className="flex flex-row">
        <div className="text-base py-5 text-black">{rightButton}</div>
        <img src="/img/chevronRight.svg" className="w-5"/>
      </Link>
      }
    </div>
  )
};