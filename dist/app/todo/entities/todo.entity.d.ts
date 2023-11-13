export declare class TodoEntity {
    id: string;
    task: string;
    isDone: number;
    createdAt: string;
    updateAt: string;
    deletedAt: string;
    constructor(todo?: Partial<TodoEntity>);
}
