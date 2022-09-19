/*
 * @Author: zhangzhen
 * @Date: 2022-09-15 10:46:02
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-19 13:24:51
 *
 */
const gameItemsArr = [
    {name: '马', color: '#5470c6', position: [null, null, null]},
    {name: '马', color: '#5470c6', position: [null, null, null]},
    {name: '马', color: '#5470c6', position: [null, null, null]},
    {name: '驰', color: '#fac858', position: [null, null, null]},
    {name: '驰', color: '#fac858', position: [null, null, null]},
    {name: '驰', color: '#fac858', position: [null, null, null]},
    {name: '朱', color: '#ee6666', position: [null, null, null]},
    {name: '朱', color: '#ee6666', position: [null, null, null]},
    {name: '朱', color: '#ee6666', position: [null, null, null]},
    {name: '振', color: '#73c0de', position: [null, null, null]},
    {name: '振', color: '#73c0de', position: [null, null, null]},
    {name: '振', color: '#73c0de', position: [null, null, null]},
    {name: '骚', color: '#3bd272', position: [null, null, null]},
    {name: '骚', color: '#3bd272', position: [null, null, null]},
    {name: '骚', color: '#3bd272', position: [null, null, null]},
    {name: '刘', color: '#9a60b4', position: [null, null, null]},
    {name: '刘', color: '#9a60b4', position: [null, null, null]},
    {name: '刘', color: '#9a60b4', position: [null, null, null]},
    {name: '胖', color: '#ea7ccc', position: [null, null, null]},
    {name: '胖', color: '#ea7ccc', position: [null, null, null]},
    {name: '胖', color: '#ea7ccc', position: [null, null, null]},
    {name: '邢', color: '#c14cac', position: [null, null, null]},
    {name: '邢', color: '#c14cac', position: [null, null, null]},
    {name: '邢', color: '#c14cac', position: [null, null, null]},
    {name: '吊', color: '#f08300', position: [null, null, null]},
    {name: '吊', color: '#f08300', position: [null, null, null]},
    {name: '吊', color: '#f08300', position: [null, null, null]},
    {name: '龙', color: '#004eff', position: [null, null, null]},
    {name: '龙', color: '#004eff', position: [null, null, null]},
    {name: '龙', color: '#004eff', position: [null, null, null]},
    {name: '楞', color: '#00e4ff', position: [null, null, null]},
    {name: '楞', color: '#00e4ff', position: [null, null, null]},
    {name: '楞', color: '#00e4ff', position: [null, null, null]},
    {name: '张', color: '#c0e8ff', position: [null, null, null]},
    {name: '张', color: '#c0e8ff', position: [null, null, null]},
    {name: '张', color: '#c0e8ff', position: [null, null, null]},
];

// 生成游戏items
export const itemsArr = (level = 1) => {
    let arr = [...gameItemsArr];
    // 每层有多少item
    const floorItemsArr = [9, 16, 25, 36, 49, 64, 81];
    const floorNumsArr = [3, 4, 5, 6, 7, 8, 9];

    // 每个等级有多少空item数组
    const noItemsNum = [7, 14, 14, 24, 49, 40];
    // 每个等级有多少item数组
    const itemsNum = [18, 36, 72, 111, 150, 240];

    // 空item数组
    const noItemsArr = [];
    let i = noItemsNum[level - 1];
    while (i > 0) {
        noItemsArr.push({name: '', color: '', position: [null, null, null], display: false});
        i--;
    }

    // 最后不完整的取几个
    const getArrItems = ((itemsNum[level - 1] / 3) % 12) * 3;
    const otherItemsArr = arr
        .map((i, index) => {
            if (index < getArrItems) {
                return i;
            }
            return null;
        })
        .filter((i) => i);
    let itemsNumsArr = [];
    if (level === 1) {
        itemsNumsArr = otherItemsArr;
    }
    if (level === 2) {
        itemsNumsArr = arr;
    }
    if (level === 3) {
        itemsNumsArr = arr.concat(arr);
    }
    if (level === 4) {
        arr = [...gameItemsArr];
        itemsNumsArr = arr.concat(arr, arr, otherItemsArr);
    }
    if (level === 5) {
        arr = [...gameItemsArr];
        itemsNumsArr = arr.concat(arr, arr, arr, otherItemsArr);
    }
    if (level === 6) {
        arr = [...gameItemsArr];
        itemsNumsArr = arr.concat(arr, arr, arr, arr, arr, otherItemsArr);
    }

    const allItems = itemsNumsArr.concat(noItemsArr).sort(() => Math.random() - 0.5);

    const resultArr = [];

    floorItemsArr.splice(0, level + 1).map((item, fIndex) => {
        resultArr.push(allItems.splice(0, item));
    });

    const zIndex = [6, 5, 4, 3, 2, 1];
    return resultArr.map((item, index) => {
        return {
            arr: [
                ...item.map((i, j) => {
                    i.position = [index + 1, parseInt(j / floorNumsArr[index]) + 1, (j + 1) % floorNumsArr[index] || floorNumsArr[index]];
                    return {...i};
                }),
            ],
            zIndex: zIndex[index],
            width: (index + 3) * 35,
        };
    });
};
