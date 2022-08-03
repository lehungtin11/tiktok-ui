import images from '~/assets/img';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, onBack }) {
    return (
        <div className={cx('header-wrapper')}>
            <button onClick={onBack} className={cx('header-button')}>
                <img src={images.back} alt="back-icon" />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    );
}

export default MenuItem;
