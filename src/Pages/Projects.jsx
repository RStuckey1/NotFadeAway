import * as React from 'react';
import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

import './projects.css';
import { Box } from '@mui/material';
import CardPioneer from '../ProjectCards/CardPioneer';
import CardMarantz2240 from '../ProjectCards/CardMarantz2240';
import CardMarantzSR from '../ProjectCards/CardMarantzSR';
   




function Portfolio() {
    return (
        <>
            <Box sx={{ 
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                }}>
            <div>
                <h2>Portfolio</h2>
                <p>Here are some of the projects I have worked on:</p>

            </div>
            <ImageList sx={{ 
                width:1000, 
                height: 1000 
                }} cols={3} rowHeight={164}
                >

                <CardPioneer />
                <CardMarantz2240 />
                <CardMarantzSR />
          
                   
        </ImageList>
        </Box>
        </>
    );
}

export default Portfolio;