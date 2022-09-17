/*
 * @Author: zhangzhen
 * @Date: 2022-09-15 10:45:53
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-17 10:51:25
 *
 */
import React, {useState, useEffect} from 'react';
import {itemsArr} from './content';
import './page.css';
import {isItemCanClick} from './action';

let hasThreeItem = 0;
const GameBox = () => {
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [gameItemsArr, setGameItemsArr] = useState(itemsArr(level));
    const [operateArr, setOperateArr] = useState([null, null, null, null, null, null, null]);

    useEffect(() => {
        if (operateArr.filter((item) => item).length === 7) {
            alert('游戏失败！');
            window.location.reload();
        }
    }, [operateArr]);

    // 判断游戏是否下一关
    useEffect(() => {
        if (gameItemsArr.length === 0) {
            alert(`恭喜你通过第${level}关了！！！`);
            if (level === 6) {
                alert('恭喜你通关了！！！');
                return;
            }
            setLevel((prev) => prev + 1);
            setGameItemsArr((prev) => {
                prev = itemsArr(level + 1);
                return [...prev];
            });
        }
    }, [gameItemsArr, level]);
    // 点击item
    const moveItem = (item, index, whichFloor) => {
        hasThreeItem = 0;
        let hasThreeindex = 0;
        // 放到操作区
        setOperateArr((prev) => {
            const currentIndex = prev.findIndex((k) => k && k.name === item.name);
            prev.pop();
            if (currentIndex > -1) {
                prev.splice(currentIndex, 0, item);
            } else {
                prev.unshift(item);
            }
            return [...prev];
        });
        // 操作原始数组
        setGameItemsArr((prev) => {
            prev[whichFloor].arr.splice(index, 1, {...item, name: '', color: ''});
            if (prev[prev.length - 1].arr.filter((item) => item.name !== '').length === 0) {
                return [];
            } else {
                return [...prev];
            }
        });

        // 判断清除逻辑
        operateArr.map((newItem, newIndex) => {
            if (newItem && newItem.name === item.name) {
                hasThreeItem++;
                hasThreeindex = newIndex;
            }
            return null;
        });

        // 如果有三个一样的
        if (hasThreeItem === 2) {
            setOperateArr((prev) => {
                prev.splice(hasThreeindex - 1, 3);
                prev.push(null);
                prev.push(null);
                prev.push(null);
                return [...prev];
            });
            setScore((prev) => prev + 100);
        }
    };

    return (
        <div className="gamebox">
            {/* 标题区域 */}
            <div className="titleArea">
                <div className="titleAreaTitle">汉字方块</div>
                <div className="titleAreaScore">
                    <span>分数:</span>
                    <span>{score}</span>
                </div>
            </div>
            {/* 游戏区域 */}
            <div className="gameArea">
                {gameItemsArr.map((item, index) => {
                    return (
                        <div
                            className="gameAreaFloor"
                            key={item.zIndex}
                            style={
                                item.arr.filter((k) => k.name !== '').length !== 0
                                    ? {zIndex: item.zIndex, width: item.width, height: item.width}
                                    : {display: 'none'}
                            }>
                            {item.arr.map((gameItem, gameIndex) => {
                                return (
                                    <div
                                        onClick={() => {
                                            if (gameItem.name === '' || !isItemCanClick(gameItem, gameItemsArr)) return;

                                            moveItem(gameItem, gameIndex, index);
                                        }}
                                        key={gameIndex}
                                        style={
                                            gameItem.name === ''
                                                ? {opacity: 0, pointerEvents: 'none'}
                                                : isItemCanClick(gameItem, gameItemsArr)
                                                ? {background: gameItem.color}
                                                : {background: '#c2cbcbee'}
                                        }
                                        className="gameItem">
                                        {gameItem.name}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            {/* 下方格子 */}
            <div className="operateArea">
                {operateArr.map((item, index) => {
                    if (!item) {
                        return <div key={index} className="gameItemOperate"></div>;
                    } else {
                        return (
                            <div key={index} style={{background: item.color}} className="gameItemOperate">
                                {item.name}
                            </div>
                        );
                    }
                })}
            </div>
            <div className="operateBtnArr">
                <span
                    className="operateBtn"
                    onClick={() => {
                        setGameItemsArr((prev) => {
                            prev = itemsArr(level);
                            return [...prev];
                        });
                    }}>
                    随机
                </span>
                <span className="operateBtn">撤回</span>
                <span className="operateBtn">加三个格子</span>
            </div>
        </div>
    );
};

export default GameBox;
