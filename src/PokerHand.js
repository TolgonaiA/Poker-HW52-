

const getTotalArr = (arr) => {
  let totalArr = [];
  let copy = Array.from(new Set(arr));
  for (let i = 0; i < copy.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === copy[i]) {
        count++;
      }
    }
    totalArr.push(count);
  }

  return totalArr;
};

const getHand = (arr, value) => {
  let hand = '';
  if (value === true) {
    hand = 'flush'
  } else if (arr.includes(2)&& arr.includes(3)) {
    hand  = 'full house'
  } else if(arr.includes(3) && arr.includes(1)) {
    hand = 'three of a kind'
  } else if (arr.includes(2) && arr.length === 3) {
    hand = 'two pairs'
  } else if (arr.includes(2) && arr.length === 4) {
    hand = 'one pair'
  } else if (arr.includes(4)) {
    hand = 'four of a kind'
  } else if (arr.includes(1) && arr.length ===5) {
    hand = 'nothing'
  } 
  return hand;
};


const getNumArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'J') {
      arr[i] = 11;
    } else if (arr[i] === 'Q') {
      arr[i] = 12;
    } else if (arr[i] === 'K') {
      arr[i] = 13;
    } else if (arr[i] === 'A') {
      arr[i] = 14;
    }
  }
  return arr;
};


const getSuit = arr => {
  let result = [];
  for (let element of arr) {
    if(!result.includes(element)) {
      result.push(element);
    }
  }

  if (result.length === 1) {
    return true;
  } else {
    return false;
  }
};



class PokerHand {
  constructor(arr){
    this.arr = arr;
    this.rankArr = [];
    this.suit = [];
  };

  getOutCome() {
    for (let i = 0; i < this.arr.length; i++) {
      this.rankArr.push(this.arr[i].rank);
    }

    for (let i = 0; i < this.arr.length; i++) {
      this.suit.push(this.arr[i].suitVal);
    }

    let numArr = getNumArr(this.rankArr);

    console.log(this.rankArr)
    console.log(this.suit)
    let suitStatus = getSuit(this.suit);

    let ranksArr = getTotalArr(numArr);

    return getHand(ranksArr, suitStatus);
  }
};


export default PokerHand