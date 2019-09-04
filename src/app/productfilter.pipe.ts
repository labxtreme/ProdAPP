import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'productfilter'
})
export class ProductFilterPipe implements PipeTransform{
    transform(items : any[],searchText:string) :any[]{

        if(!items){
            return [];
        }
        if(!searchText){
            return items;
        }
        searchText=searchText.toLowerCase();
        
        return items.filter(a=>{
            console.log(1)
            return a.productName.toLowerCase().includes(searchText);
        }
            )
    }
}