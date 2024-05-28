import axios from 'axios'
export class UserService {
    url = 'http://localhost:3001/'
    endpoint = 'usuarios'

    async getUsers() {
        return axios.get(this.url + this.endpoint)
    }
}
