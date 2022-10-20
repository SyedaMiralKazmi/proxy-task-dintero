import { LowSync, JSONFileSync } from 'lowdb';
import lodash from 'lodash';

type DBData = {
  logs: {
    id: string;
    headers: any;
    res: string;
    url: string;
    authorization: string;
    host: string;
    userAgent: string;
  }[];
};

class LowWithLodash<T> extends LowSync<T> {
  chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data');
}

const adapter = new JSONFileSync<DBData>('db.json');
const db = new LowWithLodash(adapter);

export default db;
