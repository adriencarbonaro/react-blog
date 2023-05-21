import React                  from 'react';
import ComponentScrollTop     from '../../ComponentScrollTop';
import { Story }              from "../../Story"
import { Subtitle, Title }    from "../../Titles"
import { BannerTitle }        from "../../BannerTitle"
import { Component }          from 'react';
import {
	PhotoGallery,
}                             from '../../Photos';
import {
	AirbnbLink,
	MapsLink
}                             from '../../CustomLink';
import SVGLocation            from '../../SVGLocation'
import Consts                 from '../../../consts';
import { PhoneVideo }         from '../../PhoneVideo';

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Trips.css'
import '../../../css/PhoneVideo.css'

const PHOTOS = Consts.AWS_URL + "photos/trips/auvergne/";

export default class Auvergne extends ComponentScrollTop {
	render () {
		const class_name = "auvergne";
		return (
			<>
				<BannerTitle title="Auvergne" class={class_name} />
				<div class="trip-content">
				<SVGLocation className={class_name}/>
				<Title text="Idées de promenades en Auvergne" />
				<PhoneVideo color_spot="#e8f4ee" color_text="#68bc92" src="https://nid-de-poule.s3.eu-west-3.amazonaws.com/videos/phone/auvergne.mp4" />
				<Story text={<P1/>} />
				<Story text={<P2/>} />
				<Story text={<P3/>} />
				<Subtitle text="Le Puy Pariou" accent={class_name} />
				<Story text={<P4/>} />
				<PhotoGallery list={[[
					PHOTOS + "auvergne_002.jpg",
					PHOTOS + "auvergne_009.jpg",
				], [
					PHOTOS + "auvergne_071.jpg",
				], [
					PHOTOS + "auvergne_013.jpg",
					PHOTOS + "auvergne_015.jpg",
				], [
					PHOTOS + "auvergne_016.jpg",
					PHOTOS + "auvergne_017.jpg",
					PHOTOS + "auvergne_018.jpg",
				], [
					PHOTOS + "auvergne_020.jpg",
					PHOTOS + "auvergne_019.jpg",
					PHOTOS + "auvergne_022.jpg",
				], [
					PHOTOS + "auvergne_023.jpg",
				]]}/>
				<Subtitle text="Le Puy de la Tache et balade sur les crêtes" accent={class_name} />
				<Story text={<P5/>} />
				<Story text={<P6/>} />
				<PhotoGallery list={[[
					PHOTOS + "auvergne_026.jpg",
				], [
					PHOTOS + "auvergne_027.jpg",
					PHOTOS + "auvergne_030.jpg",
				], [
					PHOTOS + "auvergne_031.jpg",
				], [
					PHOTOS + "auvergne_032.jpg",
					PHOTOS + "auvergne_038.jpg",
					PHOTOS + "auvergne_035.jpg",
				], [
					PHOTOS + "auvergne_044.jpg",
					PHOTOS + "auvergne_045.jpg",
				]]}/>
				<Subtitle text="La Vallée des Saints" accent={class_name} />
				<Story text={<P7/>} />
				<PhotoGallery list={[[
					PHOTOS + "auvergne_058.jpg",
					PHOTOS + "auvergne_059.jpg",
				], [
					PHOTOS + "auvergne_054.jpg",
					PHOTOS + "auvergne_060.jpg",
				]]}/>
				<Subtitle text="Mont-Dore et la Grande Cascade" accent={class_name} />
				<Story text={<P8/>} />
				<PhotoGallery list={[[
					PHOTOS + "auvergne_061.jpg",
					PHOTOS + "auvergne_062.jpg",
				], [
					PHOTOS + "auvergne_066.jpg",
					PHOTOS + "auvergne_063.jpg",
					PHOTOS + "auvergne_070.jpg",
				]]}/>
				<Subtitle text="Les Roches Tuilière et Sanadoire" accent={class_name} />
				<Story text={<P9/>} />
				<PhotoGallery list={[[
					PHOTOS + "auvergne_047.jpg",
				], [
					PHOTOS + "auvergne_048.jpg",
					PHOTOS + "auvergne_049.jpg",
				]]}/>
				</div>
			</>
		)
	}
}

class P1 extends Component {
	render () {
		return (
			<>
L'Auvergne est une région parfaite pour les amoureux de la nature et de randonnées. Volcans, cascades, forêts et bien plus encore : elle a tout pour vous séduire. C'est une région assez préservée du tourisme de masse ce qui rend la parenthèse apaisante et ressourçante.
			</>
		)
	}
}

class P2 extends Component {
	render () {
		return (
			<>
Pour notre séjour, nous avons choisi de poser nos valises dans cet <AirbnbLink link="https://www.airbnb.fr/rooms/663517128115205797?source_impression_id=p3_1683974857_tOMULT0Cm%2FzCOqv%2B" name="AirBnb"/>, situé à Clermont-Ferrand, dans la périphérie du centre-ville. Il était idéal pour visiter les alentours. Nous sommes restés 3 jours sur place et nous recherchions surtout un séjour au vert donc nous n'avons pas eu l'occasion de visiter la ville mais nous y retournerons !
			</>
		)
	}
}

class P3 extends Component {
	render () {
		return (
			<>
Pour toutes les balades que nous avons faites, un itinéraire est disponible sur l'application Visorando (gratuite). Elles sont néanmoins très bien fléchées et un parking gratuit est toujours disponible au départ du tracé si on suit l'application.
			</>
		)
	}
}

class P4 extends Component {
	render () {
		return (
			<>
Le Puy Pariou, situé à 30 minutes de Clermont-Ferrand, est le célèbre volcan qui apparaît sur les bouteilles d'eau Volvic. La <MapsLink name="promenade" link="https://www.visorando.com/randonnee-le-puy-pariou-depuis-le-parking-des-goul/"/> qui monte vers le cratère est facilement accessible et permet d'avoir un joli point de vue sur le Puy de Dôme (pas de chance pour nous les nuages sont descendus lorsque nous y étions). Il faut compter environ 2 heures pour faire la boucle et le mieux est de la faire pour le coucher du soleil, la lumière y est encore plus belle.
			</>
		)
	}
}

class P5 extends Component {
	render () {
		return (
			<>
Dans le massif du Sancy, le col de la Croix Morand qui culmine à 1401 mètres d'altitude marque le point de départ d'une belle <MapsLink name="randonnée" link="https://www.visorando.com/randonnee-les-cretes-au-sud-du-col-de-la-croix-mor/"/> sur les crêtes. Au départ du parking, on atteint le Puy de la Tache en 30 minutes environ avec une vue à couper le souffle. Il est possible de s'arrêter en haut de Puy et de redescendre ou alors de poursuivre la balade sur les crêtes pour atteindre le Puy de Monne, le Puy de Barbier, puis finir jusqu'au Puy de l'Angle. Le chemin est accessible et offre une vue à 360 degrés durant toute la balade.
			</>
		)
	}
}

class P6 extends Component {
	render () {
		return (
			<>
Après la balade, direction le Buron du Col pour se rafraîchir et se restaurer. Le lieu est charmant, l'équipe adorable et on y mange des spécialités auvergnates. À ne pas manquer !
			</>
		)
	}
}

class P7 extends Component {
	render () {
		return (
			<>
Changement de décor avec ce paysage insolite aux allures de Colorado. La <MapsLink name="promenade" link="https://www.visorando.com/randonnee-la-vallee-des-saints/"/>  au départ de Boudes traverse le joli village puis longe les champs pour arriver au cœur de la forêt. Soudain, la terre dévoile des couleurs ocres et des cheminées d'argiles. Le sentier est agréable et aménagé avec des petites parcelles en bois. La boucle se termine par un passage dans les vignes où est produit le Côte d'Auvergne Boudes. Il faut compter environ 2 heures de balade.
			</>
		)
	}
}

class P8 extends Component {
	render () {
		return (
			<>
Pour finir notre week-end nous nous sommes rendus à Mont-Dore. De là part une <MapsLink name="promenade" link="https://www.visorando.com/randonnee-acces-direct-a-la-grande-cascade/"/> dans les hauteurs de la ville qui se poursuit dans la forêt. La montée peut être rude mais le résultat en vaut la peine : la Grande Cascade. Il s'agit de la plus grande d'Auvergne et elle offre également un beau point de vue sur la vallée.
			</>
		)
	}
}

class P9 extends Component {
	render () {
		return (
			<>
En venant de Clermont-Ferrand, la route qui mène à la ville de Mont-Dore passe par les Roches Tuilière et Sanadoire. Il s'agit de deux volcans se faisant face dans la vallée de Fontsalade et qui offrent un magnifique spectacle. Il suffit de s'arrêter sur le parking afin de les admirer grâce à un point de vue aménagé. De très belles balades partent également de ce point. Un peu plus bas se trouve le lac du Guéry qui vaut également le détour.
			</>
		)
	}
}
