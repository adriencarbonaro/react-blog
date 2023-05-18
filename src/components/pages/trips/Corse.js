import React                  from 'react';
import ComponentScrollTop     from '../../ComponentScrollTop';
import { Story }              from "../../Story"
import { BannerTitle }        from '../../BannerTitle';
import { Title, Subtitle }    from "../../Titles"
import { Component }          from 'react';
import {
	PhotoGallery,
	PhotoTSide,
}                             from '../../Photos';
import CustomLink             from '../../CustomLink';
import SVGLocation            from '../../SVGLocation'
import Consts                 from '../../../consts';

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Trips.css'

const PHOTOS = Consts.AWS_URL + "photos/trips/corse/";

export default class Corse extends ComponentScrollTop {
	render () {
		const class_name = "corse";
		return (
		<div>
			<BannerTitle title="Corse" class={class_name} />
			<SVGLocation className={class_name}/>
			<Title text="Vacances en Corse" />
			<Subtitle text="Juillet 2021" accent={class_name} />
			<Story text={<P1/>} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-13.jpg",
			]]} />
			<Subtitle text="Découverte de Sartène" accent={class_name} />
			<Story text={<P2/>} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-5.jpg",
			  PHOTOS + "img-corse-6.jpg",
			  PHOTOS + "img-corse-7.jpg",
			]]} />
			<Story text={<P3/>} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-1.jpg",
			]]} />
			<Subtitle text="Le lac de l'Ospédale et la plage de Santa-Giulia" accent={class_name} />
			<Story text={<P4/>} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-2.jpg",
			]]} />
			<Subtitle text="Le site archéologique de Cucuruzzu-Capula" accent={class_name} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-4.jpg",
			]]} />
			<Story text={<P5/>} />
			<Story text={<P6/>} />
			<Subtitle title="" text="La tour de Roccapina et la rivière de Baracci" accent={class_name} />
			<Story text={<P7/>} />
			<Story text={<P8/>} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-14.jpg",
			  PHOTOS + "img-corse-72.jpg",
			], [
			  PHOTOS + "img-corse-73.jpg",
			  PHOTOS + "img-corse-74.jpg",
			]]} />
			<Story text={<P9/>} />
			<Story text={<P10/>} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-26.jpg",
			]]} />
			<Subtitle title="" text="Bonifacio et les îles Lavezzi" accent={class_name} />
			<Story text={<P11/>} />
			<Story text={<P12/>} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-24.jpg",
			]]} />
			<Story text={<P13/>} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-23.jpg",
			  PHOTOS + "img-corse-25.jpg",
			]]} />
			<Story text={<P14/>} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-22.jpg",
			  PHOTOS + "img-corse-21.jpg",
			]]} />
			<Subtitle title="" text="Les aiguilles de Bavella" accent={class_name} />
			<Story text={<P15/>} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-18.jpg",
			  PHOTOS + "img-corse-69.jpg",
			], [
			  PHOTOS + "img-corse-19.jpg",
			]]} />
			<Subtitle title="" text="Les cascades de Purcaraccia et Palombaggia" accent={class_name} />
			<Story text={<P17/>} />
			<Story text={<P18/>} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-67.jpg",
			], [
			  PHOTOS + "img-corse-17.jpg",
			  PHOTOS + "img-corse-15.jpg",
			]]} />
			<Story text={<P19/>} />
			<Story text={<P20/>} />
			<Subtitle title="" text="Balade le long du sentier du littoral jusqu’au phare de Senetosa" accent={class_name} />
			<Story text={<P21/>} />
			<PhotoGallery list={[[
			  PHOTOS + "img-corse-75.jpg",
			]]} />
			<Story text={<P22/>} />
			<PhotoTSide
			  src_side={PHOTOS + "img-corse-12.jpg"}
			  src_col_1={PHOTOS + "img-corse-9.jpg"}
			  src_col_2={PHOTOS + "img-corse-10.jpg"}
			/>
		</div>
		)
	}
}

class P1 extends Component {
	render () {
		return (
			<>
Pour les vacances d’été 2021 nous nous sommes rendus sur la fameuse île de beauté.
Nous souhaitions rester en France pour ne pas avoir de mauvaises surprises liées à la crise sanitaire mais nous voulions toutefois être dépaysés par de beaux paysages méditerranéens.
			</>
		)
	}
}

class P2 extends Component {
	render () {
		return (
			<>
Après avoir atterri à Ajaccio nous avons roulé jusqu’à Sartène où nous avons posé nos valises dans cet <CustomLink type="airbnb" link="https://www.airbnb.fr/rooms/17631920?source_impression_id=p3_1648302573_KpiI6z%2FKZwY1GXfG" name="Airbnb"/>, plutôt bien placé pour visiter la Corse du Sud tout en profitant de la vie animée de Sartène.
			</>
		)
	}
}

class P3 extends Component {
	render () {
		return (
			<>
Pour notre premier dîner, nous nous sommes rendus au restaurant <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g644100-d3462023-Reviews-L_Arbousier-Sartene_Corse_du_Sud_Corsica.html" name="l'Arbousier"/> situé dans les petites ruelles de Sartène. Nous recommandons cette adresse à 100%.
Les gérants sont d’une très grande gentillesse et servent des plats typiques corses très bons. Nous avons choisi l’assiette Sartenaise et la côte de porc sur les conseils du chef, un vrai régal ! Lors du séjour, nous avons également testé le restaurant <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g644100-d1524168-Reviews-Roy_Theodore-Sartene_Corse_du_Sud_Corsica.html" name="Roy Theodore"/> juste à côté qui est très bon et propose également des spécialités corses.
			</>
		)
	}
}

class P4 extends Component {
	render () {
		return (
			<>
Pour cette première vraie journée nous voulions monter au col de Bavella pour faire la randonnée qui donne vue sur les aiguilles mais une fois arrivés au sommet le temps était catastrophique et il ne faisait pas plus de 10°C.
Nous avons donc décidé de chercher un peu de chaleur et de soleil et nous sommes descendus de l’autre côté de l’île vers Porto Vecchio.
Sur la route, nous sommes passés par le lac de l'Ospédale où nous nous sommes arrêtés un instant. L’endroit est vraiment très beau et a des airs de Canada.
Nous avons passé le reste de la journée sur la magnifique plage de Santa-Giulia : soleil, sable blanc et eau turquoise.

			</>
		)
	}
}

class P5 extends Component {
	render () {
		return (
			<>
Comme il ne faisait pas très beau ce jour-là, nous nous sommes éloignés des plages pour aller nous promener en forêt.
Nous avons été faire la balade du site archéologique de Cucuruzzu-Capula qui se trouve un peu dans les hauteurs sur la route de Zonza.
Le sentier est très agréable, les paysages reposants avec des vues magnifiques à certains panorama.
La balade dure environ 2h si on s’arrête pour admirer les alentours.
			</>
		)
	}
}

class P6 extends Component {
	render () {
		return (
			<>
Pour le déjeuner, nous nous sommes arrêtés sur la route, chez <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g1389077-d4341950-Reviews-U_Spuntinu-Levie_Corse_du_Sud_Corsica.html" name="U Spuntinu"/>. Les plats sont simples mais bons et l’endroit est très calme. Nous avons déjeuné sur la terrasse avec vue sur les aiguilles de Bavella et les chevaux dans le pré d’à côté. Un très bon moment.
			</>
		)
	}
}

class P7 extends Component {
	render () {
		return (
			<>
Pour cette nouvelle journée qui cette fois-ci était très ensoleillée nous avons décidé de nous rendre à la plage de Roccapina situé sur la route de Sartène.
En quittant la route principale, il faut emprunter un chemin assez cabossé, mais on s’en est sorti avec une petite Renault Zoé.
N’hésitez pas à dépasser le 1er parking où beaucoup s’arrêtent et allez jusqu’au bout, pratiquement sur la plage, où un deuxième parking est disponible.
			</>
		)
	}
}

class P8 extends Component {
	render () {
		return (
			<>
Avant d’aller nous baigner nous avons tenté la petite randonnée qui mène à la tour de Roccapina. Au début nous nous sommes trompés en prenant le chemin qui grimpe depuis le parking.
Il faut d’abord emprunter le sentier qui mène à la plage, arriver sur le sable et au dernier moment prendre un chemin sur la droite.
La montée est un peu pentue mais assez rapide, il faut compter environ 30 minutes de marche pour arriver au point de vue qui donne un magnifique panorama sur la plage.
			</>
		)
	}
}

class P9 extends Component {
	render () {
		return (
			<>
Pour le déjeuner nous avons atterri par hasard chez <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g644100-d4444594-Reviews-U_Sirenu-Sartene_Corse_du_Sud_Corsica.html" name="U Sirenu"/> situé sur la route principale non loin de la plage.
L’après-midi étant déjà bien entamée, ils nous ont proposé une carte réduite mais les plats étaient incroyablement bons.
La terrasse ombragée est très agréable et le personnel d’une grande gentillesse.
A noter que si vous consommez au restaurant vous pouvez ensuite profiter de la piscine de l’hôtel qui se trouve juste derrière la terrasse.
			</>
		)
	}
}

class P10 extends Component {
	render () {
		return (
			<>
Pour finir la journée, nous nous sommes rendus à la rivière de Baracci près de Propriano. Pour avoir le même point de vue que sur les photos il faut se rendre ici au <CustomLink type="maps" link="https://goo.gl/maps/zVuTMnWhoPCwRQLP7" name="Canyon di Baracci"/> :
De nombreux groupes de canyoning se garent ici et descendent à pied. En fin d’après-midi, il n’y avait quasiment plus personne. La descente est assez pentue mais très rapide, on y arrive en quelques minutes !
Les couleurs des pierres avec le soleil de fin de journée offrent une ambiance naturelle très apaisante.
			</>
		)
	}
}

class P11 extends Component {
	render () {
		return (
			<>
Que serait des vacances en Corse sans passer par Bonifacio ?
Cette petite ville située à la pointe sud de l’île est connue pour son port mais surtout pour sa jolie citadelle médiévale perchée en haut de la falaise. Elle est également à proximité des îles Lavezzi qui constituent une réserve naturelle et offrent un paysage paradisiaque entre les rochers de granites et les plages de sable fin.
			</>
		)
	}
}

class P12 extends Component {
	render () {
		return (
			<>
Nous sommes arrivés tôt le matin car la ville est très vite prise d’assaut par les nombreux cars touristiques qui viennent pour la journée. Cela ne sert à rien de monter jusqu’à la citadelle en voiture, nous conseillons de se garer sur les parkings près du port et de monter tranquillement à pied. Une fois sur place nous avons réservé des billets de bateau sur le port afin de nous rendre aux îles Lavezzi l’après-midi. A noter que si vous prenez des billets de croisière pour les îles, vous bénéficiez d’un parking gratuit pour la journée.
			</>
		)
	}
}

class P13 extends Component {
	render () {
		return (
			<>
Avant de passer par la porte de la ville, un petit chemin part sur la gauche et offre une petite balade avec une très belle vue sur la falaise et la vieille ville.
Une fois dans la ville, il ne faut pas hésiter à se perdre et flâner dans les ruelles. Nous vous conseillons aussi de passer voir le fameux escalier du roy d’Aragon. Cet escalier taillé dans la roche de calcaire et composé de 187 marches fût, selon la légende, creusé par la main de l’homme en une nuit par les troupes d'Alphonse V d’Aragon qui assiège la cité de Bonifacio dans les années 1420. Sa construction aurait permis au roi d'empêcher la ville de se faire ravitailler. Néanmoins, cette légende fût démentie des années plus tard par les historiens. L’escalier aurait en réalité été construit par les moines du couvent Sainte-Marie afin d’accéder à une source d’eau potable : la source Saint-Barthélemy qui se trouve en bas de l’escalier.
			</>
		)
	}
}

class P14 extends Component {
	render () {
		return (
			<>
Par la suite, nous sommes descendus vers le port pour déjeuner au bord de l’eau juste avant de prendre le bateau pour aller sur les îles Lavezzi. Le trajet vers les îles Lavezzi dure environ 30 minutes à l’aller et 1h au retour car le bateau nous fait visiter la réserve naturelle. Une fois sur les îles, vous pouvez vous rendre sur la plage et des navettes viennent pour le retour toutes les heures. Les îles sont vraiment très belles (bien que très prisées par les touristes). Nous avions pris des masques et des tubas afin d’observer de nombreux poissons, c'était incroyable !
			</>
		)
	}
}

class P15 extends Component {
	render () {
		return (
			<>
Pour ce début de semaine nous avons enfin réussi à nous rendre au col de Bavella et le temps était idéal. Nous sommes partis en fin de matinée et nous nous sommes arrêtés sur la route à Zonza pour le déjeuner. Nous voulions aller dans ce <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g656497-d2294994-Reviews-L_Eternisula-Zonza_Corse_du_Sud_Corsica.html" name="restaurant"/> qui avait de supers avis mais qui malheureusement était fermé. Nous avons donc déjeuné sur une terrasse au niveau du rond point mais l’adresse n’était pas incroyable.
Une fois arrivés en haut du col, un parking gratuit est disponible et une cabane d’information se situe au départ des balades afin d’expliquer les différents sentiers possibles. Nous avons choisi de suivre la randonnée du trou de la bombe. La balade dure environ 2 heures aller-retour, est bien accessible et offre une magnifique vue sur les aiguilles de Bavella … et bien sûr le fameux trou de la bombe !
			</>
		)
	}
}

class P17 extends Component {
	render () {
		return (
			<>
Aujourd’hui nous avons mis le réveil tôt afin de nous rendre aux cascades de Purcaraccia. L’objectif était d’arriver vers 9h aux cascades avant que le lieu soit rempli. Nous avions trouvé cette randonnée sur le blog amoureux-du-monde.com qui indique exactement comment se rendre au spot des cascades. Voici le lieu exact du départ de la <CustomLink type="maps" link="https://www.google.com/maps/place/Rando+bassin+eau+Purcaraccia+polischellu+p.261/@41.8353194,9.2645184,15z/data=!4m5!3m4!1s0x12d98b0b2611fb69:0x12ddc7d07dda1fbe!8m2!3d41.8310496!4d9.2723717" name="randonnée"/>.

			</>
		)
	}
}

class P18 extends Component {
	render () {
		return (
			<>
Par la suite, la randonnée dure environ 1h en marchant à bonne allure. Attention, cette randonnée n’est pas très longue mais bien que certains avis sur Google disent le contraire, elle n’est pas accessible à tout le monde. Il faut avoir de bonnes chaussures et être assez agile. Si vous la faites avec des enfants en bas âge, il faudra les porter par moment. Les cascades ont une couleur bleu magnifique et l’endroit est très calme et reposant lorsqu’il y a peu de monde. Lorsque le lieu commence à se remplir, il ne faut pas hésiter à passer entre les deux premières cuves et grimper un peu au-dessus … quand il n’y en a plus il y en a encore !
			</>
		)
	}
}

class P19 extends Component {
	render () {
		return (
			<>
Vers midi, le lieu étant totalement rempli, nous avons décidé de repartir pour aller à la plage. Nous avons déjeuné sur la route chez <CustomLink type="maps" link="https://www.google.com/maps/place/U+Gaglioli/@41.8373116,9.3128302,14.09z/data=!4m12!1m6!3m5!1s0x12d98b0b2611fb69:0x12ddc7d07dda1fbe!2sRando+bassin+eau+Purcaraccia+polischellu+p.261!8m2!3d41.8310496!4d9.2723717!3m4!1s0x12d98d2287383955:0x4a3dfa33e7658b37!8m2!3d41.8372943!4d9.3313778" name="U Gaglioli"/> un restaurant-snack situé au bord de la rivière qui propose aussi des sessions de canyoning. L’endroit était idéal nous le recommandons !
			</>
		)
	}
}

class P20 extends Component {
	render () {
		return (
			<>
Pour finir l'après-midi nous nous sommes rendus à Palombaggia près de Porto-Vecchio. Nous avons beaucoup aimé cette plage bien qu’elle soit bondée. Le sable blanc et l’eau turquoise et chaude étaient parfait pour finir la journée à bouquiner au soleil.
			</>
		)
	}
}

class P21 extends Component {
	render () {
		return (
			<>
Pour cette dernière journée complète en Corse nous nous sommes rendus sur le sentier du littoral près de Tizzano pour suivre le chemin qui mène au phare de Senetosa. Nous conseillons de ne pas y aller trop tard dans la matinée car la promenade est en plein soleil et il fait très chaud. Il faut compter environ 2h pour arriver au phare et 2h pour revenir au parking. L’idéal est de se garer sur le parking le plus proche du sentier pour éviter de rajouter de la marche en plus. Pour notre part nous nous sommes garés sur ce <CustomLink type="maps" link="https://www.google.com/maps/place/Parking/@41.5471677,8.8281059,20.41z/data=!4m13!1m7!3m6!1s0x0:0xc82c5675d7ac0bed!2zNDHCsDMyJzQ5LjkiTiA4wrA0OSc0MS43IkU!3b1!8m2!3d41.547181!4d8.828246!3m4!1s0x12dbb57bb4c5968b:0x282d341b26e1ea22!8m2!3d41.5471879!4d8.8280541" name="parking"/> et nous avons suivi les panneaux de la balade qui partent du parking. Le sentier est assez bien fléché, sinon nous avons également suivi le chemin tracé sur l'application Visorando de la balade qui s’appelle “Le phare de Senetosa”.
			</>
		)
	}
}

class P22 extends Component {
	render () {
		return (
			<>
Pour le déjeuner nous avons regardé les restaurants à Tizzano mais il était déjà tard dans l’après-midi et les seuls qui servaient encore étant assez cher nous avons repris la route vers Sartène. Nous nous sommes à nouveau arrêtés chez <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g644100-d4444594-Reviews-U_Sirenu-Sartene_Corse_du_Sud_Corsica.html" name="U Sirenu"/>. Nous avons goûté de nouveaux plats qui ont confirmé notre coup de cœur et nous avons fini l'après-midi à profiter de la piscine de l’hôtel.
			</>
		)
	}
}
