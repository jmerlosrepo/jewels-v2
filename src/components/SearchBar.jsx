import React, { Component } from 'react';

class SearchBar extends Component {

    state={
        searchText: ''
    }

    handleChange = (e) => {
        this.setState({ searchText: e.target.value });
    }

    render(){
        const {language, onSearchSubmit} = this.props;

        return(
            <div className="searchBar">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={this.handleChange} value={this.state.searchText} />
                    <div className="input-group-append">
                        <button onClick={(e) => onSearchSubmit(e, this.state.searchText)} className="btn btn-light buttonTheme">{language.searchButton}</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SearchBar;