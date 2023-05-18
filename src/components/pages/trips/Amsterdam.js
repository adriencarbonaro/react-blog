import React                  from 'react';
import ComponentScrollTop     from '../../ComponentScrollTop';
import { Story }              from "../../Story"
import { Subtitle, Title }    from "../../Titles"
import { Component }          from 'react';
import { BannerTitle }        from "../../BannerTitle"
import {
	PhotoGallery,
	PhotoSingle,
	PhotoTSide,
}                             from '../../Photos';
import { PhoneVideo }         from '../../PhoneVideo';
import CustomLink             from '../../CustomLink';
import SVGLocation            from '../../SVGLocation'
import Consts                 from '../../../consts';

/* CSS */
import '../../../css/trips/Trips.css'
import '../../../css/PhoneVideo.css'

const PHOTOS = Consts.AWS_URL + "photos/trips/amsterdam/";

export default class Amsterdam extends ComponentScrollTop {
	render () {
		const class_name = "amsterdam";
		return (
			<>
				<BannerTitle title="Amsterdam" class={class_name} />
				<SVGLocation className={class_name}/>
				<Title text="Trois jours à Amsterdam" />
				<PhoneVideo src="https://nid-de-poule.s3.eu-west-3.amazonaws.com/videos/phone/amsterdam.mp4"/>
				<Story text={<P1/>} />
				<Subtitle text="Vendredi 17 septembre" accent={class_name} />
				<Story
					text={<P2/>}
				/>
				<PhotoSingle src={PHOTOS + "img-amsterdam-1.jpg"} />
				<Story text={<P3/>} />
				<Story text={<P4/>} />
				<PhotoGallery list={[[
				  PHOTOS + "img-amsterdam-3.jpg",
				], [
				  PHOTOS + "img-amsterdam-3-3.jpg",
				  PHOTOS + "img-amsterdam-3-2.jpg",
				  PHOTOS + "img-amsterdam-3-4.jpg",
				]]} />
				<Story
					text={<P5/>}
				/>
				<PhotoGallery list={[[
				  PHOTOS + "img-amsterdam-4.jpg",
				], [
				  PHOTOS + "img-amsterdam-5.jpg",
				  PHOTOS + "img-amsterdam-6.jpg",
				]]} />
				<Story
					text={<P6/>}
				/>
				<Story
					text={<P7/>}
				/>
				<PhotoTSide
					inverted
					src_side={PHOTOS + "img-amsterdam-6-2.jpg"}
					src_col_1={PHOTOS + "img-amsterdam-8.jpg"}
					src_col_2={PHOTOS + "img-amsterdam-7.jpg"}
				/>
				<Subtitle text="Samedi 18 septembre" accent={class_name} />
				<Story
					text={<P8/>}
				/>
				<Story
					text={<P9/>}
				/>
				<Story
					text={<P10/>}
				/>
				<PhotoTSide
					src_side={PHOTOS + "img-amsterdam-12-2.jpg"}
					src_col_1={PHOTOS + "img-amsterdam-11.jpg"}
					src_col_2={PHOTOS + "img-amsterdam-12.jpg"}
				/>
				<Story
					text={<P11/>}
				/>
				<PhotoGallery list={[[
				  PHOTOS + "img-amsterdam-13.jpg",
				], [
				  PHOTOS + "img-amsterdam-15.jpg",
				  PHOTOS + "img-amsterdam-17.jpg",
				]]} />
				<Story
					text={<P12/>}
				/>
				<Subtitle text="Dimanche 19 septembre" accent={class_name} />
				<Story text={<P13/>} />
				<PhotoGallery list={[[
				  PHOTOS + "img-amsterdam-19.jpg",
				  PHOTOS + "img-amsterdam-20.jpg",
				]]} />
				<Story
					text={<P14/>}
				/>
			</>
		)
	}
}

class P1 extends Component {
	render () {
		return (
			<>
Pour passer le cap de la rentrée, nous avons décidé de nous offrir un week-end dans la capitale hollandaise : Amsterdam.
À seulement 3 heures de train depuis Paris, c’est une échappée très agréable et dépaysante.
La douceur de vivre et la gentillesse des hollandais ne pourront que vous séduire et vous serez requinqués pour une nouvelle semaine.
Tout le monde trouve ce qu’il aime à Amsterdam : des quartiers branchés, des musées, des espaces verts, de bonnes adresses pour déjeuner et des ruelles charmantes où déambuler.
En tout cas, de notre côté nous avons été séduits !
			</>
		)
	}
}

class P2 extends Component {
	render () {
		return (
			<>
Nous avons choisi de nous rendre à Amsterdam en train.
C’est certe plus long que l’avion mais en prenant en compte les trajets aéroport/centre-ville et les temps d’attente nous avons trouvé le train beaucoup plus pratique.
D’autant plus que la gare centrale d’Amsterdam est comme son nom l’indique … en plein centre !
			</>
		)
	}
}

class P3 extends Component {
	render () {
		return (
			<>
Nous avons pris le train de 6h13 à la Gare du Nord afin d’avoir toute la journée pour profiter de la ville (et c’est aussi le moins cher donc c’est un bon plan !)
Nous sommes arrivés à Amsterdam un peu avant 10h et sommes allés directement à l’hôtel pour déposer nos bagages.
Nous avions choisi de loger à <CustomLink type="hotel" link="https://www.booking.com/hotel/nl/ibiscentre.fr.html" name="l'Hôtel Ibis Amsterdam Centre" />, entièrement rénové et avec un bon rapport qualité/prix.
Il n’est qu’à quelques minutes à pied du centre de la ville.
			</>
		)
	}
}

class P4 extends Component {
	render () {
		return (
			<>
Après avoir récupéré notre chambre, nous nous sommes empressés d’aller découvrir la ville.
Nous avons déambulé le long des canaux dans le quartier ouest et pris de jolies photos.
Pour le déjeuner nous avons testé le petit coffee shop <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g188590-d6872248-Reviews-Ree7-Amsterdam_North_Holland_Province.html" name="Ree7"/>.
Au menu : toast à l’avocat, pancakes aux fruits et smoothie.
Le tout dans une ambiance très cosy au style scandinave, instagrammable à souhait !
			</>
		)
	}
}

class P5 extends Component {
	render () {
		return (
			<>
Pour digérer, nous avons sillonné le quartier de Jordaan et fait un peu de shopping.
Nous avons également bu un chocolat chaud chez <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g188590-d1595049-Reviews-Pancakes_Amsterdam_Negen_Straatjes-Amsterdam_North_Holland_Province.html" name="Pancakes Amsterdam"/> pour le goûter.
Si vous êtes un amateur de crêpes et de pancakes, foncez dans l’un de ces restaurants de la chaîne qui sont un peu partout dans la ville.
Par la suite nous nous sommes baladés dans le quartier du centre en passant devant le palais royal et la place Dam.
Nous avons voulu visiter le <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Attraction_Review-g188590-d244498-Reviews-Begijnhof-Amsterdam_North_Holland_Province.html" name="Begijnhof"/>, un ancien lieu de Béguinage, mais le site était déjà fermé.
Si vous êtes de passage n’hésitez pas à vous y rendre, c’est un lieu qui avait l’air très reposant.
Pour nous poser un petit instant et car nous avions un peu de temps à perdre avant la visite de la Maison d’Anne Frank, nous avons bu un verre sur la place juste à côté, au <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g188590-d696967-Reviews-Cafe_Luxembourg-Amsterdam_North_Holland_Province.html" name="Café Luxembourg" /> qui propose également de nombreuses tapas pour l’apéro.
Ce quartier est très sympa et animé par les locaux ce qui permet d’être dans l’ambiance de la ville.
			</>
		)
	}
}

class P6 extends Component {
	render () {
		return (
			<>
Nous nous sommes donc rendus par la suite à la <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Attraction_Review-g188590-d190555-Reviews-Anne_Frank_House-Amsterdam_North_Holland_Province.html" name="Maison d’Anne Frank"/>.
Il est très important de penser à réserver les billets quelques jours (voir semaines) à l’avance sur leur site car c’est un musée très fréquenté.
Des audio-guides sont remis gratuitement à l’arrivée et les entrées se font par créneaux de 15 min ce qui permet de ne pas être trop nombreux dans les pièces et de vraiment s’imprégner de l’ambiance des lieux.
Ce musée est riche en émotions et nous immerge dans le quotidien d'Anne Frank à l'endroit même où elle a du se cacher avec toute sa famille pendant la guerre.
Un moment saisissant. N’hésitez pas à vous rendre également sur la place du clocher juste à côté où l’on peut voir la statue d’Anne Frank.
			</>
		)
	}
}

class P7 extends Component {
	render () {
		return (
			<>
En sortant du musée nous avons marché jusqu’au quartier De Pijp, très festif durant la soirée.
Nous avons dîné dans un restaurant asiatique <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g188590-d15560382-Reviews-Happyhappyjoyjoy_South-Amsterdam_North_Holland_Province.html" name="“HappyHappyJoyJoy”"/> (il y en a plusieurs dans la ville).
On y trouve des spécialités thaïlandaises, coréennes, chinoises, japonaises et bien plus.
Le principe consiste à prendre plusieurs petits plats et à les partager autour de la table, le tout dans une ambiance pop/disco, bref on a adoré !
Comme nous étions assez loin de l’hôtel nous avons pris un scooter en libre service pour rentrer avec l’application <CustomLink type="scooter" link="https://ridecheck.app" name="Check" />, c’était super pratique.
			</>
		)
	}
}

class P8 extends Component {
	render () {
		return (
			<>
Deuxième jour à Amsterdam. Après un petit déjeuner à l’hôtel, nous avons loué des vélos chez <CustomLink type="bicycle" link="https://www.rentabike.nl/fr" name="Rent a Bike" /> dans le quartier central.
Il ne faut pas être trop pressé car c’est une petite boutique pour une grande demande, mais le rapport qualité/prix est top.
Il faut compter environ 12€ pour une location de 24h en fonction du modèle que vous choisissez.
Attention si vous choisissez un vélos “hollandais” : ils n’ont pas de freins sur le guidon.
Vous devrez utiliser le rétro pédalage. Moins chers et typiques, ils sont cependant moins intuitifs au début.
			</>
		)
	}
}

class P9 extends Component {
	render () {
		return (
			<>
Nous avons pédalé jusqu’au <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Attraction_Review-g188590-d189384-Reviews-Vondelpark-Amsterdam_North_Holland_Province.html" name="Vondelpark"/> pour y passer la matinée.
Il s’agit d’un petit “Central Park” très agréable au sud de la ville, où les locaux viennent se balader en famille, pique-niquer, faire leur jogging ou prendre des cours de yoga collectifs.
Attention il y a beaucoup de vélos !
			</>
		)
	}
}

class P10 extends Component {
	render () {
		return (
			<>
Pour le déjeuner, nous nous sommes rendus aux <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g188590-d7231902-Reviews-Foodhallen-Amsterdam_North_Holland_Province.html" name="Halles"/> situées dans le quartier Ouest.
L’ambiance y est très conviviale, chacun prend son plat dans un food truck et on se pose sur les tables au centre.
Il y en a pour tous les goûts : burger, pizza, sushi, sandwich, kebab, boulettes …
			</>
		)
	}
}

class P11 extends Component {
	render () {
		return (
			<>
Pour retourner dans le centre de la ville, nous sommes passés dans le quartier des musées.
L’ambiance y est très estivale, on peut se poser dans l’herbe ou à côté de la fontaine et écouter les différents musiciens qui s’y trouvent.
En fin d’après midi nous avons été nous divertir à la <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Attraction_Review-g188590-d240813-Reviews-Heineken_Experience-Amsterdam_North_Holland_Province.html" name="Heineken Experience"/>.
Ce musée, construit dans les anciennes usines, retrace l’histoire de la marque et nous apprend comment est produite la bière, puis nous embarque dans une expérience immersive … je n’en dis pas plus et vous laisse découvrir !
			</>
		)
	}
}

class P12 extends Component {
	render () {
		return (
			<>
Et enfin pour finir la journée, nous avons voulu découvrir le fameux quartier rouge : le Red Disctrict.
Ce quartier est populaire pour y présenter des femmes en petite tenue se pavanant derrière des vitrines et essayant d’attirer leurs clients.
Nous y sommes allés vers 20h, heure à laquelle de nombreux touristes s’y trouvent. C’est un endroit incontournable à voir si l’on visite Amsterdam !
			</>
		)
	}
}

class P13 extends Component {
	render () {
		return (
			<>
Pour notre dernière matinée à Amsterdam, nous sommes tout d’abord allés rendre les vélos dans le centre et nous nous sommes baladés dans les boutiques aux alentours.
Pour le déjeuner, nous nous sommes rendus chez <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g188590-d2035406-Reviews-Blue_Amsterdam-Amsterdam_North_Holland_Province.html" name="Blue Amsterdam"/>.
Ce restaurant se trouve au sommet d’un centre commercial, offrant grâce à ses nombreuses baies vitrées une vue à 360 degrés sur toute la ville.
Côté nourriture, on y trouve autant de quoi bruncher que pour le déjeuner (burger, sandwich, soupe, salade …).
L’ambiance y est très agréable, nous le recommandons à 100%. Après ce déjeuner très reposant, nous avons repris le train en début d'après-midi.
			</>
		)
	}
}

class P14 extends Component {
	render () {
		return (
			<>
Nous avons beaucoup aimé l’ambiance de cette ville, et avons également été surpris de la générosité des hollandais.
Nous avons toujours été très bien accueillis dans les endroits où nous nous sommes rendus et la vie y est très tranquille et spontanée.
			</>
		)
	}
}
