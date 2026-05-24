# Design Patterns in TypeScript

A practical repository to learn important design patterns using TypeScript with examples inspired from:
- backend systems
- infrastructure engineering
- distributed systems
- tooling architecture

The goal is to understand:
- what problem a pattern solves
- why naive code becomes problematic
- where patterns appear in real systems

---

# Repository Structure

```txt
design-patterns-ts/
│
├── creational/
├── structural/
├── behavioral/
│
└── README.md
```

Each pattern contains:

```txt
pattern/
├── README.md
├── without-pattern.ts
├── with-pattern.ts
```
---

# Creational Patterns

Patterns related to object creation.

| Pattern | Core Idea | Real World Usage |
|---|---|---|
| Factory | Centralized object creation | DB drivers, parsers, SDKs |
| Singleton | Shared process-wide instance | Logger, config, connection pool |
| Builder | Step-by-step object construction | Query builders, configs |

---

# Structural Patterns

Patterns related to system composition.

| Pattern | Core Idea | Real World Usage |
|---|---|---|
| Adapter | Interface translation | Storage adapters, SDK wrappers |
| Decorator | Dynamic behavior layering | Logging, metrics, retries |
| Facade | Simplified high-level API | Deployment systems, cloud SDKs |

---

# Behavioral Patterns

Patterns related to communication and behavior.

| Pattern | Core Idea | Real World Usage |
|---|---|---|
| Observer | Event subscription | Pub/Sub, EventEmitter |
| Strategy | Swappable algorithms | Compression, routing |
| Command | Encapsulated actions | CLI, job queues |
| Visitor | Separate operations from structures | AST processing, compilers |
| State | State-driven behavior | TCP lifecycle, workflows |
| Chain of Responsibility | Request flows through handlers | Middleware pipelines |
| Template Method | Shared algorithm skeleton | ETL/deployment pipelines |

---

# Most Useful Patterns in Real Systems

Highest ROI patterns:

```txt
Factory
Adapter
Decorator
Strategy
Observer
Command
Visitor
```

Very common in:
- infrastructure systems
- databases
- networking
- compilers
- tooling ecosystems
---
