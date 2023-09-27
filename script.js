const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

suggestions.classList.add("display");

function search(str) {
	return fruit.filter((val) => {
		return val.toLowerCase().includes(str.toLowerCase())
	})
}

function searchHandler(e) {
	showSuggestions(search(e.target.value))
}

function showSuggestions(results) {
	suggestions.innerText = "";
	results.forEach((val) => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href","#");
        li.append(a);
        a.innerText = val;
        suggestions.append(li);
	});
	suggestions.classList.remove("display");

	hideDropDown(results);
}

function hideDropDown(results) {
	if(input.value === "" || results.length === 0) {
		suggestions.classList.add("display");
	}
}

function useSuggestion(e) {
	let li = document.querySelectorAll("li");
	input.value = e.target.innerText;
	
	for(let i of li) {
		i.remove();
	}
	suggestions.classList.add("display");
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);