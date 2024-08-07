const mongoose = require('mongoose');

const schema = mongoose.schema({
    role_id: {type: mongoose.SchemaTypes.ObjectId, required: true},
    permission: {type: String, required: true},
    created_by: {type: mongoose.SchemaTypes.ObjectId, required: true},
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class role_privileges extends mongoose.Model {

}

schema.loadClass(role_privileges);
module.exports = mongoose.model("role_privileges", schema);