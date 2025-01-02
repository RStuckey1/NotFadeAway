import * as React from 'react';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import pioneerCard from "../assets/pioneer/pioneerCard.png";
import  marantzSR9000G from "../assets/MarantzSR9000G/marantzSR9000G.png";
import marantz2240Unit from "../assets/marantz2240/marantz2240.png";

export function List() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Projects</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          
          <ImageListItemBar
            title={item.title}
            
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: pioneerCard,
    title: <Link to="/Pioneer">Pioneer</Link>,
   
    rows: 3,
    cols: 3,
    featured: true,
  },
  {
    img: marantzSR9000G,
    title: <Link to="/MarantzSR">Marantz SR9000G</Link>,
   
  },
  {
    img: marantz2240Unit,
    title: <Link to="/Marantz2240">Marantz 2240</Link>,
   
  },
];

export default List;