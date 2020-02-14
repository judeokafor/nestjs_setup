import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCustomerDTO {
  @IsNotEmpty()
  first_name: string;
  @IsNotEmpty()
  last_name: string;
  @IsEmail()
  email: string;
  @Length(11)
  phone: string;
  @MinLength(5)
  address: string;
  @MaxLength(50)
  description?: string;
}
