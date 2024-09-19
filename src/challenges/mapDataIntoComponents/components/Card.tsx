type CardProps = {
  img: string
  rating: number
  reviewCount: number
  country: string
  title: string
  price: number
  openSpots: number
}

type BadgeText = "SOLD OUT" | "ONLINE" | undefined

export function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
  openSpots
}: CardProps) {

  let badgeText: BadgeText; 
  if(openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if(country === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="flex justify-center sm:w-screen mt-10 sm:p-5 sm:last:p-5">
      
      <div className="relative">
        <div className="w-80 h-96">
          <div className="w-1/3 bg-white absolute m-2 rounded-sm px-1 text-center font-bold">
            {badgeText}
          </div>
          <img className="w-full h-full" src={`/../card-imgs/${img}`} alt="image" />
        </div>

        <div className="mx-2">
          <div className="flex gap-1 text-8">
            <img className="w-4" src="/star.svg" alt="star" />
            <div>{`${rating} (${reviewCount}) • ${country}`}</div>
          </div>
          <p className="text-8">{title}</p>
          <p className="text-8"><span className="font-bold">From {`$${price}`} </span>/ person</p>
        </div>

        <hr className="mt-4" />
      </div>

    </div>
  )
}
