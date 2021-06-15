import React from 'react';

const ManagementItemsControlBar = ({jewelsCount, onAddNewPiece}) => {
    return (
        <div className="managementControlBar">
            <ul>
                <li>
                    Items ({jewelsCount})
                </li>
                <li>
                    <a onClick={onAddNewPiece} href="#/">Agregar Nueva Pieza</a>
                </li>
            </ul>
        </div>
    )
}

export default ManagementItemsControlBar;