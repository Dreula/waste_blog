import { Schema, models, model} from "mongoose"

const announcementSchema = new Schema({
    title: String,
    date: String,
    time: String,
    desc: String,
}, {timestamps: true});

const Announcements = models.announcement || model('announcement', announcementSchema)

export default Announcements;