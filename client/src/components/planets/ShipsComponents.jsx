import './ships.component.css'

function ShipsComponent({number_rocker}) {
    return <div className="container--ships">
        <div className="container--ships--title">
            <h4>Nombres de vaisseaux totaux</h4>
        </div>
        <div className="container--ships--informations">
            <div>
                <i className="fas fa-3x fa-rocket"></i>
            </div>
            <div>
                <p className="nbShips">{number_rocker}</p>
            </div>
        </div>
    </div>
}

export default ShipsComponent;
