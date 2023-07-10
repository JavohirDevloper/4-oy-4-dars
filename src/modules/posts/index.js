import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { addPost } from './add-post.js';
import { listPosts } from './list-posts.js';
import { showPost } from './show-post.js';
import { editPost } from './edit-post.js';
import { removePost } from './remove-post.js';
import { showUser } from '../users/show-user.js';

const typeDefs = readFileSync(
  join(process.cwd(), 'src', 'modules', 'posts', '_schema.gql'),
  'utf8'
);
const resolvers = {
  Query: {
    posts: () => {
      return listPosts();
    },
    post: (_, args) => {
      return showPost({ id: args.id });
    },
  },
  Mutation: {
    createPost: async (_, args) => {
      const result = await addPost(args.input);

      pubsub.publish('POST_CREATED', { postCreated: result });

      return result;
    },
    updatePost: (_, args) => {
      return editPost({ id: args.id, ...args.input });
    },
    removePost: (_, args) => {
      return removePost({ id: args.id });
    },
  },
  Subscription: {
    postCreated: () => pubsub.asyncIterator(['POST_CREATED']),
  },
  Post: {
    user: (parent) => {
      return showUser({ id: parent.user_id });
    },
  },
};

export default { typeDefs, resolvers };
