import { useReducer } from "react"
import { employees as intialPro} from "./data"
import { employeesReducer } from "./reduser";
function App() {
  const [employees,dispatch]=useReducer(employeesReducer,intialPro);

  const handelAdd=(id)=>{
    dispatch({
      type:"Add_Data",
      payload:{id}
    })
  }
  return (
    <>
      <>
        <div className="flex">
          <div className="pl-16 w-[25%] h-[100vh] overflow-auto">
            <ul className="gap-3">
            {
              employees.map(({id,first_name,age,added})=>(
                <ul key={id} className="flex gap-5 w-20px justify-evenly bg-slate-500">
                  <li>{first_name}</li>
                  <li>{age}</li>
                  <li><button onClick={handelAdd(id)} className="p-5 bg-blue-500 ">Add</button></li>
                </ul>
              ))
            }
            </ul>

          </div>
          <div className="w-[30%] h-[100vh]">

          </div>
        </div>
      </>
    </>
  )
}

export default App
