import React from 'react';

const ClearSearch = ({onClearSearch}) => {
    return (
        <div className="clearSearchBar">
            <a href="#/" onClick={(e) => onClearSearch(e)} className="clearSearch">Limpiar busqueda</a>
        </div>
    )
}

export default ClearSearch;