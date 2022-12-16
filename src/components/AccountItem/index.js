import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avata')} src="http://localhost/100x100.jpeg" alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyeen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>NguyenVanA</span>
            </div>
        </div>
    );
}

export default AccountItem;
