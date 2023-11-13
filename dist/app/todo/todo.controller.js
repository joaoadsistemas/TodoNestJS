"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const not_found_swagger_1 = require("./../../helpers/swagger/not-found.swagger");
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const update_todo_dto_1 = require("./dto/update-todo.dto");
const swagger_1 = require("@nestjs/swagger");
const index_todo_swagger_1 = require("./swagger/index-todo.swagger");
const create_todo_swagger_1 = require("./swagger/create-todo.swagger");
const show_todo_swagger_1 = require("./swagger/show-todo.swagger");
const update_todo_swagger_1 = require("./swagger/update-todo.swagger");
const bad_request_swagger_1 = require("../../helpers/swagger/bad-request.swagger");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async findById(id) {
        return await this.todoService.findOneById(id);
    }
    async findAll() {
        return await this.todoService.findAll();
    }
    async create(body) {
        return await this.todoService.create(body);
    }
    async update(id, body) {
        return await this.todoService.update(id, body);
    }
    async delete(id) {
        await this.todoService.delete(id);
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Exibir os dados de uma tarefa' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Dados de uma tarefa retornada com sucesso", type: show_todo_swagger_1.ShowTodoSwagger }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Tarefa não foi encontrada", type: not_found_swagger_1.NotFoundSwagger }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as tarefas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Dados das tarefas retornada com sucesso", type: index_todo_swagger_1.IndexTodoSwagger, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova tarefa' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Nova tarefa criada com sucesso", type: create_todo_swagger_1.CreateTodoSwagger }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Parâmetros inválidos", type: bad_request_swagger_1.BadRequestSwagger }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateTodoDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar os dados de uma tarefa' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Tarefa atualizada com sucesso", type: update_todo_swagger_1.UpdateTodoSwagger }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos', type: bad_request_swagger_1.BadRequestSwagger }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Tarefa não foi encontrada", type: not_found_swagger_1.NotFoundSwagger }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_todo_dto_1.UpdateTodoDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Deletar uma tarefa' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: "Tarefa removida com sucesso" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Tarefa não foi encontrada", type: not_found_swagger_1.NotFoundSwagger }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "delete", null);
exports.TodoController = TodoController = __decorate([
    (0, common_1.Controller)('api/v1/todos'),
    (0, swagger_1.ApiTags)('todos'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map