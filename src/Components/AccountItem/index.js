import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3fda2cca3e9257c62e6fb3b8e9710184~c5_100x100.jpeg?x-expires=1659405600&x-signature=eAa3esH1KN4r%2F%2BU4RRnqLm1iXKs%3D"
                alt="account"
            />
            <div className={cx('account-info')}>
                <h4 className={cx('text-format')}>tinspham</h4>
                <p>Tins</p>
            </div>
        </div>
    );
}

export default AccountItem;
