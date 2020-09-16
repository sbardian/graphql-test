// import { withFilter, AuthenticationError } from 'apollo-server';
import { createNewTodo } from './Mutations/createNewTodo'
import { getTodos } from './Queries/getTodos'
import { updateTodo } from './Mutations/updateTodo'
import { updateTodoStatus } from './Mutations/updateTodoStatus'
import { deleteTodo } from './Mutations/deleteTodo'
// import { pubsub } from '../../server/server';

const resolvers = {
  Query: {
    getTodos,
  },
  Mutation: {
    createNewTodo,
    updateTodo,
    updateTodoStatus,
    deleteTodo,
  },
  Subscription: {
    // itemAdded: {
    //   resolve: (payload, { listId }, { models: { User }, user }) => {
    //     if (user) {
    //       if (userOfListByListId(user, listId, User) || user.isAdmin) {
    //         return payload.itemAdded;
    //       }
    //       return new AuthenticationError(
    //         'You must be a member of the list to subscribe.',
    //       );
    //     }
    //     return new AuthenticationError('Authentication failed.');
    //   },
    //   subscribe: withFilter(
    //     () => pubsub.asyncIterator([`ITEM_ADDED`]),
    //     (payload, variables) => payload.itemAdded.list === variables.listId,
    //   ),
    // },
    // itemDeleted: {
    //   resolve: (payload, { listId }, { models: { User }, user }) => {
    //     if (user) {
    //       if (userOfListByListId(user, listId, User) || user.isAdmin) {
    //         return payload.itemDeleted;
    //       }
    //       return new AuthenticationError(
    //         'You must be a member of the list to subscribe.',
    //       );
    //     }
    //     return new AuthenticationError('Authentication failed.');
    //   },
    //   subscribe: withFilter(
    //     () => pubsub.asyncIterator([`ITEM_DELETED`]),
    //     (payload, variables) => payload.itemDeleted.list === variables.listId,
    //   ),
    // },
    // itemEdited: {
    //   resolve: (payload, { listId }, { models: { User }, user }) => {
    //     if (user) {
    //       if (userOfListByListId(user, listId, User) || user.isAdmin) {
    //         return payload.itemEdited;
    //       }
    //       return new AuthenticationError(
    //         'You must be a member of the list to subscribe.',
    //       );
    //     }
    //     return new AuthenticationError('Authentication failed.');
    //   },
    //   subscribe: withFilter(
    //     () => pubsub.asyncIterator([`ITEM_EDITED`]),
    //     (payload, variables) => payload.itemEdited.list === variables.listId,
    //   ),
    // },
    // listDeleted: {
    //   resolve: (payload, args, { models: { User }, user }) => {
    //     if (user) {
    //       if (
    //         userOfListByListId(user, payload.listDeleted.id, User) ||
    //         user.isAdmin
    //       ) {
    //         return payload.listDeleted;
    //       }
    //       return new AuthenticationError(
    //         'You must be a member of the list to subscribe.',
    //       );
    //     }
    //     return new AuthenticationError('Authentication failed.');
    //   },
    //   subscribe: () => pubsub.asyncIterator([`LIST_DELETED`]),
    // },
    // invitationAdded: {
    //   resolve: (payload, args, { user }) => {
    //     if (user) {
    //       return payload.invitationAdded;
    //     }
    //     return new AuthenticationError('Authentication failed.');
    //   },
    //   subscribe: withFilter(
    //     () => pubsub.asyncIterator([`INVITATION_ADDED`]),
    //     (payload, variables, { user }) =>
    //       payload.invitationAdded.invitee.id === user.id,
    //   ),
    // },
    // invitationDeleted: {
    //   resolve: (payload, args, { user }) => {
    //     if (user) {
    //       return payload.invitationDeleted;
    //     }
    //     return new AuthenticationError('Authentication failed.');
    //   },
    //   subscribe: withFilter(
    //     () => pubsub.asyncIterator([`INVITATION_DELETED`]),
    //     (payload, variables, { user }) =>
    //       payload.invitationDeleted.invitee.id === user.id,
    //   ),
    // },
    // listSettingsUpdated: {
    //   resolve: (payload, { id_is }, { models: { User }, user }) => {
    //     if (user) {
    //       if (userOfListByListId(user, id_is, User) || user.isAdmin) {
    //         return payload.listSettingsUpdated;
    //       }
    //     }
    //     return new AuthenticationError('Authentication failed.');
    //   },
    //   subscribe: withFilter(
    //     () => pubsub.asyncIterator([`LIST_SETTINGS_UPDATED`]),
    //     (payload, variables) =>
    //       payload.listSettingsUpdated.id === variables.listId,
    //   ),
    // },
  },
}

export default resolvers
