
// Step 1: prompt the user to enter a string
let userString = prompt("Please enter a single word:");
// Step 2: set  new variable to result of function, call function
let backwardString = reverseString(userString);
// Step 3: compare the user's string with it's palindrome.  
if (backwardString === userString) {
		document.getElementById("here").innerHTML = backwardString + " and " + userString + " are palindromes!"
		console.log(backwardString + " and " + userString + " are palindromes!");
	}
	else {
		document.getElementById("here").innerHTML = backwardString + " and " + userString + " are NOT palindromes!"
		console.log(backwardString + " and " + userString + " are not palindromes!");
	}


function reverseString(str) {
	//split the string into individual elements of an array
	let stringArray = str.split("");
	// stringArray = ["s", "t", "r"];
	//reverse the string array into a new array
	let reverseArray = stringArray.reverse();
	// reverseArray = ["r", "t", "s"];
	// join the new array into a new string
	return reverseArray.join("");
}

/*
	// backwardString = "rts"
	//compare the new string to the old sring, if they are the same then it is a palindrome, if not, fuck it;
	if backwardString === userString {
		console.log(backwardString + " and " + userString + " are palindromes!");
	}
	else {
		console.log(backwardString + " and " + userString + " are not palindromes!");
	}
*/