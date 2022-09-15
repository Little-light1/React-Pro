/*
 * @Author: zhangzhen
 * @Date: 2022-06-29 10:09:57
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-06-29 10:48:38
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
        const {title, onClose} = this.props;
        return (
            <div className="modal-header">
                <span>{title}</span>
                <span onClick={onClose}>×</span>
            </div>
        );
    };

    // 创建主体
    createMain = () => {
        return this.props.children;
    };

    // 创建底部
    createFooter = () => {
        const {onOk, onCancel} = this.props;
        return (
            <div className="modal-footer">
                <div className="modal-footer-button">
                    <span className="modal-footer-button-ok" onClick={onOk}>
                        确认
                    </span>
                    <span className="modal-footer-button-cancel" onClick={onCancel}>
                        取消
                    </span>
                </div>
            </div>
        );
    };

    render() {
        const {visible, width = 500, closeCb, onClose} = this.props;
        return (
            <ModalComponent visible={visible} width={width} onClose={onClose} closeCb={closeCb}>
                {this.createHeader()}
                {this.createMain()}
                {this.createFooter()}
            </ModalComponent>
        );
    }
}

export default ModalClass;
