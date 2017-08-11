module.exports = function (mongoose) {

    var Schema = mongoose.Schema;

    var userSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: String,
        firstName: String,
        lastName: String,
        avatar: String,
        email: {
            type: String,
            unique: true
        },
        followers: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        following: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        roles: [{
            type: String,
            enum: ['USER', 'ADMIN'],
            default: 'USER'

        }],
        google: {
            id: String,
            token: String
        },
        dateCreated: {
            type: Date,
            default: Date.now
        }

    }, {collection: 'user'});

    return userSchema;
};