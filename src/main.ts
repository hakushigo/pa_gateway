import express, { Request, Response } from 'express';
import { createUser, loginUser, logoutUser } from './controller/user';

const app = express();
const port = 3005;

// make routers
const userRouter = express.Router();
app.use('/user', userRouter);

const produkRouter = express.Router();
app.use('/produk', produkRouter);

const obatRouter = express.Router();
app.use('/obat', obatRouter);

// register user route
userRouter.post('/create', createUser);
userRouter.post('/logout', logoutUser);
userRouter.post('/login', loginUser);

app.get('halo', )

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

// ===============================

// register produk route

// app.get('/', async (req: Request, res: Response) => {
//     const [db, connection]: [Db, MongoClient] = await DB("hello");

//     const user_data : User = {
//         email: "johndunnit@gmail.com", name: "johndunnit", password: "hellojohndunnit", role: 0
//     }
//     db.collection("users").insertOne(user_data)

//     await connection.close();
//     return res.send("Hello World!");
// });
