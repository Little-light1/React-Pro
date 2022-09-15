/*
 * @Author: zhangzhen
 * @Date: 2022-09-15 10:44:12
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-15 11:03:46
 *
 */
import React, {useState} from 'react';
import GameBox from './pages/game/page';

const Epp = () => {
    return (
        <React.Fragment>
            <div style={{width: '100%', height: '100%'}}>
                <GameBox />
            </div>
        </React.Fragment>
    );
};

export default Epp;
