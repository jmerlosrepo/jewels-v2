import React, { Component } from 'react';

class AddEditItemModal extends Component{
    state = {
        jewelData: {
            image: '',
            description: '',
            material: '',
            price: ''
        }
    }

    componentDidMount = () => {
        const {jewel} = this.props;

        if (jewel){
            const jewelCopy = {...this.state.jewelData};
            jewelCopy.image = jewel.image;
            jewelCopy.description = jewel.description;
            jewelCopy.price = jewel.price;
            jewelCopy.material = jewel.material;

            this.setState({jewelData: jewelCopy});
        }
    }

    handleJewelDataSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveModal();
    }

    handleInputChange = (e) => {
        e.preventDefault();

        const jewelDataCopy = {...this.state.jewelData};

        if(e.target.files && e.target.files[0]){
            jewelDataCopy.image = URL.createObjectURL(e.target.files[0]);
        }

        if(e.target.name === "description"){
            jewelDataCopy.description = e.target.value;
        }

        if(e.target.name === "material"){
            jewelDataCopy.material = e.target.value;
        }

        if(e.target.name === "price"){
            jewelDataCopy.price = e.target.value;
        }

        this.setState({ jewelData: jewelDataCopy });
    }

    filterBySize = (file) => {
        //filter out images larger than 5MB
        return file.size <= 5242880;
      };

    render(){
        const { onCancelModal } = this.props;
        return(
            <div className="modalBackground">
                <div className="addEditItemModal cardTemplate roundedCorner">
                    <h1 className="cardHeader toolsBackgorund">Add/Edit Piece</h1>
                    <form className="modalForm" onSubmit={this.handleJewelDataSubmit}>
                        <div className="form-group groupSpacing">
                            <label name="image" htmlFor="">Imagen</label>
                            <input onChange={this.handleInputChange} type="file" />
                        </div>
                        <div className="form-group groupSpacing">
                            <label htmlFor="">Descripcion</label>
                            <input onChange={this.handleInputChange} name="description" type="text" className="form-control" />
                        </div>
                        <div className="form-group groupSpacing">
                            <label htmlFor="">Material</label>
                            <select onChange={this.handleInputChange} name="material">
                                <option value="oro">Oro</option>
                                <option value="oro">Plata</option>
                                <option value="oro">Acero</option>
                            </select>
                        </div>
                        <div className="form-group groupSpacing">
                            <label htmlFor="">Precio</label>
                            <input onChange={this.handleInputChange} name="price" type="number" className="form-control" />
                        </div>
                        <div className="formButtons">
                            <button type="submit" onClick={onCancelModal} className="btn btn-primary cancelButton">
                                Cancelar
                                <i className="fa fa-times buttonIcons" aria-hidden="true"></i>
                            </button>
                            <button type="submit" className="btn btn-primary buttonTheme">
                                Guardar
                                <i className="fa fa-check buttonIcons" aria-hidden="true"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddEditItemModal;
