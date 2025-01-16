import "../styles/afterparty.scss"

const AfterParty = () => {
  return (
    <div className="afterparty">
      <h1>STUDENT NIGHT AFTER PARTY</h1>
      <h2>THE AFTER PARTY WILL BE AT NIGHT CLUB DORIS</h2>
      <div className="partyinfo">
        <a href="https://barfredrik.fi/doris/" aria-label="Visit Bar Fredrik & Night Club Doris' site"><img src={"/doris.webp"} alt="TuTo logo" className="doris" /></a>
        <p>Linnankatu 18, 20100 Turku</p>
        <span>TICKETS 5€*</span>
        <span>DOORS 22.00</span>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.7819946978234!2d22.265928300000002!3d60.4488144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c772000e22b5f%3A0xb5277476ccb37899!2sFredrik%20%26%20Doris!5e0!3m2!1sfi!2sfi!4v1736587056966!5m2!1sfi!2sfi"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>    
      </div>
      <p className="info">*If bought at the bar door. The game ticket includes the after party entry. (Cloakroom fee separate)</p>
    </div>
  )
};

export default AfterParty;