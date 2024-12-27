import style from "./createtodo.module.css"


const Createtodo = (prop)=>{

    let {todo, handletodo, createtodo} = prop;


    return(
        <div id={style.createtodo}>
            <form  onSubmit={createtodo}>
                <h2>Create Todo</h2>
                <input type="text"  placeholder="todo..."  value={todo}  onChange={handletodo}/>
                <button>create</button> 
            </form>
        </div>
    )
}
export default Createtodo