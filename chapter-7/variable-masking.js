
// {
//   // outer block
//   let x = 'blue';
//   console.log(x); // blue
//   {
//     // inner block
//     let x = 3;
//     console.log(x); // x
//   }
//   console.log(x); // blue
// }
// console.log(x); // ReferenceError: x is not 


{
  // outer block
  let x = { color: "blue" };
  let y = x; // y and x refer to the same object
  let z = 3;

  {
    // inner block
    let x = 5; // outer x now masked
    console.log(x);
    console.log(y.color);

    y.color = "red";
    console.log(z);
  }

  console.log(x.color);
  console.log(y.color);
  console.log(z);
}