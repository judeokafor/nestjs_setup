import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICustomer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<ICustomer>,
  ) {}
  // fetch all customers
  async getAllCustomer(): Promise<ICustomer[]> {
    const customers = await this.customerModel.find().exec();
    return customers;
  }
  // Get a single customer
  async getCustomer(customerID): Promise<ICustomer> {
    const customer = await this.customerModel.findById(customerID).exec();
    return customer;
  }
  // post a single customer
  async addCustomer(createCustomerDTO: CreateCustomerDTO): Promise<ICustomer> {
    const newCustomer = await this.customerModel.create(createCustomerDTO);
    return newCustomer.save();
  }
  // Edit customer details
  async updateCustomer(
    customerID,
    createCustomerDTO: CreateCustomerDTO,
  ): Promise<ICustomer> {
    const updatedCustomer = await this.customerModel.findByIdAndUpdate(
      customerID,
      createCustomerDTO,
      { new: true },
    );
    return updatedCustomer;
  }
  // Delete a customer
  async deleteCustomer(customerID): Promise<any> {
    const deletedCustomer = await this.customerModel.findByIdAndRemove(
      customerID,
    );
    return deletedCustomer;
  }
}
