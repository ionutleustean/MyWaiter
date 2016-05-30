

import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'product_search'
})
export class ProductSearchPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        
        return items.filter(item => item.Name.toString().toLocaleUpperCase().indexOf(args.toLocaleUpperCase()) !== -1);
    }
}
