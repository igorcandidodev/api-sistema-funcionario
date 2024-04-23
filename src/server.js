import App from 'express'
import express from 'express'
import 'dotenv/config'
import { sequelize } from './database/config';
import { routes } from './router/routes';
import databases from './database/config';

const app = new App();
const port = process.env.PORT || 8080;
const eraseDatabaseOnSync = process.env.ERASE_DATABASE_ON_SYNC || false;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware para deixar acessível em todas as rotas as Tabelas do database criadas
app.use(async (req, res, next) => {
    req.context = {
      databases,
    };
    next();
});


app.use('/employee', routes.employee);
// app.use('/path, routes.rotaQueVocêCriou);

sequelize.sync({ force: eraseDatabaseOnSync });

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log('Server running on port 3000')
})