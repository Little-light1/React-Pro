/*
 * @Author: zhangzhen
 * @Date: 2022-09-15 10:45:53
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-26 09:04:52
 *
 */
import React, {useState, useEffect} from 'react';
import {itemsArr} from './content';
import './page.css';
import {isItemCanClick} from './action';
// import music from '../../assets/music.mp3';

let hasThreeItem = 0;
const GameBox = () => {
    // 分数
    const [score, setScore] = useState(0);
    // 第几关
    const [level, setLevel] = useState(6);
    // 游戏的item
    const [gameItemsArr, setGameItemsArr] = useState(itemsArr(level));
    // 操作的数组
    const [operateArr, setOperateArr] = useState([null, null, null, null, null, null, null]);
    // 当前点击的item，撤回用
    const [nowClickItemInfo, setNowClickItemInfo] = useState([null, null, null]);
    // 操作次数
    const [isOperate, setIsOperate] = useState([0, 0, 0]);
    // const musicRef = useRef(null);

    useEffect(() => {
        // if (musicRef.current) {
        //     musicRef.current.currentTime = 0;
        //     document.addEventListener('click', (event) => {
        //         musicRef.current.play();
        //     });
        // }
    }, []);

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
                setLevel(1);
                setGameItemsArr((prev) => {
                    prev = itemsArr(1);
                    return [...prev];
                });
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
        // 记录当前的点击item信息
        const nowClickItem = [item, index, whichFloor];
        setNowClickItemInfo(nowClickItem);

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
                    <div>第{level}关</div>
                    <div>
                        <span>分数:</span>
                        <span>{score}</span>
                    </div>
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
                        return <div key={index + '1'} className="gameItemOperate"></div>;
                    } else {
                        return (
                            <div
                                key={index + '2'}
                                style={isOperate[2] === 1 ? {background: item.color, width: '8%'} : {background: item.color}}
                                className="gameItemOperate">
                                {item.name}
                            </div>
                        );
                    }
                })}
            </div>
            <div className="operateBtnArr">
                <span
                    className="operateBtn"
                    style={isOperate[0] === 1 ? {background: 'grey'} : {}}
                    onClick={() => {
                        if (isOperate[0] === 1) return;
                        setGameItemsArr((prev) => {
                            prev = itemsArr(level);
                            return [...prev];
                        });
                        setIsOperate((prev) => {
                            prev[0] = 1;
                            return [...prev];
                        });
                    }}>
                    随机
                </span>
                <span
                    className="operateBtn"
                    style={isOperate[1] === 1 ? {background: 'grey'} : {}}
                    onClick={() => {
                        if (operateArr.filter((item) => item).length === 0) return;
                        if (isOperate[1] === 1) return;
                        setOperateArr((prev) => {
                            const lastIndex = prev.findIndex((item) => item && item.name === nowClickItemInfo[0].name);
                            prev.splice(lastIndex, 1, null);
                            const noIndex = prev.findIndex((item) => !item);
                            prev.splice(noIndex, 1);
                            prev.push(null);
                            return [...prev];
                        });
                        setGameItemsArr((prev) => {
                            prev[nowClickItemInfo[2]].arr[nowClickItemInfo[1]] = nowClickItemInfo[0];
                            return [...prev];
                        });

                        setIsOperate((prev) => {
                            prev[1] = 1;
                            return [...prev];
                        });
                    }}>
                    撤回
                </span>
                <span
                    className="operateBtn"
                    style={isOperate[2] === 1 ? {background: 'grey'} : {}}
                    onClick={() => {
                        if (operateArr.length === 0) return;
                        setOperateArr((prev) => {
                            prev.push(null);
                            return [...prev];
                        });
                        setIsOperate((prev) => {
                            prev[2] = 1;
                            return [...prev];
                        });
                    }}>
                    格子+1
                </span>
            </div>
            {/* <audio muted ref={musicRef} src={music}></audio> */}
        </div>
    );
};

export default GameBox;
