//The search function that determines what the API looks for. This includes a recipe's name, ingredients, instructions, and an image of the finished product.
$("#searchBtn").on("click", searchMeal);
function searchMeal() {
    var meal = $("#searchTxt").val().trim();
    console.log(meal);
    getMeal(meal);
};

//Inputting what the user searched for in the API to find a recipe.
function getMeal(meal) {
		const settings = {
		async: true,
		crossDomain: true,
		url: `https://food-recipes-with-images.p.rapidapi.com/?q=${meal}`,
		method: 'GET',
		headers: {
		'X-RapidAPI-Key': '39839ff059msh374950771f83095p19de74jsn3dc66f5ab38a',
		'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
		}
	};

//Changes the text on the webpage to the response the API gives to the console.
	$.ajax(settings).done(function (response) {

//These cards that hold the recipes are initially hidden until the button is pressed.
	$(".card-body.hide").show()

//If the following is absent, the ingredients list and image don't update properly if a new input is given by the search bar.
	$("#ingredientsListOne").empty();
	$("#ingredientsListTwo").empty();
	$("#ingredientsListThree").empty();
	$("#ingredientsListFour").empty();
	$("#ingredientsListFive").empty();
	$(".picture").remove();

	console.log(response);

//Retrieves the name of each dish from the API.
	let option1 = response.d[0].Title;
	console.log(`Option 1: ${option1}`);

	let option2 = response.d[1].Title;
	console.log(`Option 2: ${option2}`);

	let option3 = response.d[2].Title;
	console.log(`Option 3: ${option3}`);

	let option4 = response.d[3].Title;
	console.log(`Option 4: ${option4}`);

	let option5 = response.d[4].Title;
	console.log(`Option 5: ${option5}`);

//Puts the dish names into the webpage.
	$("#OptionOne").text(`Option 1: ${option1}`);
	$("#OptionTwo").text(`Option 2: ${option2}`);
	$("#OptionThree").text(`Option 3: ${option3}`);
	$("#OptionFour").text(`Option 4: ${option4}`);
	$("#OptionFive").text(`Option 5: ${option5}`);

//Grabs images of the dishes from the API.
	let img = $('<img id="image1">');
	img.attr('src', "https://placehold.co/600x400");
	//The image from the API seemed to be incompatible with the page, potentially due to there being double slashes at the start, so we inserted a placeholder.
	$('.card-body').prepend(img);
	$("img").addClass("picture");

//Places the image into the webpage.
	let firstImage = response.d[0].Image;
	console.log(`Image 1: ${firstImage}`);

	let secondImage = response.d[1].Image;
	console.log(`Image 2: ${firstImage}`);

	let thirdImage = response.d[2].Image;
	console.log(`Image 3: ${firstImage}`);

	let fourthImage = response.d[3].Image;
	console.log(`Image 4: ${firstImage}`);

	let fifthImage = response.d[4].Image;
	console.log(`Image 5: ${firstImage}`);

//Grabs the ingredients list from the API and inputs the ingredients into a list in the webpage.
    let ingredients1 = response.d[0].Ingredients;
    console.log(Object.keys(ingredients1).length)
    console.log(`Ingredients List 1: ${ingredients1}`);
    for (let i = 1; i <= Object.keys(ingredients1).length; i++) {
    	$("#ingredientsListOne").append(`<li class="list-group-item">${ingredients1[i]}</li>`)
    	console.log(ingredients1[i])
    };
    
    let ingredients2 = response.d[1].Ingredients;
    console.log(Object.keys(ingredients2).length)
    console.log(`Ingredients List 2: ${ingredients2}`);
    for (let i = 1; i <= Object.keys(ingredients2).length; i++) {
    	$("#ingredientsListTwo").append(`<li class="list-group-item">${ingredients2[i]}</li>`)
    	console.log(ingredients2[i])
    };

    let ingredients3 = response.d[2].Ingredients;
    console.log(Object.keys(ingredients3).length)
    console.log(`Ingredients List 3: ${ingredients3}`);
    for (let i = 1; i <= Object.keys(ingredients3).length; i++) {
    $("#ingredientsListThree").append(`<li class="list-group-item">${ingredients3[i]}</li>`)
    console.log(ingredients3[i])
	};

    let ingredients4 = response.d[3].Ingredients;
    console.log(Object.keys(ingredients4).length)
    console.log(`Ingredients List 4: ${ingredients4}`);
    for (let i = 1; i <= Object.keys(ingredients4).length; i++) {
    $("#ingredientsListFour").append(`<li class="list-group-item">${ingredients4[i]}</li>`)
    console.log(ingredients4[i])
	};

    let ingredients5 = response.d[4].Ingredients;
    console.log(Object.keys(ingredients4).length)
    console.log(`Ingredients List 5: ${ingredients5}`);
    for (let i = 1; i <= Object.keys(ingredients5).length; i++) {
    $("#ingredientsListFive").append(`<li class="list-group-item">${ingredients5[i]}</li>`)
    console.log(ingredients5[i])
	};

//Grabs the instructions for cooking from the API.
	let steps1 = response.d[0].Instructions;
	console.log(`Instructions List 1: ${steps1}`);

	let steps2 = response.d[1].Instructions;
	console.log(`Instructions List 2: ${steps2}`);

	let steps3 = response.d[2].Instructions;
	console.log(`Instructions List 3: ${steps3}`);

	let steps4 = response.d[3].Instructions;
	console.log(`Instructions List 4: ${steps4}`);

	let steps5 = response.d[4].Instructions;
	console.log(`Instructions List 5: ${steps5}`);

//Puts the instructions into the webpage.
	$("#InstructionsOne").text(`Instructions: ${steps1}`);
	$("#InstructionsTwo").text(`Instructions: ${steps2}`);
	$("#InstructionsThree").text(`Instructions: ${steps3}`);
	$("#InstructionsFour").text(`Instructions: ${steps4}`);
	$("#InstructionsFive").text(`Instructions: ${steps5}`);

});

};
