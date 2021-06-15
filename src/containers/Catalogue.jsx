import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ClearSearch from '../components/ClearSearch';
import CardsContainer from '../components/CardsContainer';
import Card from '../components/Card';

class Catalogue extends Component {

    render(){
        const {
            clearSearch, 
            jewels, 
            languageFields,
            onClearSearch,
            onSearchSubmit,
            onSelectJewel 
        } = this.props;

        return(
            <>
                <SearchBar 
                    language={languageFields.SEARCH}
                    onSearchSubmit={onSearchSubmit} 
                />
                {!clearSearch || (<ClearSearch onClearSearch={onClearSearch} />) }
                <CardsContainer>
                {!jewels ? <p>No jewels loaded</p> : jewels.map(jewel => <Card 
                                                    data={jewel} 
                                                    key={jewel.id}
                                                    language={languageFields.CARD}
                                                    onSelectJewel={onSelectJewel}
                                                    />)}
                </CardsContainer>
            </>
        )
    }
}

export default Catalogue;