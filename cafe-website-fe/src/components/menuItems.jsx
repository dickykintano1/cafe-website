import ImagePhotoStyle from "./imgPhotoStyle";

export default function MenuItems({ menuItems }) {
  return (
    <>
      {menuItems.map((item, i) => {
        const isLast = i === menuItems.length - 1;

        switch (i % 3) {
          case 0:
            return (
              <>
                <div className="lg:grid lg:grid-cols-2">
                  <div className="mt-20">
                    <ImagePhotoStyle imgUrl={item.imgUrl} animation={item.animation} />
                  </div>
                  <div>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemDescription ingredients={item.ingredients} feel={item.feel}>{item.description}</ItemDescription>
                  </div>
                </div>
                {!isLast && <div className="mt-20 border-t border-1 lg:opacity-0" />}
              </>
            )
          case 1:
            return (
              <>
                <div className="lg:grid lg:grid-cols-2">
                  <div className="mt-20 -rotate-10 lg:order-2">
                    <ImagePhotoStyle imgUrl={item.imgUrl} animation={item.animation} />
                  </div>
                  <div className="lg:order-1">
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemDescription ingredients={item.ingredients} feel={item.feel}>{item.description}</ItemDescription>
                  </div>
                </div>

                {!isLast && <div className="mt-20 border-t border-1 lg:opacity-0" />}
              </>
            )
          case 2:
            return (
              <>
                <div className="lg:grid lg:grid-cols-2">
                  <div className="mt-20">
                    <ImagePhotoStyle imgUrl={item.imgUrl} animation={item.animation} variant={item.variant} />
                  </div>
                  <div>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemDescription ingredients={item.ingredients} feel={item.feel}>{item.description}</ItemDescription>
                  </div>
                </div>
                {!isLast && <div className="mt-20 border-t border-1 lg:opacity-0" />}
              </>
            )
        }
      })}
    </>
  )
}

function ItemTitle({ children }) {
  return <div className="mt-20 text-3xl md:text-4xl lg:text-5xl">{children}</div>
}

function ItemDescription({ children, ingredients, feel }) {
  if (ingredients?.length || feel?.length) {
    return (
      <div className="mt-5 flex flex-col gap-4">
        <TagGroup label="Ingredients" tags={ingredients} variant="solid" />
        <TagGroup label="Feel" tags={feel} variant="outline" />
      </div>
    );
  }
  return <div className="mt-5 text-base md:text-lg lg:text-xl">{children}</div>
}

function TagGroup({ label, tags, variant }) {
  if (!tags?.length) return null;

  const pillStyle =
    variant === "solid"
      ? "bg-cocoa text-cream border-cocoa"
      : "bg-transparent text-cocoa border-brass/70 italic";

  return (
    <div>
      <p className="mb-2 text-xs md:text-sm uppercase tracking-[0.2em] text-caramel">{label}</p>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className={`px-3 py-1 rounded-full border text-sm md:text-base ${pillStyle}`}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
