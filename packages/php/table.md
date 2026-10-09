# Table

The `Table` class handles low-level, high-performance CRUD and batch operations directly against a table using native PDO, without hidden magic columns.

## Setup & Initialization

```php
use LiteTable\Database;
use LiteTable\Table;

$pdo = new PDO('sqlite::memory:');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        status TEXT
    )
");

$db = new Database($pdo);
$table = new Table($db);
$table->table('users');

```

---

## 1. Single Insert

```php
$table->insert([
    'name' => 'Alice Smith',
    'email' => 'alice@example.com',
    'status' => 'active'
]);

echo "Inserted single user. Total records: " . $table->count() . "\n";

```

---

## 2. Batch Insert

```php
$table->insertBatch([
    ['name' => 'Bob Jones', 'email' => 'bob@example.com', 'status' => 'pending'],
    ['name' => 'Charlie Brown', 'email' => 'charlie@example.com', 'status' => 'active']
]);

echo "Inserted batch. Total records: " . $table->count() . "\n";

```

---

## 3. Find Operations

```php
$user = $table->find(1);
echo "Found User ID 1: {$user->name} ({$user->email})\n";

$byField = $table->findByField('email', 'bob@example.com');
echo "Found by Field (Bob): ID {$byField->id} - {$byField->name}\n";

```

---

## 4. Update Operations

```php
$table->update(['name' => 'Alice S. Updated'], 1);

$updatedUser = $table->find(1);
echo "Updated User ID 1 name to: {$updatedUser->name}\n";

```

---

## 5. First and Last Records

```php
$first = $table->first();
$last = $table->last();

echo "First record: {$first->name} | Last record: {$last->name}\n";

```

---

## 6. Delete Operations

```php
$table->delete(2); // Deletes Bob

echo "Deleted User ID 2. Remaining records: " . $table->count() . "\n";

```
