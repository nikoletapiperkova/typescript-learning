function func(a: number, b: number) {
  let c;
  c = 3;
  return a + b;
}

function funca(a: number): number | undefined {
  if (a > 0) {
    return a;
  } else {
    console.log("Less than zero");
  }
}
