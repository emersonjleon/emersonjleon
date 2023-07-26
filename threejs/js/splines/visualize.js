// Your JavaScript code goes here

// class Polytriangle {
//     constructor(xpoly, ypoly, zpoly, v) {
//         this.xpoly = xpoly;
//         this.ypoly = ypoly;
//         this.zpoly = zpoly;
//         this.v = v;
//         this.color = "yellow";
//     }

//     computenode(dl, n) {
//         const bari = bcoords(n, dl);
//         return [
//             this.xpoly.eval(bari),
//             this.ypoly.eval(bari),
//             this.zpoly.eval(bari)
//         ];
//     }

//     allnodes(dl) {
//         const nodes = [];
//         for (let n = 0; n < tlen(dl); n++) {
//             nodes.push(this.computenode(dl, n));
//         }
//         return nodes;
//     }

    meshjstext(dl, name) {
        let vertjstext = `var geometry${name} = new THREE.Geometry();\n`;
        for (const node of this.allnodes(dl)) {
            vertjstext += `geometry${name}.vertices.push(new THREE.Vector3(${node.join(",")}));\n`;
        }
        return vertjstext + facesjstext(dl) + `var mesh = new THREE.Mesh(geometry${name}, ${this.color}material);\nscene.add(mesh);\n\n`;
    }
}

// function facesjstext(dl) {
//     let facejstext = "geometry.faces = [\n";
//     for (const face of uppertriangles(dl)) {
//         facejstext += `new THREE.Face3(${face.join(",")}),\n`;
//     }
//     return facejstext + "];\n";
// }

// function visualize(polytlist, dl, outputfile) {
//     let jstext = "";
//     jstext += facesjstext(dl);
//     for (let n = 0; n < polytlist.length; n++) {
//         jstext += polytlist[n].meshjstext(dl, n);
//         jstext += "\r\n";
//     }
//     const outputDiv = document.getElementById("output");
//     outputDiv.innerHTML = jstext;
// }

// class Scene {
//     constructor(polytlist, dl = 10, outputfile = "./threejs/visual.html") {
//         this.polytlist = polytlist;
//         this.dl = dl;
//         this.outputfile = outputfile;
//     }

//     writehtml() {
//         visualize(this.polytlist, this.dl, this.outputfile);
//     }

//     addpolyt(polyt) {
//         this.polytlist.push(polyt);
//     }
// }

// // Rest of the script...




// Your code from the Python script, with print statements replaced by function to add content to the div
// function addToOutput(content) {
//     const outputDiv = document.getElementById('output');
//     outputDiv.innerHTML += content + '<br>';
// }

// if (typeof window !== 'undefined') {
    // const deg = 3; //degree of polynomials
    // const l = tlen(deg);


// Define the required variables and lists
const deg = 3; // degree of polynomials
const l = tlen(deg);

const a = 3;
const e = -6;
const x0pol = [1, 2, 2, 1, 2, 1, 0, 0, 0, 0];
const x1pol = [0, 0, 1, 0, 2, 2, 0, 1, 2, 1];
const x0x1x2 = [0, 0, 0, 0, 9, 0, 0, 0, 0, 0];
const rare = [2, 4, 8, 7, 3, 0, a, -1, e, 2];

const prare = new Poly(rare);
const d0p = dx0(prare);
const d1p = dx1(prare);
const d2p = dx2(prare);

const ps = new Polytriangle(d1p, d2p, d0p, [0, 1, 2]);
ps.color = "orange";
const ps2 = new Polytriangle(d0p, d1p, d2p, [0, 1, 2]);
ps2.color = "orange";
const ps3 = new Polytriangle(d2p, d0p, d1p, [0, 1, 2]);

const dl = 10;

const constpol = [
    1, 3, 3,
    3, 6, 3,
    1, 3, 3, 1
];

const c1 = 1;
const c2 = -1;
const c3 = 1.2;

const bxoct = [
    1,
    c3, c3,
    c1, c2, c1,
    0,   0,  0, 0
];

const byoct = [
    0,
    c1, 0,
    c3, c2, 0,
    1, c3, c1, 0
];

const bzoct = [
    0,
    0, c1,
    0, c2, c3,
    0, c1, c3, 1
];

function bpoly(blist) {
    const res = [];
    for (let i = 0; i < 10; i++) {
        res.push(blist[i] * constpol[i]);
    }
    return new Poly(res);
}

const octb = new Polytriangle(bpoly(bxoct), bpoly(byoct), bpoly(bzoct), [0, 1, 2]);
octb.color = 'red';

function negpoly(blist) {
    const res = [];
    for (let i = 0; i < 10; i++) {
        res.push(blist[i] * (-1));
    }
    return bpoly(res);
}

const octbn = new Polytriangle(bpoly(bxoct), negpoly(byoct), bpoly(bzoct), [0, 1, 2]);
octbn.color = 'red';

const octbn2 = new Polytriangle(bpoly(bxoct), negpoly(byoct), negpoly(bzoct), [0, 1, 2]);
octbn2.color = 'red';

const octbn3 = new Polytriangle(bpoly(bxoct), bpoly(byoct), negpoly(bzoct), [0, 1, 2]);
octbn3.color = 'red';

const octbn4 = new Polytriangle(negpoly(bxoct), negpoly(byoct), bpoly(bzoct), [0, 1, 2]);
octbn4.color = 'red';

const octbn5 = new Polytriangle(negpoly(bxoct), bpoly(byoct), bpoly(bzoct), [0, 1, 2]);
octbn5.color = 'red';

const octbn6 = new Polytriangle(negpoly(bxoct), bpoly(byoct), negpoly(bzoct), [0, 1, 2]);
octbn6.color = 'red';

const octbn7 = new Polytriangle(negpoly(bxoct), negpoly(byoct), negpoly(bzoct), [0, 1, 2]);
octbn7.color = 'red';



visualizetext([octb, octbn, octbn2, octbn3, octbn4, octbn5, octbn6, octbn7], dl);


    // ... (rest of your Python script)

    // Replace print statements with addToOutput function
    // Example: replace `console.log(pol.eval([1, 2, 3]));` with:
    // addToOutput(pol.eval([1, 2, 3]));

    // For other print statements, use addToOutput as well.
//}
