import marantz2240Unit from "../assets/marantz2240/marantz2240.png";
import { Link } from 'react-router-dom';


function CardMarantz2240() {
    return (

        <Link to="/Marantz2240">
            <div className="card2">
                <img className="card-image2" src={marantz2240Unit} alt="notfadeaway icon"></img>
                <h2 className='card-title2'>Marantz 2240</h2>
                <p className='card-text2'>Phono preamp repair</p>

            </div>
        </Link>

    );

}

export default CardMarantz2240;