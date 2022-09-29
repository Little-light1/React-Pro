/*
 * @Author: zhangzhen
 * @Date: 2022-09-28 13:50:56
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-28 13:51:05
 *
 */
import Ids from 'ids';
var ids = new Ids([32, 32, 1]);
export function getBpmnId() {
    return ids.next();
}
