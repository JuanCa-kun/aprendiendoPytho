class Shape {
    constructor(name, sides, sideLength){
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(`El perímetro de ${this.name} es ${perimeter}`);
    }
  }
  
  const square = new Shape("square", 4, 5);
  square.calcPerimeter();
  
  const triangle = new Shape("triangle", 3, 3);
  triangle.calcPerimeter();
  