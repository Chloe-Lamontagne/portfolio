

const app = {
    data(){
        return {
            envoye: false,
            ville: "",
            pay: "",

            latitude: "",
            longitude: "",

            image:"",

            temperature: "",
            temperature_ressenti: "",
            conditions: [],

            pluie: "",
            quantite_pluie: "",
            neige:"",
            quantite_neige:"",

            vitesse_vent:"",
            dirrection_vent: "",

            leve_soleil:"",
            couche_soleil:"",
            fuseau_horaire:"",
        }
    },

    mounted(){
        
    },
    
    methods: {
        soumettre(){

            if(this.ville != "" & this.pay != ""){
                this.envoye = true
                const url_lat_lon = "http://api.openweathermap.org/geo/1.0/direct?q="+ this.ville +","+ this.pay +"&limit=1&appid=bab0b4b05686341158d1b4a7c3b6df1d"
    
                fetch(url_lat_lon).then(resp => resp.json()).then(data => {
                    this.latitude = data[0].lat
                    this.longitude = data[0].lon
                    this.meteo()
                })
            }

        },

        meteo(){

            const weather = "http://api.openweathermap.org/data/2.5/weather?lat="+ this.latitude +"&lon="+ this.longitude +"&appid=bab0b4b05686341158d1b4a7c3b6df1d&lang=fr&units=metric"

            // const test_st_jerome = "exemples_json/exemple-st-jerome.json"
            // const test_new_york = "exemples_json/exemple-new-york.json"

            fetch(weather).then(resp => resp.json()).then(data => {
                
                this.temperature = data.main.temp
                this.temperature_ressenti = data.main.feels_like
                
                this.conditions = data.weather
                const icone = data.weather[0].icon
                this.image = "http://openweathermap.org/img/wn/"+ icone +"@2x.png"

                if(data.rain){
                    this.pluie = true
                    this.quantite_pluie = data.rain["1h"]
                } 

                if(data.snow){
                    this.neige = true
                    this.quantite_neige = data.snow["1h"]
                } 
                
                this.vitesse_vent = data.wind.speed
                const degre = data.wind.deg
                this.dirrection_vent = this.convertDegreToCardinal(degre)
                
                this.leve_soleil =  this.convertUnixTimestamp(data.sys.sunrise) 
                this.couche_soleil = this.convertUnixTimestamp(data.sys.sunset) 

                // Le fuseau horaire est en seconde
                // Pour avoir en heure, on divise par 60 deux fois
                // 60 x 60 = 3600
                this.fuseau_horaire = data.timezone/3600

                console.log(data.weather)
                
            })
        },

        convertUnixTimestamp(x){

            let unix_timestamp = x

            let date = new Date(unix_timestamp * 1000);

            let hours = date.getHours();

            let minutes = "0" + date.getMinutes(); 
            
            let formattedTime = hours + 'h' + minutes.substring(minutes.length-2)

            return formattedTime    
        },

        convertDegreToCardinal(angle){

           const degreePerDirection = 360 / 8;
         
           const offsetAngle = angle + degreePerDirection / 2;
         
           return (offsetAngle >= 0 * degreePerDirection && offsetAngle < 1 * degreePerDirection) ? "Nord"
             : (offsetAngle >= 1 * degreePerDirection && offsetAngle < 2 * degreePerDirection) ? "Nord-Est"
               : (offsetAngle >= 2 * degreePerDirection && offsetAngle < 3 * degreePerDirection) ? "Est"
                 : (offsetAngle >= 3 * degreePerDirection && offsetAngle < 4 * degreePerDirection) ? "Sud-Est"
                   : (offsetAngle >= 4 * degreePerDirection && offsetAngle < 5 * degreePerDirection) ? "Sud"
                     : (offsetAngle >= 5 * degreePerDirection && offsetAngle < 6 * degreePerDirection) ? "Sud-Ouest"
                       : (offsetAngle >= 6 * degreePerDirection && offsetAngle < 7 * degreePerDirection) ? "Ouest"
                         : "Nord-Ouest";
        },
        retour(){
            this.envoye = false
        }
    }
}

Vue.createApp(app).mount("#app")