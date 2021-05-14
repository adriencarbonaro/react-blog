import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';
import { Component }      from 'react';
import { Story } from "../../Story"
import { TitleBloc } from "../../TitleBloc"
import { Split } from "../../Split"
import { PhotoSingle,
         PhotoGallery,
         PhotoT } from "../../Photos"
import { ImagesCrete } from "../../../assets/ImagesCrete"

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Crete.css'

export default class Crete extends ComponentScrollTop {
	render () {
		const class_name = "crete"
		return (
			<div>
				<h1 className='crete'>Crète</h1>
				<TitleBloc
					title="Une semaine en Crète"
					subtitle="Le berceaux des Dieux"
					accent={class_name}
				/>
				<Story
					text={<P1/>}
				/>
				<TitleBloc
					subtitle="Vendredi 31 Août"
					accent={class_name}
				/>
				<Story
					text={<P2/>}
				/>
				<Split
					left={
						<>
						<TitleBloc
							subtitle="Samedi 1er Septembre"
							accent={class_name}
						/>
						<Story
							text={<P3/>}
						/>
						</>
					}
					right={
						<PhotoSingle
							src={ImagesCrete.img_crete_0}
						/>
					}
				/>
				<TitleBloc
					subtitle="Dimanche 2 Septembre"
					accent={class_name}
				/>
				<Story
					text={<P4/>}
				/>
				<PhotoGallery
				  src_1={ImagesCrete.img_crete_1}
				  src_2={ImagesCrete.img_crete_2}
				  src_3={ImagesCrete.img_crete_3}
				/>
				<TitleBloc
					subtitle="Lundi 3 Septembre"
					accent={class_name}
				/>
				<Story
					text={<P5/>}
				/>
				<PhotoT
					src_large={ImagesCrete.img_crete_4}
					src_row_1={ImagesCrete.img_crete_5}
					src_row_2={ImagesCrete.img_crete_6}
				/>
				<TitleBloc
					subtitle="Mardi 4 Septembre"
					accent={class_name}
				/>
				<Story
					text={<P6/>}
				/>
				<TitleBloc
					subtitle="Mercredi 5 Septembre"
					accent={class_name}
				/>
				<Story
					text={<P7/>}
				/>
				<TitleBloc
					subtitle="Jeudi 6 Septembre"
					accent={class_name}
				/>
				<Story
					text={<P8/>}
				/>
				<TitleBloc
					subtitle="Vendredi 7 Septembre"
					accent={class_name}
				/>
				<Story
					text={<P9/>}
				/>
				<Story
					text={<P10/>}
				/>
			</div>
		);
	}
}

class P1 extends Component {
	render () {
		return (
			<>
Pour les vacances d’été 2018 nous avons choisi de visiter la Crète. 
Située à moins de 4h en avion depuis Paris et peu chère, c’est une destination qui vaut vraiment le détour, dépaysement total assuré ! 
La première semaine de septembre était vraiment la période idéale : encore chaude mais avec les touristes en moins.
			</>
		)
	}
}

class P2 extends Component {
	render () {
		return (
			<>
Nous sommes arrivés à l’aéroport d’Hania le vendredi en fin d'après-midi. 
Après avoir récupéré la voiture, il nous restait une petite heure de route avant d’arriver à Réthymnon, troisième ville de Crète, où nous avions choisi de poser nos valises pour la semaine. 
Une fois nos affaires déposées au <a class="airbnb" target="_blank" href="https://www.airbnb.fr/rooms/19362825?source_impression_id=p3_1619964646_G0XsWccExltSEsl8&guests=1&adults=1"><i class="fab fa-airbnb"/> Airbnb</a>, idéalement placé au centre de la vieille ville, nous avons directement été nous balader dans les ruelles très animées des alentours pour nous imprégner de l’atmosphère et trouver une terrasse sympa pour le dîner.
			</>
		)
	}
}

class P3 extends Component {
	render () {
		return (
			<>
Pour notre premier jour sur l’île, nous avons choisi d’aller passer la journée au lagon d’Elafonissi, un petit paradis à 2h de route de Réthymnon. 
Pour éviter la foule, nous nous sommes levés assez tôt, l’endroit étant très prisé par les touristes. 
Une fois arrivés, nous avons traversé le lagon à pied pour pouvoir atteindre la presqu’île de l’autre côté et ainsi trouver un endroit calme et éloigné de la foule pour se poser. 
Les couleurs du sable blanc du lagon tirent sur le rose, l’eau est d’un bleu turquoise intense, c’est un magnifique endroit à voir.
			</>
		)
	}
}

class P4 extends Component {
	render () {
		return (
			<>
Après un réveil et un petit déjeuner tardif, nous avons pris la voiture jusqu’au Monastère de Preveli. 
Pour y aller nous sommes passés dans le canyon de Kourtaliotiko. 
Une route sinueuse dans la roche qui contraste beaucoup avec le paysage paradisiaque de la veille. 
On y a d’ailleurs découvert une petite chapelle construite dans la pierre qui vaut le détour. 
Le monastère, en lui-même, n’a rien de très exceptionnel mais la vue sur la mer est tout de même sublime. 
En rentrant sur Rethymnon le soir nous avons été nous poser à la plage qui pour le coup est à chaque fois totalement déserte, on avait la mer pour nous !
			</>
		)
	}
}

class P5 extends Component {
	render () {
		return (
			<>
Grosse journée en prévision. Nous voulions aller voir la fameuse île des lépreux “Spinalonga” qui se trouve à l’autre bout de l’île. 
Nous avons donc roulé jusqu’à Plaka, station balnéaire située en face de l’île, puis pris un petit bateau pour arriver sur Spinalonga. 
Il s’agit d’une forteresse vénitienne où fut installé au début du XXe siècle un village de lépreux en attendant de trouver un remède pour éviter que la maladie se propage. 
Cette léproserie n’a été fermée qu’en 1950. Bien que l’île soit totalement à l’abandon depuis et que la plupart des bâtiments aient été détruits, il est encore possible de voir certaines habitations qui ont été reconstruites par la suite pour en faire un musée. 
Pour le déjeuner, nous sommes retournés sur Plaka où nous avons mangé chez <a class="tripadvisor" target="_blank" href="https://www.tripadvisor.fr/Restaurant_Review-g6754342-d21206508-Reviews-Ta_Kymata-Plaka_Elounda_Lasithi_Prefecture_Crete.html"><i class="fab fa-tripadvisor"/> Ta Kymata</a>, un restaurant sur le bord de mer en face de l’île. 
L’après-midi, nous avons été voir la grotte de Dikti où selon la légende, Zeus fut caché par sa mère lorsqu’il était bébé pour échapper à son père qui mangeait ses enfants. 
Pour atteindre la grotte il faut grimper un peu, la visite se fait très rapidement mais une fois en haut, on a une superbe vue sur tout le plateau du Lassithi. 
Nous en avons d’ailleurs profité en repartant pour aller voir les ruines des fameux moulins à vent qui furent construits le long de la crête tout autour du plateau.
			</>
		)
	}
}

class P6 extends Component {
	render () {
		return (
			<>
Pour continuer dans notre lancée, nous avons été voir la grotte Gérondospilios le mardi matin, située à moins d’une heure en voiture de Réthymnon à côté du village de Mélidoni. 
Celle-ci est pour le coup très facile d’accès. Elle n’est composée que d’une seule grande chambre, appelée la “Chambre des héros” avec en son centre un imposant monument aux morts. 
En effet, bien que selon la mythologie elle représente un sanctuaire en l’honneur du géant Talos, elle est surtout connue pour le drame qui s’y est produit en 1824. 
Alors que l’armée turque gagnait du terrain durant la révolution, des centaines de villageois s’y réfugièrent pour se cacher. 
L’armée trouva leur cachette et mit le feu à la grotte où ils périrent tous enfumés. La salle est très bien éclairée et se visite selon un circuit tracé. 
Pour le déjeuner nous sommes retournés sur Rethymnon et nous nous sommes rendus chez <a class="tripadvisor" target="_blank" href="https://www.tripadvisor.fr/Restaurant_Review-g189421-d6581263-Reviews-To_Parastratima-Rethymnon_Rethymnon_Prefecture_Crete.html"><i class="fab fa-tripadvisor"/> To Parastratima</a>, notre coup de cœur culinaire des vacances. 
Un tout petit restaurant situé dans la ruelle à côté de la fontaine proposant une cuisine locale et peu chère. 
Puis l’après-midi nous nous sommes baladés dans le port de la vieille ville.
			</>
		)
	}
}

class P7 extends Component {
	render () {
		return (
			<>
Pour changer des grottes et des villes, nous avons décidé d’aller faire la randonnée située dans les gorges de St. Anthony près de Patsos. 
Le circuit est très sympa, il descend le long des gorges parfois à l’aide de corde ou d’échelle, un petit parcours aventure en pleine nature c’est très sympa. 
Il faut compter 1 à 2h pour descendre selon sa vitesse. 
Une fois arrivé au lac, on peut soit faire le chemin inverse soit passer par la route qui contourne les gorges. 
Celle-ci étant en plein soleil, nous avons pour notre part fait du stop et deux grecs très sympa nous ont ramenés jusqu’au point de départ. 
Nous en avons profité pour déjeuner dans la taverne <a class="tripadvisor" target="_blank" href="https://www.tripadvisor.fr/Restaurant_Review-g8391638-d2464240-Reviews-Taverna_Drimos-Patsos_Rethymnon_Prefecture_Crete.html"><i class="fab fa-tripadvisor"/> Drimos</a> située à côté du parking. Ambiance familiale et plats locaux, c’était très bon !
			</>
		)
	}
}

class P8 extends Component {
	render () {
		return (
			<>
Nous ne voulions pas quitter la Crète sans avoir vu le deuxième grand lagon connu : “Balos”. 
Il s’atteint après une longue descente à pied (prendre beaucoup d’eau car il fait chaud et ça tape !). 
Même s’ils sont assez similaires, nous avons préféré celui d’Elafonissi où l’accès est plus simple et où on trouve plus facilement un coin calme pour se poser.
			</>
		)
	}
}

class P9 extends Component {
	render () {
		return (
			<>
Après avoir rendu le Airbnb et déposé les valises à la voiture, direction la petite place de Rethymnon pour un brunch au restaurant <a class="tripadvisor" target="_blank“" href="https://www.tripadvisor.fr/Restaurant_Review-g189421-d4580478-Reviews-Cul_De_Sac-Rethymnon_Rethymnon_Prefecture_Crete.html"><i class="fab fa-tripadvisor"/> Cul de sac</a>. 
Pour le coup la cuisine est moins locale mais cela change et c’était une tuerie ! 
Nous avons fait nos derniers achats de souvenirs pour ramener des épices et des produits locaux puis pris la route pour visiter La Canée sur la route de l’aéroport. 
La vieille ville est très sympa et nous avons déjeuné sur le port. 
Cela nous a beaucoup fait pensé à Réthymnon en plus grand. 
Puis direction l'aéroport pour reprendre l’avion en fin d'après-midi.
			</>
		)
	}
}

class P10 extends Component {
	render () {
		return (
			<>
La Crète est vraiment une île magnifique. 
Les paysages sont très variés : lagons, roches, grottes … 
Réthymnon est vraiment la ville parfaite pour poser ses valises selon nous. 
Elle n’est pas très grande à côté d’Heraklion ou La Canée mais elle est très animée, on a adoré l’ambiance le soir.
			</>
		)
	}
}
