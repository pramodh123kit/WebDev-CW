// Font size changer
document.getElementById( "small" ).addEventListener( "click", function() {
  document.getElementsByTagName("html")[0].style.fontSize = "15px";
});

document.getElementById( "medium" ).addEventListener( "click", function() {
  document.getElementsByTagName("html")[0].style.fontSize = "20px";
});

document.getElementById( "large" ).addEventListener( "click", function() {
  document.getElementsByTagName("html")[0].style.fontSize = "25px";
});


// Color changer
document.getElementById( "dark" ).addEventListener( "click", function() {
  document.documentElement.style.setProperty('--background', '#121212');

  let h1Array = document.getElementsByTagName("h1");

  for (let i = 0 ; i < h1Array.length ; i += 1) {
    h1Array[i].style.color = '#FFFF00';
  }
});



document.getElementById( "light" ).addEventListener( "click", function() {
  document.documentElement.style.setProperty('--background', '#fff');
  
  let h1Array = document.getElementsByTagName("h1");

  for (let i = 0 ; i < h1Array.length ; i += 1) {
    h1Array[i].style.color = '#a7dd13';
  }
});


document.getElementById( "lightblue" ).addEventListener( "click", function() {
  document.documentElement.style.setProperty('--background', '#00A9A5');
 
  let h1Array = document.getElementsByTagName("h1");

  for (let i = 0 ; i < h1Array.length ; i += 1) {
    h1Array[i].style.color = '#000';
  }
});