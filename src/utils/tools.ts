import _ from 'lodash';
// 树形数组
export function getTreeList(list: Array<any>, pid: string): any[] {
  const arr = _.cloneDeep(list);
  const res: Array<any> = [];
  const map: Array<any> = arr.reduce((res, v) => ((res[v.id] = v), res), {});

  for (const item of arr) {
    if (item[pid] === 0) {
      res.push(item);
      continue;
    }
    if (item[pid] in map) {
      const parent = map[item[pid]];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return res;
}
