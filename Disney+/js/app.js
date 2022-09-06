const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; // track the current slide

const createSlide = () => {
	if(slideIndex >= movies.lenght){
		slideIndex = 0;
	}

	// create DOM Elements
	let slide=document.createElement('div');
	var imgElement=document.createElement('img');
	let content=document.createElement('div');
	let h1=document.createElement('h1');
	let p=document.createElement('p');

	//attaching all elements
	imgElement.appendChild(document.createTextNode(''));
	h1.appendChild(document.createTextNode(movies[slideIndex].name));
	p.appendChild(document.createTextNode(movies[slideIndex].des));
	content.apprendChild(h1);
	content.apprendChild(p);
	slide.apprendChild(content);
	slide.appendChild(imgElement);
	carousel.appendChild(slide);

	// setting up images

	imgElement.src = movies[slideIndex].image;
	slideIndex++;

	//setting elements classnames

	slide.className="slider";
	content.className="slide-content";
	h1.className="movie-title";
	p.className="movie-des";

	sliders.push(slide);


	if(slide.length)
	{
		sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
			30 * (sliders.length - 2)
		}px)`;
	}
}


for (let i=0 i<3;i++){
	createSlide();
}

setInterval(()=>{
	createSlide();
}, 3000);
