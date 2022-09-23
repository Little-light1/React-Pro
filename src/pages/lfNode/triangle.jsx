/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 10:56:39
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 13:08:15
 *
 */
import './lfNode.css';

const Triangle = () => {
    return (
        <svg className="svg-node">
            <g transform="translate(0.5,0.5)" style={{visibility: 'visible'}}>
                <path
                    d="M 5.78 1.36 L 26.18 14.96 L 5.78 28.56 Z"
                    fill="#ffffff"
                    stroke="#000000"
                    strokeWidth="1.3"
                    strokeMiterlimit="10"
                    pointerEvents="all"></path>
            </g>
        </svg>
    );
};

export default Triangle;
