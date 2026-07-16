import Shortcuts from '../../Global Components/Shortcuts.js'

function QueryBody() {
  return (
    <section className="query-body">
      <div className="query-container">
        <h1 className="topic">GENERAL</h1>
        < Qna qnaProp={qnaPlaceholderTXT[0]} />
        < Qna qnaProp={qnaPlaceholderTXT[1]} />
        < Qna qnaProp={qnaPlaceholderTXT[2]} />
        < Qna qnaProp={qnaPlaceholderTXT[3]} />
        < Qna qnaProp={qnaPlaceholderTXT[4]} />
        < Qna qnaProp={qnaPlaceholderTXT[5]} />
        < Qna qnaProp={qnaPlaceholderTXT[6]} />
        < Qna qnaProp={qnaPlaceholderTXT[7]} />
        < Qna qnaProp={qnaPlaceholderTXT[8]} />
        < Qna qnaProp={qnaPlaceholderTXT[9]} />
        < Qna qnaProp={qnaPlaceholderTXT[10]} />
        <h1 className="topic">HELP WITH BUREAU OF INTERNAL REVENUE</h1>
        < Qna qnaProp={qnaPlaceholderTXT[11]} />
        < Qna qnaProp={qnaPlaceholderTXT[12]} />
        < Qna qnaProp={qnaPlaceholderTXT[13]} />
        <h1 className="topic">HELP WITH SOCIAL SECURITY SERVICES </h1>
        < Qna qnaProp={qnaPlaceholderTXT[14]} />
        < Qna qnaProp={qnaPlaceholderTXT[15]} />
        <h1 className="topic">HELP WITH PHILHEALTH</h1>
        < Qna qnaProp={qnaPlaceholderTXT[16]} />
        < Qna qnaProp={qnaPlaceholderTXT[17]} />
        < Qna qnaProp={qnaPlaceholderTXT[18]} />
        <h1 className="topic">HELP WITH PAGIBIG</h1>
        < Qna qnaProp={qnaPlaceholderTXT[19]} />
        <h1 className="topic">COMPLIANCE WITH DEPARTMENT OF LABOR AND EMPLOYMENT</h1>
        < Qna qnaProp={qnaPlaceholderTXT[20]} />
        < Qna qnaProp={qnaPlaceholderTXT[21]} />



      </div>
      < Shortcuts />
    </section >
  );
}


export default QueryBody;

function Qna({qnaProp}){
  return(
    <article className="qna">
      <h3 className="qna-q">{qnaProp["question"]}</h3>
      <p className="qna-a">{qnaProp["answer"]}</p>
    </article>
  )
}

const qnaPlaceholderTXT=[
  {
    question: "How do I get started?",
    answer: "Simply send us your business details and the assistance you need. We will evaluate your requirements and guide you through the next steps."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Yes. We treat all client information and documents with strict confidentiality and professional care. As a startup, we are currently working on securing the NPC Privacy Seal."
  },
  {
    question: "Can you provide ongoing compliance support?",
    answer: "Yes. We offer ongoing assistance for tax filing, registrations, renewals, and government compliance requirements."
  },
  {
    question: "Why should I use your service?",
    answer: "We help professionals and micro and small business owners save time, avoid common compliance mistakes, and stay updated with government requirements so they can focus on growing their businesses."
  },
  {
    "question": "What services do you offer?",
    "answer": "We provide business registration, compliance, tax filing, permit renewals, and government agency assistance, primarily for BIR requirements. We also assist with SSS, PhilHealth, Pag-IBIG (HDMF), and DOLE compliance."
  },

  {
    "question": "Do you handle both new and existing businesses?",
    "answer": "Yes, Taxbayani is dedicated to assisting startups, sole proprietorships, partnerships, corporations, freelancers, professionals, and existing businesses that require compliance support."
  },
  {
    question: "How long does processing take?",
    answer: "Processing times vary depending on the agency and transaction. We will provide an estimated timeline upon assessment. Simple transactions usually take 1–3 days, while complex transactions may take several weeks."
  },
  {
    question: "What documents do I need to provide?",
    answer: "Requirements depend on the service requested. We will provide a checklist after our initial assessment."
  },

  {
    "question": "Do I need to visit government offices?",
    "answer": "In most cases, no. Many processes can be handled online or through our authorized representation, depending on the transaction."
  },

  {
    question: "Do you serve clients nationwide?",
    answer: "As of now, we are focused on providing our services within NCR and Bulacan."
  },
  {
    question: "How much are your service fees?",
    answer: "Fees vary depending on the service, complexity, and business type of each of out clients. Contact us for a customized quotation."
  },

  {
  "question": "What BIR-related services and support do you provide for businesses?",
  "answer": "We provide end-to-end support to keep your business compliant and in good standing. Our services include:\n\nRegistration & Updates: New business registration, securing your TIN/COR, and updating registration details such as business address, trade name, or line of business.\n\nTax Filing: Preparation and submission of your required tax returns, including Income Tax, VAT, Percentage Tax, and Withholding Taxes.\n\nCompliance & Issue Resolution: Auditing your account to resolve 'open cases,' addressing missing filings, and clearing existing compliance gaps.\n\nClearance & Closure: Handling the full process for tax clearances and formal business closure."
  },

  {
    question: "What are the BIR requirements for a new business?",
    answer: "Requirements vary depending on the business structure and registration type. We can guide you through the complete process and documentary requirements."
  },
  {
    question: "What happens if I miss a tax filing deadline?",
    answer: "Late filing may result in penalties, surcharges, and interest. We can help assess your obligations and facilitate compliance."
  },

  {
    question: "Can you register my business with SSS?",
    answer: "Yes. We assist employers in obtaining an Employer Number and complying with SSS registration requirements."
  },
  {
    question: "Can you help with SSS contribution concerns?",
    answer: "Yes. We can guide employers regarding registration, reporting, and compliance matters."
  },
  {
    question: "Do you assist with PhilHealth employer registration?",
    answer: "Yes. We help businesses comply with PhilHealth registration requirements."
  },
  {
    question: "Can you assist with PhilHealth account updates?",
    answer: "Yes. We can help facilitate employer account updates and related compliance concerns."
  },
  {
    question: "Do you assist with Pag-IBIG employer registration?",
    answer: "Yes. We help businesses register and comply with Pag-IBIG Fund requirements."
  },
  {
    question: "Can you help update Pag-IBIG employer records?",
    answer: "Yes. We assist with employer account updates and related transactions."
  },
  {
    question: "What DOLE-related services do you offer?",
    answer: "We assist with employer registration requirements, labor compliance reporting, and other online DOLE-related submissions."
  },
  {
    question: "Can you help prepare mandatory labor compliance documents?",
    answer: "Yes. We can assist in preparing and organizing required labor-related documentation. Requirement complexity varies depending on the nature of the business."
  },

];

