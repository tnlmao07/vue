// import axios from "axios";

const state = {
    todos:[
        {
            id:1,
            title:"todo title"
        },
        {
            id:1,
            title:"todo title 2"
        }
    ]
};

const getters={
    allTodos : (state)=>{
        return state.todos;
    }
};

const actions ={}; 

const mutations={};

export default{
    state,
    getters,
    actions,
    mutations
}