interface ShapeVisitor {
  visitCircle(circle: Circle): number;

  visitRectangle(rectangle: Rectangle): number;
}

interface Shape {
  accept(visitor: ShapeVisitor): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  accept(visitor: ShapeVisitor): number {
    return visitor.visitCircle(this);
  }
}

class Rectangle implements Shape {
  constructor(
    public width: number,
    public height: number
  ) {}

  accept(visitor: ShapeVisitor): number {
    return visitor.visitRectangle(this);
  }
}

class AreaVisitor implements ShapeVisitor {
  visitCircle(circle: Circle): number {
    return Math.PI * circle.radius * circle.radius;
  }

  visitRectangle(rectangle: Rectangle): number {
    return (
      rectangle.width * rectangle.height
    );
  }
}

const shapes: Shape[] = [
  new Circle(10),
  new Rectangle(5, 10),
];

const areaVisitor = new AreaVisitor();

for (const shape of shapes) {
  console.log(shape.accept(areaVisitor));
}
