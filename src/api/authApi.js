import axios from "axios";

const authApi = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key:'AIzaSyBuxdH7yS2ptLsdUZ7nduDkoeNj36l6Rto'
    },

})


export default authApi 