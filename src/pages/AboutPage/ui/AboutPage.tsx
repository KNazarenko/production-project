import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('About_Page')}
        </div>
    );
};

export default AboutPage;
