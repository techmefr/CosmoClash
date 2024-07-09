import './card.component.css';

function CardComponent(
    {
        energy,
        material,
        money,
        position_id,
        coordX,
        coordY,
        type
    }
) {
    return (
        <div className="card--planet--container">
            <div className="card--planet--icons">
                <i className="fa-solid fa-globe"></i>
            </div>
            <div className="card--planet--informations">
                <div className="container-tit">
                    <h4>{type}</h4>
                </div>
                <div className="container-inf">
                    <div><span>E{energy}</span></div>
                    <div><span>M{money}</span></div>
                    <div><span>F{material}</span></div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;
