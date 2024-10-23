import express from 'express';
import routes from './routes';
import swaggerJsdoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';

import swgaggerConfig from './../swagger.config.json';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(routes);

const swaggerDocs = swaggerJsdoc(swgaggerConfig);
app.use("/swagger", serve, setup(swaggerDocs));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});