type JestProps = {
  setup: string
  punchline: string
}

export default function Jest({
  setup,
  punchline
}: JestProps) {
  return (
    <div className="border rounded-lg mx-4 my-8 shadow-lg p-4">
      <h3>{setup}</h3>
      <div>{punchline}</div>
    </div>
  )
}
