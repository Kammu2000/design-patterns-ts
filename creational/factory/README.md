# Factory Pattern

## Problem

Applications often need to create different object types dynamically.

Examples:
- parsers
- database drivers
- serializers
- storage engines
- protocol handlers

Naive systems usually use scattered conditionals.

---

# Without Factory

```ts
if type === "json"
if type === "xml"
if type === "yaml"
```

Object creation logic spreads across the system.

---

# Problems With Naive Approach

## 1. Scattered Creation Logic

Many parts of system manually instantiate objects.

---

## 2. Tight Coupling

Application depends directly on concrete classes.

---

## 3. Hard To Extend

Adding new implementations requires modifying many locations.

---

## 4. Business Logic Mixed With Creation Logic

Object creation pollutes application flow.

---

# Solution

Factory Pattern centralizes:

```txt
object creation
```

inside dedicated factory components.

Clients request objects from factory instead of using:

```ts
new Something()
```

directly.

---

# Core Insight

Factory pattern is fundamentally:

```txt
creation abstraction
```

Factory decides:

```txt
which concrete implementation to create
```

---

# Real World Usage

## Database Drivers

```txt
createConnection("postgres")
```

returns correct DB driver.

---

## Serializers

```txt
json
xml
protobuf
```

selected dynamically.

---

## Storage Engines

```txt
redis
s3
filesystem
```

created from configuration.

---

## Protocol Handlers

Different protocol implementations selected dynamically.

---

# Registry-Driven Factories

Modern systems often use:

```txt
registries
```

instead of giant switch statements.

Example:

```ts
registry.set("redis", RedisStorage)
```

This enables:
- plugins
- extensibility
- dynamic loading

---

# Most Important Insight

Without Factory:

```txt
clients create concrete objects directly
```

With Factory:

```txt
creation logic becomes centralized
```

This improves:
- extensibility
- decoupling
- maintainability

---

# Final Insight

Factory pattern is extremely common in:
- backend systems
- databases
- protocol servers
- cloud SDKs
- storage engines
- distributed systems
- infrastructure tooling
