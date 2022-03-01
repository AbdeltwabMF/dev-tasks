// Body
const body = document.querySelector("body");
const header = document.createElement("header");
body.appendChild(header);

const main = document.createElement("main");
body.appendChild(main);

const footer = document.createElement("footer");
body.appendChild(footer);

body.style.cssText = "\
	padding: 0px;\
	margin: 0px;\
";

// Header
const brand = document.createElement("h1");
brand.innerHTML = "Abd El-Twab";

brand.style.cssText = "\
	font-size: 1.5em;\
	margin: 0em;\
	padding: 0.5em 1em;\
";

const navBar = document.createElement("ul");
const navBarTitles = [
	"Home",
	"Projects",
	"Contact",
	"About"
];

for (var i = 0; i < 4; ++i)
{
	const listItem = document.createElement("li");
	const listItemAnchor = document.createElement("a");

	listItemAnchor.innerHTML = navBarTitles[i];
	listItemAnchor.href = "#";

	listItemAnchor.style.cssText = "\
		width: 100%;\
		color: rgb(0 40 33);\
		padding: 0.1em 0.5em;\
		border: 1px solid #456;\
		border-radius: 0.5em;\
		background-color: rgb(255 200 200);\
		text-decoration: none;\
	";

	listItem.appendChild(listItemAnchor);
	listItem.style.cssText = "padding: 0.5em;";

	navBar.appendChild(listItem);
}

navBar.style.cssText = "\
	list-style: none;\
	display: flex;\
	padding: 0.7em 1em;\
	margin: 0em;\
	justify-content: flex-end;\
";

header.appendChild(brand);
header.appendChild(navBar);

header.style.cssText = "\
	background-color: #EEE;\
	padding: 0em;\
	margin: 0em;\
	display: flex;\
	justify-content: space-between;\
";

// Main
for (var i = 0; i < 15; ++i)
{
	var productCard = document.createElement("div");
	var productNumber = document.createElement("h1");
	var productName = document.createElement("p");

	productNumber.innerHTML = i + 1;
	productName.innerHTML = "Product";

	productName.style.cssText = "\
		padding-bottom: 0.4em;\
		margin: 0em;\
	";

	productNumber.style.cssText = "\
		margin: 0em;\
	";

	productCard.appendChild(productNumber);
	productCard.appendChild(productName);

	productCard.style.cssText = "\
		background-color: #EEE;\
		margin: 0.5em;\
		text-align: center;\
		width: 31.5%;\
		height: 15%\
	";

	main.appendChild(productCard);
}

main.style.cssText = "\
	min-height: calc(100vh - 149.16px);\
	display: flex;\
	padding: 1em;\
	justify-content: space-between;\
	flex-wrap: wrap;\
";

// Footer
const copyRight = document.createElement("h5");
copyRight.innerHTML = "&copy; 2022 Copyleft";

copyRight.style.margin = "0em";

footer.appendChild(copyRight);

footer.style.cssText = "\
	background-color: #3F9;\
	height: 2em;\
	text-align: center;\
	line-height: 2em;\
	font-size: 1.5em;\
";
