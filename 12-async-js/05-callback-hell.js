// Callback hell occurs when deeply nested callbacks make control flow, error handling, and maintenance difficult.

// Nested callbacks make dependencies hard to follow.
getUser(id, (user) => {
  getOrders(user.id, (orders) => {
    getPayment(orders[0].id, (payment) => {
      console.log(payment);
    });
  });
});
