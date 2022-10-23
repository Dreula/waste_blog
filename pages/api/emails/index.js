import connectMongo from '../../../database/conn'
import { getEmails, postEmail } from '../../../database/controller';

export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection"}))

    // type of request
    const { method } = req

    switch(method){
        case 'GET' :
            getEmails(req,res)
            break;
        case 'POST':
            postEmail(req,res)
            break;
        case 'PUT':
            res.status(200).json({ method, name: 'PUT Request' });
            break;
        case 'DELETE':
            res.status(200).json({ method, name: 'DELETE Request' });
            break;
        default : 
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
  }