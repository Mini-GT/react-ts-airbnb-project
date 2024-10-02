import { useState } from "react"

type JestProps = {
  setup: string
  punchline: string
}

export default function Jest({
  setup,
  punchline
}: JestProps) {

  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */

  const [isShown, setIsShown] = useState(false)

  function togglePunchline() {
    setIsShown(isShown => !isShown)
  }

  return (
    <div>
      <div className=" m-2 my-8 relative">
        <h3 className="text-xl m-2 font-bold mb-10">{setup}</h3>
        {isShown &&  <div className="m-2">{punchline}</div>}
        <button className="border m-2" onClick={togglePunchline}>
          Show punchline
        </button>
      </div>
      <hr className="screen border-black"/>
    </div>
  )
}
