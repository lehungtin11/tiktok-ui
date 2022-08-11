import img from './150x150.png';
import { forwardRef } from 'react';

function Image({ src, alt, backupImg, ...props }, ref) {
    return (
        <img
            ref={ref}
            src={src}
            {...props}
            alt={alt}
            onError={(e) => {
                e.target.src = img;
            }}
        />
    );
}

export default forwardRef(Image);
