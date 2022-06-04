import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatusEnum, OrderStatusInfo } from '../types/order-status.enum';

@Pipe({
  name: 'orderStatus',
})
export class OrderStatusPipe implements PipeTransform {
  transform(value: OrderStatusEnum): string {
    if (value) {
      const key = value.trim().toUpperCase();
      for (const iterator of OrderStatusInfo) {
        if (Object.keys(iterator)[0] === key) {
          const auxIterator = iterator as any;
          return auxIterator[key].name;
        }
      }
    }
    return null as any;
  }
}
