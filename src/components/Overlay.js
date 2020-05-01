import React from 'react';
import Portal from './Portal';

const Overlay = ({ className, onClick }) => {
    return (
        <Portal>
            <div
                onClick={onClick}
                className={[
                    'c-overlay',
                    className
                ].join(' ').trim()} />
        </Portal>
    )
}

export default Overlay;