import { Shop, Coins, UserBadgeCheck, Learning, HomeUser, PageEdit} from 'iconoir-react';
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
        < WhyUsCard WhyUsCardProp={whyUsOBJ[3]} icon={PageEdit} stroke={1}/>
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
    "sell":"Reliable expertise to get your requirements done right."
  },
  {
    "title": "PEACE OF MIND",
    "sell":"We keep your compliance in order so you can focus on running your business."
  },
  {
    "title": "FLEXIBLE",
    "sell":"Get the services you need without being tied to a long-term commitment."
  },
    {
    "title": "SME SPECIALIST",
    "sell":"Practical solutions built around the needs of growing businesses."
  },
    {
    "title": "FREELANCER'S FRIEND",
    "sell":"Professional support tailored to Freelancer clients."
  },
]