const id = "pamico3332@nic58.com";
const pw = "12345678";


const puppeteer = require("puppeteer");

// IIFE => Immediately Invoked Function Expressions

(async function(){
    try{
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
          });

          let pages = await browser.pages();
          let tab = pages[0];
          await tab.goto("https://www.hackerrank.com/auth/login");
          await tab.type("#input-1" , id);
          await tab.type("#input-2" , pw);
          await tab.click(".ui-btn.ui-btn-large.ui-btn-primary");
    }
    catch(error){
    }
})();


