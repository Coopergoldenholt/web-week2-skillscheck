//////////////////PROBLEM 1////////////////////

// Create a variable called 'myName' with a value that is your name. 

const myName = 'Cooper'

//////////////////PROBLEM 2////////////////////

// Create a variable called 'faveNum' with a value that is your favorite number. 

const faveNum = 20

//////////////////PROBLEM 3////////////////////

// Create a variable called 'lovesCode' and assign it a value of true.

const lovesCode = true

//////////////////PROBLEM 4////////////////////

// Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. The function should return the sum of the two parameters.

function sum(num1, num2) {
	return num1 += num2
}

//////////////////PROBLEM 5////////////////////

// Create a function called 'lovesCodeChecker' that takes in a single parameter called 'x'. Check to see if 'x' is equal to true. If it is, return a true boolean. If 'x' does not equal true, return a false boolean.  

function lovesCodeChecker(x) {
	if (x === true) {
		return true
	} else {
		return false
	}
}

//////////////////PROBLEM 6////////////////////

// Create a function called 'oddChecker' that takes in one parameter, 'num'. 
//Your function should check to see if the parameter is even or odd. If the parameter is odd, return 'the number is odd'.
// If the number is even, return 'the number is even'.

function oddChecker(num) {
	if (num % 2 === 0) {
		return 'the number is even'
	} else {
		return 'the number is odd'
	}
}

//////////////////PROBLEM 7////////////////////

// Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
//Have the function take the two parameters and return a string that says "NAMEPARAM loves LOVEPARAM" with the appropriate 
//parameters in the string. e.g. "Joseph loves music"

function iLove(name, love) {
	return `${name} loves ${love}`
}

//////////////////PROBLEM 8////////////////////

// Create a copy of the faveColors array called 'colorCopy' using slice.
const faveColors = ['red', 'green', 'black']

const colorCopy = faveColors.slice()

//////////////////PROBLEM 9////////////////////

// Add a fourth color to the end of the 'colorCopy' array using push.

colorCopy.push('blue')

//////////////////PROBLEM 10////////////////////

// Create a new array called 'middleNums' from the numbers array that will capture only the middle numbers (2, 3, 4).
const numbers = [1, 2, 3, 4, 5]

const middleNums = numbers.splice(1, 3)

//////////////////PROBLEM 11////////////////////

// Create an object called 'me' that has the following keys: firstName, state, age, and greeter. 
//The value of the firstName key should be your name as a string. 
//The value of the property state should be your current state or providence of residence as a string. 
//The value of age should be your age as a number. greeter should be a method that returns the string 
//'Hello! My name is NAMEVALUE and I live in STATEVALUE' with the corresponding values. 

const me = {
	firstName: 'Cooper',
	state: 'Utah',
	age: 24,
	greeter: () => `Hello! My name is ${firstName} and I live in ${state}`
}

//////////////////PROBLEM 12////////////////////

// Create a function called 'bigOrSmall' that takes in one parameter, 'arr', which will be an array of numbers. 
//Inside of the bigOrSmall function, create a new array called 'answers'. 
//Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100. 
//If it is, push 'big' as a string to the answers array. If the number is LESS than or EQUAL to 100, push 'small' as a 
//string to the answers array. Return the answers array inside of the function.

function bigOrSmall(arr) {
	let answers = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 100) {
			answers.push('big')
		} else {
			answers.push('small')
		}
	} return answers
}

//////////////////PROBLEM 13////////////////////

// Create a function called 'arrayReverser' that takes in one parameter, 'arr'. 
//Inside of arrayReverser, create an empty array called 'reversed'. 
//Using a for loop, loop over the passed in array IN REVERSE (this means your counter should decrement),
// and then add each item to the 'reversed' array variable you created. Finally, return the 'reversed' array variable. 

function arrayReverser(arr) {
	let reversed = []
	for(let i = arr.length - 1; i >= 0; i--){
		reversed.push(arr[i])
	} return reversed
}

//////////////////PROBLEM 14 - 18 Setup////////////////////

// Below is an array, myNumbers. You will be using .map, .filter, .reduce and .forEach to manipulate the array in the following problems.
const myNumbers = [3, 55, 788, 2, 1]


//////////////////PROBLEM 14////////////////////

// First, use .map to create a new array that doubles each number. Call the new array 'doubled'.

const doubled = myNumbers.map(function(num, index, arr){
	 return num *= 2
})

//////////////////PROBLEM 15////////////////////

// Now, use .filter to create a new array containing any numbers that are greater than 100. Call the new array 'filtered'. 

const filtered = myNumbers.filter(function(num, index, arr){
	return num > 100
})

//////////////////PROBLEM 16////////////////////

// Next, use reduce to get the total of the numbers in the array summed together. Store the total in a new variable named 'total'. 

const total = myNumbers.reduce(function(acc, num, index, arr){
	return acc += num
}, 0)

//////////////////PROBLEM 17////////////////////

// Finally, use .forEach to find the index of each item in the array. To begin, create an empty array called 'myNumbersIndex'. 
//Then, use forEach to push each item's index from the myNumbers array into the newly created myNumbersIndex array. 

const myNumbersIndex = []
myNumbers.forEach(function(element, index, array){
	myNumbersIndex.push(index)
})

//////////////////PROBLEM 18////////////////////

// Did you know that George Foreman has five sons named George? 
//Go ahead and change everyone's name in the notGeorge array to George using .map. 
//Store the resulting array in a variable named 'forTheLoveOfGeorge'.
const notGeorge = ['Louis', 'Ted', 'Bill', 'Sharon', 'Mark', 'Angela']

const forTheLoveOfGeorge = notGeorge.map(function(element, index, array){
	return index = 'George'
})

//////////////////PROBLEM 19////////////////////

// Using the people array, filter out everyone that isn't a friend into a new array called 'enemies'. Use .filter(). 
const people = [
	{ name: 'Matt', friend: true, awesomeLevel: 10 },
	{ name: 'Matias', friend: true, awesomeLevel: 10 },
	{ name: 'Bart', friend: false, awesomeLevel: 3 },
	{ name: 'Stephanie', friend: false, awesomeLevel: 6 },
	{ name: 'Jonathan', friend: true, awesomeLevel: 8 },
	{ name: 'Josh', friend: true, awesomeLevel: 7 }
]




const enemies = people.filter(function(element, index, arr){
	if(element.friend === false){
		return element
	}
})



// const enemies = people.filter(function(element, index, arr){
// 	for(let i = 0; i < people.length; i++){
// 		for(let key in people[i]){
// 			if(element[key] === false){
// 				console.log(element) 
				
// 			}
// 		}
// 	}
// })

//////////////////PROBLEM 20////////////////////

// Using the people array above, get a total of the awesomeLevel from all the people, 
//and store that value in a variable named 'totallyAwesome'. Use .reduce().

const totallyAwesome = people.reduce(function(acc, element){	
	
	return acc + element.awesomeLevel
	}, 0)
