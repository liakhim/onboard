import {
    makeAutoObservable,
    makeObservable,
    action,
    observable,
    computed
} from "mobx";

export default class Counter {
    count
    constructor(count) {
        this.count = count
        makeObservable(this, {
            count: observable,
            increment: action,
            double: computed
        })
    }

    increment = () => {
        this.count = this.count + 1
    }
    decrement = () => {
        this.count = this.count - 1
    }
    get minF() {
        return this.count < 50
    }
    get double() {
        return this.count * 2
    }
}
