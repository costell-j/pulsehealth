const FaqItem = ({ question, answer }) => (
    <div className="faq-item">
        <h3>{question}</h3>
        <p>{answer}</p>
    </div>
);
export default FaqItem;
