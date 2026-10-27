import "./Faq.css"
import faqs from "./faqs.json"
import { useState } from "react";

const Faq = () => {
    const[current, setCurrent] = useState(0);

    const nextFAQ = () => {
        if(current < faqs.length - 1)
            setCurrent(current + 1);
        else
            setCurrent(0);
    };

    const prevFAQ = () => { 
        if(current > 0)
            setCurrent(current - 1);
        else
            setCurrent(faqs.length - 1);
    }
    return(
        <>
        <div id="faq" className="content">
            <span id="back-arrow" className="arrow" onClick={prevFAQ}>&larr;</span>
            <div id="faq-question-container">
                <h1 id="faq-title">{`FAQS (${faqs[current]._id} of ${faqs.length})`}</h1>
                <h2 id="faq-question">{faqs[current].question}</h2>
                <p id="faq-answer">{faqs[current].answer}</p>
            </div>
            <span id="front-arrow" className="arrow" onClick = {nextFAQ}>&rarr;</span>
        </div>
        </>
    )
};
export default Faq;
