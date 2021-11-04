// function that create an entire card's deck of 52 single cards
const createDeck = () => {
  const numberCard = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ]
  const suits = ["Cuori", "Picche", "Quadri", "Fiori"]
  const deck = []

  for (let index = 0; index < 4; index++) {
    for (let j = 0; j < numberCard.length; j++) {
      // create an obj for every single card
      const singleCard = {}
      singleCard.value = numberCard[j]
      singleCard.suits = suits[index]
      // pushing single card inside of an array
      deck.push(singleCard)
    }
  }
  return deck
}

// function that pick 5 cards from an initials array of 52 cards
const createHand = (arr) => {
  // controls if it's an array of 52 objs
  if (arr.length === 52) {
    const hand = []
    // picking 5 casual cards
    while (hand.length !== 5) {
      let casualCard = arr[Math.floor(Math.random() * arr.length)]
      // console.log(casualCard);
      // not pushing same card here
      if (!hand.includes(casualCard)) {
        hand.push(casualCard)
      }
    }
    return hand
  } else {
    console.log("error")
  }
}

function controlsHand(arr) {
  if (arr.length === 5) {
    console.log("ok")
    console.log(arr)

    const test = arr.sort(function (a, b) {
      return a.value.localeCompare(b.value)
    })
    console.log(test)

    const onlyNum = arr.map((el) => {
      return el.value
    })

    let count = []
    for (let index = 0; index < onlyNum.length; index++) {
      const element = onlyNum[index]
      if (count[element]) {
        count[element] += 1
      } else {
        count[element] = 1
      }
    }
    count.filter((el) => {
      if (el === 2) {
        console.log("coppia")
      }
      if (el === 3) {
        console.log("tris")
      }
      if (el === 4) {
        console.log("poker")
      }
    })
  } else {
    ;("mano non valida")
  }
}

controlsHand(createHand(createDeck()))

// 1) TEST non funziona

// const test = values.filter((element, index, values) => {
// // RITORNO i valori che sono uguali
// return values.indexOf(element) === index && values.lastIndexOf(element) !== index;
// })
// console.log(test);

// 2) TEST questo funziona ma non piglia tutti i duplicati

// const not_unique = test.filter((value, index) => {
//     return test.indexOf(value) != index;
// })
// console.log(not_unique);
