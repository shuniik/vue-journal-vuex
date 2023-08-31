import journalApi from "@/api/journalApi"

// export const myAction = async() =>{

// }


export const loadEntries = async({commit}) =>{
    const resp = await journalApi.get('/entries.json')
    
    const { data } = resp

    if ( !data){
        commit('setEntries',[] )
        return
    }

    const entries = []

    for(let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries',entries)
}

export const updateEntry = async({commit},entry) =>{
      
   const {date,picture,text} = entry

   const dataToSave = {date,picture,text}

   const resp = await journalApi.put(`/entries/${ entry.id}.json`,dataToSave)
    console.log(resp)
    commit('updateEntries',{...entry})
}
export const createEntry = async({commit},entry) =>{
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text}

    const resp = await journalApi.post(`/entries.json`, dataToSave)
    const { name } = resp.data
    dataToSave.id = name
    commit ('addEntries',dataToSave)
    return name
}

export const deleteEntry = async({ commit }, id ) => {

    const resp = await journalApi.delete(`/entries/${id}.json`)

    commit('deleteEntry',id)

}