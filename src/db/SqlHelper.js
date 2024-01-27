import { ConfigDB } from "./ConfigDB";

const configTableName = "config";

export default class SqlHelper {
    
    static async createTableIfNotExsits() {
        const db = ConfigDB.get();
        return new Promise((resolve, reject) => {
            try {
                db.serialize(() =>  {
                    db.run(`create table if not exists ${configTableName}
                        url text primary key,
                        project_id text,
                        private_token text,
                        http_proxy text,
                        https_proxy text
                    `)
                })
                return resolve();
            } catch (err) {
                return reject(err);
            }
        })
    }

    static async saveSetting(configTable) {
        const db = ConfigDB.get();
        return new Promise((resolve, reject) => {
            try {
                db.run(`insert or replace into ${configTableName}
                    (url, project_id, private_token, http_proxy, https_proxy)`,
                    configTable.url, configTable.project_id, configTable.private_token, configTable.http_proxy, configTable.https_proxy
                )
                return resolve();
            } catch (err) {
                return reject(err);
            }
        })
    }

    static async loadSetting() {
        const db = ConfigDB.get();
        return new Promise((resolve, reject) => {
            db.get(`select * from ${configTableName}`, (err, row) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(row["*"]);
                }
            })
        })
    }
}