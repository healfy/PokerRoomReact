import axios, {Axios} from "axios";

export class BackendClient {
    private readonly client: Axios;

    constructor(baseUrl: string) {
        this.client = axios.create(
            {
                withCredentials: true,
                baseURL: baseUrl,
            }
        )
    }

    async isAuth() {
        // const data = await this.client.get('/auth/is_auth')
        return true
    }

    async login(data: object) {
        try {
            await this.client.post('/auth/login', data)
            return true
        } catch (e) {
            alert(e.error)
            return false
        }
    }

    async logOut(){
        await this.client.post('/auth/logout')
    }

    async register(data:object) {
        console.log(data)
    }

    async createTable(){
        await this.client.post('/tables')
    }

    async reserveSeat(table_id){
        return await this.client.put(`/tables/${table_id}`)
    }

    async getTable(table_id){
        const mock = {
            name: "werded",
            available: true,
            user_here: true,
            seats: [
                {
                    id: 1,
                    status: "free",
                    user: null,
                },
                {
                    id: 2,
                    status: "free",
                    user: null,
                },
                {
                    id: 3,
                    status: "free",
                    user: null,
                },
                {
                    id: 4,
                    status: "free",
                    user: null,
                },
                {
                    id: 5,
                    status: "free",
                    user: null,
                },
                {
                    id: 6,
                    status: "free",
                    user: {
                        id: 1,
                        email: "werded@tut.by"
                    },
                },
            ]
        }
        // const resp = await this.client.get(`/tables/${table_id}`)
        return mock
    }
}

