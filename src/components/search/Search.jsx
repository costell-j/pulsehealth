import "./Search.css"

const Search = (e) => {
    return(
        <div className="search-container hide-small" id="nav-search"> 
                <search>
                    <form className="search-from">
                        <input type="search" className="search-input"
                        placeholder="Search topics" required />
                    </form>
                </search>
        </div>
    );
};

export default Search;