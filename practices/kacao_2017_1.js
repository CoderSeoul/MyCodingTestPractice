String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

function transSecretMap(n, arr1, arr2) {
  // 비밀 지도를 해석하는 함수
  return dec2Bin(n, orBinArr(dec2Bin(n, arr1), dec2Bin(n, arr2))).map((bin) =>
    bin.toString().replaceAll('1', '#').replaceAll('0', ' ')
  );
}

function dec2Bin(n, arr) {
  // 10진수(decimal)를 2진수(binary)로 바꿔주는 함수
  return arr.map((num) => ('0'.repeat(n) + num.toString(2)).slice(-n));
}

function orBinArr(arr1, arr2) {
  // 배열에 들은 2진수 숫자를 OR연산 하여 반환하는 함수
  return arr1.map((bin, idx) => parseInt(bin, 2) | parseInt(arr2[idx], 2));
}

console.log(transSecretMap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(
  transSecretMap(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])
);
