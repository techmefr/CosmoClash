import './senders.component.css';

function SendersComponent({ nbShips, subNumber, addNumber, submit }) {
    return <div className="planet-container-senders">
        <div>
            <div className="container--augmentation">
                <div>
                    Nombres de vaisseaux à <br /> envoyer
                </div>
                <div>
                    <button className="ships" onClick={subNumber}>-</button>
                    <input type="number" value={nbShips} min={0}/>
                    <button className="ships" onClick={addNumber}>+</button>
                </div>
            </div>
        </div>
        <button className="submit" onClick={submit}>Envoyer</button>
    </div>
}

export default SendersComponent;