import React, { Component }   from 'react';
import ComponentScrollTop     from '../../ComponentScrollTop';
import CustomLink             from '../../CustomLink';
import { Story }              from '../../Story';
import { BannerTitle }        from '../../BannerTitle';
import { Title, Subtitle }    from '../../Titles';
import {
	PhotoGallery,
}                             from '../../Photos';
import SVGLocation            from '../../SVGLocation';
import Consts                 from '../../../consts';

/* CSS */
import '../../../css/App.css';

const PHOTOS = Consts.AWS_URL + "photos/trips/perche/";

export default class Perche extends ComponentScrollTop {
	render () {
		const class_name = "perche";
		return (
		<div>
			<BannerTitle title="Perche" class={class_name} />
			<SVGLocation className={class_name}/>
			<Title text="Quelques jours dans le Perche au printemps" />
			<Subtitle
			  text="Mercredi 29 mai : Arrivée en fin de journée"
			  accent={class_name}
			/>
			<Story text={<P1/>} />
			<Subtitle
			  text="Jeudi 30 mai : Marché de Bélème et les jardins de La Petite Rochelle"
			  accent={class_name}
			/>
			<Story text={<P2/>} />
			<PhotoGallery list={[[
				PHOTOS + "img-perche-1.jpg",
				PHOTOS + "img-perche-2.jpg",
			]]} />
			<Story text={<P3/>} />
			<PhotoGallery list={[[
				PHOTOS + "img-perche-3.jpg",
			], [
				PHOTOS + "img-perche-4.jpg",
				PHOTOS + "img-perche-5.jpg",
				PHOTOS + "img-perche-6.jpg",
			], [
				PHOTOS + "img-perche-8.jpg",
				PHOTOS + "img-perche-7.jpg",
				PHOTOS + "img-perche-9.jpg",
			], [
				PHOTOS + "img-perche-11.jpg",
				PHOTOS + "img-perche-13.jpg",
				PHOTOS + "img-perche-12.jpg",
			], [
				PHOTOS + "img-perche-14.jpg",
				PHOTOS + "img-perche-10.jpg",
				PHOTOS + "img-perche-15.jpg",
			]]} />
			<Subtitle
			  text="Vendredi 31 mai : Le château de la Ferté Vidame et balade dans la forêt de Senonche"
			  accent={class_name}
			/>
			<Story text={<P4/>} />
			<PhotoGallery list={[[
				PHOTOS + "img-perche-16.jpg",
			], [
				PHOTOS + "img-perche-17.jpg",
				PHOTOS + "img-perche-18.jpg",
			]]} />
			<Story text={<P5/>} />
			<Subtitle
			  text="Samedi 1er et dimanche 2 juin : Nogent-Le-Rotrou et La Ferté Bernard"
			  accent={class_name}
			/>
			<Story text={<P6/>} />
			<Story text={<P7/>} />
			<PhotoGallery list={[[
				PHOTOS + "img-perche-19.jpg",
				PHOTOS + "img-perche-20.jpg",
			]]} />
		</div>
		)
	}
}

class P1 extends Component {
	render () {
		return (
			<>
Nous avons pris la voiture directement après le travail afin de profiter un maximum de notre week-end.
Nous avons dîné sur la route et nous sommes arrivés en fin de soirée à notre logement.
Nous avions réservé cet <CustomLink type="airbnb" link="https://www.airbnb.fr/rooms/29076478?source_impression_id=p3_1648999758_Xp%2Bik%2BCFVc%2Flnfek" name="Airbnb"/> qui se situe en bas du Perche à Saint-Cosme-En-Vairais.
Il était très bien pour deux personnes, dans une vieille bâtisse en pleine nature et au calme.
Un très bon rapport qualité/prix.
			</>
		)
	}
}

class P2 extends Component {
	render () {
		return (
			<>
Pour cette première journée nous avons été découvrir la petite ville de Bellême.
Nous en avions beaucoup entendu parler et nous n’avons pas été déçus : ses petites ruelles ont beaucoup de charme et les commerçants sont d’une grande gentillesse.
Nous avons été boire un verre sur la place de la République au bar à vin <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g1231381-d7210085-Reviews-La_Verticale-Belleme_Orne_Basse_Normandie_Normandy.html" name="La Verticale"/>. Sur cette même place se trouve le marché bien connu de la ville.
Nous y sommes passés pour faire le plein de produits locaux pour le week-end et tout était délicieux !
			</>
		)
	}
}

class P3 extends Component {
	render () {
		return (
			<>
En fin d’après-midi nous avons repris la voiture pour nous rendre aux jardins fleuris de la <CustomLink type="tree" link="http://www.la-petite-rochelle.com/accueil.html" name="Petite Rochelle"/> situés à Rémalard-en-Perche.
L’entrée est payante mais les jardins qui s’étendent sur plus d’1 ha sont sublimes.
La propriétaire des lieux était également sur place pour répondre aux questions des visiteurs.
Le lieu est constitué de plusieurs jardins avec des ambiances différentes, toutes très apaisantes et qui sont un plaisir pour les yeux.
Il y a bien de quoi y passer 1 à 2 heures à flâner, parfait pour finir la journée.
			</>
		)
	}
}

class P4 extends Component {
	render () {
		return (
			<>
Aujourd’hui direction la Ferté Vidame, un joli village doté notamment d’un ancien château datant de la fin du 18ème siècle.
Il est notamment connu pour avoir été habité durant un temps par Saint-Simon, un célèbre historiographe de la cour de Versailles.
Il n’en reste à ce jour que des ruines mais qui restent très belles.
L’accès aux ruines se fait par l’entrée du parc et la promenade autour des vestiges est très agréable et de nombreuses familles viennent y passer l’après-midi.
			</>
		)
	}
}

class P5 extends Component {
	render () {
		return (
			<>
Par la suite, nous avons été nous promener au Site naturel de la forêt humide de Mousseuse situé juste à côté du village.
Nous avons également fait un tour dans la forêt domaniale de Senonches qui est très agréable.
			</>
		)
	}
}

class P6 extends Component {
	render () {
		return (
			<>
Le samedi nous n’avons pas fait grand chose car il ne faisait pas très beau.
Nous nous sommes seulement rendus le matin au marché de Nogent-le-Rotrou qui était aussi très sympa.
Cette ville dispose d’un riche patrimoine architectural avec son château, ses églises et ses manoirs.
			</>
		)
	}
}

class P7 extends Component {
	render () {
		return (
			<>
Le dimanche, après avoir rendu notre logement en fin de matinée, nous sommes allés à La Ferté Bernard, aussi appelée “Petite Venise de l’ouest”.
En effet, cette ville est traversée par de nombreux canaux où il est possible de se balader en petits bateaux électriques l’après-midi.
			</>
		)
	}
}
