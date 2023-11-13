import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

const TodoEntityList: Array<TodoEntity> = [
  new TodoEntity({
    id: '1',
    task: 'task-1',
    isDone: 0
  }),
  new TodoEntity({
    id: '2',
    task: 'task-2',
    isDone: 0
  }),
  new TodoEntity({
    id: '3',
    task: 'task-3',
    isDone: 0
  }),
  new TodoEntity({
    id: '4',
    task: 'task-4',
    isDone: 0
  })
]

describe('TodoService', () => {
  let todoService: TodoService;
  let todoRepository: Repository<TodoEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService, { 
        provide: getRepositoryToken(TodoEntity),
        useValue: {
          find: jest.fn().mockResolvedValue(TodoEntityList),
          findOneByOrFail: jest.fn().mockResolvedValue(TodoEntityList[0]),
          create: jest.fn().mockReturnValue(TodoEntityList[0]),
          merge: jest.fn().mockReturnValue(TodoEntityList[0]),
          save: jest.fn().mockResolvedValue(TodoEntityList[0]),
          softDelete: jest.fn().mockReturnValue(undefined)
        }
      }],
    }).compile();

    todoService = module.get<TodoService>(TodoService);
    todoRepository = module.get<Repository<TodoEntity>>(getRepositoryToken(TodoEntity));
  });

  it('should be defined', () => {
    expect(todoService).toBeDefined();
    expect(todoRepository).toBeDefined();
  });


  describe('findAll', () => {
    it('should return a todo entity list successfully', async () => {
        // Act
        const result = await todoService.findAll();

        // Assert
        expect(result).toEqual(TodoEntityList);
          })
  })

  describe('findOneOrFail', () => {
    it('should return a todo item successfully', async () => {
        // Act
        const result = await todoService.findOneById('1');

        // Assert
        expect(result).toEqual(TodoEntityList[0]);
    })
  });

  describe('create', () => {
    it('should be create a new todo entity list successfully', async () => {
      // Arrange
      const data: CreateTodoDto = {
        task: 'task-1',
        isDone: 0
      }


      // Act
      const result = await todoService.create(data);

      // Assert
      expect(result).toEqual(TodoEntityList[0]);

    })
  })

  describe('update', () => {
    it('should update a todo entity item successfully', async () => {

      // Arrange
      const data: UpdateTodoDto = {
        task: 'task-1',
        isDone: 1
      }

      // Act
      const result = await todoService.update('1', data);

      // Assert
      expect(result).toEqual(TodoEntityList[0])
    })
  });

  describe('delete', () => {
    it ('should delete a todo entty item successfully', async () => {
      // Act
      const result = await todoService.delete('1');

      // Assert
      expect(result).toBeUndefined();
    })
  })

});
