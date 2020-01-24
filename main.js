function colorRandom() {
  var letters = "0123456789ABCDEF"
  var color = "#"
  for(var i = 0;i<6;i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}




var btn = document.getElementsByClassName("changerBtn")[0]

btn.addEventListener("click", renderTheme)

function renderTheme() {
  var header = document.querySelector("header")
  var footer = document.querySelector("footer")
  var colorHex = colorRandom()
  
  btn.style.animation = "pressBtn 0.50s"
  
  btn.addEventListener("animationend", (event) => {
    if(event.animationName === "pressBtn") {
      header.style.background = colorHex
      footer.style.background = colorHex
      footer.innerText = colorHex
      
      
      btn.style.animation = "pressBtn 0.50s reverse"
      
      
      btn.style.animation = ""
    }
  })
}


var btn2 = document.getElementsByClassName("changerBtn")[1]

btn2.addEventListener("click", renderBack)

function renderBack() {
  var colorBack = document.getElementById("colorBack")
  var place = document.querySelector("#placeBtn")
  var colorHex = colorRandom()

  btn2.style.animation = "pressBtn 0.50s"

  btn2.addEventListener("animationend", (event) => {
    if (event.animationName === "pressBtn") {
      colorBack.innerText = colorHex
      place.style.background = colorHex
      //footer.innerText = colorHex


      btn2.style.animation = "pressBtn 0.50s reverse"


      btn2.style.animation = ""
    }
  })
}
