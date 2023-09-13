import "./App.css";

import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/ExpenseList";
import Form from "./components/Form";
import Like from "./components/Like/Like";
import ListGroup from "./components/ListGroup";
import SchemaBasedForm from "./components/SchemaBasedForm";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "aaa", amount: 10, category: "Utilities" },
    { id: 3, description: "aaa", amount: 10, category: "Utilities" },
    { id: 4, description: "aaa", amount: 10, category: "Utilities" },
    { id: 5, description: "aaa", amount: 10, category: "Utilities" },
    { id: 6, description: "aaa", amount: 10, category: "Entertainment" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      {/* <Like onClick={() => console.log("clicked")} />
      <ListGroup
        heading="Countries"
        items={["Los Angeles", "New york"]}
        onSelectItem={(item) => console.log(item)}
      />
      <Cart cartItems={cart} onClear={() => setCart([])} />
      <ExpandableText maxChars={20}>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </ExpandableText> */}
      {/* <Form /> */}
      {/* <SchemaBasedForm /> */}
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
