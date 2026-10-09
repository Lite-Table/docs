---
layout: home

hero:
  name: LiteTable Ecosystem
  text: High-performance, lightweight database access across languages
  tagline: A unified architecture featuring Database, Table, and Query abstractions for PHP, Go, .NET, and Python.
  actions:
    - theme: brand
      text: 🐘 PHP Implementation
      link: /packages/php/database
    - theme: alt
      text: 🐹 Go Implementation
      link: /packages/go/database
    - theme: alt
      text: 💜 .NET Implementation
      link: /packages/dotnet/database
    - theme: alt
      text: 🐍 Python Implementation
      link: /packages/python/database
---

<div class="content-container" style="max-width: 1152px; margin: 0 auto; padding: 4rem 2rem;">

## 🚀 The Philosophy

Traditional ORMs often introduce unnecessary overhead, hidden performance traps (like N+1 queries), and heavy change-tracking magic. **LiteTable** strips away the boilerplate while keeping safety and developer experience (DX) intact.

- **No Heavy Serialization:** Work directly with native arrays, maps, and primitive types.
- **SQL First:** Write your own queries or use simple CRUD wrappers without losing control.
- **Predictable & Fast:** Zero hidden magic. What you write is exactly what gets executed.

---

## 🌐 Multi-Language Ecosystem

The LiteTable philosophy isn't tied to a single language. We are building a consistent API and developer experience across multiple stacks, making it seamless for developers working in polyglot environments:

| Language | Package Status | Description |
| :--- | :--- | :--- |
| **<img src="https://img.shields.io/badge/PHP-%23777BB4.svg?style=flat&logo=php&logoColor=white" style="display: inline; vertical-align: middle; height: 18px;" /> PHP** | 🟢 Active | Native PDO wrapper, fast CRUD, and query execution. |
| **<img src="https://img.shields.io/badge/Go-%2300ADD8.svg?style=flat&logo=go&logoColor=white" style="display: inline; vertical-align: middle; height: 18px;" /> Go** | 🚧 In Progress | High-performance implementation mirroring the same DX. |
| **<img src="https://img.shields.io/badge/.NET-%23512BD4.svg?style=flat&logo=dotnet&logoColor=white" style="display: inline; vertical-align: middle; height: 18px;" /> .NET** | 🔜 Coming Soon | Lightweight data access mapping directly to dictionaries/structs. |
| **<img src="https://img.shields.io/badge/Python-%233776AB.svg?style=flat&logo=python&logoColor=white" style="display: inline; vertical-align: middle; height: 18px;" /> Python** | 🔜 Coming Soon | Clean, minimal database utility without heavy ORM bloat. |

---

## 📦 Core Components

Across all implementations, LiteTable provides three fundamental building blocks:

1. **`Database / Connection`**: A clean, streamlined database connection manager configured with safe defaults (prepared statements, secure character sets, and optimal error modes).
2. **`Table`**: A zero-boilerplate CRUD helper for standard table operations (`find`, `all`, `insert`, `update`, `delete`).
3. **`Query`**: A safe query executor for custom SQL statements with parameter binding returning raw objects, maps, or collections.

</div>
