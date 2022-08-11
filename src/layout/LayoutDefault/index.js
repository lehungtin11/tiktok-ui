import classNames from 'classnames/bind';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './DefaultLayout.module.scss';

function LayoutDefault({ children }) {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('inner')}>
                <Sidebar />

                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default LayoutDefault;
