type ContactProps = {
  img: string
  name: string
  contact: string
  email: string
}

export function Contact({
  img,
  name,
  contact,
  email
  
}: ContactProps) {
  return (
    <div className="bg-gray-100 contacts w-1/3 shadow-lg m-8 p-4 rounded-lg">
      <div className="contact-card">
          <img className="rounded-lg" src={img}/>
          <h3>{name}</h3>
          <div className="info-group flex gap-2 items-center">
              <img className="w-4 h-4" src="/challenge2-Imgs/phone-icon.png" />
              <p>{contact}</p>
          </div>
          <div className="info-group flex gap-2 items-center">
              <img className="w-4 h-4" src="/challenge2-Imgs/mail-icon.png" />
              <p>{email}</p>
          </div>
      </div>
    </div>
  )
}
