import { createStore } from 'vuex'

import authModule from '@/modules/auth/store'
import journal  from '../modules/daybook/store/journal'
const store = createStore({
    modules: {
        journal,
        authModule
    }

})

export default store