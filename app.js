// QUICK QUESTION #1
new Set([1,1,2,2,3,4]); //4

// QUICK QUESTION #2
[...new Set("referee")].join("") // "ref"

// QUICK QUESTION #2
// {Array(3) => true, Array(3) => false}



// hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length


// vowelCount
function isVowel(char){
	return "aeiou".includes(char);
  }
  
  function vowelCount(str){
	const vowelMap = new Map();
	for(let char of str){
	  let lowerCaseChar = char.toLowerCase()
	  if(isVowel(lowerCaseChar)){
		if(vowelMap.has(lowerCaseChar)){
		  vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
		} else {
		  vowelMap.set(lowerCaseChar, 1);
		}
	  }
	}
	return vowelMap;
  }
	


// MAP METHODS 
// const myMap = new Map();
// myMap.set(7, 'seven');
// myMap.set('7', 'seven string');

// const add = (x,y) => x + y; 
// const mult = (x,y) => x * y; 

// const funcCalls = new Map();
// funcCalls.set(add, 0);
// funcCalls.set(mult, 0);

// funcCalls.set(add, 1);
// funcCalls.set(mult, 9);





// ITERATING MAPS
// const bandData = [
// [3, "3 Doors Down"],
// ['three', "3 Dog Night"],
// ['nine', "Nine Inch Nails"],
// ['four', "The Four Seasons"],
// [41, "Sum 41"]
// ];
// const bandMap = new Map(bandData)

// bandMap.set(182, 'Blink-182').set('twenty', 'Matchbox Twenty');

// // bandMap.forEach((val, key) => {
// // 	console.log(key + '=>' + val);
// // })

// for(let [key, value] of bandMap) {
// 	console.log(key, '=', value);
// }






// SETS BASICS
const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);

bannedHashTags.add('bestlife').add('selfie');

function filterHashTags(tags){
	const bannedHashTags = new Set([
		'nofilter',
		'justsaying',
		'winning',
		'yolo'
	]);
	return tags.filter((tag) => !bannedHashTags.has(tag));
}

const susansTags = ['happymonday', 'yolo', 'winning', 'sunset'];

const ages = [45,42,21,23,24,98,2,4,4,12,3,12,45];
[...new Set(ages)];