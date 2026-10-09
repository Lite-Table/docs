# Database

The `Database` class manages the native `PDO` connection with secure defaults out of the box (exceptions enabled, emulated prepares disabled, and associative fetch modes). It also provides transaction handling.

## Instantiation Methods

You can initialize the `Database` class in 3 different ways depending on your architecture:

### 1. Standard DSN Connection
Pass the standard database DSN string along with credentials.

```php
use LiteTable\Database;

$db = new Database(
    dsn: 'mysql:host=localhost;dbname=my_database;charset=utf8mb4',
    username: 'root',
    password: 'secret_password'
);

### 2. Static Factory (Database::make)

A cleaner, fluent alternative to new Database().
use LiteTable\Database;

$db = Database::make(
    dsn: 'mysql:host=localhost;dbname=my_database;charset=utf8mb4',
    username: 'root',
    password: 'secret_password'
);

3. Reusing an Existing PDO Instance

If your application already manages a PDO instance (e.g., via a framework container), you can inject it directly.
PHP

use LiteTable\Database;

$pdo = new PDO('mysql:host=localhost;dbname=my_database', 'root', 'secret');

$db = new Database($pdo);
// Or using the factory alias:
// $db = Database::connect($pdo);

Transactions

The transaction() helper automatically commits on success or rolls back if an exception is thrown inside the closure.
PHP

$db->transaction(function (Database $db) {$db->prepare("UPDATE accounts SET balance = balance - 100 WHERE id = :id")
       ->execute(['id' => 1]);

    $db->prepare("UPDATE accounts SET balance = balance + 100 WHERE id = :id")
       ->execute(['id' => 2]);
});
