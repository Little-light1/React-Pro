/*
 * @Author: zhangzhen
 * @Date: 2022-06-29 09:59:29
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-06-29 13:08:58
 * @Description:
 *
 */
import React, {useState, useEffect, useMemo} from 'react';
import ReactDOM from 'react-dom';

const ModalComponent = (props) => {
    const {visible, onClose, width, closeCb, children} = props;
    const [modalVisible, setModalVisible] = useState(visible || false);

    const ModalBox = useMemo(() => {
        const elementModal = (
            <div className="modal-box" style={visible ? {display: 'block'} : {display: 'none'}}>
                <div className="modal-warp">
                    <div style={{width: width + 'px'}}> {children} </div>
                </div>
            </div>
        );

        return ReactDOM.createPortal(elementModal, document.body);
    }, [visible, width, children]);

    return ModalBox;
};

export default ModalComponent;
