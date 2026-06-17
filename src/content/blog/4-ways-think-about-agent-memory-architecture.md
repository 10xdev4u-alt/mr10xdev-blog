---
title: "The 4 ways to think about agent memory architecture (in production)"
description: "4 ways to think about memory architecture: key-value, relational, vector, graph. Each is a different memory architecture. The framework, the examples, the lesson."
date: 2025-12-20
tags: ["memory", "agents", "architecture"]
---

4 ways to think about memory architecture: key-value,
relational, vector, graph. Each is a different memory
architecture. The framework, the examples, the lesson.

## Architecture 1: Key-value

The memory is a key-value store. The memory is a map. The
memory is the simplest.

**Examples:**
- `{ "user:1": "alice" }`
- `{ "issue:42": "bug" }`
- `{ "preference:dark_mode": true }`

**When to use:** the memory is simple. The memory is
small. The user wants fast.

**Pros:**
- Simple (the key-value is the simplest)
- Fast (the key-value is the fastest)
- Standard (the key-value is universal)

**Cons:**
- Limited (the key-value can't query)
- Rigid (the key-value is rigid)
- Coupled (the key-value is tied to the keys)

## Architecture 2: Relational

The memory is a relational database. The memory is SQL.
The memory is the standard.

**Examples:**
- `users(id, name, email)`
- `issues(id, title, label)`
- `runs(id, agent, started_at, ended_at)`

**When to use:** the memory is structured. The memory
has relations. The user wants queries.

**Pros:**
- Powerful (the relational is powerful)
- Queryable (the relational is queryable)
- Standard (the relational is standard)

**Cons:**
- Slow (the relational is slow)
- Complex (the relational is complex)
- Coupled (the relational is tied to the schema)

## Architecture 3: Vector

The memory is a vector store. The memory is embeddings.
The memory is for similarity.

**Examples:**
- `[{ embedding: [0.1, 0.2, ...], content: "..." }]`
- Similarity search by cosine
- Embeddings from OpenAI, Cohere, etc.

**When to use:** the memory is queryable by meaning. The
memory is large. The user wants similarity.

**Pros:**
- Semantic (the vector is semantic)
- Scalable (the vector is scalable)
- Smart (the vector is smart)

**Cons:**
- Cost (the vector costs money to embed)
- Storage (the vector is large)
- Coupled (the vector is tied to the embedder)

## Architecture 4: Graph

The memory is a graph database. The memory is nodes and
edges. The memory is for relations.

**Examples:**
- `User -- owns --> Repo`
- `Repo -- has --> Issue`
- `Issue -- assigned_to --> User`

**When to use:** the memory has many relations. The
memory is a network. The user wants traversal.

**Pros:**
- Relational (the graph is relational)
- Powerful (the graph is powerful for relations)
- Flexible (the graph is flexible)

**Cons:**
- Complex (the graph is complex)
- Slow (the graph is slow for simple queries)
- Coupled (the graph is tied to the schema)

## The 4 together

The 4 are the architectures. The architectures are the
memory. The memory is the value.

| Architecture | Speed | Power | Best for |
|---|---|---|---|
| Key-value | Fastest | Low | Simple |
| Relational | Medium | High | Structured |
| Vector | Fast | Medium | Similarity |
| Graph | Slow | High | Relations |

The architecture that matches the need is the right
architecture.

## The 80/20

80% of the value comes from:
- Key-value (the memory is simple)
- Vector (the memory is semantic)

20% comes from:
- Relational (the memory is structured)
- Graph (the memory is relational)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each memory, ask:
- Is the memory simple? (key-value)
- Is the memory structured? (relational)
- Is the memory semantic? (vector)
- Is the memory relational? (graph)

The right answer is the right architecture at the right
cost.

## The lesson

4 architectures. 1 memory. 1 lesson: pick the right one.

The architecture that matches the need is the right
architecture. The architecture that doesn't match is the
wrong architecture.

The agent era is here. The memory is the design. The
design is the choice. The choice is the discipline.
