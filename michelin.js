var fs = require('fs');
var axios= require('axios');
const puppeteer = require('puppeteer');
const chateaux = require('./chateaux.json');
const url_query = "https://restaurant.michelin.fr/index.php?q=search/autocomplete/";
const url_michelin = "https://restaurant.michelin.fr";

(async () => {
    const browser = await puppeteer.launch();

    for(el in chateaux){
        var name = chateaux[el].nom.replace(/(^\w')/gi, "").toLowerCase();
        var encoded= encodeURI(name);
        console.log(encoded);
    
        var restaurant={}
    
    
        chateaux[el].michelin=axios.get(url_query+encoded)
            .then(async response =>{
                var result_key = Object.keys(response.data).filter((element) => /poi/.test(element))[0];            
                var result = response.data[result_key];
                //console.log(result);
                if(typeof result!=undefined){
                    var href = result.match(/href="(.+?)">/i)[1];
                    restaurant.michelin_url = url_michelin + href;
                    console.log("url: "+restaurant.michelin_url);
                    // chateaux[el].michelin_url=url_michelin + href;

                    await page.goto(restaurant.michelin_url);
                    await page.waitForSelector("div.poi_card-display-stars");
    
                    restaurant_name_website = await page.evaluate(() => {
                        return  document.querySelector("h1.poi_intro-display-title ").innerText
                     });
                    // console.log("name"+restaurant_name_website);
    
                    if (restaurant_name === restaurant_name_website.toLowerCase()) {
                        restaurant.stars = await page.evaluate(selector => {
                          var stars = document.querySelector(selector);
                          if (!stars || !stars.innerText.includes("MICHELIN :")) return null;
                          else return stars.innerText.match(/\d/i)[0];
                        }, "#node_poi-guide-wrapper > div.node_poi-distinction-section > ul > li > div.content-wrapper");
                      }
                    }
                return url_michelin + href;
            })
            .catch(error => {
                console.log(error.response);
                return '';
              });
            
    }
    
    console.log(await chateaux);

    await browser.close();
    
})();


