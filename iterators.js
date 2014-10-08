var iterators = {
  min: function (numList) {
    var min = Infinity;
    for (var i = 0; i < numList.length; i++) {
      if (numList[i] < min) {
        min = numList[i];
      }
    }
    return min;
  },

  max: function (numList) {
    var max = -Infinity;
    for (var i = 0; i < numList.length; i++) {
      if (numList[i] > max) {
        max = numList[i];
      }
    }
    return max;
  },

  each: function (items, callback) {
    for (var i = 0; i < items.length; i++) {
      callback(items[i]);
    }
  },
  map: function (items, callback) {
    var newArr = [];
    for (var i = 0; i < items.length; i++) {
      newArr.push(callback(items[i]));
    }
    return newArr;
  },
  filter: function (items, callback) {
    filteredArray = [];
    for (var i = 0; i < items.length; i++) {
       // if elem = punk, remove from items
       if (callback(items[i])) {
          filteredArray.push(items[i]);
       }
    }
    return filteredArray;
  }
};






module.exports = iterators;



