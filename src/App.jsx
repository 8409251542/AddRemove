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
  const avgTotal=employees.filter(pro=>pro.added).reduce((acc, curr, _, array) => acc + curr.age / array.length, 0);
  return (
    <>
      <>
        <div className="flex h-screen">
          <div className="w-1/4 p-4 bg-gray-100 border-r overflow-auto">
          <h2 className="text-xl font-bold mb-4">Employee List</h2>
            <ul className="space-y-2">
              {
                employees.map(({ id, first_name, age, added }) => (
                  <li key={id} className={`flex items-center justify-between p-3 rounded-lg ${
                    added ? 'bg-green-300' : 'bg-gray-300'
                  }`}>
                    <span className="font-medium">{first_name}</span>
                    <span className="ml-2 text-gray-600">{age}</span>
                    {!added &&(<button onClick={() => handelAdd(id)} className="px-3 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600">{added ? "Remove" : "Add"}</button>)}
                  </li>
                ))
              }
            </ul>

          </div>
          <div className="w-3/4 p-4">
          <h1 className="text-xl font-bold mb-4">Added Employees</h1>
            <div className="space-y-2 overflow-auto">
            
              <ul className="space-y-2">
                {employees.filter(pro => pro.added).map(({ id, first_name, age, added }) => (
                  <li key={id} className="flex gap-5 justify-evenly bg-slate-500 p-3">
                    <span>{first_name}</span>
                    <span>{age}</span>
                    <button
                      onClick={() => handleRemove(id)}
                      className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between p-3 mt-4 bg-gray-100 rounded-lg">
                <h1 className="font-semibol">Avarge Age</h1>
                <h1 className="font-semibold">{avgTotal.toFixed()}</h1>
              </div>
            </div>

          </div>
        </div>
      </>
    </>
  )
}

export default App
