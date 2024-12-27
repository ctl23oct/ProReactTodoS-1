import { useState } from "react"
import Alltodo from "./Alltodo"
import Createtodo from "./Createtodo"

const TodoWrapper = ()=>{
    let [Todo,setTodo] = useState("")
    let [alltodo,setalltodo] = useState([{text:"hello world",id: 1}])

    let handletodo = (e) =>{
        setTodo( e.target.value);
    };
    let createtodo = (e)=>{
        e.preventDefault();
        // console.log(Todo);

      if (Todo.trim() !==""){
        let newtodo={
            text: Todo,
            id: Date.now(),
        };
        console.log(newtodo);
        setalltodo([...alltodo,newtodo]);
        setTodo ("")


    }else{
        alert("empty todo")
    }    
    };
    // console.log(alltodo);

    let deletetodo = (id) => {
        console.log("deleted",id)
        let filtertodo =  alltodo.filter((ele)=>{
            return ele.id !== id;
        })
        setalltodo(filtertodo)
    };

    let edittodo = (id) =>{
        // console.log("edit", id);
        let edittodo = alltodo.find((ele)=>{
            return ele.id===id
        })
        console.log(edittodo);
        let filtertodo =  alltodo.filter((ele)=>{
            return ele.id !== id;
        })
        setalltodo(filtertodo)
        setTodo(edittodo.text);
    } 

    return(
        <div>
            <Createtodo todo={Todo} handletodo={handletodo} createtodo={createtodo} />
            <Alltodo alltodo={alltodo} deletetodo ={deletetodo} edittodo={edittodo}/> 
        </div>
    )
}
export default TodoWrapper