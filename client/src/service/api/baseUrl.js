import axios from 'axios'

const api = axios.create({
	baseURL: 'https://rcmessneger.herokuapp.com/api',
})

export default api
