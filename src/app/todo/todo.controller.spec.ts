import { Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoEntity } from './entities/todo.entity';
import exp from 'constants';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';



const todoEntityList: Array<TodoEntity> = [
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

const newTodoEntity = new TodoEntity({task: 'new-task', isDone: 0});

const updateTodoEntity = new TodoEntity({ task: 'task-1',
isDone: 1 }); 

describe('TodoController', () => {
  let todoController: TodoController;
  let todoService: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        {
          provide: TodoService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(todoEntityList),
            create: jest.fn().mockResolvedValue(newTodoEntity),
            update: jest.fn().mockResolvedValue(updateTodoEntity),
            delete: jest.fn().mockResolvedValue(undefined),
            findOneById: jest.fn().mockResolvedValue(todoEntityList[0])
          }
        }
      ]
    }).compile();

    todoController = module.get<TodoController>(TodoController);
    todoService = module.get<TodoService>(TodoService);
  });

  test('should be defined', () => {
    expect(todoController).toBeDefined();
    expect(todoService).toBeDefined();
  });

  describe('findAll', () => {
    it ('should return a todo list entity successfully', async () => {
      // Act
        const result = await todoController.findAll();
      // Assert
      expect(result).toEqual(todoEntityList);
      expect(typeof result).toEqual('object');
    })
  })


  describe('create', () => {
    it('should create a new todo item successfully', async () => {
      // Arrange
      const body: CreateTodoDto = {
        task: 'new task',
        isDone: 0
      }


      // Act
      const result = await todoController.create(body)

      // Assert
      expect(result).toEqual(newTodoEntity);
      expect(todoService.create).toHaveBeenCalledTimes(1);
      expect(todoService.create).toHaveBeenCalledWith(body);
    });


  })

  describe('findById', () => {
    it('should get a todo item successfully', async () => {
      // Act
      const result = await todoController.findById('1');

      //Assert
      expect(result).toEqual(todoEntityList[0])
      expect(todoService.findOneById).toHaveBeenCalledTimes(1);
      expect(todoService.findOneById).toHaveBeenCalledWith('1');
    });


  });


  describe('update', () => {
    it('should update a todo item successfully', async () => {
      // Arrange
      const body: UpdateTodoDto = {
        task: 'task-1',
        isDone: 1
      }

      // Act
      const result = await todoController.update('1', body)

      // Assert
      expect(result).toEqual(updateTodoEntity);
      expect(todoService.update).toHaveBeenCalledTimes(1);
      expect(todoService.update).toHaveBeenCalledWith('1', body);
    })


  });

  describe('delete', () => {
    it('should delete a todo item successfully', async () => {
      // Act
      const result = await todoController.delete('1');
  
      // Assert
      expect(result).toBeUndefined();
    });
  })})
