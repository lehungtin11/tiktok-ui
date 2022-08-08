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

const cx = classNames.bind(styles);
function Header() {
    const currentUser = false;
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
            to: '/following',
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
            to: '/profile',
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
                <Link to="/">
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <SearchInput />

                <div className={cx('right-group', 'dflex-center')}>
                    <Button style={{ justifyContent: 'flex-start' }} leftIcon={images.plus} text>
                        Tải lên
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Tin nhắn" offset={[, 13]} delay={[0, 100]}>
                                <button className={cx('button-message')}>
                                    <Message className={cx('icon-message')} />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" offset={[, 10]} delay={[0, 100]}>
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
                                <img
                                    className={cx('user-avatar')}
                                    src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1662049404035090.jpeg?x-expires=1659751200&x-signature=f4IxDZgBYOimEJDBxewcDTI4Urw%3D"
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
