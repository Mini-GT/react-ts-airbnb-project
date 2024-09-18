import { Navbar } from "./components/Navbar"
import { Card } from "./components/Card"
import data from "./backend/data"

type Data = {
  id: number
  title: string,
  description: string,
  price: number,
  coverImg: string,
  stats: {
      rating: number,
      reviewCount: number
  },
  location: string,
  openSpots: number,
}

export default function App() {
  return (
    <div className="">
      <Navbar />
      <div className="flex sm:flex-col md:flex-row border">
        {data.map((cardInfo: Data) => {
          return (
          <Card
            key={cardInfo.id}
            img={cardInfo.coverImg}
            rating={cardInfo.stats.rating}
            reviewCount={cardInfo.stats.reviewCount}
            country={cardInfo.location}
            title={cardInfo.title}
            price={cardInfo.price}
          />
          )
        })}
      </div>
    </div>
  )
}
