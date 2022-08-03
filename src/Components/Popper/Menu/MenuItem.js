import Button from '~/Components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <Button leftIcon={data.icon} className={cx('popup-wrapper')} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
