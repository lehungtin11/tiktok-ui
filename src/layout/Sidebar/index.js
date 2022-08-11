import classNames from 'classnames/bind';
import Button from '~/Components/Button';
import style from './Sidebar.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main-sidebar')}>
                <Button className={cx('foryou')} to="/" leftIcon={images.home}>
                    Dành cho bạn
                </Button>
                <Button to="/following" leftIcon={images.follow}>
                    Đang Follow
                </Button>
                <Button to="/live" leftIcon={images.live}>
                    LIVE
                </Button>
            </div>
            <div className={cx('login-sidebar')}>
                <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                <Button large outline>
                    Đăng nhập
                </Button>
            </div>
        </div>
    );
}

export default Sidebar;
