import { ApiProperty } from "@nestjs/swagger";

export class Todo {
    @ApiProperty({default: 'U1'})
    id: string;
    @ApiProperty({default: 'title'})
    title: string;
    @ApiProperty({default: true})
    completed: boolean;
}