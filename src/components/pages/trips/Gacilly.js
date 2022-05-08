import React, { Component }   from 'react';
import ComponentScrollTop     from '../../ComponentScrollTop';
import CustomLink             from '../../CustomLink';
import { Story }              from '../../Story';
import { TitleBloc }          from '../../TitleBloc';
import { ImagesGacilly }      from '../../../assets/ImagesGacilly';
import {
	PhotoGallery,
	PhotoDuo,
	PhotoSingle,
	PhotoT
}                             from '../../Photos';
import { Split }              from '../../Split';
import SVGLocation            from '../../SVGLocation';
import { PhoneVideo }         from '../../PhoneVideo';

/* CSS */
import '../../../css/App.css';

export default class Gacilly extends ComponentScrollTop {
	render () {
		const class_name = "gacilly";
		return (
		<div>
			<h1 className={"banner-title " + class_name}>La Gacilly & Le Mans</h1>
			<SVGLocation className={class_name}/>
			<TitleBloc title="Week-end détente : La Gacilly et Le Mans" subtitle="" accent={class_name} />
			<Split
				left={<Story text={<P1/>} />}
				right={<PhoneVideo color_spot="#e8f4ee" color_text="#68bc92" src="https://nid-de-poule.s3.eu-west-3.amazonaws.com/gacilly.mp4" />}
			/>
			<TitleBloc title="" subtitle="L’Eco-Hôtel Spa Yves Rocher" accent={class_name} />
			<Story text={<P2/>} />
			<Story text={<P3/>} />
			<PhotoT
			  src_large={ImagesGacilly.img_gacilly_3}
			  src_row_1={ImagesGacilly.img_gacilly_1}
			  src_row_2={ImagesGacilly.img_gacilly_2}
			/>
			<Story text={<P4/>} />
			<PhotoGallery list={[
				ImagesGacilly.img_gacilly_4,
				ImagesGacilly.img_gacilly_5,
				ImagesGacilly.img_gacilly_6,
				ImagesGacilly.img_gacilly_7,
				ImagesGacilly.img_gacilly_8,
				ImagesGacilly.img_gacilly_9,
			]}
			/>
			<TitleBloc title="" subtitle="Le village de La Gacilly" accent={class_name} />
			<Story text={<P5/>} />
			<PhotoDuo
			  src_1={ImagesGacilly.img_gacilly_10}
			  src_2={ImagesGacilly.img_gacilly_11}
			/>
			<Story text={<P6/>} />
			<PhotoDuo
			  src_1={ImagesGacilly.img_gacilly_12}
			  src_2={ImagesGacilly.img_gacilly_13}
			/>
			<TitleBloc title="" subtitle="Passage rapide au Mans" accent={class_name} />
			<Split
				right={<Story text={<P7/>} />}
				left={<PhoneVideo color_spot="#ffd7bc" color_text="#c96236" src="https://nid-de-poule.s3.eu-west-3.amazonaws.com/mans.mp4" />}
			/>
			<PhotoGallery list={[
				ImagesGacilly.img_gacilly_14,
				ImagesGacilly.img_gacilly_15,
				ImagesGacilly.img_gacilly_16,
			]}
			/>
		</div>
		)
	}
}

class P1 extends Component {
	render () {
		return (
			<>
Juste avant la rentrée de septembre nous avons passé un week-end détente à <CustomLink type="hotel" link="https://www.lagreedeslandes.com/fr/" name="La Grée des Landes" />, l’Eco-Hôtel Spa Yves Rocher qui se trouve à La Gacilly en Bretagne.
Cet établissement implanté en pleine nature offre une parenthèse ressourçante et bien-être.
Pour nous y rendre, nous avons pris le train depuis Paris jusqu’à Redon puis un taxi jusqu’à La Gacilly qui est le village juste à côté.
			</>
		)
	}
}

class P2 extends Component {
	render () {
		return (
			<>
La Grée des Landes est un hôtel 4 étoiles qui permet d’allier les bienfaits qu’offre un spa tout en étant connecté à la nature et déconnecté du quotidien. L’architecture du bâtiment se fond dans le paysage pour profiter pleinement de ce qui l’entoure. Nous nous étions offert ce séjour pour Noël et il s’agit en effet d’une très bonne idée cadeau !
			</>
		)
	}
}

class P3 extends Component {
	render () {
		return (
			<>
L’hôtel est composé d’un espace Wellness avec une piscine, d’une salle de Fitness et du Spa composé d’un bassin à débordement, de hammams et où l’on peut également faire des soins. Il est possible de réserver une chambre dans le bâtiment principal mais l’hôtel dispose aussi de petites cabanes sur le domaine. Il ne faut pas hésiter à se promener dans le parc où l’on peut voir des animaux mais également dans le potager juste à côté du restaurant qui est sublime.
			</>
		)
	}
}

class P4 extends Component {
	render () {
		return (
			<>
Le soir, nous avons dîné au restaurant de l’hôtel <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g14053085-d3853059-Reviews-Les_Jardins_Sauvages-Cournon_Morbihan_Brittany.html" name="Les Jardins Sauvages"/>. Il s’agit d’un restaurant gastronomique bio qui a notamment reçu l'Étoile Verte Michelin, attestant sa responsabilité éthique et environnementale. Les produits sont pour la plupart issus de l’agriculture du terroir en respectant le fil des saisons. Les plats étaient tous plus bons les uns que les autres et l’accord met et vin proposé était excellent. Si vous êtes de passage dans la région et amateur de bonne cuisine sans pour autant séjourner à l’hôtel, foncez !
			</>
		)
	}
}

class P5 extends Component {
	render () {
		return (
			<>
L’hôtel se situe aux portes de La Gacilly, village natal d’Yves Rocher. Il est possible de s’y rendre à pied depuis l’hôtel en empruntant un petit chemin dans la forêt, très facile d’accès. On retrouve notamment dans le village la <CustomLink type="monument" link="https://www.maisonyvesrocher.fr/fr" name="Maison Yves Rocher"/>, un musée consacré à la marque qui explique aussi l’histoire de son fondateur. Nous avons trouvé ce musée très bien conçu. Les entrées se font par créneaux car une fois la visite débutée, vous êtes guidé par une voix qui vous ouvre les portes de la maison au fur et à mesure des pièces et vous fait voyager à travers l’histoire de la marque au fil du temps. A noter que si vous séjournez à La Grée des Landes, vous bénéficiez d’une remise pour l’entrée du musée.
			</>
		)
	}
}

class P6 extends Component {
	render () {
		return (
			<>
Le village de La Gacilly est très beau et accueille chaque année un festival photo durant l’été. Des photos sont ainsi exposées en grand format sur les murs des bâtiments et dans les ruelles un peu partout dans la ville. C’était impressionnant. Pour le déjeuner, nous avons mangé des galettes bretonnes sur la place, attention le village est assez touristique et nous avons eu du mal à trouver une table libre le midi.
			</>
		)
	}
}

class P7 extends Component {
	render () {
		return (
			<>
Pour la deuxième nuit du week-end nous nous sommes arrêtés pour visiter la ville du Mans qui était sur la route du retour et que nous ne connaissions pas. Nous avons été agréablement surpris de l’ambiance jeune et dynamique de la ville ainsi que du charme des ruelles de la vieille ville. Nous avons séjourné dans cet <CustomLink type="airbnb" link="https://www.airbnb.fr/rooms/48563549?source_impression_id=p3_1650198981_42%2F1%2BpdgvgKtNcCa" name="Airbnb"/> qui était très bien.
Pour le déjeuner nous avions réservé une table à <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187195-d809065-Reviews-L_auberge_des_7_plats-Le_Mans_City_Le_Mans_Sarthe_Pays_de_la_Loire.html" name="l’Auberge des 7 plats"/> suite à de nombreux conseils et nous n’avons pas été déçus !
En fin d’après-midi, étant amateurs de bière et désireux de découvrir celles de la région, nous nous sommes rendus à la <CustomLink type="tripadvisor" link="https://brasserieseptantedeux.com" name="Brasserie Septante Deux"/> situé en plein centre ville. Cette brasserie propose des bières artisanales, l’ambiance est très sympa et les bières très bonnes. Le lendemain, avant de repartir nous avons été prendre un café sur la place de la cathédrale où se trouve le marché, l’ambiance était vraiment festive, Le Mans fût donc une bonne découverte !
			</>
		)
	}
}
