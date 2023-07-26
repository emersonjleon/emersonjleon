function trianglepos(n) {
  // Give two numbers indicating the triangle position of the nth node (row and posinrow)
  const kf = Math.sqrt(2 * n + 0.25) - 0.5;
  const k = Math.floor(kf);
  if (kf % 1 > 0.999999999) {
    return [k + 1, 0];
  } else {
    return [k, n - k * (k + 1) / 2];
  }
}

function dsumcoords(abpair, d) {
  const [a, b] = abpair;
  return [d - a, a - b, b];
}

function dcoords(n, d) {
  // Return the coords a0, a1, a2 of the point in pos(n) with a0 + a1 + a2 = d
  return dsumcoords(trianglepos(n), d);
}

function bcoords(n, d) {
  // Baricentric coords for the point at position n, subdividing the unit triangle in d^2
  return dsumcoords(trianglepos(n), d).map(x => x / d);
}

function tlen(d) {
  // Return the number of int points of a triangle of side d (d+1 int. points on the side)
  return (d + 1) * (d + 2) / 2;
}

function indexn(a012) {
  // Inverse function of dcoors, the number n of position [a]
  const [a0, a1, a2] = a012;
  const a = a1 + a2;
  return Math.floor(a * (a + 1) / 2 + a2);
}

function tlist(d) {
  // List with all integer dcoords in a triangle of side d
  const l = tlen(d);
  const list = [];
  for (let n = 0; n < l; n++) {
    list.push(dcoords(n, d));
  }
  return list;
}

function printtriangle(func, d) {
  // Print the results of func(n) in a triangle
  let row = 0;
  const l = tlen(d);
  let finaltext = "\n";
  for (let n = 0; n < l; n++) {
    if (n === row * (row + 1) / 2) {
      finaltext += "\n";
      row += 1;
    }
    finaltext += `${func(n, d)}  `;
  }
  console.log(finaltext);
  return finaltext;
}

function printtlist(l, d) {
  // Print list l in a triangle of side d
  let row = 0;
  const le = tlen(d);
  let finaltext = "\n";
  for (let n = 0; n < le; n++) {
    if (n === row * (row + 1) / 2) {
      finaltext += "\n";
      row += 1;
    }
    finaltext += `${l[n]}  `;
  }
  console.log(finaltext);
  return finaltext;
}

function refl01pos(n, d) {
  const [a0, a1, a2] = dcoords(n, d);
  return indexn([a1, a0, a2]);
}

function refl01list(pol, d) {
  const list = [];
  for (let n = 0; n < tlen(d); n++) {
    list.push(pol[refl01pos(n, d)]);
  }
  return list;
}

function refl02pos(n, d) {
  const [a0, a1, a2] = dcoords(n, d);
  return indexn([a2, a1, a0]);
}

function refl02list(pol, d) {
  const list = [];
  for (let n = 0; n < tlen(d); n++) {
    list.push(pol[refl02pos(n, d)]);
  }
  return list;
}

function uppertriang(n) {
  // Return a triplet corresponding to the triangle with upper point n
  const [a, b] = trianglepos(n);
  return [n, n + a + 1, n + a + 2];
}

function lowertriang(n) {
  // Return a triplet corresponding to the triangle under the upper triangle with point n
  const [a, b] = trianglepos(n);
  return [n + a + 1, n + a + 2, n + a + 2 + (a + 1) + 1];
}

function uppertriangles(d) {
  // List with triplets corresponding to upper triangles, for a triangle of side d
  const list = [];
  for (let n = 0; n < tlen(d - 1); n++) {
    list.push(uppertriang(n));
  }
  return list;
}

function lowertriangles(d) {
  // List with triplets corresponding to upper triangles, for a triangle of side d
  const list = [];
  for (let n = 0; n < tlen(d - 2); n++) {
    list.push(lowertriang(n));
  }
  return list;
}

function alltriangles(d) {
  return uppertriangles(d).concat(lowertriangles(d));
}

window.Poly = Poly;

// console.log("Draw the homogeneous coordinates of a triangle of side d");
// const d = 3;
// //printtriangle(dcoords, d);

// function ntest(n, d) {
//   return indexn(dcoords(n, d));
// }

// printtriangle(ntest, d);
// console.log("\n Upper triangles: ", uppertriangles(d));
// console.log("\n Lower triangles: ", lowertriangles(d));



// for (let n = 0; n < tlen(d-2); n++) {
//     console.log( lowertriangles(d)[n] );
// }

// for (let n = 0; n < tlen(d-1); n++) {
//     console.log( uppertriangles(d)[n] );
// }

// // ```
// // Please note that the prompt function is not available in the Node.js environment (server-side JavaScript). If you want to run this code in a browser, the prompt will work fine, but in Node.js, you may need to provide the value of `d` in some other way, like setting it directly in the code.
// // ```
