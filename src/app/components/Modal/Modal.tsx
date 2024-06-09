import { useEffect, useRef } from 'react';
import styles from "./Modal.module.css"

export const Modal = ({ isOpen, onClose, children }: {isOpen:boolean, onClose: () => void, children: any}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //       if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
    //         onClose();
    //       }
    //     };
    
    //     if (isOpen) {
    //       document.addEventListener('mousedown', handleClickOutside);
    //     } else {
    //       document.removeEventListener('mousedown', handleClickOutside);
    //     }
    
    //     return () => {
    //       document.removeEventListener('mousedown', handleClickOutside);
    //     };
    //   }, [isOpen, onClose]);
      return (
          <>
          {
            isOpen && (
                <div className={`${styles.modal}`}>
                    <div className={styles.overlay}></div>
                <div className={styles.modal_content} ref={modalRef}>
                    {children}
                </div>
                </div>
            )
          }
          </>
      );
}