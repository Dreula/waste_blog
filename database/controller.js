import Emails from '../model/email'
import Announcements from '../model/announcement'

export async function getEmails(req, res) {
    try {
        const emails = await Emails.find({})

        if(!emails) return res.status(404).json({ error: "Data Not Found"})
        res.status(200).json(emails)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data"})
    }
}

//POST: http://localhost:3000/api/emails
export async function postEmail(req, res){
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json( { error: "Form Data Not Provided...!"});
        Emails.create( formData, function(err, data){
            return res.status(200).json(data)
        })
    } catch (error) {
        return res.status(404).json({ error })
    }
}

//GET: http://localhost:3000/api/announcements
export async function getAnnouncement(req, res) {
    try {
        const announcements = await Announcements.find({})

        if(!announcements) return res.status(404).json({ error: "Data Not Found"})
        res.status(200).json(announcements)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data"})
    }
}