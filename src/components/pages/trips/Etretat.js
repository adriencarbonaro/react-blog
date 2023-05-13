import React                  from 'react';
import ComponentScrollTop     from '../../ComponentScrollTop';
import { Story }              from "../../Story"
import { Title, Subtitle }    from "../../Titles"
import { Component }          from 'react';
import {
	PhotoGallery,
}                             from '../../Photos';
import CustomLink             from '../../CustomLink';
import SVGLocation            from '../../SVGLocation'
import Consts                 from '../../../consts';

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Trips.css'

const PHOTOS = Consts.AWS_URL + "photos/trips/etretat/";

export default class Etretat extends ComponentScrollTop {
	render () {
		const class_name = "etretat";
		return (
			<div>
				<h1 className={"banner-title " + class_name}>Etretat</h1>
				<SVGLocation className={class_name}/>
				<Title text="Quelques jours entre Fecamp et Etretat" />
				<Story text={<P1/>} />
				<Subtitle subtitle="Jour 1 : Etretat" accent={class_name} />
				<Story text={<P2/>} />
				<PhotoGallery list={[[
					PHOTOS + "img-etretat-3.jpg",
					PHOTOS + "img-etretat-2.jpg",
					PHOTOS + "img-etretat-4.jpg",
				]]} />
				<Story text={<P3/>} />
				<PhotoGallery list={[[
					PHOTOS + "img-etretat-8.jpg",
				]]} />
				<Subtitle subtitle="Jour 2 : Fecamp" accent={class_name} />
				<Story text={<P4/>} />
				<Story text={<P5/>} />
				<PhotoGallery list={[[
					PHOTOS + "img-etretat-6.jpg",
				]]} />
			</div>
		)
	}
}

class P1 extends Component {
	render () {
		return (
			<>
A l’automne 2019, nous sommes partis passer quelques jours sur la côte normande pour voir les célèbres falaises d’Etretat. Le plus simple pour se rendre ici est de prendre la voiture car les villes ne sont pas desservies en train directement. De plus, la voiture offre la liberté de visiter plusieurs villes sans dépendre des bus de lignes.
Nous avons choisi de loger à Fécamp, car les logements sur Etretat étaient tous pris d’assaut. Nous avons passé trois jours dans cet <CustomLink type="airbnb" link="https://www.airbnb.fr/rooms/6931396?adults=1&children=0&infants=0&check_in=2022-02-04&check_out=2022-02-06&federated_search_id=d9fc4683-0bc9-4bdd-9238-3e6fb2055eb4&source_impression_id=p3_1642599848_Dho3tf3ckTHRizZM" name="Airbnb"/> qui était parfait pour un week-end à deux.
			</>
		)
	}
}

class P2 extends Component {
	render () {
		return (
			<>
En seulement 25 minutes en voiture nous avons pu rejoindre Etretat. Il est ensuite facile de se garer sur le parking en face de la mairie et de poursuivre la visite à pied.
Etretat est surtout célèbre pour ses grandes falaises de craie blanche mais la petite ville est tout aussi mignonne. En arrivant dans la ville, il faut se diriger vers la plage de galets puis la longer sur la gauche pour rejoindre la falaise d’Aval. Le chemin est bien balisé, ça grimpe un peu mais le spectacle est déjà magnifique et plusieurs points d’observation permettent de se reposer.
Il peut y avoir pas mal de monde au début du parcours mais plus on longe la côte, plus on se disperse. Il ne faut pas hésiter à continuer la balade le long du chemin Des Douaniers pour avoir différents points de vue et surtout bien voir la fameuse <span style={{'font-style':'italic'}}>Aiguille Creuse</span> d'Arsène Lupin.
			</>
		)
	}
}

class P3 extends Component {
	render () {
		return (
			<>
En retournant sur la plage et en longeant cette fois-ci jusqu’à la falaise de droite, on atteint la chapelle Notre-Dame-de-la-Garde. Si vous en avez l’occasion, vous pouvez aussi visiter les jardins d’Etretat juste à côté qui avaient l’air magnifiques. Malheureusement ils étaient fermés lorsque nous sommes venus.
Nous en avons vraiment pris plein les yeux lors de cette journée. Les paysages d’Etretat sont à couper le souffle et la balade le long des falaises est très ressourçante.
			</>
		)
	}
}

class P4 extends Component {
	render () {
		return (
			<>
Bien qu’il n’y ai pas de falaises de craies blanches, Fécamp n’a rien à envier à Etretat. Il est très agréable de se promener dans la vieille ville et le long du port.
			</>
		)
	}
}

class P5 extends Component {
	render () {
		return (
			<>
Nous avons également visité le <CustomLink type="tripadvisor" link="https://www.airbnb.fr/rooms/6931396?adults=1&children=0&infants=0&check_in=2022-02-04&check_out=2022-02-06&federated_search_id=d9fc4683-0bc9-4bdd-9238-3e6fb2055eb4&source_impression_id=p3_1642599848_Dho3tf3ckTHRizZM" name="Palais Benedictine"/> situé au centre de la ville. Ce palais qui date de la fin du 19e siècle, a été construit pour accueillir la distillerie de la liqueur bénédictine. C’est un lieu magnifique et très intéressant. La visite commence librement en évoluant à travers les différentes salles et en découvrant l’histoire de la liqueur Bénédictine. Par la suite, des départs en groupe avec un guide dans les caves du château se font afin de voir comment la liqueur est distillée. La visite se termine par une dégustation au bar à cocktail La Verrière situé à l’avant du palais.
			</>
		)
	}
}
