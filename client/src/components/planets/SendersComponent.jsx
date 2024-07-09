import './senders.component.css';

function SendersComponent({ nbShips, subNumber, addNumber, submit }) {
    return <div className="planet-container-senders">
        <div>
            <div className="container--augmentation">
                <div>
                    Nombres de vaisseaux à <br /> envoyer
                </div>
                <div>
                    <button className="ships" onClick={subNumber()}>-</button>
                    <input type="number" readOnly={true} value={nbShips} min={0}/>
                    <button className="ships" onClick={addNumber()}>+</button>
                </div>
            </div>
        </div>
        <div className="submit" onClick={submit()}>
            <div className="masque">
                <div className="pink"></div>
                <div className="purple"></div>
            </div>
            ENVOYER
        </div>
    </div>
}

export default SendersComponent;