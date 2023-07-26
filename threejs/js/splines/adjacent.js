// JavaScript version of poly.py

function derivativelist(poly, i, k) {
    // compute the first k derivatives of poly with respect to xi, and return them in a list, whose first elt is poly.
    const derlist = [poly];
    for (let j = 0; j < k; j++) {
        derlist.push(derivative(derlist[derlist.length - 1], i));
    }
    return derlist;
}

function factoriallist(k) {
    const flist = [1];
    for (let j = 1; j <= k; j++) {
        flist.push(j * flist[flist.length - 1]);
    }
    return flist;
}

const fact = factoriallist(10);

function adjacent2(poly) {
    // return the poly description of a simplex representing the same polynomial as Poly,
    // with respect to the adjacent simplex opposite to vertex x2, for the regular equilateral grid
    const d = poly.deg;
    const x1derlist = derivativelist(poly, 1, d);
    const x10derivatives = [];
    for (let k = 0; k <= d; k++) {
        x10derivatives.push(derivativelist(x1derlist[k], 0, d - k));
    }

    const coefn = [];
    const alphas = tlist(d);
    for (let n = 0; n < poly.coef.length; n++) {
        const alpha = alphas[n];
        const alphader = x10derivatives[alpha[1]][alpha[0]];
        coefn.push(alphader.eval([1, 1, -1]) / (fact[alpha[1]] * fact[alpha[0]]));
    }
    return new Poly(coefn);
}

function adjacent(poly, i) {
    // return the poly description of a simplex representing the same polynomial as Poly,
    // but with respect to the adjacent simplex opposite to vertex xi, i==0,1,2
    if (i === 2) {
        return adjacent2(poly);
    } else if (i === 1) {
        // implementation for i==1 is missing in the original code
        // Please provide the implementation for this case
    }
}

// Assume Poly and t classes have been properly defined

// Example usage
const ps = new Poly([1, 2, 2, 1, 2, 1, 0, 0, 0, 0]);
const ap2 = adjacent(ps, 2);
ps.tprint();
ap2.tprint();
