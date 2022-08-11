import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/assets/img/Image';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt={data.full_name} />
            <div className={cx('account-info')}>
                <h4 className={cx('text-format')}>{data.full_name}</h4>
                <p>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
