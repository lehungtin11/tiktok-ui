import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    children,
    className,
    leftIcon = false,
    rightIcon = false,
    to = false,
    href = false,
    text = false,
    disable = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    round = false,
    onClick,
    ...rest
}) {
    let Button = 'Button';

    const props = {
        onClick,
        ...rest,
    };

    // Disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Button = Link;
    } else if (href) {
        props.href = href;
        Button = 'a';
    }

    const classes = cx('button', className, { primary, disable, outline, text, small, large, round });

    return (
        <Button className={classes} {...props}>
            {leftIcon && <img src={leftIcon} alt="leftIcon" />}
            <span>{children}</span>
            {rightIcon && <img src={rightIcon} alt="rightIcon" />}
        </Button>
    );
}

export default Button;
