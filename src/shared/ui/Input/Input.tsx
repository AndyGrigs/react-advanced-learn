import React, { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  type?: string;
  autofocus?: boolean;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const ref = React.useRef<HTMLInputElement>(null);
    const [_, setIsFocused] = React.useState(false);
    const {
        className, onChange, value, type = 'text', placeholder, autofocus, ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.Input, {}, [className || ''])}>
            <input
                ref={ref}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                {...otherProps}
            />
        </div>
    );
});
