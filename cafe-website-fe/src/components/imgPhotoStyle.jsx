import useFadeInOnView from "../hooks/useFadeInOnView";

export default function ImagePhotoStyle({ imgUrl, animation, variant, className }) {
  const photo = useFadeInOnView({ animation: animation });

  const sizeClass =
    (variant === "square")
      ? " w-3/4 max-w-[300px] md:w-1/2 lg:w-3/4 aspect-square"
      : " w-full max-w-[300px] md:w-3/4 aspect-[3/2]"

  return (
    <div ref={photo}
      className={`bg-slate-200 rotate-5 mx-auto ${sizeClass} ${className}`}
    >
      <img src={imgUrl} className="object-cover p-5 w-full h-full" />
    </div>
  )
}