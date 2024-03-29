import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';
import { Story } from "../../Story"
import { TitleBloc } from "../../TitleBloc"
import { Split } from "../../Split"
import { Component }         from 'react';
import { PhotoDuo, PhotoGallery, PhotoSingle, PhotoTSide } from '../../Photos';
import CustomLink from '../../CustomLink';
import SVGLocation from '../../SVGLocation';
import Consts                 from '../../../consts';

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Trips.css'

const PHOTOS = Consts.AWS_URL + "photos/trips/bourges/";

export default class Bourges extends ComponentScrollTop {
	render () {
		const class_name = "bourges";
		return (
			<div>
				<h1 className={"banner-title " + class_name}>Bourges</h1>
				<SVGLocation className={class_name}/>
				<TitleBloc
					title="Week-end dans le Berry"
					subtitle="Terroir de Sancerre"
					accent={class_name}
				/>
				<Story
					text={<P1/>}
				/>
				<Split
					left={
						<>
						<TitleBloc
							subtitle="Jeudi 13 février"
							accent={class_name}
						/>
						<Story
							text={<P2/>}
						/>
						</>
					}
					right={
						<PhotoSingle
							src={PHOTOS + "img-bourges-0.jpg"}
						/>
					}
				/>
				<TitleBloc
					subtitle="Vendredi 14 février"
					accent={class_name}
				/>
				<Story
					text={<P3/>}
				/>
				<PhotoTSide
					src_side={PHOTOS + "img-bourges-1.jpg"}
					src_col_1={PHOTOS + "img-bourges-2.jpg"}
					src_col_2={PHOTOS + "img-bourges-3.jpg"}
				/>
				<TitleBloc
					subtitle="Samedi 15 février"
					accent={class_name}
				/>
				<Story
					text={<P4/>}
				/>
				<PhotoTSide
					inverted={true}
					src_side={PHOTOS + "img-bourges-4.jpg"}
					src_col_1={PHOTOS + "img-bourges-3.jpg"}
					src_col_2={PHOTOS + "img-bourges-5.jpg"}
				/>
				<PhotoGallery list={[
					PHOTOS + "img-bourges-6.jpg",
					PHOTOS + "img-bourges-7.jpg",
					PHOTOS + "img-bourges-8.jpg",
				]} />
				<TitleBloc
					subtitle="Dimanche 16 février"
					accent={class_name}
				/>
				<Story
					text={<P5/>}
				/>
				<Story
					text={<P6/>}
				/>
				<PhotoDuo
					src_1={PHOTOS + "img-bourges-9.jpg"}
					src_2={PHOTOS + "img-bourges-10.jpg"}
				/>
			</div>
		)
	}
}

class P1 extends Component {
	render () {
		return (
			<>
Bourges et la région du Berry permettent de retrouver le calme et la nature durant l’espace d’un week-end.
C’est une destination idéale également pour les amateurs de vin et de bonne nourriture.
Nous sommes toujours à la recherche de week-end au vert proche de Paris et cette région fut une très belle découverte.
Pour la petite histoire, au XXe siècle, la région fut l’une des premières de France à accueillir des routes touristiques afin d’encourager les visiteurs à rester un peu plus longtemps.
			</>
		)
	}
}

class P2 extends Component {
	render () {
		return (
			<>
Nous sommes arrivés le jeudi tard dans la soirée.
Nous avions réservé un <CustomLink type="airbnb" link="https://www.airbnb.fr/rooms/33706928?federated_search_id=2bda034b-5679-4d44-bd7d-927781971dd6&source_impression_id=p3_1619963841_ApCGt76QNIYTbSrF&guests=1&adults=1" name="Airbnb"/> idéalement situé juste derrière la cathédrale.
Il était était vraiment parfait. Si on retourne dans la région on reprendra le même c’est sûr !
			</>
		)
	}
}

class P3 extends Component {
	render () {
		return (
			<>
Après une grasse matinée et un petit déjeuner tardif, nous sommes sortis nous balader dans les rues de Bourges. La vieille ville, qui se visite à pied, a beaucoup de charme avec ses petites ruelles et places. Elle a d'ailleurs reçu le label “Ville d’art et d’histoire” grâce à son riche patrimoine architectural.
<br/>
<br/>
A voir dans Bourges (entre autre) :<br/>
    - La cathédrale Saint-Etienne <br/>
    - La rue Bourbonnoux<br/>
    - La rue Joyeuse <br/>
    - La promenade piétonne du rempart gallo-romain (qui est fléchée à partir de la cathédrale)<br/>
    - Le palais Jacques Coeur <br/>
… et toutes les petites ruelles qui s’entrecroisent :) <br/><br/>
Ensuite nous avons marché jusqu’aux marais, aussi appelés “Le poumon vert de Bourges". Sur plus de 135 hectares, cet espace protégé est classé au Patrimoine naturel. C’est un vrai dépaysement : une fois dans les marais, on n’entend plus les bruits de la ville, on se sent au calme et reposés.
			</>
		)
	}
}

class P4 extends Component {
	render () {
		return (
			<>
Direction Sancerre et ses centaines d'hectares de vignes.
Nous nous sommes rendus chez <CustomLink type="wine" link="http://jeanmarc-mathieu-crochet.com/" name="Jean-Marc & Mathieu Crochet"/>, un vignoble tenu de père en fils.
Jean-Marc nous a gentiment fait visiter son exploitation.
Il nous a ainsi expliqué tout le cheminement de la fabrication du vin, de la récolte jusqu’à la mise en bouteille.
Puis il nous a emmené dans sa boutique où nous avons pu déguster quelques-unes de ses cuvées.
Nous avons poursuivi notre périple jusqu’à la vieille ville de Sancerre, une cité toute en hauteur.
Nous avons dégusté de succulentes tartines de chèvre chaud au <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g580139-d2340264-Reviews-Cafe_des_Arts-Sancerre_Cher_Berry_Centre_Val_de_Loire.html" name="Café des Arts"/> situé sur la petite place.
Pour digérer nous avons fait le tour du village en suivant la ligne rouge sur les pavés, qui nous permet de visiter toute la cité.
Puis nous avons repris la voiture pour rentrer et nous avons fait un petit détour sur les collines voisines pour avoir une vue de Sancerre.
<br/><br/>De retour à Bourges nous avons tenté d’aller prendre un café dans l’un des nombreux coffee shop de la rue Bourbonnoux.
Après plusieurs tentatives, les cafés étant très prisés pour l’heure de goûter, nous avons dégoté une petite table chez <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187120-d8658555-Reviews-Delichou_Tarterie_Espresso_Bar-Bourges_Cher_Berry_Centre_Val_de_Loire.html " name="Délichou !" /> une tarterie beaucoup trop mignonne.
Et deuxième coup de bol, ils leur restaient une table de deux pour le brunch du dimanche !
<br/><br/>Nous nous sommes ensuite baladés dans la ville afin de voir la cathédrale illuminée ainsi que le palais Jacques Coeur, un ancien marchand français qui fut nommé Grand Argentier du royaume de France et aida Charles VII à reconquérir le territoire occupé par les anglais.
L’endroit est vraiment très beau et très bien illuminé.
			</>
		)
	}
}

class P5 extends Component {
	render () {
		return (
			<>
Rangement du Airbnb puis direction <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187120-d8658555-Reviews-Delichou_Tarterie_Espresso_Bar-Bourges_Cher_Berry_Centre_Val_de_Loire.html " name="Délichou !"/> pour un brunch incroyable.
Puis nous avons décidé de rentrer tranquillement en passant par les petites routes.
Nous avons ainsi découvert la cité médiévale de Yèvre-le-Châtel située non loin d’Orléan.
			</>
		)
	}
}

class P6 extends Component {
	render () {
		return (
			<>
Un beau week-end ressourçant pas très loin de Paris comme on les aime !
			</>
		)
	}
}
