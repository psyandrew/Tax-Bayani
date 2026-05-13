import { Shop, Coins, UserBadgeCheck,  Heart, Learning, HomeUser} from 'iconoir-react';
import WhyUsCard from './WhyUsCard.js'

import './WhyUsStyle.css'

function WhyUs() {

  return (
    <section className="y-us-section">
      <h2 className="y-us-h2">WHY WORK WITH US?</h2>
      <div className="y-us-feature-card-container">
        < WhyUsCard WhyUsCardProp={whyUsOBJ[0]} icon={Coins} stroke={1}/>
        < WhyUsCard WhyUsCardProp={whyUsOBJ[1]} icon={UserBadgeCheck} stroke={1}/>
        < WhyUsCard WhyUsCardProp={whyUsOBJ[2]} icon={Learning} stroke={1}/>
      </div>
      <div className="y-us-feature-card-container">
        < WhyUsCard WhyUsCardProp={whyUsOBJ[3]} icon={Heart} stroke={1}/>
        < WhyUsCard WhyUsCardProp={whyUsOBJ[4]} icon={Shop} stroke={1}/>
      < WhyUsCard WhyUsCardProp={whyUsOBJ[5]} icon={HomeUser} stroke={1}/>
      </div>
    </section>
  );
}

export default WhyUs;

const whyUsOBJ= [
  {
    "title": "FRUGAL SOLUTIONS",
    "sell":"We are Professionals that give bang for your buck!"
  },
    {
    "title": "COMPETENT",
    "sell":"We are Professionals that give bang for your buck!"
  },
  {
    "title": "IDK MAN",
    "sell":"We are Professionals that give bang for your buck!"
  },
  {
    "title": "WE CARE",
    "sell":"We are Professionals that give bang for your buck!"
  },
    {
    "title": "SME SPECIALIST",
    "sell":"We are Professionals that give bang for your buck!"
  },
    {
    "title": "FREELANCER'S FRIEND",
    "sell":"We are Professionals that give bang for your buck!"
  },
]