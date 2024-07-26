import { Request, Response } from 'express';
import mockjs from 'mockjs';

const proxy = {
  'GET /api/data': (req: Request, res: Response) => {
    res.send(
      mockjs.mock({
        code: 2000,
        msg: '',
        data: {
          'list|10': [
            {
              id: '@id',
              name: '@name',
            },
          ],
        },
        totalCount: 100,
      }),
    );
  },
};

export default proxy;
