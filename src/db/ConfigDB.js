import sqlite3 from "sqlite3";

let database;

export class ConfigDB {
    static init() {
        database = new sqlite3.Database("config.sqlite3");
    }
    static get() {
        return database;
    }
}