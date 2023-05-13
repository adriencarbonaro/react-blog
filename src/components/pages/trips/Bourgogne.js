import React                  from 'react';
import ComponentScrollTop     from '../../ComponentScrollTop';
import { Component }          from 'react';
import CustomLink             from '../../CustomLink';
import { Story }              from "../../Story"
import { Title, Subtitle }    from '../../Titles';
import SVGLocation            from '../../SVGLocation';
import { PhotoGallery }       from '../../Photos';
import Consts                 from '../../../consts';

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Trips.css'

const PHOTOS = Consts.AWS_URL + "photos/trips/bourgogne/";

export default class Bourgogne extends ComponentScrollTop {
	render () {
		const class_name = "bourgogne";
		return (
			<>
				<h1 className={"banner-title " + class_name}>Bourgogne</h1>
				<SVGLocation className={class_name}/>
				<Title text="Une nuit sous les étoiles" />
				<Subtitle text="Escapade insolite" accent={class_name} />
				<Story
					text={<P1/>}
				/>
				<PhotoGallery list={[[
				  PHOTOS + "img-bourgogne-5.jpg",
				], [
				  PHOTOS + "img-bourgogne-2.jpg",
				  PHOTOS + "img-bourgogne-1.jpg",
				]]} />
				<Story
					text={<P2/>}
				/>
				<PhotoGallery list={[[
				  PHOTOS + "img-bourgogne-4.jpg",
				  PHOTOS + "img-bourgogne-3.jpg",
				]]} />
				<Story
					text={<P3/>}
				/>
				<PhotoGallery list={[[
				  PHOTOS + "img-bourgogne-6.jpg",
				]]} />
				<Story
					text={<P4/>}
				/>
			</>
		)
	}
}

class P1 extends Component {
	render () {
		return (
			<>
Situées près de Saint-Vérain en Bourgogne, les cabanes du domaine <CustomLink type="tree" link="https://www.lesgalants.fr/" name="Les Galants"/> offrent une véritable escapade insolite.
Retour en enfance assuré le temps d’une nuit : dormir dans une cabane perchée dans un arbre.
<br/><br/>
Le domaine propose plusieurs “Nids Perchés” :<br/>
Le Nid Penché (pour 2 adultes et 1 enfant)<br/>
Le Nid Sphère (pour 2 adultes et 2 enfants)<br/>
Le Nid sur l’Eau (pour 2 adultes et 4 enfants)<br/>
Le Nid sous les Étoiles (pour 2 adultes)<br/><br/>
Les cabanes sont assez éloignées les unes des autres ce qui permet de profiter du calme et de pouvoir se déconnecter totalement.
			</>
		)
	}
}

class P2 extends Component {
	render () {
		return (
			<>
Nous avons choisi de passer la nuit dans le <CustomLink type="tree" link="https://www.lesgalants.fr/cabane-insolite-nid-sous-les-etoiles/" name="Nid sous les Étoiles"/>. Construit tout de bois et de verre, c’est un véritable havre de paix au milieu de la nature.
<br/>En s’allongeant sur le lit, on se retrouve soudain plongé dans les feuillages de l’arbre qui nous soutient, une expérience incroyable à tester.
			</>
		)
	}
}

class P3 extends Component {
	render () {
		return (
			<>
La cabane est très bien aménagée et comporte également des toilettes sèches. Pour la douche, une salle de bain privative se trouve à 2 minutes à pied de la cabane avec tout le confort nécessaire.<br/>
Si l’on choisit de ne pas fermer les stores pour dormir au plus près de la nature, nous sommes réveillés tout en douceur au petit matin par les premiers rayons du soleil qui illuminent la cabane. Le petit déjeuner est déposé en haut des escaliers dans un charmant petit panier.<br/>
Au menu :
Café, thé, jus de pomme maison, pain et confitures maisons, madeleines.<br/>
Un régal !
			</>
		)
	}
}

class P4 extends Component {
	render () {
		return (
			<>
La région vaut également le détour. Nous avons déjeuné le midi au <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g6214983-d11857739-Reviews-Cafe_Du_Chasseur-Saint_Verain_Nievre_Bourgogne_Franche_Comte.html" name="Café du chasseur"/> situé à Saint-Vérain que nous recommandons les yeux fermés. C’est un petit café plein de vie au milieu du village. L’accueil est chaleureux et la carte proposée est petite ce qui est gage de très bonne qualité. Les produits sont excellents et les quantités sont généreuses. Un excellent rapport qualité/prix. Pour digérer nous avons été nous promener jusqu’aux ruines du château situées un peu plus haut.
<br/><br/>
Un week-end dont nous gardons de magnifiques souvenirs, nous avons déjà envie d’y retourner !
			</>
		)
	}
}
