//import  from './Components/.js'

function ServicesSection({bg, pic, txtblock, secID, head}) {
  return (
    <section className={`service-section ${bg}`} id={`${secID}`}>
      <div className="services-container">
        <div className={`pic-container ${pic}`}>
            <h2>{`${head}`}</h2>
        </div>
        <div className="sell-container">
          <div className="txt-block-1">
            <h2>{`Lorem ipsum dolor sit amet`}</h2>
            <p>{`Phasellus tortor est, congue at mauris at, congue aliquam justo. Ut non feugiat ipsum. Aliquam blandit leo sed tristique mattis. Duis nec blandit ligula. Vivamus metus leo, gravida id sollicitudin eu, semper ut arcu. Fusce sit amet sapien sit amet tellus gravida dapibus non id dui. Mauris feugiat velit malesuada quam interdum maximus. Phasellus a dolor auctor, fringilla sem eu, volutpat nibh. Cras vulputate diam quis ornare bibendum. In quis turpis quis ante ultricies ultrices. Sed aliquam hendrerit lobortis.`}`}</p>
          </div>
          <div className="txt-block-2">
            <p>{`Phasellus tortor est, congue at mauris at, congue aliquam justo. Ut non feugiat ipsum. Aliquam blandit leo sed tristique mattis. Duis nec blandit ligula. Vivamus metus leo, gravida id sollicitudin eu, semper ut arcu. Fusce sit amet sapien sit amet tellus gravida dapibus non id dui. Mauris feugiat velit malesuada quam interdum maximus. Phasellus a dolor auctor, fringilla sem eu, volutpat nibh. Cras vulputate diam quis ornare bibendum. In quis turpis quis ante ultricies ultrices. Sed aliquam hendrerit lobortis.`}</p>
          </div>
        </div>
      </div>
    </section >
  );
}

export default ServicesSection;
