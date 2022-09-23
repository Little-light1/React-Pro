/*
 * @Author: zhangzhen
 * @Date: 2022-06-29 10:09:57
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-20 14:16:30
 * @Description:
 *
 */
import {Component} from 'react';
import ModalComponent from './index';
import './modalCss.css';

class ModalClass extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    //  创建头部
    createHeader = () => {
        const {title, onCancel} = this.props;
        return (
            <div className="modal-header">
                <span className="modal-header-title">{title}</span>
                <span className="modal-header-close" onClick={onCancel}>
                    ×
                </span>
            </div>
        );
    };

    // 创建主体
    createMain = () => {
        return this.props.children;
    };

    // 创建底部
    createFooter = () => {
        const {onOk, onCancel, footer} = this.props;

        if (footer === null) {
            return null;
        }
        return (
            <div className="modal-footer">
                {footer ? (
                    footer
                ) : (
                    <div className="modal-footer-button">
                        <span className="modal-footer-button-ok" onClick={onOk}>
                            确认
                        </span>
                        <span className="modal-footer-button-cancel" onClick={onCancel}>
                            取消
                        </span>
                    </div>
                )}
            </div>
        );
    };

    render() {
        const {visible, width = 500, height = 500, closeCb, onClose, footer} = this.props;
        return (
            <ModalComponent visible={visible} width={width} height={height} onClose={onClose} closeCb={closeCb}>
                {this.createHeader()}
                {this.createMain()}
                {this.createFooter()}
            </ModalComponent>
        );
    }
}

export default ModalClass;
