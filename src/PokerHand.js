

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

const getHand = (arr) => {
  let hand = '';
  if (arr.includes(2)&& arr.includes(3)) {
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




class PokerHand {
  constructor(arr){
    this.arr = arr;
    this.rankArr = [];
  };

  getOutCome() {
    for (let i = 0; i < this.arr.length; i++) {
      this.rankArr.push(this.arr[i].rank);
    }

    let ranksArr = getTotalArr(this.rankArr);

    return getHand(ranksArr);
  }
};


export default PokerHand