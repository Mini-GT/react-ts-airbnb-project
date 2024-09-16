import { Card } from "./Card"
import { Navbar } from "./Navbar"

export default function App() {
  return (
    <div>
      <Navbar />
      <Card 
        img="katie-zaferes.png"
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}
