import { formatRating } from "../utils/formatRating"

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
    <div className="mx-4 w-1/3 mt-10">
      <img src={`/${img}`} alt="Katie Zaferes" />
      <div className="flex gap-1 text-8">
        <img className="w-4" src="/star.svg" alt="star" />
        <div>{`${formatRating(rating)} (${reviewCount}) ${country}`}</div>
      </div>
      <p className="text-8">{title}</p>
      <p className="text-8"><span className="font-bold">{`From $${price}`} </span>/ person</p>
    </div>
  )
}
