import { Schema, models, model} from "mongoose"

const volunteerSchema = new Schema({
    name: String,
    age: String,
    address: String,
    contact: String,
}, {timestamps: true});

const Volunteers = models.volunteer|| model('volunteer', volunteerSchema)

export default Volunteers;