import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children }) {
    return <div className={cx('Wrapper')}>{children}</div>;
}

export default Wrapper;
