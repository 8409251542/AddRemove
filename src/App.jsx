import { useReducer } from "react"
import { employees as intialPro } from "./data"
import { employeesReducer } from "./reduser";
function App() {
  const [employees, dispatch] = useReducer(employeesReducer, intialPro);

  const handelAdd = (id) => {
    dispatch({
      type: "Add_Data",
      payload: { id }
    })
  }
  const handleRemove = (id) => {
    dispatch({
      type: "Add_Data",
      payload: { id }
    })
  }
  return (
    <>
      <>
        <div className="flex">
          <div className="pl-16 w-[25%] h-[100vh] overflow-auto">
            <ul className="gap-3">
              {
                employees.map(({ id, first_name, age, added }) => (
                  <li key={id} className={`flex gap-5 justify-evenly p-3 ${
                    added ? 'bg-green-500' : 'bg-slate-500'
                  }`}>
                    <span>{first_name}</span>
                    <span>{age}</span>
                    {!added &&(<button onClick={() => handelAdd(id)} className="p-5 bg-blue-500 ">{added ? "Remove" : "Add"}</button>)}
                  </li>
                ))
              }
            </ul>

          </div>
          <div className="w-full h-[100vh]">
            <div className="pl-16 w-[25%] h-[100vh] overflow-auto">
              <ul className="gap-3">
                {employees.filter(pro => pro.added).map(({ id, first_name, age, added }) => (
                  <li key={id} className="flex gap-5 justify-evenly bg-slate-500 p-3">
                    <span>{first_name}</span>
                    <span>{age}</span>
                    <button
                      onClick={() => handleRemove(id)}
                      className={`p-5 bg-red-500`}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </>
    </>
  )
}

export default App
