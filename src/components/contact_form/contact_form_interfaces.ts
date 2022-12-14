export interface IFormInput {
    readonly id: string
    readonly name: string
    readonly type?: string
    readonly placeholder?: string
    readonly className?: string
}

export interface IFormLabel {
    readonly className?: string
    readonly htmlFor?: string
    readonly label?: string
}