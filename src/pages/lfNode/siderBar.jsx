/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 10:59:33
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 16:20:40
 *
 */
import './lfNode.css';

const SiderBar = ({moveNode}) => {
    return (
        <div className="siderBar">
            <div
                className="node rect"
                onMouseDown={() => {
                    moveNode('rect', '矩形');
                }}></div>

            <div
                className="node rectRadius"
                onMouseDown={() => {
                    moveNode('rect-radius', '平滑矩形');
                }}></div>
            <div
                onMouseDown={() => {
                    moveNode('triangle', '三角');
                }}>
                <svg className="node">
                    <path
                        d="M 1 0 L 39 20 L 1 39 Z"
                        fill="#ffffff"
                        stroke="#000000"
                        strokeWidth="1"
                        strokeMiterlimit="10"
                        pointerEvents="all"></path>
                </svg>
            </div>
            <div
                className="node circle"
                onMouseDown={() => {
                    moveNode('circle', '圆');
                }}></div>
        </div>
    );
};

export default SiderBar;
