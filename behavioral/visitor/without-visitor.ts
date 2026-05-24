export class Circle {
  constructor(public radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

export class Rectangle {
  constructor(
    public width: number,
    public height: number
  ) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return (
      2 * (this.width + this.height)
    );
  }
}

const circle = new Circle(10);

const rectangle = new Rectangle(5, 10);

console.log(circle.area());

console.log(rectangle.area());

console.log(circle.perimeter());

console.log(rectangle.perimeter());
