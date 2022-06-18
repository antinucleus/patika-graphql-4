const Subscription = {
    userCreated: {
        subscribe: (_, __, { pubSub }) => pubSub.subscribe("userCreated"),
        resolve: (payload) => payload
    },
    eventCreated: {
        subscribe: (_, __, { pubSub }) => pubSub.subscribe("eventCreated"),
        resolve: (payload) => payload
    },
    participantAdded: {
        subscribe: (_, __, { pubSub }) => pubSub.subscribe("participantAdded"),
        resolve: (payload) => payload
    },
};

module.exports.Subscription = Subscription;