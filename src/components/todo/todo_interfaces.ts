export interface ITodo {
    readonly id: number,
    title: string,
    completed: boolean,
    readonly created: number
}
export type TodoRequest = Omit<ITodo, "id">