const SearchResults = ({data}) => {

    if(!data || !data.length) return null;

    const resultList = data.map (({id, name}) => {
        return (
            <li key={id}>
                <span>{name}</span>
            </li>
            );
});

    return(
        <div className="search-results">
            <ul>{resultList}</ul>
        </div>
    );
};

export default SearchResults;