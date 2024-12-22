import React from 'react';
import { Box } from '@mui/material';
import dial from '../assets/pioneer/dial.png';
import looking from '../assets/pioneer/looking.png';
import openUnit from '../assets/pioneer/openUnit.jpg';
import problem from '../assets/pioneer/problem.png';
import unitFixes from'../assets/pioneer/unitFixes.png';
import wholeUnit from '../assets/pioneer/wholeUnit.png';
import './Projects.css';







export default function Pioneer() {
    


    return (
        
            <><Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
        }}>
            <div>
                <h2>Pioneer SX-850 Receiver</h2>
                <p>This receiver is a vintage 1970s Stereo Receiver by the well-known Japanese company Pionner.</p>
                <p>The right channel of the phono section was not working. After inspection, the issue was a dirty switch.</p>
                <p>At this point, most repair shops would have just cleaned the switch and sent it back to the customer. However, we decided to go the extra mile and clean the entire unit.</p>
                <p>We found the boards needed to be recapped, and knowing how leaky capicitors of this age can impact the sound quality, we gave the repair option to the customer.</p>
                <p>They were happy with our thorough evaluation and communicaion. So after we had the go ahead, we recapped the boards and cleaned the unit with deoxit.</p>
                <p>A few hours later it is now back together and sounding great.</p>
                <p>Here are some photos of the process:</p>


            </div>
        </Box>
        <Box>
            <ul className="RepairList">
                <li><img className="reList" src={wholeUnit} alt="wholeUnit"></img> </li>
                <li><img className="reList" src={looking} alt="wholeUnit"></img> </li>
                <li><img className="reList" src={problem} alt="wholeUnit"></img> </li>
                <li><img className="reList" src={dial} alt="wholeUnit"></img> </li>
                <li><img className="reList" src={openUnit} alt="wholeUnit"></img> </li>
                <li><img className="reList" src={unitFixes} alt="wholeUnit"></img> </li>
            


            </ul>

        </Box>
</>

);
};