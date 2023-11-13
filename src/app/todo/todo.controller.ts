
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IndexTodoSwagger } from './swagger/index-todo.swagger';
import { CreateTodoSwagger } from './swagger/create-todo.swagger';
import { ShowTodoSwagger } from './swagger/show-todo.swagger';
import { UpdateTodoSwagger } from './swagger/update-todo.swagger';    
import { BadRequestSwagger } from './helpers/bad-request.swagger';
import { NotFoundSwagger } from './helpers/not-found.swagger';

@Controller('api/v1/todos')
// change the title name in swagger
@ApiTags('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get(':id')
  // Used to describe in swagger what it does
  @ApiOperation({ summary: 'Exibir os dados de uma tarefa' })
  @ApiResponse({ status: 200, description: "Dados de uma tarefa retornada com sucesso", type: ShowTodoSwagger})
  @ApiResponse({ status: 404, description: "Tarefa não foi encontrada", type: NotFoundSwagger })
  async findById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.todoService.findOneById(id);
  }




  @Get()
  @ApiOperation({ summary: 'Listar todas as tarefas' })
  @ApiResponse({ status: 200, description: "Dados das tarefas retornada com sucesso", type: IndexTodoSwagger, isArray: true})
  async findAll() {
    return await this.todoService.findAll();
  }



  @Post()
  @ApiOperation({ summary: 'Criar uma nova tarefa' })
  @ApiResponse({ status: 201, description: "Nova tarefa criada com sucesso", type: CreateTodoSwagger })
  @ApiResponse({ status: 400, description: "Parâmetros inválidos", type: BadRequestSwagger })
  async create(@Body() body: CreateTodoDto) {
    return await this.todoService.create(body);
  }



  @Put(':id')
  @ApiOperation({ summary: 'Atualizar os dados de uma tarefa'})
  @ApiResponse({ status: 201, description: "Tarefa atualizada com sucesso", type: UpdateTodoSwagger })
  @ApiResponse({ status: 400, description: 'Dados inválidos', type: BadRequestSwagger })
  @ApiResponse({ status: 404, description: "Tarefa não foi encontrada", type: NotFoundSwagger })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateTodoDto,
  ) {
    return await this.todoService.update(id, body);
  }



  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar uma tarefa' })
  @ApiResponse({ status: 204, description: "Tarefa removida com sucesso" })
  @ApiResponse({ status: 404, description: "Tarefa não foi encontrada", type: NotFoundSwagger })
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.todoService.delete(id);
  }
}
