import { useNavigate } from 'react-router-dom';

function ServiceCard({serviceCardProp, icon: Icon, stroke, linkTo}){
                                      // Assign to a capitalized variable so it can be used as a component

  const navigate = useNavigate();

  return (
  <article className="service-card" onClick={() => navigate(linkTo)} >
    <Icon className="service-icon"
    height={90} width={90} 
    strokeWidth={stroke} 
    />
    <div className="card-content">
      <h3 className="card-content-header">{serviceCardProp['title']}</h3>
      <p className="card-content-sell">
        {serviceCardProp['highlight']}
        <br />
        {serviceCardProp['sell']}
      </p>
    </div>
  </article>
  )
}

export default ServiceCard;

