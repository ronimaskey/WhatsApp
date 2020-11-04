import mongoose from 'mongoose';

const whatsappSchema = mongoose.Scheme({
    message: String,
    name: String,
    timeStamp: String,
    received: Boolean
});

export default mongoose.model('messageContent', whatsappSchema);