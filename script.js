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

function fillCard(card, beer, index) {
    card.querySelector("p.no").innerText = index;
    card.querySelector("p.title").innerText = beer.title;
    card.querySelector("p.text").innerText = beer.text;
    card.querySelector("p.sub").innerText = beer.sub;
}

function addAndFillCards() {
	const cardsElement = document.querySelector("main");
	const firstBeerCard = document.querySelector("div.beer");
    fillCard(firstBeerCard, beers[0], 1);
    for (let i = 1; i < beers.length; i++) {
        const newBeerCard = firstBeerCard.cloneNode(true);
        fillCard(newBeerCard, beers[i], i+1);
        cardsElement.appendChild(newBeerCard);
    }
}

window.addEventListener('load', addAndFillCards);