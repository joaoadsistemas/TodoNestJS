import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTodoDto {

    @IsNotEmpty()
    //shows in swagger that this property should be used
    @ApiProperty()
    task: string;

    @IsNotEmpty()
    //shows in swagger that this property should be used
    @ApiProperty()
    isDone: number;
}