let bedroom = {
    lightsOn: true,
    bedMade: false,
    tv: {on: true, dusty: true},
    dresser: {
      dusty: true,
      drawer: [
        {type: 'shirt', folded: true},
        {type: 'hoodie', folded: true},
        {type: 'pants', folded: true},
      ]
    },
    floor: [
      {type: 'shirt', folded: false},
      {type: 'shirt', folded: false},
      {type: 'socks', folded: false},
      {type: 'pants', folded: false}
    ],
    nightStand: {dusty: true}
  }

console.log('Bedroom V.1:')
console.log(bedroom)

  //function to toggle the lights
function toggleLights(stateObj) {
return { ...stateObj, lightsOn: !stateObj.lightsOn }
}

bedroom = toggleLights(bedroom)

console.log('Bedroom V.2:')
console.log(bedroom)

 //function to make the bed
 function makeBed(stateObj) {
     return { ...stateObj, bedMade: !stateObj.bedMade }
 }

bedroom = makeBed(bedroom)

console.log('Bedroom V.3:')
console.log(bedroom)

// toggle the TV on / off.
function toggleTVOn(stateObj) {
    return { ...stateObj, 
        tv: { ...stateObj.tv, on: !stateObj.tv.on }
    }
}

bedroom = toggleTVOn(bedroom)

console.log('Bedroom V.4:')
console.log(bedroom)

//A function dustRoom()to dust all dustable objects.
function dustRoom(stateObj) {
    return { ...stateObj,
        tv: { ...stateObj.tv, dusty: false},
        dresser: { ...stateObj.dresser, dusty: false},
        nightStand: { ...stateObj.nightStand, dusty: false}
    }
}

bedroom = dustRoom(bedroom)

console.log('Bedroom V.5:')
console.log(bedroom)

//A function foldFloorClothes() to fold all the clothes that are on the floor.

function foldFloorClothes(stateObj) {
    return { ...stateObj, 
        floor: stateObj.floor.map((c) => {
            return { ...c, folded: true } 
        })
     }
}

bedroom = foldFloorClothes(bedroom)

console.log('Bedroom V.6:')
console.log(bedroom)

//A function fillDresser() to put all of the clothes that are on the floor in the dresser drawer.

function fillDresser(stateObj) {
    return { ...stateObj, 
        floor: [], 
        dresser: {
            ...stateObj.dresser,
            drawer: [ ...stateObj.dresser.drawer, ...stateObj.floor ]
        }
    }
}

bedroom = fillDresser(bedroom)

console.log('Bedroom V.7:')
console.log(bedroom)

//add garment
function addGarment(garment, stateObj) {
    return {
        ...stateObj,
        dresser: {
            ...stateObj.dresser,
            drawer: [ ...stateObj.dresser.drawer, garment]
        }
    }
}

bedroom = addGarment({type: 'socks', folded: true}, bedroom)

console.log('Bedroom V.8:')
console.log(bedroom)