import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { schema } from './schema.js';

export function buildGraphQLServer(httpServer) {
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/gql',
  });
  const serverCleanup = useServer({ schema }, wsServer);

  return new ApolloServer({
    schema,
    plugins: [
      // Http serverda xatolik bo'lsa serverni to'xtatish uchun plugin
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        // Ws serverda xatolik bo'lsa serverni to'xtatish uchun sozlama
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });
}
