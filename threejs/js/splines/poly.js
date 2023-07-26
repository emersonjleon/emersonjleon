const t = require('./triangle');
// Add adjacent implementation if it exists

class Poly {
  constructor(pol) {
    this.coef = pol;
    this.len = pol.length;
    const [a, b] = t.trianglepos(pol.length);
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
    const exponents = t.tlist(this.deg);
    for (let k = 0; k < this.len; k++) {
      const exps = exponents[k];
      total += this.coef[k] * (x0 ** exps[0]) * (x1 ** exps[1]) * (x2 ** exps[2]);
    }
    return total;
  }

  tprint() {
    return t.printtlist(this.coef, this.deg);
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
  const exponents = t.tlist(3); // put here deg of pol (3 for the hardcoded case)
  const l = t.tlen(3);
  for (let k = 0; k < l; k++) {
    const exps = exponents[k];
    total += pol[k] * (x0 ** exps[0]) * (x1 ** exps[1]) * (x2 ** exps[2]);
  }
  return total;
}

function evalpoln(n, d, pol) {
  // Evaluate pol at baricentric point n with respect to degree deg
  return evalpol(pol, t.bcoords(n, d));
}

function dx0monomial(poly, n) {
  // Return the coeff of d pol/dx0 at pos n
  const [a, b] = t.trianglepos(n);
  return poly.coef[n] * a;
}

function dx0(poly) {
  // Produces the Poly of the derivative of poly with respect to dx0
  let row = 0;
  const pol = [];
  const d = poly.deg;
  const l = t.tlen(d - 1);
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
  const rpol = t.refl01list(poly.coef, poly.deg);
  const der = dx0(new Poly(rpol));
  return new Poly(t.refl01list(der.coef, der.deg));
}

function dx2(poly) {
  // Produces the Poly of the derivative of poly with respect to dx2
  const rpol = t.refl02list(poly.coef, poly.deg);
  const der = dx0(new Poly(rpol));
  return new Poly(t.refl02list(der.coef, der.deg));
}

if (require.main === module) {
  const deg = 3; // Degree of polynomials
  const l = t.tlen(deg);
  console.log(t.tlen(deg));
  console.log(t.tlen(deg - 1));

  const constpol = [1, 3, 3, 3, 6, 3, 1, 3, 3, 1];
  const x0pol = [1, 2, 2, 1, 2, 1, 0, 0, 0, 0];
  const x1pol = [0, 0, 1, 0, 2, 2, 0, 1, 2, 1];
  const x0x1x2 = [0, 0, 0, 0, 9, 0, 0, 0, 0, 0];
  const rare = [2, 4, 7, 3, 1, 8, 9, 0, 5, 6];

  console.log("Poly and derivatives");

  const p = new Poly(rare);
  p.tprint();

  const d0p = dx0(p);
  d0p.tprint();

  const d1p = dx1(p);
  d1p.tprint();

  const d2p = dx2(p);
  d2p.tprint();

  // pol = constpol;
  const pol = x0pol;

  console.log("Evaluate Poly at the triangular grid");

  const d = 10; // Number of points on the side of the triangle to be evaluated

  function func(n, d) {
    return evalpoln(n, d, pol);
  }

  t.printtriangle(func, d);

  console.log("");
}
