/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 10:56:04
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 13:58:27
 *
 */
import './lfNode.css';

const Rect = () => {
    return (
        <svg className="svg-node">
            <g transform="translate(0.5,0.5)" style={{visibility: 'visible'}}>
                <rect
                    x="2.38"
                    y="1.36"
                    width="27.2"
                    height="27.2"
                    fill="#ffffff"
                    stroke="#000000"
                    strokeWidth="1.3"
                    rx="4"
                    ry="4"
                    pointerEvents="all"></rect>
            </g>
        </svg>
    );
};

export default Rect;
