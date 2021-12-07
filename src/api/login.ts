import { faas, AnyObject } from '@/utils/faas';

export class LoginAPI {
  // 登录
  static mobileLogin(): Promise<any> {
    return faas.get('/login/user/passport');
  }
}
