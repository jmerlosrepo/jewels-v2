import React from 'react';

const JewelForm = () => {
    return(
        <form className="jewelsForm">
            <div className="form-group">
                <label>Descripcion</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Material</label>
                <select>
                    <option value="oro">Oro</option>
                    <option value="plata">Plata</option>
                </select>
            </div>
            <div className="form-group">
                <label>Precio</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Imagen</label>
                <input type="file" />
            </div>
        </form>
    )
}

export default JewelForm;