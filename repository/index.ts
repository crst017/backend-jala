import { MongoClient } from 'mongodb';

import { UserRepository } from './repositories/UserRepository'
import { User } from './entities/User';
import { ProductRepository } from './repositories/ProductRepository'
import { Product } from './entities/Product';

import { Container } from 'inversify';

import 'reflect-metadata' 
// creating a function that execute self runs
(async () => {
    // connecting at mongoClient
    const connection = await MongoClient.connect('mongodb://localhost');
    const db = connection.db('market');

    // const container = new Container()
    // container.bind(UserRepository).toSelf()

    // creating a User
    const user = new User('Leonidas', 1020);

    // initializing the repository
    const repository = new UserRepository(db, 'Users');3 

    // call create method from generic repository
    const result = await repository.create(user);
    console.log(`User inserted with ${result ? 'success' : 'fail'}`)

    //call specific method from User class
    const count = await repository.countOfUsers();
    console.log(`Count of users: ${count}`)

    const product = new Product('Laptop', 1200);
    const repositoryProduct = new ProductRepository(db, 'Productes');
    const resultProduct = await repositoryProduct.create(product);
    console.log(`Product inserted with ${result ? 'success' : 'fail'}`)

})();
