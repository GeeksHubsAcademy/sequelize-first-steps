const express =require('express');
const app =express();
const PORT = 3000;
const productsRouter =require('./routes/products.js');
const categoriesRouter =require('./routes/categories.js');
const usersRouter =require('./routes/users.js');
const ordersRouter =require('./routes/orders.js');

app.use(express.json());

app.use('/categories',categoriesRouter);
app.use('/products',productsRouter);
app.use('/users',usersRouter);
app.use('/orders',ordersRouter);

app.listen(PORT,()=>console.log('server running on port '+PORT));