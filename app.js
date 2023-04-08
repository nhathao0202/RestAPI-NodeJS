import express from 'express';
import mogoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';

const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mogoose.connect('mongodb+srv://admin:nhathao02022001@cluster0.lc4wftd.mongodb.net/?retryWrites=true&w=majority'
).then(() => app.listen(5000)).then(() => console.log("Connect to Database and Listening to localhost 5000")).catch((err) => console.log(err));



//nhathao02022001


