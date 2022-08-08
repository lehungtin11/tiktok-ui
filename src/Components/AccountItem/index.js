import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img src={data.avatar} alt={data.full_name} />
            <div className={cx('account-info')}>
                <h4 className={cx('text-format')}>{data.full_name}</h4>
                <p>{data.nickname}</p>
            </div>
        </div>
    );
}

export default AccountItem;
