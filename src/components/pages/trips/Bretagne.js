import React                  from 'react';
import ComponentScrollTop     from '../../ComponentScrollTop';
import { Story }              from "../../Story"
import { BannerTitle }        from '../../BannerTitle';
import { Title, Subtitle }    from "../../Titles"
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

const PHOTOS = Consts.AWS_URL + "photos/trips/bretagne/";

export default function Bretagne (props) {
    const class_name = "bretagne";
    return (
        <ComponentScrollTop
          name={class_name}
          analytics={props.analytics}
          children={
            <>
                <BannerTitle title="Bretagne" class={class_name} />
                <div class="trip-content">
                <SVGLocation className={class_name}/>
                <Title text="Escapade bretonne durant l'été" />
                <Story text={<P1/>} />
                <Subtitle
                  text="Jour 1 : Vannes et la presqu'île de Quiberon"
                  accent={class_name}
                />
                <Story text={<P2/>} />
                <Story text={<P3/>} />
                <PhotoGallery list={[[
                  PHOTOS + "img-bretagne-2.jpg",
                  PHOTOS + "img-bretagne-1.jpg",
                  PHOTOS + "img-bretagne-3.jpg",
                ]]} />
                <Story text={<P4/>} />
                <PhotoGallery list={[[
                  PHOTOS + "img-bretagne-5.jpg",
                ], [
                  PHOTOS + "img-bretagne-6.jpg",
                  PHOTOS + "img-bretagne-7.jpg",
                ]]} />
                <Story text={<P5/>} />
                <Subtitle
                  text="Jour 2 : Dégustation d'huîtres, Damgan"
                  accent={class_name}
                />
                <Story text={<P6/>} />
                <Story text={<P7/>} />
                <PhotoTSide
                    src_side={PHOTOS + "img-bretagne-9.jpg"}
                    src_col_1={PHOTOS + "img-bretagne-10.jpg"}
                    src_col_2={PHOTOS + "img-bretagne-11.jpg"}
                />
                <Story text={<P8/>} />
                <PhotoGallery list={[[
                  PHOTOS + "img-bretagne-12.jpg",
                  PHOTOS + "img-bretagne-14.jpg",
                  PHOTOS + "img-bretagne-15.jpg",
                ]]} />
                <Subtitle
                  text="Jour 3 : Le Croisic et La Baule"
                  accent={class_name}
                />
                <Story text={<P9/>} />
                <Story text={<P10/>} />
                <Story text={<P11/>} />
                <PhotoGallery list={[[
                  PHOTOS + "img-bretagne-19.jpg",
                  PHOTOS + "img-bretagne-20.jpg",
                ], [
                  PHOTOS + "img-bretagne-16.jpg",
                ]]} />
                <Story text={<P12/>} />
                <Subtitle
                  text="Jour 4 : Guérande et le village de Kerhinet"
                  accent={class_name}
                />
                <Story text={<P13/>} />
                <PhotoGallery list={[[
                  PHOTOS + "img-bretagne-24.jpg",
                ], [
                  PHOTOS + "img-bretagne-25.jpg",
                  PHOTOS + "img-bretagne-26.jpg",
                  PHOTOS + "img-bretagne-27.jpg",
                ], [
                  PHOTOS + "img-bretagne-29.jpg",
                  PHOTOS + "img-bretagne-30.jpg",
                  PHOTOS + "img-bretagne-32.jpg",
                ]]} />
                <Subtitle
                  text="Jour 5 : Retour en passant par La Roche Bernard"
                  accent={class_name}
                />
                <Story text={<P14/>} />
                <PhotoGallery list={[[
                  PHOTOS + "img-bretagne-34.jpg",
                  PHOTOS + "img-bretagne-35.jpg",
                ], [
                  PHOTOS + "img-bretagne-33.jpg",
                ]]} />
                </div>
            </>
          }
        />
    )
}

function P1 () {
    return (
        <>
Pour les vacances d’été 2020, nous n’avions que très peu de congés et au vu de la situation sanitaire particulière, nous avons décidé de partir proche de chez nous quelques jours au début du mois de juillet.
Notre choix s’est porté sur le sud de la Bretagne.
Afin de voir un maximum de paysage, nous avons organisé un mini road-trip de quelques jours.
Nous avons séjourné d’abord à Vannes puis à La Baule, en visitant les alentours.
        </>
    )
}

function P2 () {
    return (
        <>
Pour les deux premières nuits du voyage, nous avons dormi au coeur de la vieille ville de Vannes dans cet <CustomLink type="airbnb" link="https://www.airbnb.fr/rooms/37268398?source_impression_id=p3_1642341754_UWq%2F3x3fQn8jzOgG" name="Airbnb"/>.
Il est parfaitement bien situé pour faire le tour du centre ville et accéder au port en quelques minutes à pied.
Il offre également une très belle vue sur la cathédrale.
Nous sommes arrivés la veille au soir afin d’avoir toute la journée pour profiter de la ville.
        </>
    )
}

function P3 () {
    return (
        <>
Le matin, après avoir testé les spécialités de <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g196537-d12885089-Reviews-La_Huche_a_Pain-Vannes_Morbihan_Brittany.html" name="La Ruche à Pain"/> pour le petit déjeuner, nous avons profité de la vieille ville en nous perdant dans les petites ruelles.
Pour le déjeuner, nous nous sommes rendus par hasard à la <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g196537-d2262415-Reviews-Creperie_Saint_Guenhael-Vannes_Morbihan_Brittany.html" name="crêperie Saint Guenhael"/> et nous avons adoré !
        </>
    )
}

function P4 () {
    return (
        <>
L’après-midi nous avons repris la voiture et nous nous sommes rendus sur la presqu’île de Quiberon.
Il faut compter environ 45 minutes de trajet depuis Vannes.
Nous nous sommes promenés le long de la côte sauvage à la pointe de la presqu’île.
Un sentier fléché et très bien entretenu permet de longer la côte.
Une promenade rythmée par le son des vagues qui viennent se briser contre les rochers.
Un spectacle magnifique.
        </>
    )
}

function P5 () {
    return (
        <>
Pour finir la journée, nous avons dîné sur le port de Vannes au restaurant <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g196537-d13447149-Reviews-L_Escale-Vannes_Morbihan_Brittany.html" name="L'Escale"/>.
Nous y avons partagé une planche mixte qui était correcte.
        </>
    )
}

function P6 () {
    return (
        <>
        <>
Avant de prendre la voiture pour continuer notre voyage, nous avons pris un petit déjeuner sur une terrasse de la place des Lices.
Nous avons également été nous promener aux Halles.
        </>
        </>
    )
}

function P7 () {
    return (
        <>
        <>
Pour le déjeuner, sur les recommandations d’une amie, nous avons dégusté des huîtres en direct chez l'ostréiculteur <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g425012-d14895982-Reviews-Maison_Jegat-Arradon_Morbihan_Brittany.html" name="Huître Jegat & dégustation"/> à Arradon, à une quizaine de minutes en voiture de Vannes.
Les propriétaires étaient de très bons conseils et les produits d’une grande qualité.
Nous vous recommandons de passer par ici si vous êtes amateurs d’huîtres ou si au contraire vous souhaitez tenter l’expérience pour la première fois avec de très bons produits. Nous avons profité du soleil sur la grande terrasse en bois située au-dessus du parc à huîtres.
Un très bon moment !
        </>
        </>
    )
}

function P8 () {
    return (
        <>
        <>
Après le repas, nous avons continué notre trajet en faisant une halte à Damgan.
Il ne faut pas hésiter à continuer la route jusqu’à la presqu’île car les paysages sont superbes.
Sur la petite place, nous avons été attirés par la boutique <CustomLink type="store" link="https://revesdebernique.bzh" name="Les Rêves de Berniques"/>.
On y trouve de nombreux objets de décorations issus du savoir-faire artisanal.
En suivant la rue du Port qui débouche sur l’eau, on peut admirer la petite église Saint-Pierre de Pénerf qui offre beaucoup de charme au paysage.
Dans la même rue, nous avons testé les crêpes au <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g1052501-d2140247-Reviews-Le_Cafe_Pecheur-Damgan_Morbihan_Brittany.html" name="Café Pêcheur"/>, un moment très sympa sur la terasse ensolleillée et animée par les passants.
        </>
        </>
    )
}

/** --- J3 _____ */
function P9 () {
    return (
        <>
        <>
Pour les trois prochains jours, nous avons logé dans cet <CustomLink type="airbnb" link="https://www.airbnb.fr/rooms/40695844?source_impression_id=p3_1642505608_VUyQl%2B0Ifl8jZtpm&guests=1&adults=1" name="Airbnb"/> proche de La Baule à Saint-André-des-Eaux.
C’est idéal pour profiter des villages aux alentours et se reposer sur la plage de La Baule en soirée.
        </>
        </>
    )
}

function P10 () {
    return (
        <>
        <>
Nous avons été passer la journée dans la jolie ville portuaire du Croisic située à la pointe à 20 min en voiture.
Une fois arrivé dans la ville, le mieux est de se garer sur le parking qui fait face à la poste.
Il est à l’entrée de la vieille ville.
La pointe du Croisic a pour particularité que la partie sud de la presqu’île est constituée principalement de falaises de granites, tandis que le nord a pu accueillir le port et la vieille ville.
Le matin nous nous sommes baladés dans la vieille ville que nous avons trouvé très mignonne et également le long du port qui est très animé.
Nous y avons déjeuné le midi, mais les touristes étant très nombreux nous avons été là où il restait de la place.
En haute saison, il ne faut pas hésiter à réserver à l’avance.
        </>
        </>
    )
}

function P11 () {
    return (
        <>
        <>
L’après-midi nous avons suivi le sentier qui longe la côte sauvage de l’autre côté.
En passant à l’Office du Tourisme dans la vieille ville, il est possible de récupérer des cartes qui balisent les balades à faire autour de la presqu’île.
En fin de journée nous sommes revenus près de La Baule pour la soirée.
        </>
        </>
    )
}

function P12 () {
    return (
        <>
        <>
Voici les lieux que nous avons testé à La Baule durant ces quelques jours :
<ul>
    <li>
<CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187194-d17540949-Reviews-B2B_The_Pizza_Bar-La_Baule_Escoublac_Loire_Atlantique_Pays_de_la_Loire.html" name="B2B Pizza Bar"/> : comme son nom l’indique il s’agit d’un lieu qui propose des parts de pizza à emporter, elles était délicieuses.
    </li>
    <li>
<CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187194-d19741344-Reviews-Mr_OLIVE_TRAITEUR_THAI-La_Baule_Escoublac_Loire_Atlantique_Pays_de_la_Loire.html" name="Mr Olive"/> : le lieu ne paye clairement pas de mine comme ça et est un peu en rentrait de la rue principale mais les produits sont très bons et les gérants très sympas.
    </li>
    <li>
<CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187194-d2308190-Reviews-Restaurant_Le_Ponton-La_Baule_Escoublac_Loire_Atlantique_Pays_de_la_Loire.html" name="Le Ponton"/> : apéro sur la plage avec les pieds dans le sable
    </li>
</ul>
        </>
        </>
    )
}

function P13 () {
    return (
        <>
        <>
Pour ce 4ème jour, nous nous sommes rendus à Guérande.
C’est une jolie cité médiévale connue notamment pour son sel qui est cultivé dans les marais salants aux alentours.
Nous nous sommes baladés dans les ruelles de la vieille ville et nous avons déjeuné dans la crêperie <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g668653-d3412413-Reviews-La_Saline-Guerande_Loire_Atlantique_Pays_de_la_Loire.html" name="La Saline"/> que nous avons apprécié.
L’après midi, nous sommes passés au <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Attraction_Review-g793711-d8737011-Reviews-Village_de_Kerhinet-Saint_Lyphard_Loire_Atlantique_Pays_de_la_Loire.html" name="Village de Kerhinet"/>. Il s’agit d’un village racheté par le Parc naturel régional de Brière où les chaumières ont été restaurées afin de montrer les habitations traditionnelles briéronnes. Il est possible de se promener gratuitement dans le village où l’on trouve des explications sur l’histoire de ce village et où l’on peut découvrir des produits d’artisans et de producteurs locaux.
        </>
        </>
    )
}

function P14 () {
    return (
        <>
        <>
Sur la route du retour, nous avons fait un petit stop à La Roche Bernard, un village plein de charme.
Un sentier fléché traverse la vieille ville et permet de visiter les alentours.
        </>
        </>
    )
}
