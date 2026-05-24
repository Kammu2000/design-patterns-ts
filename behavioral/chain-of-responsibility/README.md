# Chain Of Responsibility Pattern

## Problem

Requests often require multiple processing steps.

Example:
- authentication
- validation
- logging
- rate limiting
- business logic

Naive systems place everything inside giant handlers.

---

# Without Chain Of Responsibility

```ts
handleRequest() {
  authenticate()
  validate()
  log()
  process()
}
```

As systems grow,
handlers become massive monoliths.

---

# Problems With Naive Approach

## 1. Giant Functions

Request processing logic becomes huge.

---

## 2. Tight Coupling

All processing steps depend on one another.

---

## 3. Hard To Reuse

Cannot easily reuse:
- auth
- logging
- validation

across pipelines.

---

## 4. Hard To Reorder

Changing execution order becomes painful.

---

## 5. Hard To Extend

Adding new processing steps requires modifying large functions.

---

# Solution

Chain Of Responsibility breaks processing into:

```txt
small independent handlers
```

Each handler:
- processes request
- optionally modifies request
- forwards request to next handler

---

# Core Insight

Instead of:

```txt
one object doing everything
```

we get:

```txt
many small processing stages
```

connected together.

---

# Real World Usage

## Express Middleware

```ts
app.use(authMiddleware)
app.use(loggerMiddleware)
```

---

## nginx Request Pipeline

Requests pass through multiple handlers.

---

## Compiler Passes

```txt
parse
-> optimize
-> transform
-> emit
```

---

## Packet Filters

Network packets pass through filtering chains.

---

# Modern Evolution

Modern systems often implement this pattern using:

```txt
functional middleware pipelines
```

instead of classical OO inheritance.

---

# Most Important Insight

Chain Of Responsibility is fundamentally about:

```txt
pipeline architecture
```

This pattern is extremely common in:
- backend systems
- networking
- compilers
- gateways
- distributed systems
