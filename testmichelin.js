const puppeteer = require('puppeteer');
var axios= require('axios');
const chateaux = require('./chateaux.json');
var url ="https://restaurant.michelin.fr/2ckuncq/michel-trama-puymirol";
const url_query = "https://restaurant.michelin.fr/index.php?q=search/autocomplete/";
const url_michelin = "https://restaurant.michelin.fr";
// console.log(chateaux.length);
// for(i in chateaux){
//     chateaux[i].test=i;
// }
// console.log(chateaux);


for(el in chateaux){
    var name = chateaux[el].nom.replace(/(^\w')/gi, "").toLowerCase();
    var encoded= encodeURI(name);
    console.log(encoded);

    var geturl=axios.get(url_query+encoded)
        .then(async response =>{
            var result_key = Object.keys(response.data).filter((element) => /poi/.test(element))[0];            
            var result = response.data[result_key];
            //console.log(result);
            if(typeof result!=undefined){
                var href = result.match(/href="(.+?)">/i)[1];
                restaurant.michelin_url = url_michelin + href;
                console.log("url: "+restaurant.michelin_url);
                // var michelin_url=url_michelin + href;
                
                return michelin_url;
                }
            else{
                // chateaux[el].michelin_url='';
                return '';
            }
        })
        .catch(error => {
            console.log(error.response);
            return 1;
          });

          chateaux[el].michelin_url=geturl;
        }
// console.log(chateaux);