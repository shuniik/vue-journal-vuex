import authApi from "@/api/authApi"


export const createUser = async( { commit }, user) =>{

    const { name, email, password } = user

    try {
        const { data } = await authApi.post(':signUp',{ email, password, returnSecureToken: true})    
        const { idToken, refreshToken} = data
        
        const resp = await authApi.post(':update',{ displayName: name, idToken})

        //eliminar el password en ese objeto temporal
        delete user.password
        commit('loginUser',{ user, idToken, refreshToken})
        console.log(resp)     
        
        return {ok: true}
    } catch (error) {
        
        return {ok: false, message: error.response.data.error.message}
    }

}
    
export const signInUser = async( { commit }, user) =>{

    const {email, password } = user
    
    try {
   
        const { data } = await authApi.post(':signInWithPassword',{ email, password, returnSecureToken: true})    
        const { displayName,idToken, refreshToken} = data
            user.name=displayName 
     
        commit('loginUser',{ user, idToken, refreshToken})  
        
        return {ok: true}
    } catch (error) {
        
        return {ok: false, message: error.response.data.error.message}
    }

}