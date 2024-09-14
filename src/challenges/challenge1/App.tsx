import { getDate } from "./Date";

const timeOfDay: String = getDate();
export default function App() {
  return (
    <h1>Good {timeOfDay}!</h1>
  )
}
