# Builder Pattern

## Problem

Some objects require:
- many configuration options
- optional fields
- multi-step construction

Naive systems often use giant constructors.

---

# Without Builder

```ts
new HttpClient(
  url,
  timeout,
  retries,
  logging,
  metrics
)
```

As parameters grow:
- readability drops
- ordering bugs appear
- optional config becomes painful

---

# Problems With Naive Approach

## 1. Huge Constructors

Too many positional arguments.

---

## 2. Poor Readability

Difficult to understand what values represent.

---

## 3. Optional Parameter Explosion

Many constructor arguments become optional.

---

## 4. Construction Logic Becomes Messy

Validation and defaults become difficult.

---

# Solution

Builder Pattern constructs objects:

```txt
step-by-step
```

using dedicated builder objects.

---

# Core Insight

Builder is fundamentally:

```txt
construction abstraction
```

It separates:
- object construction
FROM
- final object representation

---

# Fluent Interface

Builder methods often return:

```ts
return this;
```

This enables:

```txt
method chaining
```

also called:

```txt
fluent interface
```

---

# Real World Usage

## Query Builders

SQL/ORM query construction.

---

## HTTP Clients

Complex request configuration.

---

## Compiler IR Builders

Step-by-step AST/IR construction.

---

## Docker/Kubernetes Configs

Complex infrastructure configuration.

---

# Modern TypeScript Reality

Modern TS often uses:

```ts
createClient({
  timeout: 5000
})
```

instead of classical builders.

Because object literals are flexible.

---

# When Builder Is Most Useful

Builder is especially useful when:
- construction is multi-step
- validation required
- ordering matters
- objects are deeply nested
- immutable objects are used

---

# Most Important Insight

Without Builder:

```txt
construction logic becomes messy
```

With Builder:

```txt
construction becomes structured and readable
```

---

# Final Insight

Builder is extremely common in:
- query systems
- compilers
- infrastructure tooling
- SDKs
- HTTP clients
- configuration-heavy systems
