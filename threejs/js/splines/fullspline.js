/////////////////triangle.js

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

/////////////////poly


class Poly {
  constructor(pol) {
    this.coef = pol;
    this.len = pol.length;
    const [a, b] = trianglepos(pol.length);
    if (b !== 0) {
      console.log(`Error, polynomial ${pol} has the wrong length size. What is its degree??`);
      console.log(0 / 0);
    } else {
      this.deg = a - 1;
    }
  }

  eval(v) {
    // Evaluate pol at point v=(x0,x1,x2)
    const [x0, x1, x2] = v;
    let total = 0;
    const exponents = tlist(this.deg);
    for (let k = 0; k < this.len; k++) {
      const exps = exponents[k];
      total += this.coef[k] * (x0 ** exps[0]) * (x1 ** exps[1]) * (x2 ** exps[2]);
    }
    return total;
  }

  tprint() {
    return printtlist(this.coef, this.deg);
  }

  der(i) {
    // Compute the derivative of poly with respect to xi
    let derfunc;
    if (i === 0) {
      derfunc = dx0;
    } else if (i === 1) {
      derfunc = dx1;
    } else if (i === 2) {
      derfunc = dx2;
    }
    return derfunc(this);
  }

  adj(i) {
    // Implement the 'adjacent' function here if available
    // For now, just return an empty array
    return [];
  }
}

function evalpol(pol, v) {
  // Evaluate pol at point v=(x0,x1,x2)
  const [x0, x1, x2] = v;
  let total = 0;
  const exponents = tlist(3); // put here deg of pol (3 for the hardcoded case)
  const l = tlen(3);
  for (let k = 0; k < l; k++) {
    const exps = exponents[k];
    total += pol[k] * (x0 ** exps[0]) * (x1 ** exps[1]) * (x2 ** exps[2]);
  }
  return total;
}

function evalpoln(n, d, pol) {
  // Evaluate pol at baricentric point n with respect to degree deg
  return evalpol(pol, bcoords(n, d));
}

function dx0monomial(poly, n) {
  // Return the coeff of d pol/dx0 at pos n
  const [a, b] = trianglepos(n);
  return poly.coef[n] * a;
}

function dx0(poly) {
  // Produces the Poly of the derivative of poly with respect to dx0
  let row = 0;
  const pol = [];
  const d = poly.deg;
  const l = tlen(d - 1);
  for (let n = 0; n < l; n++) {
    if (n === row * (row + 1) / 2) {
      row += 1;
    }
    pol.push((d + 1 - row) * poly.coef[n]);
  }
  return new Poly(pol);
}

function dx1(poly) {
  // Produces the Poly of the derivative of poly with respect to dx1
  const rpol = refl01list(poly.coef, poly.deg);
  const der = dx0(new Poly(rpol));
  return new Poly(refl01list(der.coef, der.deg));
}

function dx2(poly) {
  // Produces the Poly of the derivative of poly with respect to dx2
  const rpol = refl02list(poly.coef, poly.deg);
  const der = dx0(new Poly(rpol));
  return new Poly(refl02list(der.coef, der.deg));
}

/////////////////visualize.js
class Polytriangle {
    constructor(xpoly, ypoly, zpoly, v) {
        this.xpoly = xpoly;
        this.ypoly = ypoly;
        this.zpoly = zpoly;
        this.v = v;
        this.color = "yellow";
    }

    computenode(dl, n) {
        const bari = bcoords(n, dl);
        return [
            this.xpoly.eval(bari),
            this.ypoly.eval(bari),
            this.zpoly.eval(bari)
        ];
    }

    allnodes(dl) {
        const nodes = [];
        for (let n = 0; n < tlen(dl); n++) {
            nodes.push(this.computenode(dl, n));
        }
        return nodes;
    }

    meshjstext(dl, name) {
        let vertjstext = `var geometry${name} = new THREE.Geometry();\n`;
        for (const node of this.allnodes(dl)) {
            vertjstext += `geometry${name}.vertices.push(new THREE.Vector3(${node.join(",")}));\n`;
        }
        return vertjstext + facesjstext(dl) + `var mesh = new THREE.Mesh(geometry${name}, ${this.color}material);\nscene.add(mesh);\n\n`;
    }
    //from previous code text to code here:

    
    
}


// function meshthreejs(polytriangle, dl, name) {
//     var geometry${name} = new THREE.Geometry();
//     for (const node of polytriangle.allnodes(dl)) {
//         geometry${name}.vertices.push(new THREE.Vector3(${node.join(",")}));
//     }
//     var mesh = new THREE.Mesh(geometry${name}, ${polytriangle.color}material);
//     scene.add(mesh);
// }


function facesjstext(dl) {
    let facejstext = "geometry.faces = [\n";
    for (const face of uppertriangles(dl)) {
        facejstext += `new THREE.Face3(${face.join(",")}),\n`;
    }
    return facejstext + "];\n";
}



function visualizetext(polytlist, dl, outputfile) {
    let jstext = "";
    jstext += facesjstext(dl);
    for (let n = 0; n < polytlist.length; n++) {
        jstext += polytlist[n].meshjstext(dl, n);
        jstext += "\r\n";
    }
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = jstext;
}


//I think this is not needed at all
class Scene {
    constructor(polytlist, dl = 10, outputfile = "./threejs/visual.html") {
        this.polytlist = polytlist;
        this.dl = dl;
        this.outputfile = outputfile;
    }

    writehtml() {
        visualize(this.polytlist, this.dl, this.outputfile);
    }

    addpolyt(polyt) {
        this.polytlist.push(polyt);
    }
}

function addToOutput(content) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += content + '<br>';
}


