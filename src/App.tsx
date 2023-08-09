import React, { useState } from "react";
import ExpenseList from "./components/ExpenseTracker";
import ExpenseFilter from "./components/ExpenseTracker/ExpenseFilter";
import ExpenseForm from "./components/ExpenseTracker/ExpenseForm";
import categories from "./components/categories";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 10, category: "Groceries" },
    { id: 5, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])} />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id != id))
        }
      />
    </div>
  );
}

export default App;
