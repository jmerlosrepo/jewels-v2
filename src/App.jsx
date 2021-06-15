import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './containers/Home';
import Catalogue from "./containers/Catalogue";
import Cart from './containers/Cart';
import Contact from './containers/Contact';
import Login from './containers/Login';
import Management from './containers/Management';
import { getJewels, postSelectedJewels } from './services/data-service';
import { validateKey } from './services/security-service';
import { languageConsts } from './constants/languages';
import './App.css';

class App extends Component {

  state={
    language: 'ENG',
    languageFields: languageConsts,
    jewels: null,
    clearSearch:false,
    selectedJewels: []
  }

  //Component Life Methods
  componentDidMount = () => {
    getJewels()
    .then(jewels => this.setState(
      { 
        jewels: jewels.jewels, 
      }))
      .catch(err => console.log(err));
  }

  //Search Methods
  
  handleSearchSubmit = (e, searchTextValue) => {
    e.preventDefault();
    const {
      clearSearch
    } = this.state;

    getJewels()
    .then(jewels => {
      let clearSearchCopy = clearSearch;

      this.setState({ 
        jewels: jewels.jewels 
      });

      const filteredJewels = jewels.jewels.filter(jewel => jewel.description.toLowerCase().includes(searchTextValue.toLowerCase()) || searchTextValue.toLowerCase().includes(jewel.material.toLowerCase()))
      searchTextValue === '' ? clearSearchCopy = false : clearSearchCopy = true;
      
      this.setState({
        clearSearch: clearSearchCopy, 
        jewels: filteredJewels, 
        searchText: ''
      });
    })
    .catch(err => console.log(err));
  }

  handleClearSearch = (e) => {
    e.preventDefault();
    getJewels()
    .then(jewels => {
      this.setState({ jewels: jewels.jewels, searchText: '' });
    })
    .catch(err => console.log(err));
  }

  //Catalogue Methods
  handleCardSelected = (e, jewel) => {
    e.preventDefault();

    const {
      jewels,
      selectedJewels
    } = this.state;

    const jewelsCopy = [...jewels];
    jewelsCopy[jewelsCopy.indexOf(jewel)].selected = true;
    const selectedJewelsCopy = [...selectedJewels];
    selectedJewelsCopy.push(jewel);
    this.setState({
      jewels: jewelsCopy, 
      searchText: '',
      selectedJewels: selectedJewelsCopy 
    });
  }

  //Language Methods
  handleLanguageChange = (e, language) => {
    e.preventDefault();
    language === 'ENG' ? language = 'ESP' : language = "ENG";
    this.setState({language});
  }

  //Cart Methods
  handleSubmitInfoRequest = (infoRequestObj) => {
    postSelectedJewels(this.state.selectedJewels, infoRequestObj);
  }

  handleRemoveItem = (e, jewel) => {
    e.preventDefault();

    const {
      jewels,
      selectedJewels
    } = this.state;

    const selectedJewelsCopy = selectedJewels.filter(selectedJewel => selectedJewel.id !== jewel.id);
    const jewelsCopy = [...jewels];
    jewelsCopy[jewelsCopy.indexOf(jewel)].selected = false;

    this.setState({selectedJewels: selectedJewelsCopy, jewels: jewelsCopy});
  }

  //Login Methods
  handleSubmitKey = (e, key) => {
    validateKey(key);
  }

  //Management Methods
  handleManagementSearchTextSubmit = (searchText) => {

  }

  handleAddNewPiece = () => {

  }

  handleEditManagementItem = () => {

  }

  handleRemoveManagementItem = () => {
    
  }

  handleCancelModal = (e) => {
    e.preventDefault();
  }

  handleSaveModal = () => {

  }

  render(){
    const { 
      clearSearch, 
      jewels, 
      language, 
      languageFields,
      selectedJewels 
    } = this.state;
    
    return (
      <div className="container">
        <Router>
          <NavBar 
            language={language}
            languageFields={language === 'ESP' 
                  ? languageFields.ENG.NAVBAR 
                  : languageFields.ESP.NAVBAR }   
            onCartClick={this.handleCartClicked} 
            onLanguageChange={this.handleLanguageChange} 
            selectedJewelsCount={selectedJewels.length} 
          />
          
          <Switch>
            <Route 
              exact path="/" 
              component={
                () => <Home />} 
            />
            <Route path="/catalogue" component={() => <Catalogue 
              clearSearch={clearSearch} 
              jewels={jewels} 
              languageFields={language === 'ESP' 
              ? languageFields.ENG.HOME 
              : languageFields.ESP.HOME }
              onClearSearch={this.handleClearSearch}
              onSearchSubmit={this.handleSearchSubmit} 
              onSelectJewel={this.handleCardSelected}
            />} />
            <Route path="/cart" component={() => <Cart 
                                                  selectedJewels={selectedJewels} 
                                                  onRemoveItem={this.handleRemoveItem}
                                                  onSubmitInfoRequest={this.handleSubmitInfoRequest} 
                                                /> }
            />
            <Route path="/contact" component={() => <Contact />} />
            <Route path="/management-login" component={() => <Login onSubmitKey={this.handleSubmitKey} />} />
            <Route path="/management-forms" component={() => <Management
                                                              jewels={jewels}
                                                              languageFields={language === 'ESP' 
                                                              ? languageFields.ENG.HOME 
                                                              : languageFields.ESP.HOME } 
                                                              onSearchSubmit={this.handleManagementSearchTextSubmit} 
                                                              onAddNewPiece={this.handleAddNewPiece}
                                                              onCancelModal={this.handleCancelModal}
                                                              onEditItem={this.handleEditManagementItem}
                                                              onRemoveItem={this.handleRemoveManagementItem}
                                                              onSaveModal={this.handleSaveModal}
            />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
