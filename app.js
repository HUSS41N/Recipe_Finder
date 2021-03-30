const random_recipe_array = [
	"chicken",
	"momo",
	"chinese",
	"indian",
	"paneer",
	"tofu",
	"pork",
	"italian",
	"pizza",
	"pasta",
];
const random_index = Math.floor(Math.random() * random_recipe_array.length);

api_handler = (query) => {
	const api_key = "5b9cf6066a396dab9f94720c96f19f81";
	const id = "1132e3ac";
	const link = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${api_key}`;
	const api = fetch(link, {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			recipes = data.hits;
			recipes.forEach((element) => {
				const recipe = document.createElement("div");
				const recipe_img = document.createElement("img");
				const recipe_label = document.createElement("p");
				recipe.classList.add("recipe");
				recipe_img.src = element.recipe.image;
				recipe_label.innerText = element.recipe.label;
				recipe.appendChild(recipe_img);
				recipe.appendChild(recipe_label);
				const all_recipes = document.querySelector(".recipes");
				all_recipes.appendChild(recipe);
			});
		});
};
api_handler(random_recipe_array[random_index]);
const search = document.getElementById("search");

search.addEventListener("click", () => {
	let input = document.getElementById("input").value;
	let previous_recipe = document.querySelectorAll(".recipe");
	console.log(previous_recipe);
	previous_recipe.forEach((recipe) => {
		recipe.remove();
	});
	console.log(input);
	api_handler(input);
});
