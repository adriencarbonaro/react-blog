import React                  from 'react';
import ComponentScrollTop     from '../../ComponentScrollTop';
import { Story }              from "../../Story"
import { TitleBloc }          from "../../TitleBloc"
import { Split }              from "../../Split"
import { Component }          from 'react';
import {
	PhotoDuo,
	PhotoGallery,
	PhotoSingle,
}                             from '../../Photos';
import { ImagesHonfleur }     from '../../../assets/ImagesHonfleur';
import CustomLink             from '../../CustomLink';
import SVGLocation            from '../../SVGLocation'

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Trips.css'
import '../../../css/trips/Honfleur.css'

export default class Honfleur extends ComponentScrollTop {
	render () {
		const class_name = "honfleur";
		return (
			<div>
				<h1 className={"banner-title " + class_name}>Honfleur</h1>
				<SVGLocation className={class_name}/>
				<TitleBloc
					title="Petite pause à Honfleur"
					subtitle=""
					accent={class_name}
				/>
				<Story
					text={<P1/>}
				/>
				<Split
				  right={
				    <PhotoSingle
				      src={ImagesHonfleur.img_honfleur_7}
				    />
				  }
				  left={
				    <Story
				      text={<P2/>}
				    />
				  }
				/>
				<TitleBloc
					subtitle="Que faire à Honfleur"
					accent={class_name}
				/>
				<TitleBloc
					subtitle="Flâner autour du Vieux Bassin"
					accent={class_name}
				/>
				<Story
					text={<P3/>}
				/>
				<PhotoDuo
					src_1={ImagesHonfleur.img_honfleur_3}
					src_2={ImagesHonfleur.img_honfleur_5}
				/>
				<TitleBloc
					subtitle="Se balader dans la vieille ville"
					accent={class_name}
				/>
				<Story
					text={<P4/>}
				/>
				<Story
					text={<P5/>}
				/>
				<PhotoGallery
					src_1={ImagesHonfleur.img_honfleur_2}
					src_2={ImagesHonfleur.img_honfleur_4}
					src_3={ImagesHonfleur.img_honfleur_6}
				/>
				<TitleBloc
					subtitle="Visiter le Musée Eugène Boudin"
					accent={class_name}
				/>
				<Story
					text={<P6/>}
				/>
				<TitleBloc
					subtitle="Se promener dans le Jardin des Personnalités"
					accent={class_name}
				/>
				<Story
					text={<P7/>}
				/>
			</div>
		)
	}
}

class P1 extends Component {
	render () {
		return (
			<>
Non loin de Trouville et Deauville se trouve la célèbre petite ville de Honfleur. Vous y trouverez un port de pêche très mignon et une vieille ville pleine de charme. C’est ici que de nombreux artistes venait se ressourcer et chercher de l’inspiration à partir du 18e siècle. On distingue parmi eux notamment les peintres Eugène Boudin et Monet mais également l’écrivain Charles Baudelaire.
			</>
		)
	}
}

class P2 extends Component {
	render () {
		return (
			<>
Nous avons logé dans cet <CustomLink type="airbnb" link="https://www.airbnb.fr/rooms/3884217?source_impression_id=p3_1642337903_us4wlF05uTM3ywO%2F&guests=1&adults=1" name="Airbnb"/> très charmant au cœur de la vieille ville, avec un très bon rapport qualité/prix. Il est parfait pour pouvoir visiter les alentours à pied et la vue sur la mer est incroyable.
			</>
		)
	}
}

class P3 extends Component {
	render () {
		return (
			<>
Typique de la ville d’Honfleur, c’est ce que l’on voit en premier en arrivant dans la ville. Le port et les vieilles maisons pittoresques toutes accolées les unes aux autres offre un charme indéniable.
			</>
		)
	}
}

class P4 extends Component {
	render () {
		return (
			<>
N’ayez pas peur de vous perdre dans les petites ruelles de la vieille ville qui est très bien conservée. Vous passerez notamment devant l’église <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Attraction_Review-g187189-d196471-Reviews-Saint_Catherine_s_Church-Honfleur_Calvados_Basse_Normandie_Normandy.html " name="Sainte Catherine" /> au centre. Elle doit son charme au fait qu’elle a été construite par les habitants de la ville, entièrement en bois et suivant les règles de la construction navale. Son clocher est détaché et se trouve quelques mètres à côté. Il ne faut pas hésiter à visiter l’intérieur qui est tout aussi joli. Nous étions de passage durant le mois de décembre et nous avons pu admirer la crèche géante qui trônait au fond près de l’autel, c’était un moment magique.
			</>
		)
	}
}

class P5 extends Component {
	render () {
		return (
			<>
Côté restauration, nous avons déjeuné chez <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187189-d2178765-Reviews-Le_Bistrot_a_Crepes-Honfleur_Calvados_Basse_Normandie_Normandy.html " name="Le Bistrot à Crêpes" />, une crêperie très sympa.
			</>
		)
	}
}

class P6 extends Component {
	render () {
		return (
			<>
Au centre de la vieille ville, il présente une collection d'œuvres des artistes de Honfleur et des peintures léguées par Eugène Boudin.
			</>
		)
	}
}

class P7 extends Component {
	render () {
		return (
			<>
Assez excentré de la vieille ville, ce jardin très reposant se trouve juste à côté de la plage. On y croise des bustes de personnalités ayant marqué l’histoire de Honfleur (peintre, écrivain, navigateur). Plusieurs animations y sont organisées durant l’année. Après une ballade dans le jardin, nous avons fini cette matinée sur la plage qui offre une belle vue sur le Pont de Normandie.
			</>
		)
	}
}
