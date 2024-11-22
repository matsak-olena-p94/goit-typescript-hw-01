function merge<A, B> (objA: A, objB: B): A & B {
    return Object.assign({}, objA, objB);
  }