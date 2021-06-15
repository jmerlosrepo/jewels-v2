import React from 'react';

const SelectedItemsList = ({children}) => {
    return(
        <ul className="selectedItemsList">
             {children}
        </ul>
    );
}

export default SelectedItemsList;