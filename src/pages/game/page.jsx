/*
 * @Author: zhangzhen
 * @Date: 2022-09-15 10:45:53
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-15 17:17:48
 *
 */
import React, {useState} from 'react';
import {itemTextArr, itemTextArrTwo, itemTextArrThree} from './content';
import {useGetState} from 'ahooks';
import './page.css';
let hasThreeItem = 0;
let length = 0;
const GameBox = () => {
    const [score, setScore] = useState(0);
    const [allGameItems, setAllGameItems] = useState(itemTextArr);
    const [operateArr, setOperateArr, getOperateArr] = useGetState([]);
    const moveItem = (item, index) => {
        hasThreeItem = 0;
        let hasThreeindex = 0;
        setOperateArr((prev) => {
            const currentIndex = prev.findIndex((k) => k.name === item.name);
            if (currentIndex > -1) {
                prev.splice(currentIndex, 0, item);
            } else {
                prev.push(item);
            }
            length = prev.length;
            // prev.sort((a) => -1);
            return [...prev];
        });
        setAllGameItems((prev) => {
            prev.splice(index, 1, {name: '', color: ''});
            return [...prev];
        });
        // 判断清除逻辑
        console.log('operateArr111: ', operateArr);
        operateArr.map((newItem, newIndex) => {
            if (newItem.name === item.name) {
                hasThreeItem++;
                hasThreeindex = newIndex;
            }
        });
        // 如果有三个一样的
        if (hasThreeItem === 2) {
            setOperateArr((prev) => {
                prev.splice(hasThreeindex - 1, 3);
                length = prev.length;
                return [...prev];
            });
            setScore((prev) => prev + 100);
        }

        console.log('length: ', length);
    };

    if (length === 8) {
        alert('游戏失败！');
        window.location.reload();
    }

    return (
        <div className="gamebox">
            {/* 标题区域 */}
            <div className="titleArea">
                <div className="titleAreaTitle">我是标题</div>
                <div className="titleAreaScore">
                    <span>分数:</span>
                    <span>{score}</span>
                </div>
            </div>
            {/* 游戏区域 */}
            <div className="gameArea">
                <div className="gameAreaFirst">
                    {allGameItems.map((item, index) => {
                        return (
                            <div
                                onClick={() => {
                                    if (item.name === '') return;
                                    moveItem(item, index);
                                }}
                                key={index}
                                style={item.name === '' ? {opacity: 0} : {background: item.color}}
                                className="gameItem">
                                {item.name}
                            </div>
                        );
                    })}
                </div>
                <div>
                    {/* {itemTextArrTwo.map((item, index) => {
                    return (
                        <div
                            onClick={() => {
                                if (item.name === '') return;
                                moveItem(item, index);
                            }}
                            key={index}
                            style={item.name === '' ? {opacity: 0} : {background: item.color}}
                            className="gameItem">
                            {item.name}
                        </div>
                    );
                })} */}
                </div>
                <div>
                    {/* {itemTextArrThree.map((item, index) => {
                    return (
                        <div
                            onClick={() => {
                                if (item.name === '') return;
                                moveItem(item, index);
                            }}
                            key={index}
                            style={item.name === '' ? {opacity: 0} : {background: item.color}}
                            className="gameItem">
                            {item.name}
                        </div>
                    );
                })} */}
                </div>
            </div>

            {/* 下方格子 */}
            <div className="operateArea">
                {operateArr.map((item, index) => {
                    return (
                        <div key={index} style={{background: item.color}} className="gameItemOperate">
                            {item.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GameBox;
