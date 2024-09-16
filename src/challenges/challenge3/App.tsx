import { Contact } from "./Contact"

export default function App() {
  return (
    <div className="h-screen contacts flex flex-wrap">
        
        <Contact 
            img="/challenge2-Imgs/mr-whiskerson.png" 
            name="Mr. Whiskerson"
						contact="(212) 555-1234"
  					email="mr.whiskaz@catnap.meow"
        />

        <Contact 
            img="/challenge2-Imgs/fluffykins.png" 
            name="Fluffykins"
						contact="(212) 555-2345"
  					email="fluff@me.com"
        />

				<Contact 
            img="/challenge2-Imgs/felix.png" 
            name="Felix"
						contact="(212) 555-4567"
  					email="thecat@hotmail.com"
        />

				<Contact 
            img="/challenge2-Imgs/pumpkin.png" 
            name="Pumpkin.png"
						contact="(0800) CAT KING"
  					email="pumpkin@scrimba.com"
        />
        
    </div>
  )
}

/* <div className={`${cardStyle}`}>
    <img src="/challenge2-Imgs/fluffykins.png"/>
    <h3>Fluffykins</h3>
    <div className={`${infoGroupStyle}`}>
        <img src="/challenge2-Imgs/phone-icon.png" />
        <p>(212) 555-2345</p>
    </div>
    <div className={`${infoGroupStyle}`}>
        <img src="/challenge2-Imgs/mail-icon.png" />
        <p>fluff@me.com</p>
    </div>
</div>

<div className="contact-card bgShadow">
    <img src="/challenge2-Imgs/felix.png"/>
    <h3>Felix</h3>
    <div className="info-group">
        <img src="/challenge2-Imgs/phone-icon.png" />
        <p>(212) 555-4567</p>
    </div>
    <div className="info-group bgShadow">
        <img src="/challenge2-Imgs/mail-icon.png" />
        <p>thecat@hotmail.com</p>
    </div>
</div>

<div className="contact-card">
    <img src="/challenge2-Imgs/pumpkin.png"/>
    <h3>Pumpkin</h3>
    <div className="info-group">
        <img src="/challenge2-Imgs/phone-icon.png" />
        <p>(0800) CAT KING</p>
    </div>
    <div className="info-group">
        <img src="/challenge2-Imgs/mail-icon.png" />
        <p>pumpkin@scrimba.com</p>
    </div>
</div> 
*/