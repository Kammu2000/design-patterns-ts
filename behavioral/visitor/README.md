# Visitor Pattern

## Problem

We have a fixed set of objects,
but operations on those objects keep increasing.

Example:
- Circle
- Rectangle

Operations:
- area calculation
- perimeter calculation
- rendering
- exporting
- serialization

Naive designs place all operations directly inside classes.

Initially this looks fine,
but classes slowly become bloated.

---

# Without Visitor

```ts
class Circle {
  area() {}
  perimeter() {}
  renderSVG() {}
  exportJSON() {}
}
```

Every new operation requires modifying existing classes.

As systems grow:

```txt
Circle
  ├── geometry logic
  ├── rendering logic
  ├── serialization logic
  ├── export logic
  └── optimization logic
```

Classes gain too many responsibilities.

---

# Problems With Naive Approach

## 1. Bloated Classes

Object classes become massive over time.

---

## 2. Violates Single Responsibility

Shape classes should represent shapes,
not rendering/exporting/serialization systems.

---

## 3. Hard To Organize Operations

Related operations become scattered across many classes.

Example:
- area logic inside every shape
- rendering logic inside every shape

Instead of grouped together.

---

# Solution

Visitor pattern moves operations OUTSIDE objects.

Objects only expose:

```ts
accept(visitor)
```

Visitors contain the actual operations.

Example:

```ts
class AreaVisitor {}
class PerimeterVisitor {}
class RenderVisitor {}
```

This keeps object structure clean.

---

# Core Insight

Visitor pattern separates:

```txt
data structures
FROM
operations on those structures
```

---

# Real Meaning Of accept()

```ts
shape.accept(visitor)
```

The shape decides:
which visitor method should execute.

Example:

```ts
Circle -> visitor.visitCircle()
Rectangle -> visitor.visitRectangle()
```

This is called:

```txt
double dispatch
```

which is the core mechanism behind Visitor pattern.

---

# Major Tradeoff

Visitor is GREAT when:

```txt
object types are stable
operations keep increasing
```

Example:
- compiler AST nodes
- query plans
- filesystem trees

---

Visitor is BAD when:

```txt
new object types keep increasing
```

Because every visitor must update.

Adding:

```txt
Triangle
```

requires:

```ts
visitTriangle()
```

inside ALL visitors.

---

# Real World Usage

## Compilers

AST nodes:
- NumberLiteral
- BinaryExpression
- FunctionCall

Operations:
- type checking
- optimization
- code generation
- linting

Visitor is heavily used here.

---

## Babel

AST transforms use visitors.

---

## ESLint

Rules traverse AST using visitors.

---

## Query Planners

Database query optimization often behaves like Visitor traversal.

---

# Final Insight

Without Visitor optimizes for:

```txt
adding new object types
```

Visitor optimizes for:

```txt
adding new operations
```

This tradeoff is the heart of the pattern.
