# Query Builder

The `Query` class provides a fluent, secure, read-only SQL builder with safe parameter binding, advanced joins, and multiple execution formats.

## Setup & Initialization

```php
use LiteTable\Database;
use LiteTable\Query;

$pdo = new PDO('sqlite::memory:');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$pdo->exec("
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        status TEXT
    )
");

$pdo->exec("
    CREATE TABLE profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        bio TEXT,
        score REAL
    )
");

$db = new Database($pdo);

```

---

## 1. Basic Select with Where Condition

```php
$activeUsers = (new Query($db))
    ->select('id, name')
    ->from('users')
    ->where('status', '=', 'active')
    ->all();

foreach ($activeUsers as $u) {
    echo "Active User: {$u->name}\n";
}

```

---

## 2. Advanced JOIN Query

```php
$joinQuery = (new Query($db))
    ->select('users.name, profiles.bio, profiles.score')
    ->from('users')
    ->join('profiles', 'users.id = profiles.user_id', 'INNER')
    ->where('profiles.score', '>', 90.0)
    ->orderBy('profiles.score', 'DESC');

$developer = $joinQuery->one();
echo "Top Developer: {$developer->name} ({$developer->bio}) with score {$developer->score}\n";

```

---

## 3. IN Clause Filtering

```php
$inResults = Query::table('users', $db)
    ->in('name', ['Alice', 'Charlie'])
    ->all();

echo "IN clause matched " . count($inResults) . " records.\n";

```

---

## 4. Exists Check

```php
$exists = Query::table('users', $db)
    ->where('status', '=', 'inactive')
    ->exists();

echo "Inactive users exist? " . ($exists ? 'Yes' : 'No') . "\n";

```

---

## 5. Safe Raw SQL Fragment

```php
// Supports both positional (?) and named parameters seamlessly
$rawResults = Query::table('users', $db)
    ->raw('WHERE name LIKE ?', ['%li%'])
    ->all();

echo "Raw SQL query results count: " . count($rawResults) . "\n";

```
