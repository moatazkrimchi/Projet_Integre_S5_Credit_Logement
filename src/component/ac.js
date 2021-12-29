import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../style/ac.css'

import image1 from '../image/cih.jpg';
import image2 from '../image/bp.png';
import image3 from '../image/bmci.jpg';

const CarouselContainer = () => {


  return (
	<Carousel variant="dark">
	<Carousel.Item>
	  <img
	  	
		className="cih"
		src={image1}
		alt="First slide"
		height = "1000px"
		width={"10px"}
	  />
	  <Carousel.Caption>
		<h5>CIH BANK</h5>
		<p>Banque marocaine filiale du groupe CDG, opérant particulièrement dans le secteur immobilier.</p>
	  </Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
	  <img
	  className="bp"
		
		src={image2}
		alt="Second slide"
		height = "1000px"
	  />
	  <Carousel.Caption>
		<h5>BANQUE POPULAIRE</h5>
		<p>La Banque Populaire innove et crée pour vous « Pocket Bank », une solution de mobile banking qui va rendre votre banque encore plus proche de vous.</p>
	  </Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
	  <img
			className="bmci"
		src={image3}
		alt="Third slide"
		height = "1000px"
		
	  />
	  <Carousel.Caption>
		<h5>BMCI BANK</h5>
		<p>Banque marocaine pour le commerce et l'industrie vous invite à découvrir ses produits bancaires pour les Particuliers,Professionnels,Entreprises.</p>
	  </Carousel.Caption>
	</Carousel.Item>
  </Carousel>
  )
}

export default CarouselContainer;