import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/Components/Popper';
import AccountItem from '~/Components/AccountItem';
import { Load, Search } from '~/Components/Icon';
import styles from './Header.module.scss';
import images from '~/assets/img';
import Debounce from '~/hooks/useDebounce';
import * as searchServices from '~/Services/searchServices';

const cx = classNames.bind(styles);

function SearchInput() {
    const [input, setInput] = useState('');
    const [showList, setShowList] = useState(true);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const debounce = Debounce(input, 500);
    const inputRef = useRef();
    useEffect(() => {
        if (!debounce.trim()) {
            setList([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const respone = await searchServices.get(debounce);
            setList(respone);
            setLoading(false);
        };

        fetchApi();
    }, [debounce]);

    function esc(e) {
        if (e.keyCode === 27) {
            setInput('');
            setList([]);
        }
    }

    useEffect(() => {
        document.querySelector('input[id="ipt-search"]').addEventListener('keydown', esc);
        return () => {
            document.querySelector('input[id="ipt-search"]').removeEventListener('keydown', esc);
        };
    }, []);

    function Change(e) {
        const changeValue = e.target.value;
        if (!changeValue.startsWith(' ')) {
            return setInput(changeValue);
        }
    }

    return (
        <div>
            <TippyHeadless
                visible={list.length > 0 && showList}
                interactive
                placement="bottom"
                delay={[0, 600]}
                render={(attrs) => (
                    <div className={cx('wrapper-account')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('account')}>Tài khoản</div>
                            {list.map((result) => {
                                return <AccountItem key={result.id} data={result} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => {
                    setShowList(false);
                }}
            >
                <div className={cx('wrapper-input')}>
                    <input
                        ref={inputRef}
                        placeholder="Tìm kiếm tài khoản và video"
                        className={cx('text-format')}
                        id="ipt-search"
                        value={input}
                        autoComplete="off"
                        onFocus={() => {
                            setShowList(true);
                        }}
                        onChange={Change}
                    />
                    <div className={cx('wrapper-button')}>
                        {!!input && !loading && (
                            <img
                                className={cx('x')}
                                src={images.x}
                                alt="x"
                                onClick={() => {
                                    setInput('');
                                    setList([]);
                                    inputRef.current.focus();
                                }}
                            />
                        )}
                        {loading && <Load width="16px" height="16px" className={cx('spinner')} />}
                    </div>
                    <span className={cx('separate-line')}></span>
                    <button className={cx('search-button')}>
                        {input === '' ? (
                            <Search width="24px" height="24px" />
                        ) : (
                            <Search width="24px" height="24px" fillColor="rgba(22, 24, 35, 0.75)" />
                        )}
                    </button>
                    <div className={cx('wrapper-outline')}></div>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default SearchInput;
