/*
 * @Author: zhangzhen
 * @Date: 2022-09-15 10:47:25
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-16 19:57:45
 *
 */
export const isItemCanClick = (item, allItems) => {
    const nowItem = {...item};
    const nowItemFloor = nowItem.position[0];
    // 最底下层不判断
    // if (nowItemFloor === allItems.length) return;

    const upFloor = allItems[nowItemFloor - 2]?.arr.filter((itemNow) => itemNow.name !== '') || [];

    if (upFloor.length === 0) return true;
    let midArr = [];
    upFloor.map((itemNowM) => {
        const position = itemNowM.position;
        const a = [position[0] + 1, position[1], position[2]];
        const b = [position[0] + 1, position[1], position[2] + 1];
        const c = [position[0] + 1, position[1] + 1, position[2]];
        const d = [position[0] + 1, position[1] + 1, position[2] + 1];
        midArr.push(a);
        midArr.push(b);
        midArr.push(c);
        midArr.push(d);
    });

    const isCanClick =
        midArr.filter((mItem) => nowItem.position[0] === mItem[0] && nowItem.position[1] === mItem[1] && nowItem.position[2] === mItem[2])
            .length === 0;

    return isCanClick;
};
