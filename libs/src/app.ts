/* import _ from 'lodash';

declare var GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));

console.log('GLOBAL'); */

import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

import { Product } from './product.model';

const products = [
  { title: 'Carpet', price: 5 },
  { title: 'Book', price: 10 },
];

const loadedProducts = plainToClass(Product, products);

loadedProducts.forEach(prod => {
  console.log(prod.getInformation());
});

const newProd = new Product('', -5);
validate(newProd).then(errors => {
  if(errors.length > 0) {
    console.log('ERRORS: ', errors);
  } else {
    console.log(newProd.getInformation());
  }
});