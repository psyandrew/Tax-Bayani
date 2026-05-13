function ServiceCard({serviceCardProp, icon: Icon, stroke}){
                                      // Assign to a capitalized variable so it can be used as a component

  return (
  <article className="service-card">
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

