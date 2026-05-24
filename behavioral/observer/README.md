# Observer Pattern

## Problem

One event occurs, but multiple independent systems need to react.

Example:
- user created
- payment completed
- order shipped
- node crashed

Naive systems tightly couple all side effects together.

---

# Problems With Naive Approach

## 1. Massive Coupling

```ts
createUser() {
  sendEmail()
  updateAnalytics()
  publishAuditLogs()
}
```

Business logic becomes tightly connected to unrelated systems.

---

## 2. Hard To Extend

Adding new behavior requires modifying existing code.

Example:

```ts
sendSlackNotification()
```

must be added directly inside `createUser()`.

---

## 3. Hard To Test

Every dependency becomes required for testing.

---

## 4. Failure Propagation

If analytics crashes:
- should user creation fail?

In tightly coupled systems:
sometimes yes accidentally.

---

# Solution

Observer pattern separates:

- EVENT PRODUCER
from
- EVENT CONSUMERS

Producer does not care:
- who listens
- how many listeners exist
- what they do

It only publishes events.

---

# Real World Infra Examples

## Kafka

Producer publishes messages.
Consumers react independently.

---

## Redis Pub/Sub

Publishers know nothing about subscribers.

---

## Node.js EventEmitter

```ts
emitter.on()
emitter.emit()
```

Observer pattern.

---

## Monitoring Systems

CPU spike event:
- alerting system reacts
- dashboards update
- logs generated

---

# Core Insight

Observer pattern is about:

```txt
decoupling side effects from core logic
```

This is one of the foundations of scalable distributed systems.
