
import { useState } from 'react';
import React from 'react';

import { ArrowDownCircleSolid } from 'iconoir-react';
import { ArrowUpCircleSolid } from 'iconoir-react';


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
          {GetSellContent(txtblock)}
        </div>
        
      </div>
    </section>
  );
}

function GetSellContent(txtblock) {
   const [toggleOne, setToggleOne] = useState(false);
   const [toggleTwo, setToggleTwo] = useState(false);

  switch (txtblock) {


    case 'TC':
      return (
        <>
          <div className="txt-block-1">
            <div  className="sell-txt">
              <h2>Tax Compliance</h2>            
              <p>Stay on top of your tax obligations without getting overwhelmed by the repetitive cycle of BIR filings, deadlines, documentation, and compliance requirements. Our tax compliance services take the burden off your hands by helping manage your recurring tax obligations accurately and on time, while keeping your records organized and ready when they are needed. From regular tax returns and supporting documents to annual compliance requirements, we help simplify the day-to-day process and reduce the stress that comes with keeping up with BIR requirements. With a dependable compliance process in place, you can spend less time worrying about paperwork and more time focusing on your business.</p>
            </div>
            {/* Directly use the boolean condition for the class */}
            <div className={toggleOne ? 'TC-toggle-container' : 'hide-container'}>
              <div>
                <h3>Income Tax</h3>
                <p>1700 – Annual Income Tax Return for Individuals Earning Purely Compensation Income</p>
                <p>1701 – Annual Income Tax Return for Individuals, Estates, and Trusts</p>
                <p>1701A – Annual Income Tax Return for Individuals Earning Income Purely from Business/Profession</p>
                <p>1701Q – Quarterly Income Tax Return for Individuals, Estates, and Trusts</p>
                <p>1701-MS – Annual Income Tax Return for Micro and Small Taxpayers</p>
                <p>1702Q – Quarterly Income Tax Return for Corporations and Partnerships</p>
                <p>1702-RT – Annual Income Tax Return for Corporations and Partnerships Subject Only to Regular Income Tax Rate</p>
                <p>1702-MX – Annual Income Tax Return for Corporations and Partnerships with Mixed Income</p>
                <p>1702-EX – Annual Income Tax Return for Corporations, Partnerships, and Exempt Taxpayers</p>
              </div>
              <div>
                <h3>Percentage Tax</h3>
                <p>2551M – Monthly Percentage Tax Return</p>
                <p>2551Q – Quarterly Percentage Tax Return</p>
              </div>
              <div>
                <h3>Value-Added Tax (VAT)</h3>
                <p>2550M – Monthly Value-Added Tax Return</p>
                <p>2550Q – Quarterly Value-Added Tax Return</p>
              </div>
              <div>
                <h3>Withholding Taxes</h3>
                <p>1601-C – Monthly Remittance Return of Income Taxes Withheld on Compensation</p>
                <p>1601-EQ – Quarterly Remittance Return of Creditable Income Taxes Withheld</p>
                <p>1602Q – Quarterly Remittance Return of Final Income Taxes Withheld on Interest</p>
                <p>1701A – Annual Income Tax Return for Individuals Earning Purely from Business/Profession</p>
              </div>
            </div>
            
            <div className="toggle-btn-container" onClick={() => setToggleOne(!toggleOne)}>
              {toggleOne ? ( <ArrowUpCircleSolid height={45} width={45} className='toggle-btn'/> ) : (
                <ArrowDownCircleSolid height={45} width={45} className='toggle-btn'/>
              )}

            </div>
          </div>

          <div className="txt-block-2">
            <div className="sell-txt">
              <h2>Financial Reporting</h2>
              <p>Turn your financial records into clear, reliable information that supports better business decisions. We prepare formal financial statements that give you a structured view of your business's financial performance and position, providing the information needed for planning, evaluating performance, and making important financial decisions. We also prepare Alphalists and other annual compliance reports required for regulatory purposes, helping ensure your year-end obligations are properly addressed. When your business needs to demonstrate financial credibility, we can also assist with audit certifications and related financial documentation required for bank loans, major contracts, and other significant business transactions.</p>
            </div>
            <div className={toggleTwo ? 'fr-toggle-container' : 'hide-container'}>
              <div>
                <h3>Financial Statements</h3>
                <p>Statement of Financial Position (Balance Sheet)</p>
                <p>Statement of Comprehensive Income (Income Statement)</p>
                <p>Statement of Changes in Equity</p>
                <p>Statement of Cash Flows</p>
                <p>Notes to Financial Statements</p>
              </div>
              <div>
                <h3>Regulatory & Compliance Reports</h3>
                <p>Alphalist of Employees / Payees (BIR Form 1604-C / 1604-E attachments)</p>
                <p>Annual Information Returns</p>
                <p>FS Compilation Reports for SEC or DTI requirements</p>
              </div>
              <div>
                <h3>Audit & Transaction Support</h3>
                <p>Audited Financial Statements (AFS) coordination and preparation support</p>
                <p>Bank Compliance & Loan Documentation Packages</p>
                <p>Financial Credibility Certifications for major contracts and bidding requirements</p>
              </div>              
            </div>
            
            <div className="toggle-btn-container" onClick={() => setToggleTwo(!toggleTwo)}>
              {toggleTwo ? ( 
                <ArrowUpCircleSolid height={45} width={45} className='toggle-btn'/> 
              ) : (
                <ArrowDownCircleSolid height={45} width={45} className='toggle-btn'/>
              )}
            </div>
          </div>
        </>
      );
    case 'FR':
      return <></>;
    case 'BP':
      return (
        <>
          <div className="txt-block-1">
            <div className="sell-txt">
              <h2>Business Permits</h2>
              <p>Legitimize your business and get it ready to operate ASAP. We help you navigate the registration process and take care of the paperwork required to establish your business properly. From securing your BIR Certificate of Registration (COR) and registering the appropriate books and invoices to completing the necessary permits and supporting documentation, we help make the process straightforward and manageable. We handle the legwork, coordinate the requirements, and keep the registration process moving so you can focus on getting your business up and running. Whether you're starting from scratch or formalizing an existing operation, we'll help you get the necessary registrations in place so you can bill clients, issue proper documentation, and operate with confidence.</p>
            </div>
            <div className={toggleOne ? 'bp-toggle-container' : 'hide-container'}>
              <div>
                <h3>Primary Entity Registration</h3>
                <p>Department of Trade and Industry – Business Name Registration for Sole Proprietorships</p>
                <p>Securities and Exchange Commission – Incorporation and Registration for Corporations and Partnerships</p>
                <p>Cooperative Development Authority – Registration for Cooperatives</p>
              </div>
              <div>
                <h3>Tax & Revenue Registration</h3>
                <p>BIR Form 2303 - Certificate of Registration</p>
                <p>Initial tax mapping</p>
                <p>Issuance of Tax Identification Number (TIN)</p>
                <p>Tax type enrollment</p>
                <p>Authority to Print (ATP) & Books of Accounts – Registration of manual, loose-leaf, or computerized books and layout approval for official receipts and invoices</p>
              </div>
              <div>
                <h3>Local Government & Agency Clearances</h3>
                <p>Barangay Business Clearance – Initial clearance from the local barangay hall where the business operates</p>
                <p>Mayor's Permit / LGU Business Permit – Local government operational licensing through the Business Permits and Licensing Office (BPLO)</p>
                <p>Locational & Zoning Clearance – LGU validation of business location compliance</p>
                <p>Sanitary Permit & Health Certificates – Local health department clearances</p>
                <p>Fire Safety Inspection Certificate (FSIC) – Bureau of Fire Protection (BFP) clearance</p>
              </div>
              <div>
                <h3>Employer & Statutory Registrations</h3>
                <p>Social Security System (SSS) – Employer and employee statutory account registration</p>
                <p>Home Development Mutual Fund (Pag-IBIG) – Employer and employee fund registration</p>
                <p>Philippine Health Insurance Corporation (PhilHealth) – Employer and employee health insurance registration</p>
              </div>
            </div>
            
            <div className="toggle-btn-container" onClick={() => setToggleOne(!toggleOne)}>
              {toggleOne ? ( 
                <ArrowUpCircleSolid height={45} width={45} className='toggle-btn'/> 
              ) : (
                <ArrowDownCircleSolid height={45} width={45} className='toggle-btn'/>
              )}
            </div>
          </div>
        </>
      );
    case 'BT':
      return (
        <>
          <div className="txt-block-1">
            <div className="sell-txt">
              <h2>Business Updates</h2>
              <p>Make changes to your business without leaving a mess behind. Businesses move, change their details, expand, or eventually close—and each transition comes with its own set of documentation and compliance requirements. We help manage the process from start to finish, whether you're updating your registered business information, transferring operations, or permanently closing your business. We take care of the necessary filings, documentation, and coordination with the relevant government agencies while helping address outstanding compliance requirements along the way. For closures, we work toward properly settling your records and completing the required procedures so your business doesn't leave behind residual liabilities, open cases, or unfinished filings. The goal is a clean transition and properly updated records, giving you peace of mind that your old registration won't create problems down the road.</p>
            </div>
            
            <div className={toggleOne ? 'bt-toggle-container' : 'hide-container'}>
              <div>
                <h3>SEC & DTI Information Updates</h3>
                <p>DTI Certificate Modification</p>
                <p>Amendment of Articles of Incorporation / By-Laws (SEC)</p>
              </div>
              <div>
                <h3>BIR Registration Amendments (Form 1905)</h3>
                <p>Change of Registered Address</p>
                <p>Change in Tax Types / Line of Business</p>
                <p>Change of Business Name / Trade Name</p>
                <p>Cancellation & Replacement of Authority to Print (ATP)</p>
              </div>
              <div>
                <h3>Local Government & Regulatory Updates</h3>
                <p>LGU Business Permit Amendments</p>
                <p>Barangay Clearance Re-issuance</p>
              </div>
              <div>
                <h3>Business Closure & Retirement</h3>
                <p>BIR Tax Clearance & Account Closure</p>
                <p>SEC / DTI Dissolution and Cancellation</p>
                <p>LGU Business Retirement</p>
                <p>Agency Clearance Finalizations</p>
              </div>
            </div>
            
            <div className="toggle-btn-container" onClick={() => setToggleOne(!toggleOne)}>
              {toggleOne ? ( 
                <ArrowUpCircleSolid height={45} width={45} className='toggle-btn'/> 
              ) : (
                <ArrowDownCircleSolid height={45} width={45} className='toggle-btn'/>
              )}
            </div>
          </div>
        </>
      );

    default:
      return <></>;
  }
}