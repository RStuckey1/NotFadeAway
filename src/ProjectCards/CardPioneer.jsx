import "../assets/pioneer/wholeUnit.png";
import { Link } from 'react-router-dom';


function CardPioneer(){
   return(
    <div className="card2">
    <Link to="/Pioneer" target="_blank">
            <img className="card-image2" src={notfadeaway} alt="notfadeaway icon"></img>
            <h2 className='card-title2'>Pioneer SX-850 Receiver</h2>
            <p className='card-text2'>Phono preamp repair</p>
        
    </Link>
    </div>
    );

}

    export default CardPioneer;