
import { Link } from 'react-router-dom';
import pioneerCard from "../assets/pioneer/pioneerCard.png";


function CardPioneer() {
    return (

        <Link to="/Pioneer">
            <div className="card2">
                <img className="card-image2" src={pioneerCard} alt="notfadeaway icon"></img>
                <h2 className='card-title2'>Pioneer SX-850 Receiver</h2>
                <p className='card-text2'>Phono preamp repair</p>

            </div>
        </Link>

    );

}

export default CardPioneer;