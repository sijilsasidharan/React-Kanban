import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ModelProps {
    open: boolean;
    children: React.ReactNode,
    wrapperId?: string;
    onClose: () => void;
}
const Model: React.FC<ModelProps> = ({ open, children, wrapperId = 'model', onClose }) => {
    const wrapper = document.getElementById(wrapperId)!

    useEffect(() => {
        // const listener = () => {
        //     onClose();
        // };
        // wrapper.addEventListener('click', listener)
        // return () => {
        //     wrapper.removeEventListener('click', listener);
        // }
    }, []);
    
    if (!open) return null;
    
    return createPortal(children, wrapper)
};

export default Model