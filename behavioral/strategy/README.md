# Strategy Pattern

## Problem

We need to support multiple algorithms for the same task.

Example:
- gzip compression
- brotli compression
- snappy compression

Naive code usually becomes giant `if-else` or `switch` blocks.

---

## Problems With Naive Approach

### 1. Violates Open/Closed Principle

Every new algorithm requires modifying existing code.

```ts
if (algorithm === "zstd") {
  ...
}
```

The class keeps growing forever.

---

### 2. Hard To Test

All algorithms are tightly coupled inside one class.

---

### 3. Hard To Extend

Adding:
- metrics
- fallback logic
- runtime switching

becomes messy.

---

### 4. Logic Explosion

Large infra systems become giant conditional jungles.

```txt
if redis
if kafka
if grpc
if retryStrategyA
if retryStrategyB
```

This becomes painful very fast.
