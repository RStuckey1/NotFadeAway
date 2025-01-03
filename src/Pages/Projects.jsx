import * as React from 'react';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import pioneerCard from "../assets/pioneer/pioneerCard.png";
import marantzSR9000G from "../assets/MarantzSR9000G/marantzSR9000G.png";
import marantz2240Unit from "../assets/marantz2240/marantz2240.png";

export function Projects() {
  return (
    <div> 
        <h1>Here are Some Examples or Equipment that has been</h1>
        <h1>Repaired, With Care, By Brandon -Owner of Not Fade Away</h1>

    <ImageList sx={{ mx: 'auto', width: 1000, height: 1000 }} >
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          
          <img
            srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=400&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          
          <ImageListItemBar
            title={item.title}
            position = "top"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
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

export default Projects;