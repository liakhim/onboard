import {
    makeAutoObservable,
    makeObservable,
    action,
    observable,
    computed
} from "mobx";

export default class Sidebar {
    user
    posts
    post
    constructor() {
        this.user = '2222'
        this.posts = []
        this.post = {}
        makeObservable(this, {
            user: observable,
            posts: observable,
            post: observable
        })
    }
    fetchProjects = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                return response.json()
            })
            .then((res) => {
                this.posts = res
                console.log('posts')
                console.log(this.posts)
            })
    }
    getPost = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                return response.json()
            })
            .then(res => {
                this.post = res
                console.log('post')
                console.log(this.post)
            })
    }
}
