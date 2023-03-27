import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const clearCompleted = () => {
        console.log("ola");
        setTodos(todos.filter((item) => !item.completed));
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const [filter, setFilter] = useState("all");

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    const changeFilter = (filter) => setFilter(filter);
    return (
        <div
            className="
         min-h-screen  bg-gray-300 
         bg-[url('./assets/images/bg-mobile-light.jpg')]  bg-contain bg-no-repeat px-4
          transition-all duration-1000
          dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
          md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
          "
        >
            <Header />
            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    todos={filteredTodos()}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
            <footer className="mt-8 text-center dark:text-gray-400">
                Drag and drop
            </footer>
        </div>
    );
};

export default App;
