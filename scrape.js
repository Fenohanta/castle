const puppeteer = require('puppeteer');
var fs = require('fs');

(async () => {
 
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url =await page.goto(`https://www.relaischateaux.com/fr/destinations/europe/france`);
  await page.waitForSelector("div[class*=hotelQuick]");
 //détermination pages max
  
  const totalProprietes= await page.evaluate(() => {
  return  document.querySelector('h1').innerText;
  });
  var total=parseInt(totalProprietes);
  const pagesMax=Math.round(total/20);
  // const pagesMax=1;
  var hotelrest=[];
  var hotelrestdesc=[];
  var hotels=[];

  for(var p=1;p<=pagesMax;p++){
    const page = await browser.newPage();
    const url1 =await page.goto(`https://www.relaischateaux.com/fr/destinations/europe/france?page=${p}`);
    await page.waitForSelector("div[class*=hotelQuick]");

    liens =await page.evaluate(() => {
      var liensNode = document.querySelectorAll('#destinationResults > div[class*=hotelQuick]');
      const liensArray = [...liensNode];
      return liensArray.map(compact => ({
        nom: compact.querySelector("h3").innerText,
        href: compact.querySelector("h3").firstElementChild.href
      }))
    });
    hotelrest.push(...liens);

    desc =await page.evaluate(() => {
    var descNode = document.querySelectorAll('.propertyRoomFeatures>p');
    const descArray = [...descNode];
    return descArray.map(el => el.querySelector("strong").innerText);
  });
  hotelrestdesc.push(...desc);

  await page.close();
  }
  
  for(h=0;h<total;h++){
    if(hotelrestdesc[h].charAt(0)==="H"|| hotelrestdesc[h].charAt(14)==="h"){
      hotels.push(hotelrest[h]);
    }
  }
  var jSonHotels = JSON.stringify(hotels);
  obj = JSON.parse(jSonHotels);
  fs.writeFile("chateaux.json", jSonHotels, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});

    console.log(obj);
    await browser.close();
    

})();