import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  create() {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }
}
