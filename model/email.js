import { Schema, models, model} from "mongoose"

const emailSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    message: String,
}, {timestamps: true});

const Emails = models.email || model('email', emailSchema)

export default Emails;