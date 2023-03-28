import TodoItem from "./Todoitem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, removeTodo, updateTodo, }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800"
                >
                    {todos.map((todo, index) => (
                    
                            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                                {
                                    (draggableProvided) => (
                                        <TodoItem
                                        todo={todo}
                                        removeTodo={removeTodo}
                                        updateTodo={updateTodo}
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.dragHandleProps}
                                        {...draggableProvided.draggableProps}
                                    />
                                 )}
                            </Draggable>
                        ))}
                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
