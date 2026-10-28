import Select from "react-select";
import "./GuideFilter.css";

const GuideFilter = ({ options, selectedCategory, onCategoryChange }) => {
    return(
        <div className="guide-filter">
            <h2>Find your next guide</h2>
            <p>Choose a topic to narrow the guides below.</p>
            <label htmlFor="guide-category">Choose a topic</label>
            <Select
                inputId="guide-category"
                options={options}
                value={selectedCategory}
                onChange={onCategoryChange}
                isClearable
                placeholder="All topics"
            />
        </div>
    );
};

export default GuideFilter;