// DEFINITION:
// Abstraction is an OOP principle that hides complex implementation
// details and exposes only the essential functionality to the user.

// ============================================
// ABSTRACTION IN JAVASCRIPT
// ============================================

class CoffeeMachine {
  // Public method: exposes only the operation the user needs
  makeCoffee() {
    this.#boilWater();
    this.#brewCoffee();
    this.#pourCoffee();

    return "Coffee is ready!";
  }

  // Private methods: hide internal implementation details
  #boilWater() {
    console.log("Boiling water...");
  }

  #brewCoffee() {
    console.log("Brewing coffee...");
  }

  #pourCoffee() {
    console.log("Pouring coffee...");
  }
}

const machine = new CoffeeMachine();

// The user only needs to call one simple method.
// They don't need to know the internal steps.
console.log(machine.makeCoffee());

// Output:
// Boiling water...
// Brewing coffee...
// Pouring coffee...
// Coffee is ready!

// Internal methods cannot be called directly:
// machine.#boilWater(); // SyntaxError


// ============================================
// ABSTRACTION USING A COMMON INTERFACE
// ============================================

class Payment {
  pay(amount) {
    throw new Error("Subclass must implement pay()");
  }
}

class CreditCardPayment extends Payment {
  pay(amount) {
    return `Paid ₹${amount} using Credit Card`;
  }
}

class UpiPayment extends Payment {
  pay(amount) {
    return `Paid ₹${amount} using UPI`;
  }
}

// The caller uses the same interface without needing to know
// the internal payment-processing details.
function checkout(paymentMethod, amount) {
  return paymentMethod.pay(amount);
}

console.log(checkout(new CreditCardPayment(), 500));
// "Paid ₹500 using Credit Card"

console.log(checkout(new UpiPayment(), 300));
// "Paid ₹300 using UPI"


// ============================================
// QUICK REVISION
// ============================================
// 1. Abstraction hides implementation complexity.
// 2. It exposes only the functionality users need.
// 3. Private methods (#method) can hide internal operations.
// 4. Common interfaces let callers use different implementations.
// 5. JavaScript has no dedicated `abstract class` keyword;
//    abstract-like behavior can be implemented with conventions
//    or runtime checks, as shown in the Payment example.