import { AnyObject } from '@/assets/interface';

interface persistedType {
  modules: AnyObject;
  path: string[];
  storage: Storage;
}

export default (obj: persistedType): (() => void) => {
  const path = obj.path || [];
  const storage = obj.storage || window.localStorage;
  const module = obj.modules || {};
  const data = {};
  path.forEach((item: any) => {
    data[item] = module[item]?.state || {};
  });

  return () => {
    storage['vuex'] = JSON.stringify(data);
  };
};
