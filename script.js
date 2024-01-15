const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let isVisible = false;

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

displayDropdown(false)

function search(str) {
	return fruit.filter(fruitName => fruitName.toLowerCase().includes(str))
}

function searchHandler(e) {
	showSuggestions(search(e.target.value.toLowerCase()))
}

function showSuggestions(results) {
	suggestions.innerText = "";
	if(results.length > 0 && input.value !== "") {
		displayDropdown(true);
		results.forEach((val) => {
			let li = document.createElement("li");
			let a = document.createElement("a");
			a.setAttribute("href","#");
			li.append(a);
			a.innerText = val;
			suggestions.append(li);
		});
	}else {
		displayDropdown(false);
	}
}

function displayDropdown(isVisible) {
	if(isVisible) {
		suggestions.classList.remove("display");
	}else {
		suggestions.innerText = "";
		suggestions.classList.add("display");
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	displayDropdown(false);
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);