# Adapter Pattern

## Problem

Systems often need to integrate with incompatible interfaces.

Examples:
- cloud SDKs
- databases
- legacy APIs
- storage providers
- protocol libraries

Applications become tightly coupled to external APIs.

---

# Without Adapter

```ts
app -> directly calls S3 SDK
```

Now switching providers becomes painful.

Example:
- S3
- GCS
- Azure Blob

all expose different APIs.

---

# Problems With Naive Approach

## 1. Tight Coupling

Application depends directly on external SDKs.

---

## 2. Hard To Swap Providers

Changing provider requires modifying application logic.

---

## 3. Vendor Lock-In

Business logic becomes dependent on third-party APIs.

---

## 4. Inconsistent Interfaces

Different providers expose different method names and behavior.

---

# Solution

Adapter Pattern introduces:

```txt
translation layer
```

between application and external system.

Application depends on:

```txt
stable internal interface
```

Adapter translates calls to external API.

---

# Core Insight

Adapter pattern is fundamentally:

```txt
interface translation
```

It converts:

```txt
one interface
INTO
another interface
```

---

# Real World Usage

## Cloud Storage

```txt
S3
GCS
Azure Blob
```

adapted behind:

```txt
StorageEngine
```

---

## Database Drivers

Different DB clients adapted behind common interfaces.

---

## Cache Systems

Redis/Memcached adapters.

---

## Protocol Bridges

HTTP ↔ gRPC
TCP ↔ WebSocket

---

# Anti-Corruption Layer

In large systems,
adapters often protect core application from:

```txt
ugly external APIs
```

This is extremely common in distributed systems.

---

# Most Important Insight

Without Adapter:

```txt
application depends on vendor APIs
```

With Adapter:

```txt
application depends on stable internal interfaces
```

Adapters isolate external complexity.

---

# Final Insight

Adapter is one of the most practical patterns in:
- backend systems
- cloud infrastructure
- SDK wrappers
- distributed systems
- storage engines
- protocol integrations
