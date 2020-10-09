//Algoritma https://tolpp.com/consecutive-integer-checking-algorithm-ile-gcd-hesabi/ adersinden alınmıştır.

const foo = (m, n) => {
  let x = n;

  if (m < n) {
    x = m;
  }
  while (x > 1) {
    if (m % x === 0 && n % x === 0) {
      return x;
    }
    x--;
  }
  return 1;
};

console.log(foo(60, 24));
