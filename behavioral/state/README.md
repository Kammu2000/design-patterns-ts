# State Pattern

## Problem

Objects often behave differently depending on state.

Examples:
- TCP connections
- job processing
- DB transactions
- Raft nodes
- WebSocket lifecycle

Naive systems usually use giant conditionals:

```ts
if (state === "CONNECTED")
if (state === "CLOSED")
if (state === "RETRYING")
```

As states increase,
conditionals spread everywhere.

---

# Problems With Naive Approach

## 1. Giant Conditional Logic

```ts
if state A
if state B
if state C
```

Methods become difficult to maintain.

---

## 2. State Logic Is Scattered

Transition rules exist everywhere.

Hard to reason about valid flows.

---

## 3. Invalid State Transitions

Easy to accidentally allow impossible states.

Example:

```txt
CLOSED -> SEND_DATA
```

---

## 4. Difficult To Extend

Adding a new state requires modifying many conditionals.

---

# Solution

State pattern moves behavior into dedicated state objects.

Instead of:

```txt
one object managing all states
```

we get:

```txt
one class per state
```

Each state:
- owns behavior
- controls transitions
- knows valid operations

---

# Core Insight

State pattern separates:

```txt
state-specific behavior
FROM
main object logic
```

---

# Real World Usage

## TCP Connections

States:
- CLOSED
- CONNECTED
- LISTENING
- TIME_WAIT

Each behaves differently.

---

## Distributed Systems

Raft nodes:
- FOLLOWER
- LEADER
- CANDIDATE

Each state has different behavior.

---

## Job Queues

Jobs:
- PENDING
- PROCESSING
- FAILED
- COMPLETED

---

## Database Transactions

States:
- ACTIVE
- COMMITTED
- ABORTED

---

# Most Important Insight

Without State pattern:

```txt
behavior changes through conditionals
```

With State pattern:

```txt
behavior changes through polymorphism
```

This removes giant state-checking logic from systems.

---

# Final Insight

State pattern is extremely useful when:

```txt
behavior changes heavily depending on state
```

Especially in:
- networking
- runtimes
- distributed systems
- workflow engines
- protocol implementations
