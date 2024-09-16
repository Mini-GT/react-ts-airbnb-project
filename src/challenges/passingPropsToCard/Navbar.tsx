export function Navbar() {
  return (
    <>
      <div className="p-5 shadow-md">
        <img src="/airbnb-logo.svg" />
      </div>
      <div className="mx-4">
        <div className="my-6 flex flex-col justify-center items-center">
          <img className="lg:w-2/6 w-3/4" src="/photo-grid.png" alt="photo-grid" />
        </div>
        <div className="lg:mx-40 lg:text-3xl">
          <h1 className="lg:text-4xl text-2xl font-bold">Online Experiences</h1>
          <p className="my-3 ">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
      </div>
    </>
    
  )
}
