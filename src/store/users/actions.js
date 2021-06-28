import axios from "axios"

// Consumo da API

const setAllUsers = ({ commit }) => {
    axios.get(`http://localhost:3000/users`)
        .then((res) => {
            commit('SET_ALLUSERS', res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

export {
    setAllUsers,

}
