function myEach(collection, alert){
    let array = Object.values(collection)
    array.forEach(element => alert(element))
    return collection
}

function myMap(collection, callback){

    let array = Object.values(collection)
    let newArray = []
    for(let element of array){
        newArray.push(callback(element))
    }
    return newArray
}

function myReduce(collection, callback, ...acc) {
    let array = Object.values(collection)
    let newAcc;
    let i;
    let total = 0
    if(acc.length > 0){
        newAcc = acc[0]
        i = 0
    } else {
        newAcc = array[0]
        i = 1
    }
   for(i; i < array.length; i++){
        newAcc = callback(newAcc, array[i], collection)
   }
   return newAcc
}

function myFind(collection, predicate) {
    let array = collection instanceof Array? collection.slice(): Object.values(collection)
    console.log("array", array);
    
    for (let element of array){
      if (predicate(element)){
        return element
      } 
    }
return undefined 
}

function myFilter(arr, filter) {
    const evenArray = []

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]

        if (filter(element)){
            evenArray.push(element)
        }
    }

    return evenArray
}

function mySize(collection) {
    return Object.keys(collection).length;
}

function myFirst(array, n){
    if(n === undefined){
        return array[0];
    }
return array.slice(0, n);
}

function myLast(array, n){
    if(n === undefined){
        return array[array.length - 1];
    }
return array.slice(array.length - n, array.length);
}




function myKeys(object){
   return Object.keys(object);
}


function myValues(object) {
    return Object.values(object);
}