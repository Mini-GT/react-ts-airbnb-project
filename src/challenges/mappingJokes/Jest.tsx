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
    <div className="border rounded-lg border-box m-2 my-8 relative">
      <button className="px-3 py-4 flex flex-col justify-between" onClick={togglePunchline}>
        <h3 className="text-xl font-bold mb-10">{setup}</h3>
        <div className="">{isShown && punchline}</div>
      </button>
    </div>
  )
}
