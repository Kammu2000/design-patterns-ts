# Command Pattern

## Problem

Systems often need to execute many different actions dynamically.

Examples:
- Redis commands
- CLI commands
- RPC handlers
- job queue workers
- protocol handlers

Naive systems usually use giant conditional dispatchers.

---

# Without Command Pattern

```ts
if command === "SET"
if command === "GET"
if command === "DEL"
```

As commands grow,
dispatch logic becomes massive.

---

# Problems With Naive Approach

## 1. Giant Dispatch Functions

Large conditional trees become difficult to maintain.

---

## 2. Tight Coupling

Dispatcher directly owns command logic.

---

## 3. Hard To Extend

Adding new commands requires modifying dispatcher code.

---

## 4. Difficult To Add Plugins

Dynamic command registration becomes difficult.

---

# Solution

Command Pattern converts actions into:

```txt
independent command objects
```

Each command owns its own execution logic.

Dispatcher only:
- finds command
- invokes command

---

# Core Insight

Instead of:

```txt
conditional-driven dispatch
```

we get:

```txt
registry-driven dispatch
```

This is extremely common in backend systems.

---

# Registry + Dispatcher Architecture

## Registry

Stores command mappings.

```txt
SET -> SetCommand
GET -> GetCommand
```

---

## Dispatcher

Routes incoming requests to correct command.

---

# Real World Usage

## Redis

Command table dispatch.

---

## CLI Frameworks

```txt
git commit
git push
git checkout
```

Commands registered dynamically.

---

## Job Queues

Workers execute queued commands/jobs.

---

## RPC Systems

RPC methods dispatched dynamically.

---

## Message Brokers

Consumers dispatch messages to handlers.

---

# Most Important Insight

Command pattern separates:

```txt
request routing
FROM
request execution
```

This enables:
- plugins
- queues
- retries
- logging
- replay
- distributed execution

---

# Final Insight

Command pattern is heavily used in:

- databases
- runtimes
- queues
- distributed systems
- protocol servers
- CLI tools
- message brokers

Modern systems often implement it using:

```txt
registries + dispatchers
```

instead of classical textbook examples.
