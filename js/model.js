// Modell besteht aus Array von Locations mit Attributen

var myLocations = 
[
	{
		"bezeichnung":"Schloss Rapperswil",
        "beschreibung":"Es ist ein besonderer Ort, an dem man die hektische Welt ausserhalb der dicken Schlossmauern schnell vergisst. Konzerte geniessen, frischer Kaffeeduft, ...",
    	"adresse":"Lindenhügel 8640 Rapperswil",
    	"telefon":"0552101828",
       	"longitude":"8.815584",
    	"latitude":"47.227533",
    	"url":"http://www.schlossrapperswil.ch",
    	"email":"info@schlossrapperswil.com",
        "images": {
            "0": "schloss1.jpg",
            "1": "schloss2.jpg"
        }
    },
    
    {
        "bezeichnung":"Kusthaus Zuerich",
		"beschreibung":"Stetig wechselnde Ausstellungen mit hochqualitativen Meisterwerken aus aller Welt. Jedes Jahr mit vielen Großereignissen wie die aufregende und kontroverse Cindy Sherman-Ausstellung.",
    	"adresse":"Heimplatz 1, 8001 Zürich",
    	"telefon":"044 253 84 84",
       	"longitude":"8.548133",
    	"latitude":"47.370297",
    	"url":"http://www.kunsthaus.ch/",
    	"email":"info@kunsthaus.ch",
        "images": {
            "0": "schloss3.jpg",
            "1": "schloss2.jpg"
        }
    },

    {
        "bezeichnung":"Freiburger Münster",
        "beschreibung":"Das Freiburger Münster dient als Pfarr-, Stadt- und Bischofskircheund ist ein weithin sichtbares Wahrzeichen der Stadt Freiburg. Mit seinen 4 Orgeln besitzt es eine große Orgelanlage, die überregional und international bekannt und hoch beachtet ist",
        "adresse":"Münsterplatz, 79098 Freiburg im Breisgau",
        "telefon":"+49 761 2188243",
        "longitude":"7.852832",
        "latitude":"47.995567",
        "url":"http://www.freiburgermuenster.info/",
        "email":"pressestelle@ordinariat-freiburg.de",
        "images": {
            "0": "freiburg_muenster1.jpg",
            "1": "freiburg_muenster2.jpg"
        }
    }
    
];

var current = 0;

/*
 "longitude":"8.546794652938843",
 "latitude":"47.37633445120742",
 */

