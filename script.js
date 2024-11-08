if (!Array.prototype.mulTwo) {
    Array.prototype.mulTwo = function (callback) {
      let result = [];
      for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
      }
      return result;
    };
  }
  
  const arr = [1, 2, 3, 4];
  
  const newArr = arr.mulTwo((item, index, arr) => {
    console.log(index, arr);
    return item * 2;
  });
  
  console.log(newArr);
  