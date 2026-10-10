// DEFINITION:
// Encapsulation is an OOP principle that bundles data and
// methods inside a class while controlling access to internal
// data to prevent invalid or unauthorized modifications.

// ============================================
// ENCAPSULATION IN JAVASCRIPT
// ============================================

class BankAccount {
  // Private field: cannot be accessed directly outside this class
  #balance;

  constructor(owner, initialBalance) {
    this.owner = owner; // Public property

    // Validate the initial balance before storing it
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }

    this.#balance = initialBalance; // Initialize private data
  }

  // Public method: allows controlled deposits
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }

    this.#balance += amount;
  }

  // Public method: allows controlled withdrawals
  withdraw(amount) {
    if (amount <= 0 || amount > this.#balance) {
      throw new Error("Invalid withdrawal amount");
    }

    this.#balance -= amount;
  }

  // Public method: provides controlled read access
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Alex", 1000);

console.log(account.owner);       // "Alex" — public property

account.deposit(500);
account.withdraw(200);

console.log(account.getBalance()); // 1300

// Private data cannot be accessed directly:
// console.log(account.#balance); // SyntaxError
// account.#balance = -5000;      // SyntaxError

// Invalid operations are rejected:
// account.deposit(-100); // Error: Deposit must be positive

// ============================================
// QUICK REVISION
// ============================================
// 1. Encapsulation bundles data and methods inside a class.
// 2. #balance makes the balance a private field.
// 3. Public methods control how private data is modified.
// 4. Validation prevents invalid operations.
// 5. External code interacts through a controlled public interface.