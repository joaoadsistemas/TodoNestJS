import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TodoEntity } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(TodoEntity) 
        private readonly todoRepository: Repository<TodoEntity>) {

        } ;


        async findAll() {
            return await this.todoRepository.find();
        }

        async findOneById(id: string) {
            
            try {
                return await this.todoRepository.findOneByOrFail({id});
            } catch (error) {
                throw new NotFoundException(error.message);
            }
            };

        async create(data: CreateTodoDto) {
            return await this.todoRepository.save(this.todoRepository.create(data));
        }

        async update(id: string, data: UpdateTodoDto) {
            const todo = await this.findOneById(id);

            this.todoRepository.merge(todo, data);

            return await this.todoRepository.save(todo);
        }

        async delete(id: string) {
            const todo = await this.findOneById(id);
            this.todoRepository.softDelete(todo);
        }


}
