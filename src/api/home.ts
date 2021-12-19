import { faas } from './index';
import { AnyObject } from '@/assets/interface/index';

export class HomeAPI {
  // 导航栏
  static navList(): Promise<AnyObject> {
    return faas.get('/home/nav_list');
  }
}
