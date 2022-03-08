///==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
function findWords  (dog_string, dog_names) {
    for (let i =0; i < dog_names.length; i++){
        if (dog_string.search(dog_names[i])){
            return `Matched dog name: ${dog_names[i]}`
        }
    else {
        return `No match`
    }
    }
}   
console.log(findWords(dog_string,dog_names)) 



///============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
    for (i =0; i < arr.length; i++) {
        if (i %2 == 0){
            arr.splice(i,1,'even index')
        } else {
            arr[i]
        }
        }
        return arr
    }
console.log(replaceEvens())
// codewar 1
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

//For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    return Math.ceil(month/3)
   }

// codewar 2
// Given a number n, return the number of positive odd numbers below n, EASY!

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]



function oddCount(n){
    return Math.floor(n/2)
   }

//  codeawr 3  

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
    return String(n).split(' ').map(Number).reverse()
}

// codewar 4
// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(n) { 
    return (n == 1) ? 'Sunday':(n == 2) ? 'Monday':(n == 3) ? 'Tuesday':(n == 4) ? 'Wednesday': (n == 5) ? 'Thursday':(n == 6) ? 'Friday':(n == 7) ? 'Saturday': 'Wrong, please enter a number between 1 and 7'
    
    
    }
