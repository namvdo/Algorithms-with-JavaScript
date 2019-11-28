function capitalizeFirstCharacterOfWords(string){
	let arr = string.split(" ");
	for (let i = 0; i < arr.length; i++){
		let word = arr[i];
		arr[i] = word[0].toUpperCase() + word.substring(1);
	}
	return arr.join(" ");
	};

console.log(capitalizeFirstCharacterOfWords("the first letter of each word has been capitalized."));