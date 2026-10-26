

const Checklist = ({ miniHead, title, items, ordered = false, color = "" }) => {
    const List = ordered ? "ol" : "ul";
    return (
        <article className={`guide checklist ${color}`}>
            {miniHead && <p className="mini-head">{miniHead}</p>}
            <h3>{title}</h3>
            <List>
                {items.map((item) => <li key={item._id}>{item.text}</li>)}
            </List>
        </article>
    );
};
export default Checklist;
