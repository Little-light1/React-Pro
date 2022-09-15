/*
 * @Author: zhangzhen
 * @Date: 2022-07-01 09:40:01
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-07-01 10:16:34
 * @Description:
 *
 */
import React, {useEffect, useState, useRef} from 'react';
import {useMemo} from 'react';

const debounce = function (fn, time) {
    let timer = null;
    return function (...arg) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arg);
        }, time);
    };
};

export const useDebounce = (fun, delayTime) => {
    console.log('fun: ', fun);
    const funRef = useRef(fun);

    const debounceFun = useMemo(() => {
        debounce(funRef.current(), delayTime);
    }, [delayTime]);

    return debounceFun;
};
