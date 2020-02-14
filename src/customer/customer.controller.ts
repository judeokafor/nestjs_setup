import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  // add a customer
  @Post('/')
  @ApiBody({
    description: 'List of consumers',
    type: Customer,
  })
  @ApiResponse({
    status: 201,
    type: Customer,
    description: 'The customer has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async addCustomer(@Body() createCustomerDTO: CreateCustomerDTO) {
    const customer = await this.customerService.addCustomer(createCustomerDTO);
    return {
      message: 'Customer has been created successfully',
      customer,
    };
  }

  // Retrieve customers list
  @Get('/')
  @ApiResponse({
    status: 200,
    type: Customer,
    description: 'Request successful.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getAllCustomer() {
    const customers = await this.customerService.getAllCustomer();
    return customers;
  }

  // Fetch a particular customer using ID
  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'Request successful.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getCustomer(@Param('id') customerID: string) {
    const customer = await this.customerService.getCustomer(customerID);
    if (!customer) throw new NotFoundException('Customer does not exist!');
    return customer;
  }
  @Put('/')
  @ApiResponse({
    status: 200,
    description: 'Request successful.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateCustomer(
    @Query('id') customerID: string,
    @Body() createCustomerDTO: CreateCustomerDTO,
  ) {
    const customer = await this.customerService.updateCustomer(
      customerID,
      createCustomerDTO,
    );
    if (!customer) throw new NotFoundException('Customer does not exist!');
    return {
      message: 'Customer has been successfully updated',
      customer,
    };
  }

  // Delete a customer
  @Delete('/')
  async deleteCustomer(@Query('id') customerID: string) {
    const customer = await this.customerService.deleteCustomer(customerID);
    if (!customer) throw new NotFoundException('Customer does not exist');
    return {
      message: 'Customer has been deleted',
      customer,
    };
  }
}
