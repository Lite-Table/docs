---

### `docs/packages/php/table.md`

```markdown
# Table

The `Table` class handles low-level, high-performance CRUD and batch operations directly against a table using native PDO, without hidden magic columns.

## Quick Start & Usage

You can use the `Table` class dynamically via the fluent `table()` method or extend it in your own model classes.

```php
use LiteTable\Database;
use LiteTable\Table;

$db = Database::make('mysql:host=localhost;dbname=my_database;charset=utf8mb4', 'root', 'secret');

// Instantiate dynamically for the 'users' table
$users = (new Table($db))->table('users');

// 1. Insert a record
$users->insert([
    'name' => 'John Doe',
    'email' => 'john@example.com'
]);
$newId =$users->getLastInsertId();

// 2. Find a record by primary key
$user =$users->find(1);

// 3. Update a record
$users->update(['name' => 'Johnathan Doe'],$newId);

// 4. Count and check existence
$total =$users->count();
$exists =$users->exists(['email' => 'john@example.com']);

// 5. Delete a record
// $users->delete($newId);
