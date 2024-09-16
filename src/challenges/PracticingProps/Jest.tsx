type JestProps = {
  setup: string
  punchline: string
}

export default function Jest({
  setup,
  punchline
}: Partial<JestProps>) {
  return (
    <div className="border rounded-lg mx-4 my-8 shadow-lg p-4">
      <div>{setup}</div>
      <div>{punchline}</div>
    </div>
  )
}
