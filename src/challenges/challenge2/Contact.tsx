
export function Contact() {
  return (
    <div className="contacts w-1/3 shadow-lg m-8 p-4 rounded-lg">
      <div className="contact-card">
          <img className="rounded-lg" src="/challenge2-Imgs/mr-whiskerson.png"/>
          <h3>Mr. Whiskerson</h3>
          <div className="info-group flex gap-2 items-center">
              <img className="w-4 h-4" src="/challenge2-Imgs/phone-icon.png" />
              <p>(212) 555-1234</p>
          </div>
          <div className="info-group flex gap-2 items-center">
              <img className="w-4 h-4" src="/challenge2-Imgs/mail-icon.png" />
              <p>mr.whiskaz@catnap.meow</p>
          </div>
      </div>
    </div>
  )
}
