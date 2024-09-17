export function App() {
  const colors: string[] = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"] 
  return (
    <div>
      {colors.map(color => <h1>{color}</h1>)}
    </div>
  )
}
