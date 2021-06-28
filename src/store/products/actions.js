import axios from "axios"

// Consumo da API

const setAllProducts = ({ commit }) => {
    axios.get(`http://localhost:3000/products`)
        .then((res) => {
            commit('SET_ALLPRODUCTS', res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

export {
    setAllProducts,

}
