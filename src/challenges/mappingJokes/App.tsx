import jests from "./data/jests"
import Jest from "./Jest"

type JestDataProps = {
  id: number
  setup: string
  punchline: string
}

export default function App() {

  return (
    <div>
      {jests.map((jest: JestDataProps) => {
        return <Jest
          key={jest.id}
          setup={jest.setup}
          punchline={jest.punchline}
        />
      })}
    </div>
  )
}
