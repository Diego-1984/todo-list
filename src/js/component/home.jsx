import React from "react";
import Formulario from "./formulario.jsx";
import { useState } from "react";
import Item from "./item.jsx"

const Home = () => {
	const [todos, setTodos]=useState([]);
	const addTodo=(text)=>{
		let id = 1;
		if(todos.length > 0){
			id.todos = todos[0].id +1
		}
		let todo={id:id, text: text, completed:false}
		let newTodos=[todo, ...todos]
		console.log(newTodos)
		setTodos(newTodos)
	
		};
		const removeTodo=(id)=>{
			let updatedTodos=[...todos].filter((todo)=>todo.id !==id);
			setTodos(updatedTodos);
	};
	return (
		<>
		<div class ="container text-secondary  d-flex w-50 bg-light">
			<h1 className="container bg-light text-muted justify-content-center d-flex">toDo</h1>
		</div>

		<div className="container d-flex w-50 justify-content-center bg-light">
				<p><Formulario addToDo={addTodo} /></p>
								
		</div>
		<div className="container body w-50 p-5 bg-light">
				
				{todos.map((todo)=>{
				return (<Item removeTodo={removeTodo} todo={todo} key={todo.id}/>
				)
			})}
		</div>
		<div className="container footer text-secondary  d-flex w-50 bg-light">
			<p>Tareas pendientes {todos.length}</p>
		</div>
		</>
  
	);
};

export default Home;
