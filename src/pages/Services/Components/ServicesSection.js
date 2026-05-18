//import  from './Components/.js'

import React from 'react';

// 1. MAIN COMPONENT (Kept clean at the top)
export default function ServicesSectionTest({ bg, pic, txtblock, secID, head }) {
  return (
    <section className={`service-section ${bg}`}>
      <div id={secID}>
      </div>
      <div className="services-container">
        <div className={`pic-container ${pic}`}>
          <h2>{head}</h2>
        </div>
        
        <div className="sell-container">
          {getSellContent(txtblock)}
        </div>
        
      </div>
    </section>
  );
}

function getSellContent(txtblock) {
  switch (txtblock) {
    case 'TC':
      return (
        <>
          <div className="txt-block-1">
            <h2>Tax Compliance</h2>            
            <p>"Phasellus tortor est, congue at mauris at, congue aliquam justo. Ut non feugiat ipsum. Aliquam blandit leo sed tristique mattis. Duis nec blandit ligula. Vivamus metus leo, gravida id sollicitudin eu, semper ut arcu. Fusce sit amet sapien sit amet tellus gravida dapibus non id dui. Mauris feugiat velit malesuada quam interdum maximus. Phasellus a dolor auctor, fringilla sem eu, volutpat nibh. Cras vulputate diam quis ornare bibendum. In quis turpis quis ante ultricies ultrices. Sed aliquam hendrerit lobortis."</p>
            <p>"Phasellus tortor est, congue at mauris at, congue aliquam justo. Ut non feugiat ipsum. Aliquam blandit leo sed tristique mattis. Duis nec blandit ligula. Vivamus metus leo, gravida id sollicitudin eu, semper ut arcu. Fusce sit amet sapien sit amet tellus gravida dapibus non id dui. Mauris feugiat velit malesuada quam interdum maximus. Phasellus a dolor auctor, fringilla sem eu, volutpat nibh. Cras vulputate diam quis ornare bibendum. In quis turpis quis ante ultricies ultrices. Sed aliquam hendrerit lobortis."</p>
          </div>
          <div className="txt-block-2">
            <p>"Phasellus tortor est, congue at mauris at, congue aliquam justo. Ut non feugiat ipsum. Aliquam blandit leo sed tristique mattis. Duis nec blandit ligula. Vivamus metus leo, gravida id sollicitudin eu, semper ut arcu. Fusce sit amet sapien sit amet tellus gravida dapibus non id dui. Mauris feugiat velit malesuada quam interdum maximus. Phasellus a dolor auctor, fringilla sem eu, volutpat nibh. Cras vulputate diam quis ornare bibendum. In quis turpis quis ante ultricies ultrices. Sed aliquam hendrerit lobortis."</p>
           
  
          </div>
        </>
      );
    case 'FR':
      return (
        <>
          <div className="txt-block-1">
            <h2>Fiscal Report</h2>
            <p>"Phasellus tortor est, congue at mauris at, congue aliquam justo. Ut non feugiat ipsum. Aliquam blandit leo sed tristique mattis. Duis nec blandit ligula. Vivamus metus leo, gravida id sollicitudin eu, semper ut arcu. Fusce sit amet sapien sit amet tellus gravida dapibus non id dui. Mauris feugiat velit malesuada quam interdum maximus. Phasellus a dolor auctor, fringilla sem eu, volutpat nibh. Cras vulputate diam quis ornare bibendum. In quis turpis quis ante ultricies ultrices. Sed aliquam hendrerit lobortis."</p>
          </div>
          <div className="txt-block-2">
             <p>"Phasellus tortor est, congue at mauris at, congue aliquam justo. Ut non feugiat ipsum. Aliquam blandit leo sed tristique mattis. Duis nec blandit ligula. Vivamus metus leo, gravida id sollicitudin eu, semper ut arcu. Fusce sit amet sapien sit amet tellus gravida dapibus non id dui. Mauris feugiat velit malesuada quam interdum maximus. Phasellus a dolor auctor, fringilla sem eu, volutpat nibh. Cras vulputate diam quis ornare bibendum. In quis turpis quis ante ultricies ultrices. Sed aliquam hendrerit lobortis."</p>
          </div>
        </>
      );
    case 'BP':
      return (
        <>
          <div className="txt-block-1">
            <h2>Business Permits</h2>
            <p>"Phasellus tortor est, congue at mauris at, congue aliquam justo. Ut non feugiat ipsum. Aliquam blandit leo sed tristique mattis. Duis nec blandit ligula. Vivamus metus leo, gravida id sollicitudin eu, semper ut arcu. Fusce sit amet sapien sit amet tellus gravida dapibus non id dui. Mauris feugiat velit malesuada quam interdum maximus. Phasellus a dolor auctor, fringilla sem eu, volutpat nibh. Cras vulputate diam quis ornare bibendum. In quis turpis quis ante ultricies ultrices. Sed aliquam hendrerit lobortis."</p>
          </div>
          <div className="txt-block-2">
             <p>"Phasellus tortor est, congue at mauris at, congue aliquam justo. Ut non feugiat ipsum. Aliquam blandit leo sed tristique mattis. Duis nec blandit ligula. Vivamus metus leo, gravida id sollicitudin eu, semper ut arcu. Fusce sit amet sapien sit amet tellus gravida dapibus non id dui. Mauris feugiat velit malesuada quam interdum maximus. Phasellus a dolor auctor, fringilla sem eu, volutpat nibh. Cras vulputate diam quis ornare bibendum. In quis turpis quis ante ultricies ultrices. Sed aliquam hendrerit lobortis."</p>
          </div>
        </>
      );
    case 'BT':
      return (
        <>
          <div className="txt-block-1">
            <h2>Business Transition</h2>
            <p>"Phasellus tortor est, congue at mauris at, congue aliquam justo. Ut non feugiat ipsum. Aliquam blandit leo sed tristique mattis. Duis nec blandit ligula. Vivamus metus leo, gravida id sollicitudin eu, semper ut arcu. Fusce sit amet sapien sit amet tellus gravida dapibus non id dui. Mauris feugiat velit malesuada quam interdum maximus. Phasellus a dolor auctor, fringilla sem eu, volutpat nibh. Cras vulputate diam quis ornare bibendum. In quis turpis quis ante ultricies ultrices. Sed aliquam hendrerit lobortis."</p>
          </div>
          <div className="txt-block-2">
             <p>"Phasellus tortor est, congue at mauris at, congue aliquam justo. Ut non feugiat ipsum. Aliquam blandit leo sed tristique mattis. Duis nec blandit ligula. Vivamus metus leo, gravida id sollicitudin eu, semper ut arcu. Fusce sit amet sapien sit amet tellus gravida dapibus non id dui. Mauris feugiat velit malesuada quam interdum maximus. Phasellus a dolor auctor, fringilla sem eu, volutpat nibh. Cras vulputate diam quis ornare bibendum. In quis turpis quis ante ultricies ultrices. Sed aliquam hendrerit lobortis."</p>
          </div>
        </>
      );

    default:
      return (
        <div className="txt-block-1">
          <p>Service content not found.</p>
        </div>
      );
  }
}