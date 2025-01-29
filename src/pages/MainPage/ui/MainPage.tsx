import { Counter } from 'app/entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = React.useState('');
    const onChange = (value: string) => {
        setValue(value);
        console.log(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <Input onChange={onChange} value={value} />
        </div>
    );
};

export default MainPage;
