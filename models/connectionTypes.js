import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const connectionsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    ConnectionTypeId: { type: Schema.Types.ObjectId, ref: "ConnectionTypes"},
        

})

export default mongoose.model('ConnectionTypes', connectionsSchema);