import React, {useEffect, useState} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {ITodo, TodoRequest} from "./todo_interfaces";
import './todo_styles.css'
import axios from "axios";

declare var confirm: (question: string) => boolean

const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const fetchedTodos = async () =>
            await axios.get('http://localhost:8080/todos')
                .then((res) => res.data)

        fetchedTodos()
            .then((result) => setTodos([...result].reverse()))
            .catch(console.error)
    }, [])

    const addTodo = async (todoText: string): Promise<void> => {
        const newTodo: TodoRequest = {
            title: todoText,
            completed: false,
            created: Date.now()
        }
        await axios.post('http://localhost:8080/todo', newTodo)
            .then((res) => {
                const createdTodo: ITodo = res.data;
                setTodos([createdTodo, ...todos])
            })
            .catch(console.error)
    }

    const crossOut = async (id: number): Promise<void> => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }))
        const todo = todos.find(todo => todo.id === id)
        axios.put(`http://localhost:8080/todo/${id}`, todo)
            .then((res) => console.log(res))
            .catch(console.error)
    }
    const removeTodo = async (id: number): Promise<void> => {
        if (confirm('Are you sure?')) {
            await axios.delete(`http://localhost:8080/todo/${id}`)
                .then(() => setTodos(todos.filter(todo => todo.id !== id)))
                .catch(console.error)
        }
    }
    return (
        <div className={'container'}>
            <TodoForm onAdd={addTodo}/>
            <TodoList todos={todos} crossOut={crossOut} removeTodo={removeTodo}/>
        </div>
    );
};

export default TodoPage;