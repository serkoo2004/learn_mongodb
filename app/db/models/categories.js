const mongoose = require('mongoose');

const schema = mongoose.schema({
    is_active: {type: Boolean, default: true},
    created_by: {type: mongoose.SchemaTypes.ObjectId, required: true}
},{
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class categories extends mongoose.Model {

}

schema.loadClass(categoories);
module.exports = mongoose.model("categories", schema);