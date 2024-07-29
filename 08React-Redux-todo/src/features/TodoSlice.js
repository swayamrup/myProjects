import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos:[{id:1,text:"something"}]
};
const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      // console.log("harry")
        const todo={
            id:nanoid(10),
            text:action.payload
        }
        console.log(action.payload)
        state.todos.push(todo);
    },
  },
});
export const {add}=TodoSlice.actions
export default TodoSlice.reducer;
