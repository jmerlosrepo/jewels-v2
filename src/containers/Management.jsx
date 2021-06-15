import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ManagementItemsControlBar from '../components/ManagementItemsControlBar';
import SelectedItemsList from '../components/SelectedItemsList';
import ManagementListItemElement from '../components/ManagemenListItemElement';
import AddEditItemModal from '../components/AddEditItemModal';

class Management extends Component {
    render(){

        const {
            languageFields, 
            jewels,
            onSearchSubmit,
            onAddNewPiece,
            onCancelModal,
            onEditItem,
            onRemoveItem,
            onSaveModal
        } = this.props;

        return(
            <div className="container">
                <SearchBar 
                    language={languageFields.SEARCH} 
                    onSearchSubmit={onSearchSubmit}  />
                <div className="ManagementFormContainer">
                    <ManagementItemsControlBar jewelsCount={!jewels ? 0 : jewels.length} onAddNewPiece={onAddNewPiece} />
                    <SelectedItemsList>
                        { !jewels ? <p>No jewels loaded</p> : jewels.map( jewel => <ManagementListItemElement 
                                                                                                            key={jewel.id} 
                                                                                                            jewel={jewel} 
                                                                                                            onRemoveItem={onRemoveItem} 
                                                                                                            onEditItem={onEditItem} /> ) }
                    </SelectedItemsList>
                </div>
                <AddEditItemModal onCancelModal={onCancelModal} onSaveModal={onSaveModal} />
            </div>
        );
    }
}

export default Management;