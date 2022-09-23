/*
 * @Author: zhangzhen
 * @Date: 2022-06-29 09:59:29
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-20 14:17:50
 * @Description:
 *
 */
import React, {useState, useEffect, useMemo} from 'react';
import ReactDOM from 'react-dom';
import './modalCss.css';

const ModalComponent = (props) => {
    const {visible, width, height, children} = props;
    const [modalVisible, setModalVisible] = useState(visible || false);

    const ModalBox = useMemo(() => {
        const elementModal = (
            <div className="modal-box" style={visible ? {display: 'block'} : {display: 'none'}}>
                <div className="modal-warp">
                    <div style={{width: width, height: height}}>{children} </div>
                </div>
            </div>
        );

        return ReactDOM.createPortal(elementModal, document.body);
    }, [visible, width, height, children]);

    return ModalBox;
};

export default ModalComponent;
