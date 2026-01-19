import useFadeInOnView from "../hooks/useFadeInOnView";

export default function ImagePhotoStyle({imgUrl, animation, variant, className}){
  const photo = useFadeInOnView({ animation: animation });

  const sizeClass = 
    (variant === "square")
      ? " w-[218px] md:w-[325px] h-[218px] md:h-[325px]"
      : " w-[288px] md:w-[432px] h-[218px] md:h-[325px]"

  return(
    <div ref={photo} 
      className={`bg-slate-200 rotate-5 mx-auto ${sizeClass} ${className}`}
    >
      <img src={imgUrl} className="object-cover p-5 w-full h-full"/>
    </div>
  )
}