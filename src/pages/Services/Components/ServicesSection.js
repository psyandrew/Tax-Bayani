//import  from './Components/.js'

import React from 'react';

// 1. MAIN COMPONENT (Kept clean at the top)
export default function ServicesSection({ bg, pic, txtblock, secID, head }) {
  return (
    <section className={`service-section ${bg}`}>
      <div id={secID}>
      </div>
      <div className="services-container">
        <div className={`pic-container ${pic}`}>
          <h3>{head}</h3>
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
            <p>Stay on top of your tax obligations without getting overwhelmed by the repetitive cycle of BIR filings, deadlines, documentation, and compliance requirements. Our tax compliance services take the burden off your hands by helping manage your recurring tax obligations accurately and on time, while keeping your records organized and ready when they are needed. From regular tax returns and supporting documents to annual compliance requirements, we help simplify the day-to-day process and reduce the stress that comes with keeping up with BIR requirements. With a dependable compliance process in place, you can spend less time worrying about paperwork and more time focusing on your business.</p>
            
            <h2>Financial Reporting</h2>
            <p>Turn your financial records into clear, reliable information that supports better business decisions. We prepare formal financial statements that give you a structured view of your business's financial performance and position, providing the information needed for planning, evaluating performance, and making important financial decisions. We also prepare Alphalists and other annual compliance reports required for regulatory purposes, helping ensure your year-end obligations are properly addressed. When your business needs to demonstrate financial credibility, we can also assist with audit certifications and related financial documentation required for bank loans, major contracts, and other significant business transactions.</p>
          </div>
          <div className="txt-block-2">
          </div>
        </>
      );
    case 'FR':
      return (
        <>
        </>
      );
    case 'BP':
      return (
        <>
          <div className="txt-block-1">
            <h2>Business Permits</h2>
            <p>Legitimize your business and get it ready to operate ASAP. We help you navigate the registration process and take care of the paperwork required to establish your business properly. From securing your BIR Certificate of Registration (COR) and registering the appropriate books and invoices to completing the necessary permits and supporting documentation, we help make the process straightforward and manageable. We handle the legwork, coordinate the requirements, and keep the registration process moving so you can focus on getting your business up and running. Whether you're starting from scratch or formalizing an existing operation, we'll help you get the necessary registrations in place so you can bill clients, issue proper documentation, and operate with confidence.</p>
          </div>
        </>
      );
    case 'BT':
      return (
        <>
          <div className="txt-block-1">
            <h2>Business Updates</h2>
            <p>Make changes to your business without leaving a mess behind. Businesses move, change their details, expand, or eventually close—and each transition comes with its own set of documentation and compliance requirements. We help manage the process from start to finish, whether you're updating your registered business information, transferring operations, or permanently closing your business. We take care of the necessary filings, documentation, and coordination with the relevant government agencies while helping address outstanding compliance requirements along the way. For closures, we work toward properly settling your records and completing the required procedures so your business doesn't leave behind residual liabilities, open cases, or unfinished filings. The goal is a clean transition and properly updated records, giving you peace of mind that your old registration won't create problems down the road.</p>
          </div>
        </>
      );

    default:
      return (
      <>
      </>
      );
  }
}