import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className || ''])}>
            <input type="text" placeholder={t('Логин')} />
            <input type="text" placeholder={t('Логин')} />
            <Button>{t('Увійти')}</Button>
        </div>
    );
};
