# Decorator Pattern

## Problem

Systems often need to add extra behavior around existing functionality.

Examples:
- logging
- metrics
- retries
- tracing
- caching
- rate limiting

Naive systems usually use inheritance.

---

# Without Decorator

```txt
LoggingDatabaseService
MetricsDatabaseService
RetryDatabaseService
```

As combinations increase:

```txt
LoggingAndMetricsDatabaseService
RetryAndMetricsDatabaseService
```

Inheritance explodes.

---

# Problems With Naive Approach

## 1. Class Explosion

Too many class combinations.

---

## 2. Rigid Architecture

Behavior fixed at compile time.

---

## 3. Hard To Combine Features

Mixing:
- logging
- retries
- metrics

becomes painful.

---

# Solution

Decorator Pattern wraps objects with additional behavior.

Decorators:
- implement same interface
- forward requests
- add extra behavior around calls

---

# Core Insight

Decorator is fundamentally:

```txt
behavior layering
```

Each decorator wraps another object.

---

# Visual Structure

```txt
MetricsDecorator
    ↓
RetryDecorator
    ↓
LoggingDecorator
    ↓
DatabaseService
```

Requests flow through layers.

---

# Real World Usage

## HTTP Clients

Add:
- retries
- metrics
- tracing
- auth

around requests.

---

## Database Clients

Decorate queries with:
- caching
- logging
- metrics

---

## Observability Systems

Tracing and instrumentation are often decorator-like.

---

## Middleware Systems

Middleware pipelines are conceptually similar to decorators.

---

# Cross-Cutting Concerns

Decorator is perfect for:

```txt
features applied across many systems
```

Examples:
- logging
- metrics
- retries
- caching

These are called:

```txt
cross-cutting concerns
```

---

# Most Important Insight

Without Decorator:

```txt
behavior added through inheritance
```

With Decorator:

```txt
behavior added through composition
```

This is far more flexible.

---

# Final Insight

Decorator is extremely common in:
- backend systems
- observability tooling
- networking
- HTTP clients
- database clients
- distributed systems

Modern middleware systems are often decorator-style architectures.
