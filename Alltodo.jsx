import style from "./alltodos.module.css"
const Alltodo = (prop)=>{
    // console.log(prop);
    let {alltodo , deletetodo, edittodo} = prop 
    
    return(
        <div id={style.todowrapper}>
            {
                alltodo.map((ele)=>{
                    // console.log(ele);
                    let {text,id} = ele;
                    return(
                        <section key={id}>
                            <h1>{text}</h1>
                            <button onClick={()=>edittodo(id)}>edit</button>
                            <button onClick={()=>deletetodo(id)}>delete</button>
                        </section>
                    );
                })
            }
        </div>
    );
};
export default Alltodo