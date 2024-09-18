type CardProps = {
  img: string
  rating: number
  reviewCount: number
  country: string
  title: string
  price: number
}

export function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price
}: CardProps) {
  return (
    <div className="sm:w-screen mt-10 sm:p-5 sm:last:p-5 md:last:pr-0">
      <div className="">
        <div className="lg:w-2/3">
          <img className="w-full h-96" src={`/../card-imgs/${img}`} alt="image" />
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
