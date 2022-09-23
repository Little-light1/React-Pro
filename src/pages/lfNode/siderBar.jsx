/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 10:59:33
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 14:42:54
 *
 */
import RectRadius from './rectRadius';
import Rect from './rect';
import Triangle from './triangle';
import './lfNode.css';

const SiderBar = ({moveNode}) => {
    return (
        <div className="siderBar">
            <div
                onMouseDown={() => {
                    moveNode('pro-rect', '矩形');
                }}>
                <Rect />
            </div>

            <div
                onMouseDown={() => {
                    moveNode('rect-radius', '平滑矩形');
                }}>
                <RectRadius />
            </div>
            <div
                onMouseDown={() => {
                    moveNode('triangle', '三角');
                }}>
                <Triangle />
            </div>
        </div>
    );
};

export default SiderBar;
