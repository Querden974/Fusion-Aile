import { Request, Response, Router} from "express";
import express from "express";

const router:Router = express.Router();

class Routes {
    static test(req:Request, res:Response):void {
        res.json({ test: ['test', 'test2', 'test3', 'test4'] });
    }
    static reservation(req:Request, res:Response):void {
        console.log(req.body);
        res.status(200).json({ message: 'OK' });
    }
}

router.get('/api', Routes.test);
router.post('/resa',Routes.reservation)

export default router;