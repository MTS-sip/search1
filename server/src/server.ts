import express from 'express';
import { ApolloServer } from '@apollo/server';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schemas/index.js';
import { authenticateToken } from './services/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/graphql', expressMiddleware(server as any,
  {
    context: authenticateToken as any
  }
));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') { console.log('running in production mode');
  app.use(express.static(path.join(__dirname, '../../client/dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
}

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });