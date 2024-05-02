import {Db, MongoClient} from "mongodb";

const uri = "mongodb://mongo:kEvEClILzuvTbuxMXFwIuBFWzEnfznEY@roundhouse.proxy.rlwy.net:53533"

async function DB(dbname: string) : Promise<[Db, MongoClient]> {
    const client = new MongoClient(uri)
    const conn = await client.connect()
    const db = conn.db(dbname)

    return [db, conn]
}

export default DB