const {Router}= require('express');
const router = Router();
//Obtener datos de endPint
const endPint = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';
/*
let response;
const http = new XMLHttpRequest();
http.open("GET",endPint);
http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status ==200){
        response= JSON.parse(this.responseText)
        console.log(`resultado ${response}`);
    }
}
*/


//Prueba temporal
let datos = [{
    "_id":"5952983359954a0adbf7ab09",
    "cityid":"MXAS0002",
    "validdateutc":"20170627T140000Z",
    "winddirectioncardinal":"SSE",
    "probabilityofprecip":"40",
    "relativehumidity":"90",
    "name":"Aguascalientes",
    "date-insert":"2017-06-27T17:36:43.084Z",
    "longitude":"-102.296",
    "state":"Aguascalientes",
    "lastreporttime":"20170627T092449Z",
    "skydescriptionlong":"Tormentas dispersas",
    "stateabbr":"AGU",
    "tempc":"17",
    "latitude":"21.87982",
    "iconcode":"96",
    "windspeedkm":"6"
 }];

router.get('/', (req , res) =>{

res.render('datos',{datos});

})

module.exports =router;