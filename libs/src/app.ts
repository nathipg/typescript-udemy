/* import _ from 'lodash';

declare var GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));

console.log('GLOBAL'); */

import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Product } from './product.model';

const products = [
  { title: 'Carpet', price: 5 },
  { title: 'Book', price: 10 },
];

const loadedProducts = plainToClass(Product, products);

loadedProducts.forEach(prod => {
  console.log(prod.getInformation());
});