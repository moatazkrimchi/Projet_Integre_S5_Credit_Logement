import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import p1 from '../image/1.jpg'
import p2 from '../image/2.jpg'
import p3 from '../image/3.jpg'

import '../style/step.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import Modal from 'react-awesome-modal';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import image1 from '../image/cih.jpg';
import image2 from '../image/bp.png';
import image3 from '../image/bmci.jpg';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  marginLeft: '39.5%',
  marginTop: '100px',
  marginBottom: '30px',
  height: '50px',
  width: '20%',
  '&:hover': {
    backgroundColor: purple[700],

  },
}));


const images = [
  {
   
    url: 'https://www.cihbank.ma/100ansdhistoire/img/logo2014-big.jpg',
    title: 'CIH',
    width: '33%',
  },
  {
    url: 'https://i.le360.ma/fr/sites/default/files/styles/image_la_une_on_home_page/public/assets/images/2020/01/logo.jpg',
    title: 'Banque Populaire',
    width: '33%',
  },
  {
    url: 'https://www.bmci.ma/wp-content/blogs.dir/sites/2/2018/03/Enquette_bouton_2.png',
    title: 'BMCI',
    width: '33%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: 2,
  left: 'calc(20% - 9px)',
  transition: theme.transitions.create('opacity'),
}));



export default function ActionAreaCard() {
  const [showmdal, setshowmdal] = useState(false)

  function affichermodal() {
      setshowmdal(true)
 
        }
  function closemodal() {
          setshowmdal(false)
          
        }

  return (

    <div >
      
      <br/>
      <br/>
      <br/>
      <br/>
      <span className='span1'> COMMENT <span className="span2">CA MARCHE</span> ? </span>
      
      
      
    <Card  sx={{ maxWidth: 345, background: 'black', marginTop: '10%', marginLeft:'15%' }} >
      <CardActionArea  >
        <CardMedia
          component="img"
          height="140"
          image={p1}
          alt="green iguana"
          

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            1
          </Typography>
          <Typography variant="body2" color="white">
          Vous simulez votre projet de financement en tout anonymat,en moins d’1 minute.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     <Card sx={{ maxWidth: 345, background: 'black', marginTop: '-14%', marginLeft:'43%' }} >
     <CardActionArea  >
       <CardMedia
         component="img"
         height="140"
         image={p2}
         alt="green iguana"
         

       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div" color="white">
           2
         </Typography>
         <Typography variant="body2" color="white">
         Nos algorithmes analysent des milliers de possibilités et vous affichent les meilleures offres marché (personnalisées).
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>

   <Card sx={{ maxWidth: 345, background: 'black', marginTop: '-14%', marginLeft:'68%' }} >
     <CardActionArea  >
       <CardMedia
         component="img"
         height="140"
         image={p3}
         alt="green iguana"
         

       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div" color="white">
           3
         </Typography>
         <Typography variant="body2" color="white">
         Optionnel: Confiez-nous la gestion du déblocage de votre crédit.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   <br/>
   <br/>
   <br/>
   <br/>
  

   <Stack spacing={2} direction="row">
      
      
      <ColorButton variant="contained" onClick={()=>{
affichermodal()


}}>Prédiction crédit de logement </ColorButton>



      
    </Stack>
    <br/>
 <Modal className="modal" visible={showmdal}  width="1600" height="500"   onClickAway={() =>closemodal()}>
   
 <span className='span1'> Choisisez votre <span className="span2">BANK</span>  </span>
   
   
    <ul class="cards">
  <li className='card1'>
    <a href="/predictCIH" class="card">
      <img src={image1} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={image1} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">CIH BANK</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li className='card1'>
    <a href="/predictBP" class="card">
      <img src={image2} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src={image2} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">BANQUE POPULAIRE</h3>
            <span class="card__status">3 hours ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li className='card1'>
    <a href="/predict" class="card">
      <img src={image3} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={image3} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">BMCI</h3>
            <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
    
</ul>

</Modal>




 
   </div>
  );
}