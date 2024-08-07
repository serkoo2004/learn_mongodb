const mongoose = require('mongoose');

const schema = mongoose.schema({
    level: String,
    email:String,
    location: String,
    proc_type: String,
    log: String
},{
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class auditlogs extends mongoose.Model {

}

schema.loadClass(auditlogs);
module.exports = mongoose.model("auditlogs", schema);