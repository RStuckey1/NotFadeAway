
import { Link } from 'react-router-dom';
import  marantzSR9000G from "../assets/MarantzSR9000G/marantzSR9000G.png";


function CardMarantzSR() {
    return (

        <Link to="/MarantzSR">
            <div className="card2">
                <img className="card-image2" src={marantzSR9000G} alt="notfadeaway icon"></img>
                <h2 className='card-title2'>Marantz SR9000G</h2>
                <h2 className='card-title2'>Stereo Receiver</h2>
                <p className='card-text2'>Phono preamp repair</p>

            </div>
        </Link>

    );

}

export default CardMarantzSR;