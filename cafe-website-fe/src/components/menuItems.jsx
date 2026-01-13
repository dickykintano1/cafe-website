import ImagePhotoStyle from "./imgPhotoStyle";

export default function MenuItems({menuItems}){
  return(
    <>
      {menuItems.map((item,i) => {
        const isLast = i === menuItems.length - 1;

        switch (i % 3){
          case 0:
            return (
              <>
                <div className="mt-20 text-base">
                  <ImagePhotoStyle imgUrl={item.imgUrl} animation={item.animation}/>
                </div>
                <div className="mt-20 text-3xl">{item.title}</div>
                <div className="mt-5 text-base">{item.description}</div>
                {!isLast && <div className="mt-15 border-t border-1" />}
              </>
            )
          case 1:
            return (
              <>
                <div className="mt-20 text-base -rotate-10">
                  <ImagePhotoStyle imgUrl={item.imgUrl} animation={item.animation}/>
                </div>
                <div className="mt-20 text-3xl">{item.title}</div>
                <div className="mt-5 text-base">{item.description}</div>
                {!isLast && <div className="mt-15 border-t border-1" />}
              </>
            )
          case 2:
            return (
              <>
                <div className="mt-20 text-base">
                  <ImagePhotoStyle imgUrl={item.imgUrl} animation={item.animation} variant={item.variant}/>
                </div>
                <div className="mt-20 text-3xl">{item.title}</div>
                <div className="mt-5 text-base">{item.description}</div>
                {!isLast && <div className="mt-15 border-t border-1" />}
              </>
            )
        }
      })}
    </>
  )
}