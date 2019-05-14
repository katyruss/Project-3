import axios from "axios"

export default {
    newUser: (user) => {
        return axios.post("/signup", user)
    }
}

