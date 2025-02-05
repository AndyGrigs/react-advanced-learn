import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import loginByUserByName from '../../model/services/loginByUserName/loginByUserName';

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserByName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className || ''])}>
            <Text title={t('forma-avtorizacii')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                onChange={onChangeUsername}
                type="text"
                className={cls.input}
                placeholder={t('Логін')}
                value={username}
            />
            <Input
                onChange={onChangePassword}
                type="text"
                className={cls.input}
                placeholder={t('Пароль')}
                value={password}
            />
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Увійти')}
            </Button>
        </div>
    );
});

export default LoginForm;
