let kitchen = {
    lightsOn: true,
    sink: [
        { type: 'bowl', clean: false },
        { type: 'cup', clean: false },
        { type: 'spoon', clean: false }
    ],
    dishWasher: []
}

function toggleLights(stateObj) {
    return { ...stateObj, lightsOn: !stateObj.lightsOn }
}

console.log('Kitchen V.1:')
console.log(kitchen)

kitchen = toggleLights(kitchen)

console.log('Kitchen V.2:')
console.log(kitchen)

function loadDishwasher(stateObj) {
    //create a new kitchen that contains everything from old kitchen, but with dishwasher containing sink elements, and sink is empty
    return { ...stateObj, sink: [], dishWasher: [ ...dishWasher, ...stateObj.sink ] }
}

kitchen = loadDishwasher(kitchen)

console.log('Kitchen V.3:')
console.log(kitchen)

function washDishes(stateObj) {
    //return a new kitchen with all key/value pairs but dishes in dishwasher are clean
    return { ...stateObj, 
        dishWasher: stateObj.dishWasher.map((d) =>{
            return { ...d, clean: true } 
        })
     }
}

kitchen = washDishes(kitchen)

console.log('Kitchen V.4:')
console.log(kitchen)