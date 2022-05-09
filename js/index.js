const block = document.querySelector(`#block`);
console.dir(block);

const getRandomIntInclusive = (min = 0,max = 255) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}
const getRandomColor = () =>{
	let colors = [];
	for(let i=1; i<=3; i++){
		colors.push(getRandomIntInclusive())
	}
	return `rgb(${colors.join(`,`)})`
}
const setBackground = () => block.style.background = getRandomColor();

let blockColors = setInterval(setBackground,500);

const getRandomIntPosition = (min,max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}
const getRandomLeftPosition = () =>{
let left = getRandomIntPosition(0,window.innerWidth-150)
	return `${left}px`
}
const getRandomTopPosition = () =>{
	let top = getRandomIntPosition(0,window.innerHeight-150)
	return `${top}px`
}
const setPositionLeft = () => block.style.left = getRandomLeftPosition();
const setPositionTop = () => block.style.top = getRandomTopPosition();

let blockPositionLeft = setInterval(setPositionLeft,1000)
let blockPositionTop = setInterval(setPositionTop,1000)










// setTimeout(() => clearInterval(blockColors),40000)


// setTimeout(() => {
// 	let borderColor = prompt(`Choose color of border`, `green`);
	

// 	block.style.borderColor = borderColor;
// 	block.style.color = borderColor !== `green`? `blue`: `yellow`;
// 	block.classList.add(`active`);
	

// 	block.innerHTML = `Hello, world!`;
// }, 3000);

// setTimeout(()=>block.classList.add(`active`),5000);
// setTimeout(()=>block.classList.remove(`first`),8000);
// setTimeout(()=>block.classList.contains(`second`) && block.classList.remove(`second`),10000)
