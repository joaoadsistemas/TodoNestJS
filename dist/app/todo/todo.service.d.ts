import { Repository } from 'typeorm';
import { TodoEntity } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<TodoEntity>);
    findAll(): Promise<TodoEntity[]>;
    findOneById(id: string): Promise<TodoEntity>;
    create(data: CreateTodoDto): Promise<TodoEntity>;
    update(id: string, data: UpdateTodoDto): Promise<TodoEntity>;
    delete(id: string): Promise<void>;
}
