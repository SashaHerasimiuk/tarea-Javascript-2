
function cambioColor(color){
	document.getElementById('body').style.backgroundColor = color;
}

function contarCaracteres(){
	var text = document.getElementById('textarea').value;
	var arrayDeChars = text.split(' ').join('').split('');
	alert("El texto contiene " + arrayDeChars.length + " caracteres")
}


var alumnos = [

  {

    nombre: 'Juan Gomez',

    nota: 7

  }, {

    nombre: 'Pedro Rodriguez',

    nota: 4

  }, {

    nombre: 'Roxana García',

    nota: 8

  }, {

    nombre: 'Luciano Lopez',

    nota: 5

  }, {

    nombre: 'Fernanda Gimenez',

    nota: 6

  }, {

    nombre: 'Florencia Martinez',

    nota: 10

  }, {

    nombre: 'Raul Sanchez',

    nota: 7

  }, {

    nombre: 'Sandra Figueroa',

    nota: 8

  }

];

function verAprobados(){
	console.log(alumnos);
	var aprobados = alumnos.filter(d => d.nota >= 7);
	var nombres  = [];
	for (var i = aprobados.length - 1; i >= 0; i-- ){
		nombres[i] = aprobados[i].nombre;
	}
	document.getElementById('aprobados').innerHTML = nombres;
		
}

