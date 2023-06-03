import axios from 'axios'
import saveUser from '../../utils/localStorage'

//let url = 'http://127.0.0.1:5000/api/auth/'

let url

if (import.meta.env.VITE_ENV == 'production') {
    url = 'https://hungry-deer-cap.cyclic.app/api/auth/'
} else {
    url = 'http://127.0.0.1:5000/api/auth/'
}


// register new user
const register = async (userData) => {
    console.log(userData)
    const response = await axios.post(url + 'open_account/', userData)

    if (response.data) {
        if (Object.hasOwn(response.data, 'id')) {
            saveUser.save('user', JSON.stringify(response.data))
        }

    }
    console.log(response)

    return response.data
}

const login = async (userData) => {
    console.log(userData)
    const response = await axios.post(url + "login/", userData)

    if (response.data) {
        if (Object.hasOwn(response.data, 'id')) {
            saveUser.save('user', JSON.stringify(response.data))
        }

    }

    console.log(response)

    return response.data
}

const logout = () => {
    saveUser.removeUser()
}

const authService = {
    register,
    login,
    logout,
}

export default authService