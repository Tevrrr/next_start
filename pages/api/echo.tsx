/** @format */

import { NextApiRequest, NextApiResponse } from 'next';

interface MessegeNextApiRequest extends NextApiRequest {
	query: { messege?: string };
}

export default function echo(req: MessegeNextApiRequest, res: NextApiResponse) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(
		JSON.stringify({
			message: req.query.messege ?? 'Base messege',
		})
	);
}
