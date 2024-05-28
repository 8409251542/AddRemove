export const employeesReducer=(state,action)=>{
    switch (action.type) {
        case "Add_Data":
            return state.map(pro=>pro.id===action.payload.id?{...pro,added:!pro.added}:pro);
    
        default:
            return state;
    }
}