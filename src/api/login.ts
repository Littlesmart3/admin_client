import { faas, AnyObject } from '@/utils/faas';

export class LoginAPI {
  // 登录
  static passportLogin(params: AnyObject): Promise<any> {
    return faas.post('/login/user/passport', params);
  }
}
