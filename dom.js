const headline= document.getElementById('headline');
const image= document.querySelector('.planet-image');
const imgsize= document.getElementsByTagName('img');
const img= image.innerHTML;
const temp= document.querySelector('.temp-value');
const moon= document.querySelector('.moon-value');
const doe= document.querySelector('.doe-value');
const dos= document.querySelector('.dos-value');
const more= document.querySelector('.know-more');
const html= more.innerHTML;
const nasa= document.getElementById('nasa-link');
const link= nasa.href;
const name= document.querySelector('.planet-name');
const table= document.querySelector('.data-table');
const planetLink= document.querySelectorAll('.planet-link');
const nav= document.querySelector('.nav');
const planets= document.querySelector('.planets-nav');
let check= 0;
planets.addEventListener('click', ()=>{
	if(check==0){
	planets.style.display= "none";
	nav.style.display= "flex";
	check=1;
	};
})
planetLink.forEach(planet =>{
	
planet.addEventListener('click', ()=>{
	if (check==1){
	planets.style.display= "block";
	nav.style.display= "none";
	check= 0;
	};
})
})
const home= document.querySelector('.home');
home.addEventListener('click', ()=>{
	table.style.display= "none";
	headline.style.visibility= "visible";
	image.style.display= "none";
	name.style.visibility= "hidden";
})

const mercury= document.getElementById('mercury');
mercury.addEventListener('click', ()=>{
name.style.visibility= "visible";
image.style.display= "block";
table.style.visibility= "visible";
headline.style.visibility= "hidden";
temp.textContent= "430";
moon.textContent= "0";
doe.textContent= "99.89 million KM";
dos.textContent= "65.49 million KM";
more.innerHTML= '<a id="nasa-link" href="https://solarsystem.nasa.gov/planets/mercury/overview/" target="_blank">MERCURY</a>'
image.innerHTML= '<img src="planets/mercury.jpg">';
name.textContent= "MERCURY";
table.style.display= "block";
})
const venus= document.getElementById('venus');
venus.addEventListener('click', ()=>{
	name.style.visibility= "visible";
image.style.display= "block";
	table.style.display= "block";
	table.style.visibility= "visible";
	temp.textContent= "471";
	headline.style.visibility= "hidden";
	moon.textContent= "0";
	doe.textContent= "244.92 million KM";
	dos.textContent= "108.2 million KM";
	more.innerHTML= '<a id="nasa-link" href="https://solarsystem.nasa.gov/planets/venus/overview/" target="_blank">VENUS</a>'
	image.innerHTML= '<img src="planets/venus.jpg">';
	name.textContent= "VENUS";
})
const earth= document.getElementById('earth');
earth.addEventListener('click', ()=>{
	table.style.display= "block";
	table.style.visibility= "visible";
	temp.textContent= "16";
	moon.textContent= "1";
	doe.textContent= "0 KM";
	headline.style.visibility= "hidden";
	dos.textContent= "149.6 million KM";
	name.style.visibility= "visible";
image.style.display= "block";
	more.innerHTML= '<a id="nasa-link" href="https://solarsystem.nasa.gov/planets/earth/overview/" target="_blank">EARTH</a>'
	image.innerHTML= '<img src="planets/earth.jpg">';
	name.textContent= "EARTH";
})
const mars= document.getElementById('mars');
mars.addEventListener('click', ()=>{
table.style.visibility= "visible";
	table.style.display= "block";
	headline.style.visibility= "hidden";
	temp.textContent= "-28";
	moon.textContent= "2";
	doe.textContent= "332.52 million KM";
	name.style.visibility= "visible";
image.style.display= "block";
	dos.textContent= "227.9 million KM";
	more.innerHTML= '<a id="nasa-link" href="https://solarsystem.nasa.gov/planets/mars/overview/" target="_blank">MARS</a>'
	image.innerHTML= '<img src="planets/mars.jpg">';
	name.textContent= "MARS";
})
const jupiter= document.getElementById('jupiter');
jupiter.addEventListener('click', ()=>{
	table.style.display= "block";
	table.style.visibility= "visible";
	headline.style.visibility= "hidden";
	temp.textContent= "-108";
	moon.textContent= "79";
	doe.textContent= "729.13 million KM";
	dos.textContent= "778.3 million KM";
	name.style.visibility= "visible";
image.style.display= "block";
	more.innerHTML= '<a id="nasa-link" href="https://solarsystem.nasa.gov/planets/jupiter/overview/" target="_blank">JUPITER</a>'
	image.innerHTML= '<img src="planets/jupiter.jpg">';
	name.textContent= "JUPITER";
})
const saturn= document.getElementById('saturn');
saturn.addEventListener('click', ()=>{
	table.style.display= "block";
	table.style.visibility= "visible";
	headline.style.visibility= "hidden";
	temp.textContent= "-138";
	moon.textContent= "82";
	name.style.visibility= "visible";
image.style.display= "block";
	doe.textContent= "1424.6 million KM";
	dos.textContent= "1427.0 million KM";
	more.innerHTML= '<a id="nasa-link" href="https://solarsystem.nasa.gov/planets/saturn/overview/" target="_blank">SATURN</a>'
	image.innerHTML= '<img src="planets/saturn.jpg">';
	name.textContent= "SATURN";
})
const uranus= document.getElementById('uranus');
uranus.addEventListener('click', ()=>{
	table.style.display= "block";
	table.style.visibility= "visible";
	headline.style.visibility= "hidden";
	name.style.visibility= "visible";
image.style.display= "block";
	temp.textContent= "-195";
	moon.textContent= "27";
	doe.textContent= "3093.1 million KM";
	dos.textContent= "2871.0 million KM";
	more.innerHTML= '<a id="nasa-link" href="https://solarsystem.nasa.gov/planets/uranus/overview/" target="_blank">URANUS</a>'
	image.innerHTML= '<img src="planets/uranus.jpg">';
	name.textContent= "URANUS";
})
const neptune= document.getElementById('neptune');
neptune.addEventListener('click', ()=>{
	name.style.visibility= "visible";
image.style.display= "block";
	table.style.display= "block";
	table.style.visibility= "visible";
	headline.style.visibility= "hidden";
	temp.textContent= "-201";
	moon.textContent= "14";
	doe.textContent= "4518.7 million KM";
	dos.textContent= "4497.1 million KM";
	more.innerHTML= '<a id="nasa-link" href="https://solarsystem.nasa.gov/planets/neptune/overview/" target="_blank">NEPTUNE</a>'
	image.innerHTML= '<img src="planets/neptune.jpg">';
	name.textContent= "NEPTUNE";
})
