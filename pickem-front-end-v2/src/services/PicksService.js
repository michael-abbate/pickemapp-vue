// import Api from '@/services/Api'
import axios from 'axios'

export default {
    submitPicks (picks) {
        return axios.post('/api/selected/submit', picks)
    },
    getGroupPicks () {
        return axios.get('/api/group/picks')
    },
    getDistinctWeeks() {
        return axios.get('/api/nflweeks')
    }
}

// go to https://www.youtube.com/watch?v=Fa4cRMaTDUI&ab_channel=freeCodeCamp.org 
// min 40:31 to see how to submit post request... will use this later when actually submitting picks