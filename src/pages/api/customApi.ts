import { todos } from "./todos"


/*export default function handler(req:any, res:any) {
    res.status(200).json({ name: 'John Doe' })
  }*/

export default function handler(req:any, res:any) {
    const { method } = req;
    
    switch (method) {
    case "GET":
    res.status(200).json(todos);
    break;
    default:
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
    break;
    }
    }