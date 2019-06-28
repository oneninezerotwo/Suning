
export default {

    namespace: 'fund',

    state: {
        allinf: [],
        footerMenu: 1,
        searchInputText: '',
    },



    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        GETINPUTVALUE(state, action) {
            return {
                ...state,
                searchInputText: action.searchInputText
            }
        }
    },

};
