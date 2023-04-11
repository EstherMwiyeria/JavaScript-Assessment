// Write a function that takes in a string and returns it when reversed
//  let food = “eating”
 let food = "eating";
//  let food2 = food.reverse()
//  console.log(food2);

//  2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function divide(num){
    if(num.length <= 1){
        return num
    }
    middleIndex = Math.floor(num.length)/2
    left = num.slice(0, middle);
    right = num.slice(middle);
    return sortedArray(divide(left),divide(right))

    function sortedArray(left,right){
        while(left.length && right.length){
            emptyArray = []
            if(left[0]<right[0]){
                return  emptyArray.push(left.shift())
            }
            else {
                return emptyArray.push(right.shift()) 
            }

            }
            return[...emptyArray,...left,...right]
        }
        
    }
    let num = [2,8,0,23,5,45,76];
    console.log(divide(num));


    function binarySearch(num,target){
        leftIndex = 0
        rightIndex = -1
        
        while(leftIndex <= rightIndex){
            let middleIndex = Math.floor(leftIndex + rightIndex)/2
        }
        if(target === num[middleIndex]){
            return middleIndex
        }
        else if(target < num[middleIndex]){
            rightIndex = middleIndex - 1
        }
        else{
            leftIndex = middleIndex + 1
        }
        return null
        }
        target = 23
        console.log(binarySearch(num, target));



// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
let numArr = [12,87,45,75,23,64,73];
let numArray2 = numArr.map(x => x*4);
console.log(numArray2);

// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]










