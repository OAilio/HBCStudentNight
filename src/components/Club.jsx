import "../styles/club.scss"

const Club = () => {
  return (
    <div className="club">
      <h1>HUNKS BASKETBALL CLUB</h1>
      <img src={"/hbclogo2.svg"} alt="HBC logo" className="icon" loading="lazy"/>
      <p><b>Hunks Basketball Club ry</b> organizes recreational basketball activities
      in the Turku region and fosters active alumni engagement across borders.
      Our community traces its roots back to 2003 when Turku School of Economics 
      students formed a basketball team called KY-Hunks. Over time, our group has 
      expanded to encompass a wide range of academic disciplines. 
      In 2018, a new organization, Hunks Basketball Club, 
      was established to continue our activities.
      <br/><br/>
      The flagship teams of Hunks Basketball Club are our student teams Currentus (men) and Shooters
      (women, IG @<a href="https://www.instagram.com/hbcshooters">hbcshooters</a>),
      which recruit new members every fall from students arriving in Turku. 
      These teams combine the student lifestyle with the passion to play basketball 
      at the highest local level.
      <br/><br/>
      Those from Currentus who transition to working life continue playing in the 
      Emeritus team. Basketball remains part of their lives even as family and careers 
      take on larger roles. While some eventually hang up their basketball shoes, they 
      remain active participants in the events of the HBC community.
      <br/><br/>
      Hunks Basketball Club now includes nearly 150 members, and the number grows 
      every year. Annual gatherings with alumni help preserve traditions and 
      provide networking opportunities for our members. The friendships formed on 
      the basketball court last a lifetime.
      <br/><br/>
      <b>Go Hunks!</b>
      </p>
    </div>
  )
};

export default Club