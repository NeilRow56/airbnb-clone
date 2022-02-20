import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import onError from '../../../middlewares/error';

import {
	getSingleRoom,
	updateRoom,
	deleteRoom,
} from '../../../controllers/roomControllers';

const handler = nc({ onError });

dbConnect();

handler.get(getSingleRoom);

handler.put(updateRoom);

handler.delete(deleteRoom);

export default handler;
