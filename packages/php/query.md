---

### `docs/packages/php/query.md`

```markdown
# Query Builder

The `Query` class provides a fluent, secure, read-only SQL builder with safe parameter binding and multiple execution formats.

## Basic Usage

Start a query fluently using `Query::table()`, chain your clauses, and execute with `all()`, `one()`, `value()`, or `exists()`.

```php
use LiteTable\Database;
use LiteTable\Query;

$db = Database::make('mysql:host=localhost;dbname=my_database;charset=utf8mb4', 'root', 'secret');

// Fetch multiple rows as an array of objects
$admins = Query::table('users', $db)
    ->select(['id', 'name', 'email'])
    ->where('status', '=', 'active')
    ->and('role', '=', 'admin')
    ->orderBy('name', 'ASC')
    ->all();

foreach ($admins as $admin) {
    echo $admin->name . "\n";
}

Advanced Conditions (IN, NOT IN, NULL)

The builder handles array bindings and null checks safely out of the box:
PHP

// Using IN / andIn clauses
$users = Query::table('users', $db)
    ->select('*')
    ->where('status', '=', 'active')
    ->andIn('id', [1, 2, 3, 4])
    ->all();

// Using IS NULL checks
$pendingUsers = Query::table('users', $db)
    ->select('*')
    ->isNull('deleted_at')
    ->all();

Execution Methods

    all(): Returns an array of objects ([]).

    one(): Returns a single object or null.

    value(): Returns a single scalar value (ideal for COUNT, SUM, etc.).

    exists(): Returns a boolean indicating if any records match.
