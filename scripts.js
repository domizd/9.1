function triangleArea(a,h) {
  if (a > 0 && h > 0) {
    return a*h/2;
  }
 else {
   return "wartosc mniejsza od zera"
 } 
}
console.log(triangleArea(10,6));

var triangle1Area = TriangleArea(10, 1);
var triangle2Area = TriangleArea(18, 15);
var triangl31Area = TriangleArea(10, 25);