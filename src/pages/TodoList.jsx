import { useState } from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-primary">Task Management</h1>
      
      <form onSubmit={addTodo} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 bg-dark-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button type="submit" className="btn">Add Task</button>
        </div>
      </form>

      <div className="space-y-2">
        {todos.map(todo => (
          <div
            key={todo.id}
            className="flex items-center justify-between bg-dark-100 p-4 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`p-2 rounded-full ${todo.completed ? 'bg-green-600' : 'bg-gray-600'}`}
              >
                <FaCheck className={todo.completed ? 'opacity-100' : 'opacity-0'} />
              </button>
              <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-2 text-red-500 hover:text-red-400"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;