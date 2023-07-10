import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { addComment } from './add-comments.js';
import { listComment, listComments } from './list-comments.js';
import { showComment } from './show-comments.js';
import { editComments } from './edit-comments.js';
import { removeComments } from './remove-comments.js';
import { showComment } from '../comments';

const typeDefs = readFileSync(
  join(process.cwd(), 'src', 'modules', 'comments', '_schema.gql'),
  'utf8'
);

const resolvers = {
  Query: {
    comments: () => {
      return listComments();
    },
    comment: (_, args) => {
      return showComment({ id: args.id });
    },
  },
  Mutation: {
    createComment: async (_, args) => {
      const result = await addComment(args.input);

      pubsub.publish('COMMENT_CREATED', { postCreated: result });

      return result;
    },
    updateComment: (_, args) => {
      return editComments({ id: args.id, ...args.input });
    },
    removeComment: (_, args) => {
      return removeComments({ id: args.id });
    },
  },
  Subscription: {
    postComment: () => pubsub.asyncIterator(['COMMENT_CREATED']),
  },
  Comment: {
    user: (parent) => {
      return showComment({ id: parent.user_id });
    },
  },
};

export default { typeDefs, resolvers };
