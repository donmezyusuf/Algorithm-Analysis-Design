//https://www.geeksforgeeks.org/sieve-of-eratosthenes/ algoritma burdan alınmıştır.

const bar = (n) => {
  let prime = [];

  for (let i = 0; i < n + 1; i++) {
    prime[i] = true;
  }

  for (let p = 2; p * p <= n; p++) {
    if (prime[p] === true) {
      for (let z = p * p; z <= n; z += p) {
        prime[z] = false;
      }
    }
  }

  for (let k = 2; k <= n; k++) {
    if (prime[k] === true) {
      console.log(k + " ");
    }
  }
};

bar(30);
