import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/img';
import Button from '~/Components/Button';
import Menu from '~/Components/Popper/Menu';
import { Message, More, Notify } from '~/Components/Icon';
import SearchInput from './SearchInput';
import config from '~/config/';
import Image from '~/assets/img/Image';

const cx = classNames.bind(styles);
function Header() {
    const currentUser = true;
    const MENU_ITEM = [
        {
            title: 'Tiếng Việt',
            icon: images.language,
            children: {
                title: 'Ngôn ngữ',
                data: [
                    { code: 'vi', title: 'Tiếng Việt' },
                    { code: 'en', title: 'English' },
                ],
            },
        },
        {
            title: 'Phản hồi và trợ giúp',
            icon: images.help,
            to: config.routes.following,
        },
        {
            title: 'Phím tắt trên bàn phím',
            icon: images.hotkey,
        },
    ];
    const USER_MENU = [
        {
            title: 'Xem hồ sơ',
            icon: images.profile,
            to: config.routes.profile,
        },
        {
            title: 'Nhận xu',
            icon: images.coin,
            to: '/coin',
        },
        {
            title: 'Cài đặt',
            icon: images.setting,
            to: '/setting',
        },
        ...MENU_ITEM,
        {
            title: 'Đăng xuất',
            icon: images.logout,
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <SearchInput />

                <div className={cx('right-group', 'dflex-center')}>
                    <Button style={{ justifyContent: 'flex-start' }} leftIcon={images.plus} text>
                        Tải lên
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Tin nhắn" offset={[0, 13]} delay={[0, 100]}>
                                <button className={cx('button-message')}>
                                    <Message className={cx('icon-message')} />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" offset={[0, 10]} delay={[0, 100]}>
                                <button className={cx('button-notify')}>
                                    <sup>1</sup>
                                    <Notify className={cx('icon-notify')} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button style={{ marginLeft: '16px' }} primary>
                                Đăng nhập
                            </Button>
                        </>
                    )}
                    <div className={cx('more-group')}>
                        {currentUser ? (
                            <Menu items={USER_MENU}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/04b8243eed4146a004bbb56edc3d1e86~c5_100x100.jpeg?x-expires=1660230000&x-signature=Q6F3Q5Vca1MH9QhcwZr7pHjetrY%3D"
                                    alt="Tín Hùng Lê"
                                />
                            </Menu>
                        ) : (
                            <Menu items={MENU_ITEM}>
                                <More className={cx('more-button')} />
                            </Menu>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
