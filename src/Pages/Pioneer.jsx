import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';
import { Box } from '@mui/material';
import dial from '../assets/pioneer/dial.png';
import '../assets/pioneer/looking.png';
import '../assets/pioneer/openUnit.jpg';
import '../assets/pioneer/problem.png';
import '../assets/pioneer/unitFixes.png';
import '../assets/pioneer/wholeUnit.png';
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
        </Box><Box>
                <ImageList sx={{
                    width: 2000,
                    height: 1000,
                    overflow: 'scroll',
                    display: 'flex',
                }}>

                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=200&h=100&fit=crop&auto=format`}
                                src={`${item.img}?w=200&h=100&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy" />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box></>
    ); 
};

    const itemData = [
        {
            img: "../assets/pioneer/wholeUnit.png",
            title: 'Whole Unit',
        },
        {
            img: "../assets/pioneer/openUnit.jpg",
            title: 'open Unit',
        },
        {
            img:{dial},
            title: 'dial',
        },
        {
            img: "../assets/pioneer/looking.png",
            title: 'looking',
        },
        {
            img: "../assets/pioneer/problem.png",
            title: 'problem',
        },
        {
            img: "../assets/pioneer/unitFixes.png",
            title: 'unit Fixes',
        },
    ];
