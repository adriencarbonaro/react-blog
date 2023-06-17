import React from 'react';
import Article                from '../../Article';
import { Story } from "../../Story"
import { Subtitle, Title }    from "../../Titles"
import { BannerTitle }        from '../../BannerTitle';
import {
    PhotoGallery,
    PhotoSingle
}                             from '../../Photos';
import CustomLink from '../../CustomLink';
import SVGLocation from '../../SVGLocation'
import Consts                 from '../../../consts';

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Trips.css'

const PHOTOS = Consts.AWS_URL + "photos/trips/berlin/";

export default function Berlin (props) {
    const class_name = "berlin";
    return (
        <Article
          db={props.db}
          name={class_name}
          analytics={props.analytics}
          children={
            <>
                <BannerTitle title="Berlin" class={class_name} />
                <div class="trip-content">
                <SVGLocation className={class_name}/>
                <Title text="Trois jours à Berlin" />
                <Subtitle
                  text="Escapade dans la capitale allemande"
                  accent={class_name}
                />
                <Story
                    text={<P1/>}
                />
                <Subtitle text="Mercredi 31 octobre" accent={class_name} />
                <Story
                    text={<P2/>}
                />
                <Story text={<P3/>} />
                <PhotoSingle src={PHOTOS + "img-berlin-0.jpg"} />
                <Subtitle text="Jeudi 1er Novembre" accent={class_name} />
                <Story
                    text={<P4/>}
                />
                <PhotoGallery list={[[
                  PHOTOS + "img-berlin-1.jpg",
                  PHOTOS + "img-berlin-2.jpg",
                  PHOTOS + "img-berlin-3.jpg",
                ],[
                  PHOTOS + "img-berlin-4.jpg",
                  PHOTOS + "img-berlin-5.jpg",
                  PHOTOS + "img-berlin-6.jpg",
                ]]} />
                <Subtitle text="Vendredi 2 Novembre" accent={class_name} />
                <Story
                    text={<P5/>}
                />
                </div>
            </>
          }
        />
    )
}

function P1 () {
    return (
        <>
Arrivée très tardive le mardi 30 octobre au soir dans une auberge de jeunesse branchée, le <CustomLink type="hotel" link="https://www.st-christophers.co.uk/berlin/alexanderplatz-hostel" name="St Christopher’s Inns Berlin" />, dans le quartier Mitte.
Ambiance rock et globetrotter, elle est accolée au bar Belushi’s.
Malheureusement, plus de service de restauration à cette heure et tous les restaurants étant fermés nous nous sommes rabattus sur le premier kebab du coin qui ne payait clairement pas de mine …
C’est finalement le meilleur que nous ayons mangé, une tuerie ! Y’a pas à dire, les meilleurs kebabs sont bel et bien en Allemagne !
        </>
    )
}

function P2 () {
    return (
        <>
Après un copieux petit déjeuner à l’auberge de jeunesse, nous avons décidé de louer des vélos pour parcourir Berlin car la météo était au top. Nous sommes tout d’abord allés jusqu’à la Gendarmenmarkt qui se trouve au centre de Berlin. Sur cette place, deux cathédrales se font face (l’une française et l’autre allemande) puis le Konzerthaus (salle de concert) borde l’un des côtés. Il est possible de rentrer dans les cathédrales pour les visiter car ce sont aujourd’hui des musées.
Nous avons poursuivi notre promenade jusqu’au musée des Juifs situé dans le quartier de Kreuzberg. C’est un musée incroyable qui retrace sur 1700 ans l’histoire des juifs allemands. Nous avons notamment été frappés par l’exposition permanente au sous-sol qui est construite selon différents “axes” qui s’entrecroisent et symbolisent le destin des Juifs au XXe siècle.
        </>
    )
}

function P3 () {
    return (
        <>
Après cette première matinée remplie, direction Markethalle Neun pour la pause déjeuner. Il s’agit d’un grand hangar où se trouvent différents stands de street food et où l’on peut manger sur des longues tables au centre, étonnamment pas très touristique. Nous avons choisi de goûter les burger de chez <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187323-d11688849-Reviews-Kumpel_Keule-Berlin.html" name="Kumpel & Keule"/> qui sont super bons et en dessert nous avons craqué pour les crêpes d’un stand tenu par un français !
Puis l’après-midi nous avons à nouveau sillonné Berlin à vélo pour voir les incontournables de la ville : Checkpoint Charlie, le mémorial des juifs, la porte de Brandebourg ainsi que le <CustomLink type="monument" link="https://www.bundestag.de/fr/visite/coupole" name="Reichstag"/>. En ayant réservé avant, nous avons pu monter dans la coupole au sommet pour admirer le coucher de soleil sur la ville et notamment sur la porte qui se trouve juste en face, un magnifique spectacle !
Fatigués d’avoir pédalé toute la journée nous avons loué un scooter pour nous rendre au restaurant : le <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187323-d8273784-Reviews-Prater_Gaststatte-Berlin.html" name="Prater Biergarten"/>, une brasserie familiale typiquement allemande. Je ne me souviens que de la bière et du strudel aux pommes en dessert … c’était donc une super soirée
        </>
    )
}

function P4 () {
    return (
        <>
Nouveau petit déjeuner à l’auberge puis c’est reparti pour une journée à vélo. Nous avons pédalé jusqu’au musée “Topographie de la terreur”. Ce musée retrace l’histoire de l'Allemagne au XXe siècle et notamment la montée du nazisme. Pour le déjeuner, après avoir tenté notre chance dans plusieurs restaurants repérés sur internet qui se sont tous avérés fermés. Nous avons atterri par hasard dans un petit restaurant mexicain le <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187323-d1971892-Reviews-Santa_Maria-Berlin.html" name="Santa Maria"/> qui n’a absolument rien à envier aux autres, c’était super bon ! Il se trouve juste à côté du Mauerpark où nous nous sommes promenés avant de reprendre les vélos pour nous rendre jusqu’à l’East Side Gallery. Nous avons ensuite marché le long des vestiges du mur en admirant les différentes fresques. Le mur étant clairement sans fin, nous avons atterri dans le café du <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Hotel_Review-g187323-d15077735-Reviews-Schulz_Hotel_Berlin_Wall-Berlin.html" name="Shulz Hotel Berlin Wall"/> pour nous réchauffer et prendre un chocolat chaud le temps de souffler un peu avant de reprendre la route.
Sur les conseils du vendeur de crêpes français que nous avions rencontré la veille, nous sommes retournés à pied au marché couvert car le jeudi soir y est très animé. Sur le chemin, Adrien a atterri chez un coiffeur pas comme les autres dont il se souviendra pendant longtemps haha !
Nous sommes donc arrivés pile pour l’heure de l’apéro au Markethalle Neun où nous avons pris un verre de vin. Nouveau tour en scooter et traversée de Berlin de nuit, tout était illuminé c’était magnifique et nous avons été diner dans un restaurant italien <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187323-d7285098-Reviews-Vino_Basilico-Berlin.html" name="Vino & Basilico"/> proche de l’auberge de jeunesse.
        </>
    )
}

function P5 () {
    return (
        <>
Dernier jour à Berlin. Nous avons cette fois-ci passé la matinée sur l'île des musées qui se situe au centre de Berlin. Nous sommes montés en haut du Berliner Schloss afin d’avoir une belle vue sur l’île, l’esplanade au centre et les musées en face. Puis nous nous sommes promenés sur l’esplanade. Une ambiance très agréable, des gens qui bouquinent sur la pelouse, des musiciens qui jouent … comme un air de printemps au mois de novembre. Nous avons ensuite marché dans les rues et avons déjeuné chez <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187323-d715413-Reviews-Keyser_Soze-Berlin.html" name="Keyzer Soze"/>. Puis balade et shopping dans les rues aux alentours avant de retourner à l’auberge de jeunesse pour récupérer nos affaires et direction l’aéroport.
Berlin fut une très belle découverte. Cette ville détruite par l’histoire puis qui tente de se reconstruire depuis, qui oscille entre architecture très “impériale” puis “industrielle” a énormément à offrir. Elle est jeune, dynamique et regorge d’endroits insolites : on y retournera c’est sûr !
        </>
    )
}
