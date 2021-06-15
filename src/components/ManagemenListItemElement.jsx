import React from 'react';

const ManagementListItemElement = ({jewel, onRemoveItem, onEditItem}) => {
    return(
        <li>
            <div className="item roundedCorner">
                <img src={`jewels/${jewel.image}`} alt={jewel.image} width="90" height="70" />
                <div className="itemContainer">
                    <div className="descriptionPrice">
                        <span><strong>{jewel.description}</strong></span>
                        <span><strong>Material: </strong>{jewel.material}</span>
                    </div>
                    <span><strong>Precio: </strong>${jewel.price}</span>
                </div>
                <button 
                    className="btn btn-secondary"
                    onClick={(e) => onEditItem(e, jewel)}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button 
                    className="btn btn-danger removeItemButton alert"
                    onClick={(e) => onRemoveItem(e, jewel)}>
                <i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
        </li>
    )
}

export default ManagementListItemElement;