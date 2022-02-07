const segment1 = new Segment(3, 5, 6, 1);

console.log(segment1.length);
console.log(segment1.mediumPoint);

const verticeInfSx = new Point(3, 2);
const verticeSupSx = new Point(3, 6);
const verticeSupDx = new Point(8, 2);
const verticeInfDx = new Point(8, 6);

const rectangle1 = new Rectangle(verticeInfSx, verticeSupSx, verticeSupDx, verticeInfDx);

console.log(rectangle1.perimetro);
console.log(rectangle1.area);
