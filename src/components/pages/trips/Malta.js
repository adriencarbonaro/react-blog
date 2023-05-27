import React                  from 'react';
import ComponentScrollTop     from '../../ComponentScrollTop';
import { Story }              from "../../Story"
import { Subtitle, Title }    from "../../Titles"
import { PhotoGallery }       from '../../Photos';
import {
    AirbnbLink,
    TripAdvisorLink
}                             from '../../CustomLink';
import SVGLocation            from '../../SVGLocation'
import Consts                 from '../../../consts';

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Trips.css'
import { BannerTitle } from '../../BannerTitle';

const PHOTOS = Consts.AWS_URL + "photos/trips/malta/";

export default function Malta (props) {
    const class_name = "malta";
    return (
        <ComponentScrollTop
          name={class_name}
          analytics={props.analytics}
          children={
            <>
                <BannerTitle title="Malte" class={class_name} />
                <div class="trip-content">
                <SVGLocation className={class_name}/>
                <Title text="Un séjour à Malte" />
                <Story text={<P1/>} />
                <Story text={<P2/>} />
                <Story text={<P3/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-63.jpg"
                ]]}/>
                <Title text="Que faire et voir à Gozo ?" />
                <Story text={<P4/>} />
                <Story text={<P5/>} />
                <Subtitle
                  text="La plage de Ramla et sa grotte"
                  accent={class_name}
                />
                <Story text={<P6/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-02.jpg",
                  PHOTOS + "Malte-03.jpg",
                ]]} />
                <Subtitle
                  text="Les falaises de Ta' Ċenċ"
                  accent={class_name}
                />
                <Story text={<P7/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-06.jpg",
                  PHOTOS + "Malte-10.jpg",
                ]]} />
                <Subtitle
                  text="La basilique Ta' Pinu de Gharb"
                  accent={class_name}
                />
                <Story text={<P8/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-11.jpg",
                  PHOTOS + "Malte-22.jpg",
                ]]} />
                <Subtitle
                  text="Wied Il-Mielaħ, Wied il-Għasri et les salines"
                  accent={class_name}
                />
                <Story text={<P9/>} />
                <Story text={<P10/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-24.jpg",
                  PHOTOS + "Malte-26.jpg",
                  PHOTOS + "Malte-25.jpg",
                ], [
                  PHOTOS + "Malte-33.jpg",
                  PHOTOS + "Malte-45.jpg",
                  PHOTOS + "Malte-48.jpg",
                ]]} />
                <Subtitle text="La citadelle" accent={class_name} />
                <Story text={<P11/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-54.jpg",
                  PHOTOS + "Malte-55.jpg",
                  PHOTOS + "Malte-57.jpg",
                ]]} />
                <Story text={<P12/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-23.jpg",
                ]]} />
                <Title text="Que voir et que faire à Malte ?" />
                <Subtitle text="La Valette et les Trois Cités" accent={class_name} />
                <Story text={<P13/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-65.jpg",
                  PHOTOS + "Malte-69.jpg",
                ]]} />
                <Story text={<P14/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-59.jpg",
                  PHOTOS + "Malte-61.jpg",
                ],[
                  PHOTOS + "Malte-60.jpg",
                ]]} />
                <Subtitle text="Où manger et boire un verre à La Valette ?" accent={class_name} />
                <Story text={<P15/>} />
                <Story text={<P16/>} />
                <Story text={<P17/>} />
                <Subtitle text="Où manger et boire un verre sur les Trois Cités ?" accent={class_name} />
                <Story text={<P18/>} />
                <Story text={<P19/>} />
                <Story text={<P20/>} />
                <Subtitle text="Le village de Popeye" accent={class_name} />
                <Story text={<P21/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-70.jpg",
                ], [
                  PHOTOS + "Malte-72.jpg",
                  PHOTOS + "Malte-73.jpg",
                ]]} />
                <Subtitle text="Les plages : Golden Bay et Ghajn Tuffieha" accent={class_name} />
                <Story text={<P22/>} />
                <Story text={<P23/>} />
                <Story text={<P24/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-103.jpg",
                ]]} />
                <Subtitle subtitle="Marsaxlokk" accent={class_name} />
                <Story text={<P25/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-74.jpg",
                  PHOTOS + "Malte-76.jpg",
                  PHOTOS + "Malte-75.jpg",
                ]]} />
                <Subtitle text="St Peter's Pool" accent={class_name} />
                <Story text={<P26/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-78.jpg",
                  PHOTOS + "Malte-81.jpg",
                ], [
                  PHOTOS + "Malte-83.jpg",
                ]]} />
                <Subtitle text="Dingli cliffs" accent={class_name} />
                <Story text={<P27/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-85.jpg",
                  PHOTOS + "Malte-88.jpg",
                ], [
                  PHOTOS + "Malte-90.jpg",
                ]]} />
                <Subtitle text="L-Imdina" accent={class_name} />
                <Story text={<P28/>} />
                <Story text={<P29/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-97.jpg",
                  PHOTOS + "Malte-99.jpg",
                  PHOTOS + "Malte-102.jpg",
                ]]} />
                <Title text="Que voir à Comino ?" />
                <Subtitle text="Le Blue lagoon" accent={class_name} />
                <Story text={<P30/>} />
                <PhotoGallery list={[[
                  PHOTOS + "Malte-93.jpg",
                  PHOTOS + "Malte-95.jpg",
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
Malte est située au milieu de la mer Méditerranée, à quelques kilomètres au sud de la Sicile. L'archipel est constitué de plusieurs îles : Malte, la principale, où se trouve sa capitale La Valette, ainsi que Gozo et Comino, deux petites îles accessibles en ferry. L'île se visite de mai à septembre, mais la température étant très élevée l'été, la période idéale s'étend réellement d'avril à juin.
        </>
    )
}

function P2 () {
    return (
        <>
Bien qu'elle soit petite (elle se traverse en une heure de voiture), Malte regorge de lieux magnifiques et insolites qui valent le détour. Elle est assez bien desservie par les bus mais nous avons choisi de louer une voiture afin d'être le plus libre possible dans nos déplacements, et nous recommandons cette option afin de pouvoir découvrir tous les recoins de l'archipel.
        </>
    )
}

function P3 () {
    return (
        <>
Notre séjour a commencé sur l'île de Gozo où nous avons passé le week-end. Nous sommes ensuite revenus sur Malte pour la semaine.
        </>
    )
}

function P4 () {
    return (
        <>
L'île de Gozo, située au nord de Malte, est moins fréquentée par les touristes que l'île principale, ce qui la rend plus authentique et préservée. Elle est accessible en ferry en 25 à 45 minutes depuis La Valette ou Cirkewwa. Les billets s'achètent directement au guichet et se paient uniquement lors du retour. Il faut compter quelques euros pour un aller-retour piéton et environ 20€ pour une voiture et 2 passagers (le prix varie en fonction des compagnies).
        </>
    )
}

function P5 () {
    return (
        <>
Il n'y a pas de lieu “idéal” pour loger car tout est très accessible. Nous avons logé dans cet <AirbnbLink name="Airbnb" link="https://www.airbnb.fr/trips/v1/bdb952d8-7644-4734-82d4-9cb2c9382914/ro/RESERVATION2_CHECKIN/HMKD3D3E2R"/> que nous recommandons vivement. Il est situé dans un quartier tranquille et l'hôte qui habite à côté est adorable. Les deux nuits que nous avons passées sur l'île étaient suffisantes pour visiter les lieux incontournables des environs. La fréquentation étant plus élevée en été, il ne faut pas hésiter à se lever tôt pour éviter la foule, mais également la chaleur en pleine journée.
        </>
    )
}

function P6 () {
    return (
        <>
La plage de Ramla possède un sable rouge qui lui donne un cachet unique. Une fois avoir suffisamment lézardé au soleil, la meilleure partie reste à venir : prendre de la hauteur et monter à la grotte Tal-Mixta. Il est possible de s'y rendre à pieds depuis la plage ou de reprendre la voiture atteindre ce point de vue situé un peu plus haut. Enfin, descendre quelques marches (attention ça glisse !) pour arriver dans ce lieu insolite qui offre un spot incroyable sur la plage et les falaises.
        </>
    )
}

function P7 () {
    return (
        <>
Quoi de mieux en vacances que d'admirer le coucher du soleil ? Les falaises de Ta' Ċenċ en sont le lieu idéal à Gozo ! Accessibles via un petit chemin le long de la côte, elles sont très impressionnantes (attention si vous avez le vertige) et offrent une vue sur la mer à couper le souffle.
        </>
    )
}

function P8 () {
    return (
        <>
Il y a beaucoup d'églises et de chapelles sur l'île mais la basilique Notre-Dame Ta' Pinu de Gharb est l'une des églises les plus connues de Gozo. Situé au bord de la route, l'édifice dégage une force impressionnante. Autrefois une simple chapelle, selon la légende, une habitante de l'île y aurait entendu la vierge Marie. Depuis, l'édifice a pris de l'ampleur et on dit que des miracles y ont été vus ce qui en fait aujourd'hui un haut lieu de pèlerinage.
        </>
    )
}

function P9 () {
    return (
        <>
Nous avons choisi de regrouper ces trois endroits dans la même partie car ils sont situés proches les uns des autres et peuvent se visiter à la suite par une balade le long de la côte.
        </>
    )
}

function P10 () {
    return (
        <>
Nous avons débuté notre parcours par Wied Il-Mielaħ, une arche naturelle située au-dessus de la mer. Une fois arrivé sur le lieu, il suffit de descendre quelques marches d'escalier afin de se retrouver au plus près de l'arche et des vagues. Par la suite, vous pouvez longer la côte pour arriver au deuxième spot : Wied Il-Għasri, une calanque aux eaux turquoises et peu profondes. Ce petit coin est accessible facilement par des escaliers taillés dans la roche. Une atmosphère très calme et reposante s'en dégage. Et enfin pour finir cette balade en beauté, rendez-vous aux marais salants de Marsalforn pour y admirer le coucher du soleil. Ces salines sont très fréquentées par les locaux qui y récoltent le sel de la mer que l'on peut acheter directement là bas !
        </>
    )
}

function P11 () {
    return (
        <>
On ne peut pas séjourner à Gozo sans passer par la Citadelle située au centre de la capitale de l'île (Ir-Rabat), une ancienne cité médiévale fortifiée qui surplombe la ville. La balade sur les remparts et dans les ruelles nous plonge dans une atmosphère particulière et offre de beaux points de vue sur les alentours. L'entrée est gratuite.
        </>
    )
}

function P12 () {
    return (
        <>
Si la faim se fait ressentir, nous avons d'ailleurs testé un petit restaurant quelques rues en dessous de la Citadelle : <TripAdvisorLink name="Chapeau Gozo" link="https://www.tripadvisor.com/Restaurant_Review-g190317-d2716031-Reviews-Cup_Cake-Victoria_Island_of_Gozo.html"/>. La devanture ne paye pas de mine mais nous y avons pris un très bon petit déjeuner et bu un excellent matcha glacé !
        </>
    )
}

function P13 () {
    return (
        <>
Pour un séjour sur Malte, passage obligé par sa capitale : La Valette, située sur la côte nord-est de l'île. Sa concentration exceptionnelle en monuments historiques ainsi qu'en musées a permis à la ville d'être inscrite au patrimoine mondial de l'UNESCO et également d'être élue capitale européenne de la culture en 2018. En dehors des nombreux musées qu'elle abrite, il ne faut pas hésiter à se perdre dans ses petites ruelles pavées pleines de charme (et d'escaliers !).
        </>
    )
}

function P14 () {
    return (
        <>
Pour compléter la visite de la ville, l'un des joyaux historiques de Malte sont les Trois Cités qui font face à La Valette, j'ai nommé : Senglea, Vittoriosa et Cospicua. Ces cités, toutes aussi belles que la capitale mais plus calmes, sont accessibles par bateau depuis la ville mais également par la route. Nous avons d'ailleurs choisi de séjourner dans un logement à Vittoriosa, nous permettant ainsi d'être au cœur de la ville sans avoir la foule quotidienne qui peut être présente à La Valette.
        </>
    )
}

function P15 () {
    return (
        <>
<TripAdvisorLink name="Kingsway Bar & Café" link="https://www.tripadvisor.fr/Restaurant_Review-g190328-d12496609-Reviews-Kingsway-Valletta_Island_of_Malta.html"/> : Nous avons pris un excellent petit déjeuner dans ce café situé sous les arcades à proximité du palais. Bien qu'il fasse très chic, les prix sont abordables.
        </>
    )
}

function P16 () {
    return (
        <>
<TripAdvisorLink name="Café Jubilee" link="https://www.tripadvisor.fr/Restaurant_Review-g190328-d1379139-Reviews-Cafe_Jubilee_Valletta-Valletta_Island_of_Malta.html"/> : Petite pause au frais dans ce pub irlandais éloigné de la foule.
        </>
    )
}

function P17 () {
    return (
        <>
<TripAdvisorLink name="Taste" link="https://www.tripadvisor.fr/Restaurant_Review-g190328-d19601510-Reviews-Taste-Valletta_Island_of_Malta.html"/> : Découvert par hasard dans une petite ruelle de la ville aux décorations atypiques, ce restaurant aux allures de cave à vin offre des plats élaborés très bons dans un cadre magnifique.
        </>
    )
}

function P18 () {
    return (
        <>
<TripAdvisorLink name="DATE (Art Café)" link="https://www.tripadvisor.com/Restaurant_Review-g1748965-d23842023-Reviews-Date_Art_Cafe-Cospicua_Bormla_Island_of_Malta.html"/> : Ce café fût une très belle découverte durant notre séjour. La terrasse, située sur des grandes marches, est composée de gros coussins, idéal pour se reposer après une chaude journée et admirer le port. Notre logement se trouvant quelques rues au-dessus, nous y avons passé plusieurs soirées !
        </>
    )
}

function P19 () {
    return (
        <>
<TripAdvisorLink name="Café Rouge" link="https://www.tripadvisor.fr/Restaurant_Review-g1748965-d7344316-Reviews-Cafe_Rouge-Cospicua_Bormla_Island_of_Malta.html"/> : Ce café n'est pas un vrai coup de cœur mais il a le mérite d'offrir des petits déjeuners (ce qui était dur à trouver) et ce jusque tard dans la matinée. L'ambiance est sympa et les plats assez bons (majoritairement des petits déjeuners salés).
        </>
    )
}

function P20 () {
    return (
        <>
<TripAdvisorLink name="Café Riche" link="https://www.tripadvisor.fr/Restaurant_Review-g674784-d8832247-Reviews-Cafe_Riche-Birgu_Vittoriosa_Island_of_Malta.html"/> : Nous sommes tombés sur ce restaurant un soir. Il était réservé pour une fête de famille mais nous avons pu prendre une boîte de spécialités maltaise à emporter et tout était délicieux !
        </>
    )
}

function P21 () {
    return (
        <>
Ce joli village est en réalité un décor qui a servi au tournage de la comédie musicale Popeye. Il est aujourd'hui devenu un musée à ciel ouvert. Nous n'avons pas été le visiter mais un passage sur les côtes en face vaut le détour afin d'admirer la beauté du lieu et de prendre de jolies photos.
        </>
    )
}

function P22 () {
    return (
        <>
Durant notre séjour nous avons testé deux plages que nous avons beaucoup aimé. Golden Bay est comme son nom l'indique une plage de sable doré où l'eau est claire et sans cailloux. Elle reste néanmoins assez touristique notamment dû au grand hôtel qui la surplombe et enlève ainsi un peu d'authenticité. Nous conseillons de venir assez tôt afin de profiter des lieux plus paisiblement.
        </>
    )
}

function P23 () {
    return (
        <>
La deuxième plage qui est Ghajn Tuffieha est notre préférée. Elle est accessible par un grand escalier en pierre, et bien que son sable soit un peu moins beau que la première, la baignade y est encore plus agréable ! L'eau est peu profonde durant de nombreux mètres et chaude.
        </>
    )
}

function P24 () {
    return (
        <>
Sur ces deux plages il est possible de louer des transats et des parasols à la journée.
        </>
    )
}

function P25 () {
    return (
        <>
Changement de décors avec cette authentique ville côtière très connue pour son marché aux poissons. Son port de pêche est encore préservé des constructions modernes touristiques, ce qui lui donne beaucoup de charme. La visite n'est pas très longue, l'idéal est de se balader au bord de l'eau et d'observer les marins qui reviennent de la pêche ainsi que les nombreux bâteaux aux couleurs vives qui sont amarrés. Et pour découvrir le marché, rendez-vous le dimanche matin de bonne heure !
        </>
    )
}

function P26 () {
    return (
        <>
Juste à côté de Marsaxlokk se trouve la célèbre St Peter's Pool. Cette piscine naturelle offre un spot incroyable pour faire du snorkeling ainsi que des sauts dans l'eau. L'entrée coûte quelques euros et il faut venir tôt si l'on veut trouver de la place pour se poser. De plus, il ne faut pas hésiter à s'arrêter sur la route qui mène au site pour contempler les magnifiques points de vue qui s'offrent sur la mer.
        </>
    )
}

function P27 () {
    return (
        <>
De nouvelles falaises idéales pour admirer le coucher du soleil. Elles sont accessibles en quelques minutes depuis le bord de la route. Nous nous y sommes rendus à plusieurs reprises afin de dénicher l'endroit idéal et nous vous conseillons de vous garer près de l'arrêt de bus “Zuta” et de marcher vers les rochers.
        </>
    )
}

function P28 () {
    return (
        <>
L-Imdina aussi surnommée “La cité silencieuse”  est l'un des sites incontournables de Malte. En entrant dans la cité, nous pouvons voir qu'elle porte bien son nom puisque nous sommes plongés dans une atmosphère calme et paisible.  En y allant tôt le matin, nous avons le sentiment d'être seuls au monde.
        </>
    )
}

function P29 () {
    return (
        <>
Aux abords de la cité, nous avons petit-déjeuné dans un café que nous avons adoré : <TripAdvisorLink name="Ta' Doni" link="https://www.tripadvisor.fr/Restaurant_Review-g190326-d10077333-Reviews-Ta_Doni-Rabat_Island_of_Malta.html"/>.
        </>
    )
}

function P30 () {
    return (
        <>
Pour notre dernier jour sur l'archipel, nous nous sommes rendus sur Comino. A la différence de Gozo, l'île de Comino est beaucoup plus petite et il n'est pas possible d'y aller en voiture. On y accède par des petits bâteaux et pour la journée uniquement (un seul hôtel est présent sur l'île). Le point fort de cette île est son lagon aux couleurs bleu turquoise. Nous avons beaucoup hésité à nous y rendre car la foule estivale très importante sur l'île la journée rend les lieux beaucoup moins authentiques. Nous avons finalement fait le choix d'y aller mais très tôt le matin (nous avons pris le premier bâteau) et le spectacle était au rendez-vous. Notre conseil est donc d'y aller très tôt car en fin de matinée l'ambiance n'est pas du tout la même et le lieu ne vaut selon nous plus vraiment le détour.
        </>
    )
}
