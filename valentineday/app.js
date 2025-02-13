const facts = [  
    "ကျွန်ုပ်တို့အချင်းချင်း ဘယ်အခါမဆိုထောက်ခံပံ့ပိုးပေးကြပါတယ်!",
    "ကျွန်ုပ်တို့မှာ အရမ်းစိတ်ဝင်စားစရာကောင်းတဲ့ အတွင်စကားတွေ ပြောလေ့ရှိတယ်!",
    "ကျွန်ုပ်တို့မှာ တူညီတဲ့ ဝါသနာတွေ၊ အကြိုက်တွေရှိတယ်!",
    "ကျွန်ုပ်တို့ နာရီနဲ့ချီပြီး ပြောနိုင်တယ်၊ ဒါပေမယ့် မရိုးဘူး!",
    "ကျွန်ုပ်တို့ အမြဲတမ်းတစ်ယောက်နဲ့ တစ်ယောက် အထောက်အပံ့ပေးနေတယ်!",
    "ကျွန်ုပ်တို့ အရမ်းအမောပြေစေတဲ့ အကြောင်အရာတွေကြောင့် ရယ်မောလွန်းတယ်!",
    "ကျွန်ုပ်တို့အတူတူ အလွန်လှပတဲ့ အမှတ်တရတွေဖန်တီးနိုင်တယ်!",
    "ကျွန်ုပ်တို့အတူတူ challenge လုပ်ဖူးတယ်....",
    

    
]; 

function showFact() {


    let randomFact = facts[Math.floor(Math.random() * facts.length)];
    let factElement = document.getElementById("fact");
    factElement.innerText = randomFact;
    factElement.style.color = "darkblue"; // Change "blue" to any color you prefer
    factElement.style.boxShadow = "0px 0px 10px 0px  #452426"; // Change "blue" to any color you prefer
    factElement.style.border = "2px solid darkblue"; // Change "blue" to any color you prefer   
    factElement.style.borderRadius = "5px";
    factElement.style.marginTop = "25px"
}

document.getElementById("showFactButton").addEventListener("click", showFact);


 
 


// footer 
 

const  autoyear = document.getElementById('autoyear');
const getyear = new Date().getUTCFullYear();
autoyear.textContent = getyear;

//footer 

//TechWise + May