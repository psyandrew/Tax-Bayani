function WhyUsCard({WhyUsCardProp, icon: Icon, stroke}){
                                      // Assign to a capitalized variable so it can be used as a component

  return (
  <article className="y-us-card">
    <div className="y-us-icon-bg">
      <Icon className="y-us-icon" height={50} width={50} strokeWidth={stroke} />
    </div>
    <div className="card-content">
      <h3 className="y-us-card-content-header">{WhyUsCardProp['title']}</h3>
      <p className="y-us-card-content-sell">
        {WhyUsCardProp['sell']}
      </p>
    </div>
  </article>
  )
}

export default WhyUsCard;

