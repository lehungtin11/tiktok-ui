import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/img';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import AccountItem from '~/Components/AccountItem';
import Button from '~/Components/Button';

const cx = classNames.bind(styles);
function Header() {
    const [input, setInput] = useState('');
    const [hover, setHover] = useState(false);
    var timeId = useRef();
    var timeId2 = useRef();

    function esc(e) {
        if (e.keyCode === 27) {
            setInput('');
        }
    }

    useEffect(() => {
        document.querySelector('input[id="ipt-search"]').addEventListener('keydown', esc);
        return () => {
            document.querySelector('input[id="ipt-search"]').removeEventListener('keydown', esc);
        };
    }, []);

    function Change(e) {
        setInput(e);
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Tippy
                    interactive
                    placement="bottom"
                    delay={[0, 600]}
                    render={(attrs) => (
                        <div className={cx('wrapper-account')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('account')}>Tài khoản</div>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('wrapper-input')}>
                        <input
                            placeholder="Tìm kiếm tài khoản và video"
                            className={cx('text-format')}
                            id="ipt-search"
                            value={input}
                            onChange={(e) => {
                                Change(e.target.value);
                            }}
                        />
                        <div style={{ margin: '0 12px', display: 'flex' }}>
                            {input === '' || (
                                <img
                                    src={images.x}
                                    alt="x"
                                    onClick={() => {
                                        setInput('');
                                    }}
                                />
                            )}
                            {/* <img src={images.load} alt="load"></img> */}
                        </div>
                        <span className={cx('separate-line')}></span>
                        <button className={cx('search-button')}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 48 48"
                                fill={input === '' ? 'rgba(22, 24, 35, 0.34)' : 'rgba(22, 24, 35, 0.75)'}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                                ></path>
                            </svg>
                        </button>
                        <div className={cx('wrapper-outline')}></div>
                    </div>
                </Tippy>
                <div className={cx('right-group', 'dflex-center')}>
                    <Button style={{ justifyContent: 'flex-start' }} leftIcon={images.plus} text>
                        Tải lên
                    </Button>
                    <Button style={{ marginLeft: '16px' }} primary>
                        Đăng nhập
                    </Button>
                    <div
                        onMouseEnter={() => {
                            clearTimeout(timeId);
                            setHover(true);
                        }}
                        onMouseLeave={() => {
                            timeId = setTimeout(() => setHover(false), 700);
                        }}
                        className={cx('more-group')}
                    >
                        <img className={cx('more-button')} src={images.more} alt="more" />
                        {hover && (
                            <ul
                                onMouseEnter={() => {
                                    clearTimeout(timeId);
                                    clearTimeout(timeId2);
                                    setHover(true);
                                }}
                                onMouseLeave={() => {
                                    timeId2 = setTimeout(() => setHover(false), 700);
                                }}
                                className={cx('more-popup', 'text-format')}
                            >
                                <Button leftIcon={images.language} className={cx('popup-wrapper')}>
                                    Tiếng Việt
                                </Button>
                                <span>
                                    <Button leftIcon={images.help} className={cx('popup-wrapper')}>
                                        Phản hồi và trợ giúp
                                    </Button>
                                </span>
                                <Button leftIcon={images.hotkey} className={cx('popup-wrapper')}>
                                    Phím tắt trên bàn phím
                                </Button>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
