import React, { Component } from 'react';
import SelectedItemsList from '../components/SelectedItemsList';
import SelectedItemElement from '../components/SelectedItemElement';

class Cart extends Component {
    state = {
        userInfo: {
            name: '',
            phone: '',
            email: '',
            message:''
        },
        dataFIlled: false
    }

    handleSubmitRequestForm = (e) => {
        const { onSubmitInfoRequest } = this.props;

        e.preventDefault();
        onSubmitInfoRequest(this.state.userInfo);
    }

    handleInputChange = (e) => {
        const userInfo = {...this.state.userInfo};
        if(e.target.name === 'name'){
            userInfo.name = e.target.value;
            this.setState({ userInfo });
        }
        
        if(e.target.name === 'phone'){
            userInfo.phone = e.target.value;
            this.setState({ userInfo });
        }

        if(e.target.name === 'email'){
            userInfo.email = e.target.value;
            this.setState({ userInfo });
        }

        if(e.target.name === 'message'){
            userInfo.message = e.target.value;
            this.setState({ userInfo });
        }

        if(userInfo.name !== '' && userInfo.phone !== '' && userInfo.email !== '' ){
            this.setState({dataFIlled: true});
        }
    }

    render(){
        const { selectedJewels, onRemoveItem } = this.props;
        const { userInfo, dataFIlled } = this.state;

        return(
            <div className="cartContainer">
                <div className="cardTemplate cart roundedCorner">
                    <h1 className="cardHeader toolsBackgorund">Items Selected ({selectedJewels.length})</h1>
                    <SelectedItemsList>
                        {selectedJewels.map( selectedJewel => <SelectedItemElement 
                                                                key={selectedJewel.id}
                                                                jewel={selectedJewel}
                                                                onRemoveItem={onRemoveItem} 
                                                            /> )}
                    </SelectedItemsList>
                    <form onSubmit={this.handleSubmitRequestForm}>
                        <div className="userInfo">
                            <h2 className="userInfoHeader toolsBackgorund">Informacion del solicitante</h2>
                            <div className="userInfoFormContainer">
                                <div className="form-group">
                                    <label htmlFor="">Nombre</label>
                                    <input onChange={this.handleInputChange} name="name" type="text" className="form-control" value={userInfo.name} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Telefono</label>
                                    <input onChange={this.handleInputChange} name="phone" type="tel" className="form-control" value={userInfo.phone} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input onChange={this.handleInputChange} name="email" type="email" className="form-control" value={userInfo.email} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Preguntas o comentarios</label>
                                    <textarea onChange={this.handleInputChange} name="message" className="form-control" cols="30" rows="10" value={userInfo.message}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="submitRequest">
                            <button type="submit" disabled={selectedJewels.length > 0 && dataFIlled ? '' : 'disabled'} className="btn btn-secondary">Enviar Solicitud <i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Cart;