//declarare structura care memoreaza hotelurile

let hoteluri = [
    
    {nume: "nume1", adresa: "adresa1", pret: 200, telefon: 0723198713, stele: 3},
    {nume: "nume2", adresa: "adresa2", pret: 150, telefon: 0278784584, stele: 2},
    {nume: "nume3", adresa: "adresa3", pret: 300, telefon: 0348734592, stele: 4}
]

hoteluri.push({nume: "nume4", adresa: "adresa4", pret: 500, telefon: 0756788766, stele: 5});

//Verificare corectitudine in consola a obiectelor de tip hotel
hoteluri.forEach(forEachFunction);

function forEachFunction(item, index) {
  //console.log(item);
} 


//adaugare continut dinamic in elementele html
var numeHotel1 = document.getElementById("numeHotel1");
numeHotel1.innerHTML = hoteluri[0].nume;
var adresaHotel1 = document.getElementById("adresaHotel1");
adresaHotel1.innerHTML = hoteluri[0].adresa;
var pretHotel1 = document.getElementById("pretHotel1");
pretHotel1.innerHTML = hoteluri[0].pret;
var telefonHotel1 = document.getElementById("telefonHotel1");
telefonHotel1.innerHTML = hoteluri[0].telefon;
var steleHotel1 = document.getElementById("steleHotel1");
steleHotel1.innerHTML = hoteluri[0].stele;

var numeHotel2 = document.getElementById("numeHotel2");
numeHotel2.innerHTML = hoteluri[1].nume;
var adresaHotel2 = document.getElementById("adresaHotel2");
adresaHotel2.innerHTML = hoteluri[1].adresa;
var pretHotel2 = document.getElementById("pretHotel2");
pretHotel2.innerHTML = hoteluri[1].pret;
var telefonHotel2 = document.getElementById("telefonHotel2");
telefonHotel2.innerHTML = hoteluri[1].telefon;
var steleHotel2 = document.getElementById("steleHotel2");
steleHotel2.innerHTML = hoteluri[1].stele;


//Realizare pop-up formular (deschidere la click pe hotel)
document.body.onload = addElement;
function addElement () { 
    
  var newDiv = document.createElement("div"); 
  newDiv.innerHTML +='<div id="popup" style=" text-align:center;position: absolute;width: 80%;z-index: 999;height:500px;margin: 0 auto;,max-width: 80%;display: none;top:0;background-color: #fff;  border: 1px solid #ddd;  border-radius: 5px;  box-shadow: 0 2px 8px #aaa;  overflow: hidden;   padding: 10px;"><div class="popup_body" style="  height: 100px;">Formular de contact</div><div id="popupcont"></div><button class="close_button"onClick="inchidePopup()">close</button</div>';   

  var curent = document.getElementById("main_container"); 
  document.body.insertBefore(newDiv, curent); 
}

openPopup = false;
function deschidePopup() {
  var el = document.getElementById('popup');
  el.style.display = 'block';
    
    // add the form inside the body
    if(openPopup == false) {
        realizareForm();
    }
    
    openPopup = true;
}

function inchidePopup() {
  var el = document.getElementById('popup');
  el.style.display = 'none';
  document.body.style.background = 'white';
}

//functie realizare formular
function realizareForm() {

var form = document.createElement("form");
form.setAttribute('method',"post");

//input tip text
var text = document.createElement("input");
text.type = "text";
text.name = "user_name";
text.id = "user_name1";
text.placeholder = "Nume";

//input tip password
var password = document.createElement("input");
password.type = "password";
password.name = "password";
password.id = "password1";
password.placeholder = "Parola";


//checkbox
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "checkbox1";
checkbox.name = "check1";

//buton
var buton = document.createElement("input");
buton.type = "submit";
buton.value = "Submit";

// adaugare elemente in formular
form.appendChild(text);
form.appendChild(password);
form.appendChild(checkbox);
form.appendChild(buton);

document.getElementById("popupcont").appendChild(form); 
}

var retrievedData = localStorage.getItem("globalHotels");
var finalHotels = JSON.parse(retrievedData);
console.log(finalHotels);
var retrievedColor = localStorage.getItem("color");
document.getElementsByTagName('header')[0].style.backgroundColor = retrievedColor;
document.getElementsByClassName('wrap-meniu')[0].style.backgroundColor = retrievedColor;

var content = "";

content = content + "<section class='obiective'><div class='container'><h2>Hoteluri</h2><div class='grid-container'>";

for(var i = 3; i < finalHotels.length; i++){
    
   content = content + "<a href='#' onClick='deschidePopup()'><div class='' style='background-color:#aaa;'><img src='img/cazino1.jpg'/><div class='continut'>";
   content = content + "<p>"+finalHotels[i][0].nume + "</p>";
   content = content + "<p>"+finalHotels[i][1].adresa + "</p>";
   content = content + "<p>"+finalHotels[i][2].pret + "</p>";
   content = content + "<p>"+finalHotels[i][3].telefon + "</p>";
   content = content + "<p>"+finalHotels[i][4].stele + "</p>";
   content = content + "</div>";
   content = content + "</div></a>";
}

content = content + "</div></div></section>";

document.getElementById("getContent").innerHTML = content;


