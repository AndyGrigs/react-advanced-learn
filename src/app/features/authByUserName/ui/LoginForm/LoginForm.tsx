import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatsch } from 'shared/ui/hooks/useAppDispatsch/useAppDispatsch';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { UnknownAction } from '@reduxjs/toolkit';
import { DynemicModuleLoader, ReducerList } from 'shared/lib/components/DynemicModuleLoader/DynemicModuleLoader';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError';
import loginByUserName, { LoginByUsernameProps } from '../../model/services/loginByUserName/loginByUserName';

export interface LoginFormProps {
  className?: string;
}

const initialRedusers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatsch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        try {
            dispatch(loginByUserName({ username, password })as unknown as UnknownAction);
        } catch (e) {
            console.error('Login failed', e);
        }
    }, [dispatch, password, username]);

    return (
        <DynemicModuleLoader removeAfterUnmount reducers={initialRedusers}>
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
        </DynemicModuleLoader>
    );
});

export default LoginForm;
