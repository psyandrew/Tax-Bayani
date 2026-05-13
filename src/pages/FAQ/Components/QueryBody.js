import Shortcuts from '../../Global Components/Shortcuts.js'

function QueryBody() {
  return (
    <section className="query-body">
      <div className="query-container">
        < Qna qnaProp={qnaPlaceholderTXT[0]} />
        < Qna qnaProp={qnaPlaceholderTXT[1]} />
        < Qna qnaProp={qnaPlaceholderTXT[1]} />
        < Qna qnaProp={qnaPlaceholderTXT[0]} />
        < Qna qnaProp={qnaPlaceholderTXT[0]} />
        < Qna qnaProp={qnaPlaceholderTXT[0]} />
        < Qna qnaProp={qnaPlaceholderTXT[0]} />
        < Qna qnaProp={qnaPlaceholderTXT[0]} />
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
  "question": "Lorem ipsum dolor sit amet?",
  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
},

{
  "question": "Lorem ipsum dolor sit amet  consectetur adipiscing elit? consectetur adipiscing elit consectetur adipiscing elit",
  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
}
]