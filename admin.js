var allHotels = [];

function deleteHotels() {
    localStorage.clear();
    location.reload();
}

var addHotel = function() {
    
    let hoteluri = [
        {nume: "nume1", adresa: "adresa1", pret: 200, telefon: 0723198713, stele: 3},
        {nume: "nume2", adresa: "adresa2", pret: 150, telefon: 0278784584, stele: 2},
        {nume: "nume3", adresa: "adresa3", pret: 300, telefon: 0348734592, stele: 4}
    ]
    
      var localHotels = [];
      try {
          localHotels = JSON.parse(window.localStorage.getItem('globalHotels'));
          if( localHotels == null)
              localHotels = hoteluri;
      } catch(ex) {
          console.log("something wrong");
          localHotels = hoteluri; //fallback
      }
      let newHoteluri = [ 
          {nume :document.getElementById('nume').value},
          {adresa :document.getElementById('adresa').value},
          {pret :document.getElementById('pret').value},
          {telefon :document.getElementById('telefon').value},
          {stele :document.getElementById('stele').value}
      ]
      localHotels.push(newHoteluri);         
      window.localStorage.setItem("globalHotels", JSON.stringify(localHotels));
    
     location.reload(); 
     document.getElementById('nume').value = "";
    document.getElementById('adresa').value = "";
    document.getElementById('pret').value = "";
    document.getElementById('telefon').value = "";
    document.getElementById('stele').value = "";
};

function changeColor(colorS) {
    document.getElementsByTagName('header')[0].style.backgroundColor = colorS;
    window.localStorage.setItem("color", colorS);
}

//localStorage.clear();
