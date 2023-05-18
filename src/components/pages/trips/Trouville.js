import React                  from 'react';
import { Component }          from 'react';
import ComponentScrollTop     from '../../ComponentScrollTop';
import CustomLink             from '../../CustomLink';
import {
	PhotoGallery,
	PhotoSingle,
}                             from '../../Photos';
import { Story }              from "../../Story"
import { BannerTitle }        from '../../BannerTitle';
import { Title, Subtitle }    from "../../Titles"
import SVGLocation            from '../../SVGLocation';
import Consts                 from '../../../consts';

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Trips.css'

const PHOTOS = Consts.AWS_URL + "photos/trips/trouville/";

export default class Trouville extends ComponentScrollTop {
	render () {
		const class_name = "trouville";
		return (
			<div>
				<BannerTitle title="Trouville" class={class_name} />
				<SVGLocation className={class_name}/>
				<Title text="Week-end Normand" />
				<Subtitle text="Un amour à la plage" accent={class_name} />
				<Story text={<P1/>}/>
				<Story text={<P2/>} />
				<PhotoSingle src={PHOTOS + "img-trouville-20.jpg"} />
				<Story text={<P2_2/>}/>
				<Subtitle text="Le centre ville" accent={class_name} />
				<Story text={<P3/>}/>
				<PhotoGallery list={[[
				  PHOTOS + "img-trouville-21.jpg",
				], [
				  PHOTOS + "img-trouville-2.jpg",
				  PHOTOS + "img-trouville-3.jpg",
				]]} />
				<Subtitle text="Le marché aux poissons" accent={class_name} />
				<Story text={<P4/>} />
				<PhotoSingle src={PHOTOS + "img-trouville-22.jpg"} />
				<Subtitle
				  text="Le bord de mer et la plage"
				  accent={class_name}
				/>
				<Story text={<P5/>}/>
				<PhotoGallery list={[[
				  PHOTOS + "img-trouville-23.jpg",
				  PHOTOS + "img-trouville-19.jpg",
				]]} />
				<Subtitle text="Le casino" accent={class_name} />
				<Story text={<P6/>}/>
				<PhotoGallery list={[[
				  PHOTOS + "img-trouville-12.jpg",
				  PHOTOS + "img-trouville-13.jpg",
				  PHOTOS + "img-trouville-14.jpg",
				],[
				  PHOTOS + "img-trouville-15.jpg",
				  PHOTOS + "img-trouville-16.jpg",
				  PHOTOS + "img-trouville-17.jpg",
				]]} />
			</div>
		)
	}
}

class P1 extends Component {
	render () {
		return (
			<>
Trouville-Sur-Mer est l’une des nombreuses stations balnéaires qu’offre la Normandie.
Sa grande plage et son centre ville permettent une parenthèse détente et un bol d’air frais loin des grandes villes agitées.
Trouville doit sa réputation à son port de pêche typique et à sa richesse architecturale.
Surnommée “La Reine des Plages” et c’est la plus vieille station balnéaire de Normandie.
Étant accolée à Deauville, il est également possible de visiter cette ville lors de votre séjour !
			</>
		)
	}
}

class P2 extends Component {
	render () {
		return (
			<>
Nous nous y sommes rendus au début du mois de juin, le soleil tapait fort durant la journée mais les soirées restaient néanmoins très fraîches, il faut donc prévoir sa valise en conséquence.
Nous avons choisi de loger dans un Airbnb proche de la plage car nous nous y sommes pris assez tard mais nous avons repéré <CustomLink type="hotel" link="https://les2villas.fr" name="l'Hôtel Les Deux Villas" /> que nous aimerions tester lors de notre prochain passage.
			</>
		)
	}
}

class P2_2 extends Component {
	render () {
		return (
			<>
Que voir à Trouville ?
			</>
		)
	}
}

class P3 extends Component {
	render () {
		return (
			<>
Tout petit mais très mignon, on y trouve des endroits très sympa pour déjeuner ou y prendre un café.
Nous avons été prendre un petit déjeuner à la <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187187-d7914326-Reviews-Villa_Gypsy-Trouville_sur_Mer_Deauville_Calvados_Basse_Normandie_Normandy.html" name="Villa Gypsy"/>.
Il s’agit d’une jolie boutique de décoration proposant un cadre cosy et une petite terrasse à l’arrière dans le jardin où l’on peut boire une boisson chaude et manger une part de gâteau.
			</>
		)
	}
}

class P4 extends Component {
	render () {
		return (
			<>
Situé le long de la route principale au bord de l’eau, on y trouve toutes sortes de crustacés, poissons et autres produits de la mer pêchés le jour même.
Il est également possible de déguster les produits préparés sur place sur des manges-debouts le long des stands.
			</>
		)
	}
}

class P5 extends Component {
	render () {
		return (
			<>
La plage de Trouville s’étend sur 1200m.
Elle offre donc un terrain parfait pour une balade les pieds dans le sable ou pour s’adonner à des loisirs pour tous les âges.
Les plus petits pourront y faire du mini-golf ou encore des balades à poney quand les plus grands pourront s’essayer à des tournois de volley-ball ou de tennis.
Plusieurs restaurants font face à la mer le long de la plage et offrent un service en continu.
Les restaurants étant tous pris d’assaut rapidement pour le déjeuner, nous avons réussi à trouver une table au <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187187-d1838774-Reviews-Bistrot_le_Vivier-Trouville_sur_Mer_Deauville_Calvados_Basse_Normandie_Normandy.html" name="Bistrot Le Vivier"/> bien mais pas incroyable.
Néanmoins si l’on veut manger au bord de la plage il n’y a pas beaucoup de choix.
Durant l’après-midi nous avons été boire un verre avec des amis à <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187187-d14939213-Reviews-Cabane_Perchee-Trouville_sur_Mer_Deauville_Calvados_Basse_Normandie_Normandy.html" name="La Cabane Perchée"/>, un bar-restaurant très sympa sur le toit de la piscine qui offre une très belle vue sur la plage.
Si vous voulez y aller pour déjeuner, pensez à réserver à l’avance car l’endroit est très prisé.
Le soir, il est très agréable de se balader sur les planches le long de la promenade Savignac.
On peut y admirer les œuvres de l’artiste ainsi que découvrir les noms de peintres, photographes et écrivains sur les bancs en bois qui bordent le sentier tels que Alexandre Dumas, Marguerite Duras et bien d’autres.
			</>
		)
	}
}

class P6 extends Component {
	render () {
		return (
			<>
Qui dit station balnéaire, dit Casino.
Pour nous protéger du soleil qui tapait fort au milieu de l’après-midi, nous avons été nous balader au casino situé à côté des thermes.
C’était très sympa à voir !
			</>
		)
	}
}
