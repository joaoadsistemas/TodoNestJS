import { ApiProperty } from "@nestjs/swagger";
import { type } from "os";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('todos')
export class TodoEntity {
    
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: string;

    @Column()
    @ApiProperty()
    task: string;

    
    @Column({name: 'is_done', type: 'tinyint', width: 1})
    @ApiProperty()
    isDone: number;

    @CreateDateColumn({name: 'created_at'})
    @ApiProperty()
    createdAt: string;

    @UpdateDateColumn({name: 'update_at'})
    @ApiProperty()
    updateAt: string;

    @DeleteDateColumn({name: 'delete_at'})
    @ApiProperty()
    deletedAt: string; 

    
    
// all constructor parameters must be optional
    constructor(todo?: Partial<TodoEntity>) {
        this.id = todo?.id;
        this.task = todo?.task;
        this.isDone = todo?.isDone;
        this.createdAt = todo?.createdAt;
        this.updateAt = todo?.updateAt;
        this.deletedAt = todo?.deletedAt;
    }
}
