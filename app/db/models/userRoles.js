const mongoose = require('mongoose');

const schema = mongoose.schema({
    role_id: {type: mongoose.SchemaTypes.ObjectId, required: true},
    user_id: {type: mongoose.SchemaTypes.ObjectId, required: true},
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class User_roles extends mongoose.Model {

}

schema.loadClass(User_roles);
module.exports = mongoose.model("user_roles", schema);