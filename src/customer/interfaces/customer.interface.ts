import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
export interface ICustomer extends Document {
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  readonly description: string;
}
export class Customer {
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  description: string;
}
