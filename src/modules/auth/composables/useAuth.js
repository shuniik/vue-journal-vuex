import { useStore } from "vuex"

const useAuth = () =>{
    
    const store = useStore()

    const createUser = async( user ) => {
        const resp = await store.dispatch('authModule/createUser', user)
        return resp
    }

    const loginUser = async ( user ) =>{
        const resp = await store.dispatch('authModule/signInUser', user)
        return resp
    }

    return{
        createUser,
        loginUser
    }
}
export default useAuth