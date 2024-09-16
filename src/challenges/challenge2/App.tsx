import { Contact } from "./Contact"

type AppProps = {
  cardStyle: string
  infoGroupStyle: string
}

export default function App({
  cardStyle,
  infoGroupStyle
}: AppProps) {
  return (
    <div className="contacts">
        
        <Contact />
        
        <div className={`${cardStyle}`}>
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
        
    </div>
  )
}
