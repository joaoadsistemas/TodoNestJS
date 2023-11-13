import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findById(id: string): Promise<import("./entities/todo.entity").TodoEntity>;
    findAll(): Promise<import("./entities/todo.entity").TodoEntity[]>;
    create(body: CreateTodoDto): Promise<import("./entities/todo.entity").TodoEntity>;
    update(id: string, body: UpdateTodoDto): Promise<import("./entities/todo.entity").TodoEntity>;
    delete(id: string): Promise<void>;
}
