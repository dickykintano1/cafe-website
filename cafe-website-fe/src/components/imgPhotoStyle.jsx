import useFadeInOnView from "../hooks/useFadeInOnView";

export default function ImagePhotoStyle({imgUrl, animation}){
  const photo = useFadeInOnView({ animation: animation });

  return(
    <div ref={photo} 
      className="bg-slate-200 w-[288px] h-[218px] rotate-5"
    >
      <img src={imgUrl} className="object-cover p-5 w-full h-full"/>
    </div>
  )
}