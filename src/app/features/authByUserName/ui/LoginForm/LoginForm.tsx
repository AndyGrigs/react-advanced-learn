import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';

import { DynemicModuleLoader } from 'shared/lib/components/DynemicModuleLoader/DynemicModuleLoader';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import loginByUserByName from '../../model/services/loginByUserName/loginByUserName';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError';

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
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

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserByName({ username, password }));
    }, [dispatch, password, username]);

    const LOGIN_FORM_NAME = 'loginForm';

    return (
        <DynemicModuleLoader removeAfterUnmount name={LOGIN_FORM_NAME} reducer={loginReducer}>
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
