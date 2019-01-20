var paleta = document.getElementById("paleta");
var grilla = document.getElementById("grilla-pixeles");
var numeroPixeles = 1750;

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

function crearPaleta() {
    for(var i=0; i<nombreColores.length; i++){
    var nuevodiv = document.createElement('div');
    nuevodiv.style.backgroundColor = nombreColores[i];
    nuevodiv.className = "color-paleta";
    paleta.appendChild(nuevodiv);
  }
}

function crearGrilla () {
    for(var i=0; i<numeroPixeles; i++){
    var nuevopixel = document.createElement('div');
    nuevopixel.style.backgroundColor = "white";
    nuevopixel.className = "pixel";
    grilla.appendChild(nuevopixel);
  }
}

function selecciondeColor() {
    var paletaSeleccionada = document.getElementsByClassName("color-paleta");
    for(var i=0; i<paletaSeleccionada.length; i++){
    paletaSeleccionada[i].addEventListener("click", cambiarColorClickeado);
  }
}
  
function cambiarColorClickeado(event){
  document.getElementById("indicador-de-color").style.backgroundColor = event.target.style.backgroundColor;
}

function pintarPixel() {
  var pixelParaPintar = document.getElementsByClassName("pixel");

  for(var i=0; i<pixelParaPintar.length; i++){
    pixelParaPintar[i].addEventListener("click", cambiarColorPixel);
  }  
}

function cambiarColorPixel(event){
  event.target.style.backgroundColor = document.getElementById("indicador-de-color").style.backgroundColor;
}

crearGrilla();
crearPaleta();
selecciondeColor();
pintarPixel();

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    document.getElementById("indicador-de-color").style.backgroundColor = colorActual;
  })
);
