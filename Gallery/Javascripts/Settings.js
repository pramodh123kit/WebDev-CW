// Font size changer
document.getElementById("small").addEventListener("click", function () {
  document.getElementsByTagName("html")[0].style.fontSize = "18px";
});

document.getElementById("medium").addEventListener("click", function () {
  document.getElementsByTagName("html")[0].style.fontSize = "21px";
});

document.getElementById("large").addEventListener("click", function () {
  document.getElementsByTagName("html")[0].style.fontSize = "24px";
});

// Random Color generator
function RandomRGB() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
  return rgbColor;
}

document.getElementById("random").addEventListener("click", function () {
  let randomBackground = RandomRGB();

  document.documentElement.style.setProperty("--background", randomBackground);
  let h1Array = document.getElementsByTagName("h1");

  for (let i = 0; i < h1Array.length; i += 1) {
    if (i == 0) {
      h1Array[0].style.color = "#000";
    } else if (i == 11) {
      h1Array[11].style.color = "#fff";
    } else if (i > 0 && i <= 10 ) {
      h1Array[i].style.color = randomBackground;
    }
  }
});

// Color changer
document.getElementById("dark").addEventListener("click", function () {
  document.documentElement.style.setProperty("--background", "#121212");
 
  let h1Array = document.getElementsByTagName("h1");

  for (let i = 0; i < h1Array.length; i += 1) {
    if (i == 0) {
      h1Array[0].style.color = "#000";
    } else if (i == 11) {
      h1Array[11].style.color = "#ff0";
    } else if (i > 0 && i <= 10 ) {
      h1Array[i].style.color = "#000";
    }
  }
});

document.getElementById("light").addEventListener("click", function () {
  document.documentElement.style.setProperty("--background", "#fff");

  let h1Array = document.getElementsByTagName("h1");

  for (let i = 0; i < h1Array.length; i += 1) {
      h1Array[i].style.color = "#000";
  }
});

document.getElementById("yellow").addEventListener("click", function () {
  document.documentElement.style.setProperty("--background", "rgb(253,183,10)");

  let h1Array = document.getElementsByTagName("h1");

  for (let i = 0; i < h1Array.length; i += 1) {
    if (i == 0) {
      h1Array[0].style.color = "#000";
    } else if (i == 11) {
      h1Array[11].style.color = "#fff";
    } else if (i > 0 && i <= 10 ) {
      h1Array[i].style.color = "rgb(253,183,10)";
    }
  }
});
