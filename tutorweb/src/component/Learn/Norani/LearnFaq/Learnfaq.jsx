import React from 'react'
import Questions from '../../../FAQs/Questions';
function Learnfaq(props) {

  return (
    < div id="faq" className='bg-secondary  rounded mt-5' style={{border:"4px solid indigo"}}>
    <h1 className='text-center p-2 bg-primary text-white shadow'>FAQs</h1>
     <div className="accordion px-3 py-2" id="accordionExample">
                    {props.learnfaq.map((data, h) => (
                      <Questions
                        ques={data.ques}
                        ans={data.ans}
                        numb={data.numb}
                        id={data.id}
                        key={h}
                      />
                    ))}
                  </div>
    </div>
  )
}

export default Learnfaq
