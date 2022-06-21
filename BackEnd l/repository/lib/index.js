"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const UserRepository_1 = require("./repositories/UserRepository");
const User_1 = require("./entities/User");
const ProductRepository_1 = require("./repositories/ProductRepository");
const Product_1 = require("./entities/Product");
require("reflect-metadata");
// creating a function that execute self runs
(() => __awaiter(void 0, void 0, void 0, function* () {
    // connecting at mongoClient
    const connection = yield mongodb_1.MongoClient.connect('mongodb://localhost');
    const db = connection.db('market');
    // const container = new Container()
    // container.bind(UserRepository).toSelf()
    // creating a User
    const user = new User_1.User('Leonidas', 1020);
    // initializing the repository
    const repository = new UserRepository_1.UserRepository(db, 'Users');
    3;
    // call create method from generic repository
    const result = yield repository.create(user);
    console.log(`User inserted with ${result ? 'success' : 'fail'}`);
    //call specific method from User class
    const count = yield repository.countOfUsers();
    console.log(`Count of users: ${count}`);
    const product = new Product_1.Product('Laptop', 1200);
    const repositoryProduct = new ProductRepository_1.ProductRepository(db, 'Productes');
    const resultProduct = yield repositoryProduct.create(product);
    console.log(`Product inserted with ${result ? 'success' : 'fail'}`);
}))();
