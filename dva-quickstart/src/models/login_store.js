
export default {

    namespace: 'login_store',
  
    state: {
     ABC_isok:true,
     phone_num:'',
     passworld_num:''
    },
  
    reducers: {
        save(state, action) {
                return {...state,ABC_isok:action.ABC_isok}
        },
        key(state,action){
            // var arr =state.phone_num.push(action.phone_num)
            return {...state,phone_num:action.phone_num}
        },
        passworld(state,action){
            return {...state,phone_num:action.phone_num,passworld_num:action.passworld_num}
        }
        
    },
  };