const puppeteer = require('puppeteer');
var fs = require('fs');
var axios= require('axios');
const chateaux = require('./chateaux.json');


(async () => {
    const browser = await puppeteer.launch();

    var compteur=0;
    var restos=[];
    var resto=[];


    
    
    for(el in chateaux){
        const page = await browser.newPage();
        var replace=chateaux[el].nom;
        replace = replace.split(' ').slice(0,3).join('%20');
        
        
        
        // console.log(replace);
        const url= await page.goto(`https://restaurant.michelin.fr/index.php?q=search/autocomplete/`+replace);
        // await page.reload();
        // const poi= await page.evaluate(() => {
            //     return  document.querySelector('body').innerText;
            //     });
            
            return axios.get(url).then(async,response=>{
                console.log(response);
        
            })

    //     console.log(poi);
    //     if(poi.includes("poi")){
    //         console.log(poi);
    //     //   compteur++;
    //     //   console.log(compteur);
    //       var match1=poi.match(/href=.u0022..(.+?)[\/](.+?)u0022/gm)[1];
    //       var match2=poi.match(/href=.u0022..(.+?)[\/](.+?)u0022/gm)[2];
    //       console.log(match1+" "+match2);
    //       // restos.push(match);

    //     }
    //     else{
    //         restos.push(' ');
    //     }
    //     console.log("el"+restos[el]);
    //     await page.close();
    // }
    
    // for(i=0;i<restos.length;i++){
    //   var temp="";
    //     if(restos[i].includes("0022")){
    //       temp=restos[i].split("u0022",2);
    //       //temp=temp.split("/");
    //       var tempo=temp.replace("\/","/")
    //       resto[i]=tempo[1];
    //     }

    //     else{
    //       resto[i]=" ";
    //     }
      
        
        
        

        
    //     console.log(resto[i]);
    }
    


    await browser.close();
  })();