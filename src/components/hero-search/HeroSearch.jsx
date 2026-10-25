import "../search/Search.css";
import "./HeroSearch.css";
import searchIcon from "../images/icon-search.png";

const HeroSearch = (e) => {
    return(
        <div className="search-container">
            <search>
                <form className="search-form">
                    <img src={searchIcon} id="search-icon" />
                    <input type="search" className="search-input"
                        placeholder="Search medications, conditions, guides..."
                        required />
                    <button type="submit" className="search-btn">Explore Topics</button>
                </form>
            </search>
        </div>
    );
};

export default HeroSearch;