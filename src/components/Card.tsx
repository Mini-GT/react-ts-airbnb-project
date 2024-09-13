export function Card() {
  return (
    <div className="mx-4 w-1/3 mt-10">
      <img className="" src="/image.png" alt="image" />
      <div className="flex text-xs">
        <img src="/star.svg" alt="star" />
        <div>5.0 (6)  USA</div>
      </div>
      <p className="text-[0.8rem]">Life lessons with Katie Zaferes</p>
      <p className="text-[0.8rem]"><span className="font-bold">From $136 </span>/ person</p>
    </div>
  )
}
