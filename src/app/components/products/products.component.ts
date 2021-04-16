import {  Component } from '@angular/core'
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {
     products: string[] =[
        'https://www.creatum.com.co/wp-content/uploads/suelas-masculinas.jpg',
        'https://www.creatum.com.co/wp-content/uploads/suelas-masculinas.jpg',
        'https://www.creatum.com.co/wp-content/uploads/suelas-masculinas.jpg',
     ];
}