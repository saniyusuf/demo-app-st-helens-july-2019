import { Component, OnInit } from '@angular/core';
import {Site} from '../../types/site';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public siteListData = sitesData;

  constructor() { }

  ngOnInit() {
  }

}

const sitesData: Site[] = [
  {
    id: "1",
    description:
      "Aching with the weight of history, Jerusalem has one of the world's most recognisable skylines, with the golden helmet of the Dome of the Rock glinting above the caramel-colored stone of the old city. This ancient city holds deep religious significance for all those of the monotheistic faiths, and the labyrinthine alleyways in the old district are packed with religious sites and mind-boggling history. Dodge the crowds of pilgrims and take a walk along the walls that still wrap around the old city. Explore the city's fabulous museums. And immerse yourself in the mazy lanes, which kings, Crusaders, and conquerors have all fought over. Jerusalem enchants and confounds in equal measures.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/telavivo%2Fimages%2Fisrael-jerusalem-skyline.jpg?alt=media\u0026token=dad485c2-5b1d-4042-ab6c-2b680ff3a95e",
    name: "Jerusalem"
  },
  {
    id: "2",
    description:
      "Jerusalem is all history. Tel Aviv is about modern dining and café culture. And Haifa just does its own thing. This lovely northern city's main highlight is the Baha'i Gardens which tumble down the hillside towards the sea in a series of immaculate green terraces. They're a must-do for all travelers here, but Haifa's big attraction for many visitors is that it's the perfect base to explore the north. Akko, Mount Carmel, and Caesarea are right on the doorstep, and even Nazareth and Megiddo could be easily done as a day trip from here. Hands down the most easygoing city in the country, Haifa should be part of everyone's itinerary.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/telavivo%2Fimages%2Fisrael-haifa-bahaii-gardens.jpg?alt=media\u0026token=b1b89f04-7b5c-433b-b273-1d9d2f69df1c",
    name: "Haifa"
  },
  {
    id: "3",
    description:
      "Forever linked to the Bible, Nazareth is one of the main pilgrimage destinations in the country. The holy sites here are some of the most important in the world for those of the Christian faith. This is where the Annunciation took place, and where Jesus Christ was brought up, and the center of town is home to important churches that celebrate this history. Don't miss the Basilica of the Annunciation and exploring the vibrant bazaar area, which adds some modern bustle to the twisty, old city lanes.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/telavivo%2Fimages%2Fisrael-nazareth-church-of-the-annunciation.jpg?alt=media\u0026token=4dc562eb-bc52-41cf-8387-3b317c1c437c",
    name: "Nazareth"
  },
  {
    id: "4",
    description:
      "A picturesque vision of honey-colored stone, Jaffa is a chilled-out little harbor town with an illustrious past as a major port. Made for aimless wandering and home to an excellent flea market, Jaffa provides an old-world style respite from the modern thrum of Tel Aviv next door. The muddle of lanes leading down to the sea, where once the great ships of the ancient Mediterranean empires docked, are now a haven for café-hopping and lazy afternoon sightseeing. All who visit soon succumb to its charms.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/telavivo%2Fimages%2Fisrael-jaffa-port-view.jpg?alt=media\u0026token=aa712a44-564c-4491-817f-04871d96818a",
    name: "Jaffa"
  },
  {
    id: "5",
    description:
      "The lowest point on earth and one of the world's most wacky natural wonders, the Dead Sea is the mineral-rich and overly salty sea where no one can sink. Locked in by the cliffs of the Great Rift Valley, this bizarre body of water (where natural buoyancy occurs due to the high salt content) has been wowing travelers for centuries. Take a float - you can't really sink - and you'll be won over as well.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/telavivo%2Fimages%2Fisrael-dead-sea-view.jpg?alt=media\u0026token=7f4bf12b-f57d-4d13-be21-52f51a1737db",
    name: "The Dead Sea"
  },
  {
    id: "6",
    description:
      "A major Christian pilgrimage center, Bethlehem is home to the Church of the Nativity, built over the site where Jesus Christ is said to have been born. The stately church complex with its far-reaching historical significance, and the busy market vibe of the bazaar make this the number one highlight of the West Bank. Although many travelers only come here as a day trip from Jerusalem, the town is an excellent place to base yourself for excursions into the surrounding countryside.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/telavivo%2Fimages%2Fpalestinian-territories-bethlehem-church-of-the-nativity.jpg?alt=media\u0026token=ac5600ed-0dd4-4083-93c7-d5b6ff4d4bff",
    name: "Bethlehem"
  },
  {
    id: "7",
    description:
      "Raw, rugged desert scenery at its best; Timna Park, near Eilat, is one of the most beautiful corners of the Negev. The landscapes here have a visceral quality, which enchant all who visit, with towering cliffs and surreally-shaped boulders set between vast tracts of multi-hued sand. Timna's copper mining history (which stretches back to the ancient Egyptians) is also worth exploring; the area is full of ancient mine shafts and rock inscriptions.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/telavivo%2Fimages%2Fisrael-timna-park-panorama.jpg?alt=media\u0026token=83c76842-4d05-422a-82ee-07e8a06689b3",
    name: "Timna Park"
  },
  {
    id: "8",
    description:
      "Gorgeous countryside and bags of history, the shoreline that wraps around the Sea of Galilee is packed full of attractions. Whether you're here to visit the churches of Tabgha, where Jesus delivered the Sermon on the Mount and carried out much of his preaching, or you just want to soak in the hot pools near Tiberias and do some hiking, this beautiful region is a major highlight of any trip. Don't miss taking a swim in the sea itself and soaking up the views across the lake on a hillside hike.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/telavivo%2Fimages%2Fisrael-sea-of-galilee-panorama.jpg?alt=media\u0026token=959e0888-4852-47b8-af63-f59c04c5be47",
    name: "Sea of Galilee"
  },
  {
    id: "9",
    description:
      "This mountaintop fortress, overlooking the Dead Sea, is home to incredible vistas and some fascinating history. This is where King Herod's once mighty palace stood and where the Zealots took their last stand against the Roman Legions. If you're up for a hike, the winding Snake Path is the perfect way of reaching the top with excellent panoramas all the way. Otherwise, take the cable car and see the views without the sweat.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/telavivo%2Fimages%2Fisrael-masada.jpg?alt=media\u0026token=704561ef-2bd2-4ff7-bad8-f7cb4905837c",
    name: "Masada"
  },
  {
    id: "10",
    description:
      "Mar Saba Monastery is an architectural marvel of the Byzantine age, precariously snuggled into the cliff face as if it had sprouted organically out of the sheer rock. Although female travelers are not allowed to actually enter the monastery, the view is enough of a reason to visit, with the metal domes glinting in the sun between the rock face. An easy day trip from Bethlehem or Jerusalem, Mar Saba Monastery is one of the Holy Land's great historic sites.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/telavivo%2Fimages%2Fpalestinian-territories-mar-saba-monastery.jpg?alt=media\u0026token=10d58775-2e50-4315-bbbb-ffa1d1027919",
    name: "Mar Saba Monastery"
  },
  {
    id: "11",
    description:
      "In a country full of ruins, Beit Shean stands out from the crowd for its excellent preservation. Here, you can get a real feel for the life of a Roman and Byzantine town with its colonnaded streets, well-restored theater, and extensive bath house remains. Stroll the once mighty streets, explore the extensive ruins, and sit in the theater where the Roman city's cultural life was played out. It's a fabulous slice of the ancient world that any history lover should see.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/telavivo%2Fimages%2Fisrael-beit-shean-ruins.jpg?alt=media\u0026token=071d4f48-fe6e-47d0-b567-83db0f4db5a2",
    name: "Beit Shean"
  },
  {
    id: "12",
    description:
      "Wrapped up in Crusader history, Akko (Acre to the Crusaders) has a mellow harbor full of colorful, bobbing fishing boats; a vibrant bazaar crammed with spice, produce, and interesting artisan products; and a truckload of history to boot. The city walls, old khans (caravanserais), and fort remnants speak of another age, when this town was the center of the empire. One of the most fun towns to explore (who doesn't like a secret tunnel?), Akko is a great mix of historic sites and modern life.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/telavivo%2Fimages%2Fisrael-akko-harbor-view.jpg?alt=media\u0026token=5490966f-de89-43e3-90c8-d7e454ed67de",
    name: "Akko"
  }
];
