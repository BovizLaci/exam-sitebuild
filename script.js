const beers =
[
{
	title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale - American"
},
{
    title: "Távoli Galaxis",
    sub: "Rothbeer Brewery",
    text: "IPA - American"
},
{
	title: "Flying Rabbit AIPA",
    sub: "MONYO Brewing Co.",
    text: "IPA - American"
},
{
	title: "Liquid Cocaine",
    sub: "Mad Scientist Beer",
    text: "IPA - Imperial"
},
{
	title: "Organic Chocolate Stout",
    sub: "Samuel Smith Old Brewery",
    text: "Stout - English"
},
{
    title: "Bracia",
    sub: "Thornbridge Brewery",
    text: "Strong Ale - English"
},
{
	title: "Oatmeal Stout",
    sub: "Samuel Smith Old Brewery",
    text: "Stout - Oatmeal"
},
{
    title: "Black Tokyo Horizon",
    sub: "BrewDog",
    text: "Stout - American Imperial"
},
{
	title: "Vintage Ale",
    sub: "Fuller's",
    text: "Old Ale"
},
{
	title: "All the Leaves are Brown",
    sub: "Tempest Brewing Company",
    text: "Brown Ale - American"
}
]

function load() {
	const cardsDiv = document.querySelector("div#cards");
	const beerDiv = document.querySelector("div.beer");
    console.log(beers);
    beerDiv.querySelector("p.no").innerText = 1;
    beerDiv.querySelector("p.title").innerText = beers[0].title;
    beerDiv.querySelector("p.text").innerText = beers[0].text;
    beerDiv.querySelector("p.sub").innerText = beers[0].sub;
    for (let i = 1; i < beers.length; i++) {
        const newBeerDiv = beerDiv.cloneNode(true);
        newBeerDiv.querySelector("p.no").innerText = i + 1;
        newBeerDiv.querySelector("p.title").innerText = beers[i].title;
        newBeerDiv.querySelector("p.text").innerText = beers[i].text;
        newBeerDiv.querySelector("p.sub").innerText = beers[i].sub;
        cardsDiv.appendChild(newBeerDiv);
    }
}

window.addEventListener('load', load);