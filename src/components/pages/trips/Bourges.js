import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';
import { Story } from "../../Story"
import { TitleBloc } from "../../TitleBloc"
import { Split } from "../../Split"
import { Component }         from 'react';
import { PhotoDuo, PhotoGallery, PhotoSingle, PhotoTSide } from '../../Photos';
import { ImagesBourges } from '../../../assets/ImagesBourges';
import { Images, Videos } from '../../../assets/Images';
import CustomLink from '../../CustomLink';
import SVGLocation from '../../SVGLocation';

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Trips.css'
import '../../../css/trips/Bourges.css'

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
							src={ImagesBourges.img_bourges_0}
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
					src_side={ImagesBourges.img_bourges_1}
					src_col_1={ImagesBourges.img_bourges_2}
					src_col_2={ImagesBourges.img_bourges_2}
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
					src_side={ImagesBourges.img_bourges_4}
					src_col_1={ImagesBourges.img_bourges_3}
					src_col_2={ImagesBourges.img_bourges_5}
				/>
				<PhotoGallery
					src_1={ImagesBourges.img_bourges_6}
					src_2={ImagesBourges.img_bourges_7}
					src_3={ImagesBourges.img_bourges_8}
				/>
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
					src_1={ImagesBourges.img_bourges_9}
					src_2={ImagesBourges.img_bourges_10}
				/>
				<div class="clip-cont">
<svg id="bf5f4b72-f966-4f0c-8662-2e23ed4682a3" data-name="svg8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.78 300.25">
	<defs>
		<linearGradient id="fa40f33f-969d-4820-927e-6523e9b3fb81" x1="-143" y1="776.76" x2="-143" y2="767.61" gradientTransform="matrix(3.78, 0, 0, -3.78, 687.61, 3030)" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#6a87aa"/>
			<stop offset="0.2" stop-color="#4b6c8b"/>
			<stop offset="0.8" stop-color="#4b6c8b"/>
			<stop offset="1" stop-color="#6a87aa"/>
		</linearGradient>
		<linearGradient id="f38986bc-14b9-4ea6-b7a6-aa599cec9f85" x1="-88.13" y1="773.68" x2="-88.13" y2="768.04" gradientTransform="matrix(3.78, 0, 0, -3.78, 335.6, 3010.28)"/>
		<linearGradient id="fbc32ce4-fe91-463a-9e58-c54811aa2a23" x1="-88.13" y1="784.6" x2="-88.13" y2="778.96" gradientTransform="matrix(3.78, 0, 0, -3.78, 335.6, 3080.31)"/>
		<linearGradient id="ab64b8e3-ce32-4811-b200-441e73c42a66" x1="-88.13" y1="765.4" x2="-88.13" y2="762.56" gradientTransform="matrix(3.78, 0, 0, -3.78, 335.15, 2957.06)"/>
		<clipPath id="b2f87afc-d4f4-482a-89d3-3fc621c74ce1" transform="translate(-0.45 -0.04)">
			<rect class="b33f95e7-f353-4468-b19b-b4150e0ff619" x="1.78" y="0.54" width="146.11" height="299.25" rx="22.86"/>
		</clipPath>
		<pattern id="f0dbff52-f30e-4d58-80db-36901c81b120" data-name="pattern3129" width="363" height="730" patternTransform="matrix(0.77, 0, 0, -0.77, -74.58, 928.92)" patternUnits="userSpaceOnUse" viewBox="0 0 363 730">
			<rect class="b33f95e7-f353-4468-b19b-b4150e0ff619" width="363" height="730"/>
		</pattern>
		<clipPath id="a5d3ae3a-ac4d-4e5a-8ea0-e72539194908" transform="translate(-0.45 -0.04)">
			<path class="b33f95e7-f353-4468-b19b-b4150e0ff619" d="M64.3,3a.9.9,0,0,0,0,1.79H85.37a.9.9,0,0,0,0-1.79Zm0,.07H85.37a.82.82,0,0,1,.83.82.83.83,0,0,1-.83.83H64.3a.82.82,0,0,1-.82-.83A.81.81,0,0,1,64.3,3.06Z"/>
		</clipPath>
	</defs>
	<g id="fdb73e5f-6047-4e3b-bd26-e53a83a485f9" data-name="layer2">
		<path id="be276c67-a432-4cdc-b5d0-c51444a2f547" data-name="rect2415-6-8" class="bc241e65-7c65-4e73-886c-4c75a8a235be" d="M145.41,93.79h3.48a.34.34,0,0,1,.34.33v34.64a.34.34,0,0,1-.34.33h-3.48a.33.33,0,0,1-.33-.33V94.12A.33.33,0,0,1,145.41,93.79Z" transform="translate(-0.45 -0.04)"/>
		<path id="bede70be-ba56-476a-96b6-7396eed791c6" data-name="rect2415-4-9-9" class="e0d4d255-f1de-440a-b5f3-43cf594c8dbc" d="M145.41,94.22h3.48a.34.34,0,0,1,.34.34v33.9a.34.34,0,0,1-.34.33h-3.48a.33.33,0,0,1-.33-.33V94.56A.34.34,0,0,1,145.41,94.22Z" transform="translate(-0.45 -0.04)"/>
		<path id="e3d1198f-7465-49a9-bc65-6d8a3a568c4e" data-name="rect2415-6" class="bc241e65-7c65-4e73-886c-4c75a8a235be" d="M.78,85.68H4.26a.34.34,0,0,1,.33.34v21.39a.33.33,0,0,1-.33.33H.78a.33.33,0,0,1-.33-.33V86A.33.33,0,0,1,.78,85.68Z" transform="translate(-0.45 -0.04)"/>
		<path id="b5da79b9-d947-4926-ae2d-9e37c8381d94" data-name="rect2415-4-9" class="b10b3181-1f4e-4cc1-bb7a-f2bb3dac7add" d="M.78,86.12H4.26a.33.33,0,0,1,.33.33v20.66a.33.33,0,0,1-.33.33H.78a.33.33,0,0,1-.33-.33V86.45A.33.33,0,0,1,.78,86.12Z" transform="translate(-0.45 -0.04)"/>
		<path id="bcba7dfb-0d27-4b26-bf12-612ca36eb409" data-name="rect2415-6-0" class="bc241e65-7c65-4e73-886c-4c75a8a235be" d="M.78,114.46H4.26a.34.34,0,0,1,.33.34v21.38a.34.34,0,0,1-.33.34H.78a.33.33,0,0,1-.33-.34V114.8A.33.33,0,0,1,.78,114.46Z" transform="translate(-0.45 -0.04)"/>
		<path id="bd5cd923-7e0d-4865-b5a5-b97297295fc2" data-name="rect2415-4-9-6" class="e34309e2-9975-4b17-9380-9d4308a624d6" d="M.78,114.9H4.26a.33.33,0,0,1,.33.33v20.65a.34.34,0,0,1-.33.34H.78a.33.33,0,0,1-.33-.34V115.23A.33.33,0,0,1,.78,114.9Z" transform="translate(-0.45 -0.04)"/>
		<rect id="fb9d8717-0c89-48e4-a09e-3f4c0a624b82" data-name="rect2415" class="bc241e65-7c65-4e73-886c-4c75a8a235be" y="63.8" width="4.15" height="11.46" rx="0.33"/>
		<rect id="ecd36bbf-2a23-44ca-bfb5-60f9ca693d9e" data-name="rect2415-4" class="e8e9f1be-980c-4b71-8470-36efc2e24518" y="64.23" width="4.15" height="10.73" rx="0.33"/>
		<rect id="aea1ca24-cb77-44b6-bdc1-0e40cbcb94f3" data-name="rect2163" class="e2b7c63c-9a2a-48f8-9a58-cfb5f60bc550" x="1.33" y="0.5" width="146.11" height="299.25" rx="22.86"/>
		<g class="ea46be31-014d-4f94-b8a6-41e2f0f01658">
			<path id="fb46742a-3ad2-4fd9-8c5a-1359da4e839d" data-name="rect2163-1" class="f78e789b-34c2-4d8a-bc9e-4500835dd9a4" d="M24.64,1.35a22,22,0,0,0-22.06,22V276.93A22,22,0,0,0,24.64,299H125a22,22,0,0,0,22.06-22.06V23.4A22,22,0,0,0,125,1.35Z" transform="translate(-0.45 -0.04)"/>
		</g>
		<path id="e0ddc157-7cbb-4316-a9b3-c6ae821b69e9" data-name="rect2172" class="ac182b60-9ae7-4db8-9082-b875a22ee4c9" d="M115.13.34V5.25h3.35V.34ZM1.57,30.19v3.35H148.1V30.19Zm0,237.13v3.35H148.1v-3.35ZM31.2,295.77V300h3.34v-4.23Z" transform="translate(-0.45 -0.04)"/>
		<rect id="fae0f3e7-d1ae-4145-9137-b564d9e03e1b" data-name="rect1093" x="61.4" y="2.28" width="25.99" height="2.07"/>
		<path id="b364ba46-0e3f-4e28-9d88-a877521e40b1" data-name="rect3540" class="e03411a1-ce31-4982-9410-11f8aebbcc00" d="M25,2.43A21.51,21.51,0,0,0,3.47,24V276.36A21.51,21.51,0,0,0,25,297.91h99.62a21.5,21.5,0,0,0,21.55-21.55V24A21.5,21.5,0,0,0,124.65,2.43H87.83a1,1,0,0,0-1,.94H62.79a1,1,0,0,0-.95-.94Z" transform="translate(-0.45 -0.04)"/>
		<circle id="fc510fa9-b7a9-4cad-956c-5f1d8764a59b" data-name="path5263" class="b2474f2d-4d93-47f4-885b-ec9cd1e0d3c1" cx="55.11" cy="11.09" r="2.35"/>
		<rect id="b11f4a45-c34a-49f8-8796-d472e2f2f61a" data-name="rect1030" class="af87f7ae-a2e2-4ee1-bff5-956982487fce" x="62.35" y="2.39" width="24.09" height="2.91" rx="0.95"/>
		<g id="a82ccb48-c070-44a0-a378-d14880d1d04d" data-name="g2819">
			<path id="b27a6500-5d39-4cb5-910a-bb51d1d64bf9" data-name="rect5261" class="fefb5543-944e-4642-8a79-a247ecd8a315" d="M64.3,3H85.36a.86.86,0,0,1,.86.86h0a.86.86,0,0,1-.86.87H64.3a.87.87,0,0,1-.86-.87h0A.87.87,0,0,1,64.3,3Z" transform="translate(-0.45 -0.04)"/>
			<path id="adca2fc9-67da-447c-9205-49e871572de6" data-name="rect5261-0" class="ab05fe26-5e3c-4fe2-a73a-7b369aaef36c" d="M64.3,3a.87.87,0,0,0,0,1.73H85.37a.87.87,0,0,0,0-1.73Z" transform="translate(-0.45 -0.04)"/>
			<g class="ac13ade0-ee19-45b5-9a29-e0c63bf448e6">
				<g id="afd13025-227d-438c-85bd-b066b1dba624" data-name="g2576">
					<path id="b8ebde1b-e326-4cb2-9f48-4686b4a4404b" data-name="path999-2" class="bdf402f8-1bed-4f50-8cde-a876b9fe024b" d="M86.23,3.89c0,.15-.09.27-.2.27s-.19-.12-.19-.27.09-.28.19-.28S86.23,3.73,86.23,3.89Z" transform="translate(-0.45 -0.04)"/>
					<path id="b8256e35-7230-4927-bcfa-077f066f2e6d" data-name="path999-2-2" class="bdf402f8-1bed-4f50-8cde-a876b9fe024b" d="M63.44,3.89c0,.15.09.27.2.27s.2-.12.2-.27-.09-.28-.2-.28S63.44,3.73,63.44,3.89Z" transform="translate(-0.45 -0.04)"/>
				</g>
			</g>
		</g>
		<path id="e2d14410-771d-402a-b5ac-6848ff62a26a" data-name="path998" class="bb58df6f-0ad3-41e8-9ddc-8fb28eb9e285" d="M24.45,7.17A15.65,15.65,0,0,0,8.8,22.82v254.7a15.65,15.65,0,0,0,15.65,15.65H125.22a15.65,15.65,0,0,0,15.65-15.65V22.82A15.65,15.65,0,0,0,125.22,7.17H105.13c-1.83,0-2.77.19-2.77,3.09s-1.8,7.79-8.23,7.79H55.55c-6.44,0-8.23-4.89-8.23-7.79s-1-3.09-2.78-3.09Z" transform="translate(-0.45 -0.04)"/>
	</g>
</svg>
				<video class="svg-clipped-text" id="video1" width="145" height="200" autoPlay loop>
					<source src="http://letellierstation.freeboxos.fr/assets/output.mp4" type="video/mp4"/>
				</video>
</div>
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
