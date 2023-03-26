export class Todo {
    constructor(
        public text: string,
        public completed: boolean = false,
        public createDate: Date = new Date(),
        public updateDate: Date = new Date()
    ) { }
}