# Singleton Pattern

## Problem

Some systems require:

```txt
one shared instance
```

Examples:
- logger service
- metrics registry
- config manager
- database pool

Without shared instance,
multiple copies may exist.

---

# Without Singleton

```ts
const logger1 = new Logger();

const logger2 = new Logger();
```

Each logger has independent state.

Example:

```txt
logger1 logs != logger2 logs
```

This can cause:
- fragmented logs
- duplicate resources
- inconsistent state

---

# Solution

Singleton Pattern ensures:

```txt
only one instance exists
```

and provides global access to it.

---

# Core Mechanism

## 1. Static Shared Instance

```ts
private static instance: Logger;
```

Stores shared instance.

---

## 2. Private Constructor

```ts
private constructor() {}
```

Prevents:

```ts
new Logger()
```

from outside.

---

## 3. Global Access Method

```ts
Logger.getInstance()
```

Creates/accesses shared instance.

---

# Core Insight

Singleton is fundamentally:

```txt
shared lifecycle-managed state
```

NOT special syntax.

---

# Real World Usage

## Logger Systems

Single shared logger.

---

## Metrics Registries

Shared metrics collector.

---

## Database Pools

Single connection manager.

---

## Config Managers

Single configuration source.

---

# Modern TypeScript Reality

Modern TS/Node.js systems often use:

```ts
export const logger = new Logger();
```

instead of classical singleton classes.

Why?

Because modules are cached after import,
which already behaves singleton-like.

---

# Problems With Singleton

Singleton can introduce:

```txt
hidden global state
```

Problems:
- hidden dependencies
- difficult testing
- shared mutable state
- tight coupling

---

# Modern Alternative

Modern systems often prefer:

```txt
dependency injection
```

instead of explicit global singletons.

Example:

```ts
constructor(logger: Logger)
```

This keeps dependencies explicit.

---

# Most Important Insight

Singleton is useful when systems genuinely require:

```txt
one shared process-wide resource
```

But should be used carefully.
