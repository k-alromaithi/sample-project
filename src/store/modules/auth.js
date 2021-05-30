const state = {
    username: null,
    posts: null,
};

const getters = {
    StateUsername: state => state.username
};

const actions = {
    async Register({commit}, form) {
        await fetch('https://gabbyblog.herokuapp.com/register',{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(
            data => {console.log(data);commit('setUser',data.username);}
        ).catch((error) => {
            console.error('Error:', error);
          });
    },
    
    // async Login({commit}, User){

    // }

};

const mutations = {
    setUser(state, username){
        state.username = username
    }
}

export default{

    state,
    getters,
    actions,
    mutations
};