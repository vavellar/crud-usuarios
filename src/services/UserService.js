import axios from 'axios'
export class UserService {
    url = 'http://localhost:3001/'
    endpoint = 'usuarios'

    async getUsers() {
        return await axios.get(this.url + this.endpoint)
    }

    async deleteUser(id) {
        return await axios.delete(this.url + this.endpoint + `/${id}`)
    }

    async createUser({ nome, sobrenome, tipoUsuario, email, senha, ativo}) {
        return await axios.post(this.url + this.endpoint, { nome, sobrenome, tipoUsuario, email, senha, ativo})
    }

    async editUser(id, {  nome, sobrenome, tipoUsuario, email, senha, ativo}) {
        return await axios.patch(this.url + this.endpoint + `/${id}`, { nome, sobrenome, tipoUsuario, email, senha, ativo})
    }

    async searchByName(name) {
        return await axios.get(this.url + this.endpoint + `?nome=${name}`)
    }
}
