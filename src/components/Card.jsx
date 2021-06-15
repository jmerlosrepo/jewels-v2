import React from 'react';

const Card = ({data, language, onSelectJewel}) => {
    return(
        <div className="card card-spacing toolsBackgorund" style={{width: "18rem"}}>
          <img className="card-img-top card-image" src={'/jewels/' + data.image} alt={data.image} />
          <div className="card-body">
            <h5 className="card-title">{language.description + data.description}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{language.material + data.material}</h6>
            <p className="card-text">{language.priceLabel} ${data.price}</p>
            <button className={`btn btn-secondary buttonTheme ${ data.selected ? 'hidden' : '' }`} onClick={(e) => onSelectJewel(e, data)}>{language.requestInfoButton}</button>
          </div>
        </div>
    )
}

export default Card;