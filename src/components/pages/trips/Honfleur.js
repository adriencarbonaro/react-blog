import React                  from 'react';
import ComponentScrollTop     from '../../ComponentScrollTop';
import { Story }              from "../../Story"
import { BannerTitle }        from '../../BannerTitle';
import { Title, Subtitle }    from "../../Titles"
import {
    PhotoGallery,
}                             from '../../Photos';
import CustomLink             from '../../CustomLink';
import SVGLocation            from '../../SVGLocation'
import Consts                 from '../../../consts';

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Trips.css'

const PHOTOS = Consts.AWS_URL + "photos/trips/honfleur/";

export default function Honfleur (props) {
    const class_name = "honfleur";
    return (
        <ComponentScrollTop
          name={class_name}
          analytics={props.analytics}
          children={
            <>
            <BannerTitle title="Honfleur" class={class_name} />
                <div class="trip-content">
                <SVGLocation className={class_name}/>
                <Title text="Petite pause à Honfleur" />
                <Story text={<P1/>} />
                <PhotoGallery list={[[
                  PHOTOS + "img-honfleur-7.jpg",
                ]]} />
                <Story text={<P2/>} />
                <Subtitle text="Que faire à Honfleur" accent={class_name} />
                <Subtitle
                  text="Flâner autour du Vieux Bassin"
                  accent={class_name}
                />
                <Story text={<P3/>} />
                <PhotoGallery list={[[
                  PHOTOS + "img-honfleur-3.jpg",
                  PHOTOS + "img-honfleur-5.jpg",
                ]]} />
                <Subtitle
                  text="Se balader dans la vieille ville"
                  accent={class_name}
                />
                <Story text={<P4/>} />
                <Story text={<P5/>} />
                <PhotoGallery list={[[
                  PHOTOS + "img-honfleur-2.jpg",
                  PHOTOS + "img-honfleur-4.jpg",
                  PHOTOS + "img-honfleur-6.jpg",
                ]]} />
                <Subtitle
                  text="Visiter le Musée Eugène Boudin"
                  accent={class_name}
                />
                <Story text={<P6/>} />
                <Subtitle
                  text="Se promener dans le Jardin des Personnalités"
                  accent={class_name}
                />
                <Story text={<P7/>} />
                </div>
            </>
          }
        />
    )
}

function P1 () {
    return (
        <>
Non loin de Trouville et Deauville se trouve la célèbre petite ville de Honfleur. Vous y trouverez un port de pêche très mignon et une vieille ville pleine de charme. C’est ici que de nombreux artistes venaient se ressourcer et chercher de l’inspiration à partir du 18e siècle. On distingue parmi eux notamment les peintres Eugène Boudin et Claude Monet mais également l’écrivain Charles Baudelaire.
        </>
    )
}

function P2 () {
    return (
        <>
Nous avons logé dans cet <CustomLink type="airbnb" link="https://www.airbnb.fr/rooms/3884217?source_impression_id=p3_1642337903_us4wlF05uTM3ywO%2F&guests=1&adults=1" name="Airbnb"/> très charmant au cœur de la vieille ville, avec un très bon rapport qualité/prix. Il est parfait pour pouvoir visiter les alentours à pied et la vue sur la mer est incroyable.
        </>
    )
}

function P3 () {
    return (
        <>
Typique de la ville d’Honfleur, c’est ce que l’on voit en premier en arrivant dans la ville. Le port et les vieilles maisons pittoresques toutes accolées les unes aux autres offrent un charme indéniable.
        </>
    )
}

function P4 () {
    return (
        <>
N’ayez pas peur de vous perdre dans les petites ruelles de la vieille ville qui est très bien conservée. Vous passerez notamment devant l’église <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Attraction_Review-g187189-d196471-Reviews-Saint_Catherine_s_Church-Honfleur_Calvados_Basse_Normandie_Normandy.html " name="Sainte Catherine" /> au centre. Elle doit son charme au fait qu’elle a été construite par les habitants de la ville, entièrement en bois et suivant les règles de la construction navale. Son clocher est détaché et se trouve quelques mètres à côté. Il ne faut pas hésiter à visiter l’intérieur qui est tout aussi joli. Nous étions de passage durant le mois de décembre et nous avons pu admirer la crèche géante qui trônait au fond près de l’autel, c’était un moment magique.
        </>
    )
}

function P5 () {
    return (
        <>
Côté restauration, nous avons déjeuné chez <CustomLink type="tripadvisor" link="https://www.tripadvisor.fr/Restaurant_Review-g187189-d2178765-Reviews-Le_Bistrot_a_Crepes-Honfleur_Calvados_Basse_Normandie_Normandy.html " name="Le Bistrot à Crêpes" />, une crêperie très sympa.
        </>
    )
}

function P6 () {
    return (
        <>
Au centre de la vieille ville, il présente une collection d'œuvres des artistes de Honfleur et des peintures léguées par Eugène Boudin.
        </>
    )
}

function P7 () {
    return (
        <>
Assez excentré de la vieille ville, ce jardin très reposant se trouve juste à côté de la plage. On y croise des bustes de personnalités ayant marqué l’histoire de Honfleur (peintres, écrivains, navigateurs). Plusieurs animations y sont organisées durant l’année. Après une ballade dans le jardin, nous avons fini cette matinée sur la plage qui offre une belle vue sur le Pont de Normandie.
        </>
    )
}
