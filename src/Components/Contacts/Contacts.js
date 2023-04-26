import './Contacts.css';
import locationDark from '../../images/location-dark.svg';
import locationLight from '../../images/location-light.svg';
import telegramDark from '../../images/telegram-dark.svg';
import telegramLight from '../../images/telegram-light.svg';
import githubDark from '../../images/github-dark.svg';
import githubLight from '../../images/github-light.svg';
import phoneDark from '../../images/phone-dark.svg';
import phoneLight from '../../images/phone-light.svg';
import emailDark from '../../images/email-dark.svg';
import emailLight from '../../images/email-light.svg';
import photo from '../../images/photo.jpeg';

export default function Contacts() {
  const darkTheme = true;
  return (
    <div className="contacts">
      <h1 className="contacts__name">АЛЕКСАНДР САВИЧЕВ</h1>
      <p className="contacts__job">Веб-разработчик</p>
      <div className="contacts__container contacts__container_location">
        <img src={darkTheme? locationDark : locationLight} className="contacts__logo" alt="Иконка"/>
        <p className="contacts__about">МО, Пушкино</p>
      </div>
      <div className="contacts__container contacts__container_telegram">
        <img src={darkTheme? telegramDark : telegramLight} className="contacts__logo" alt="Иконка"/>
        <a className="contacts__link" href="https://t.me/aleksandrshd">
          <p className="contacts__about">aleksandrshd</p>
        </a>
      </div>
      <div className="contacts__container contacts__container_github">
        <img src={darkTheme? githubDark : githubLight} className="contacts__logo" alt="Иконка"/>
        <a className="contacts__link" href="https://github.com/aleksandrshd">
          <p className="contacts__about">aleksandrshd</p>
        </a>
      </div>
      <div className="contacts__container contacts__container_phone">
        <img src={darkTheme? phoneDark : phoneLight} className="contacts__logo" alt="Иконка"/>
        <p className="contacts__about">+79164750811</p>
      </div>
      <div className="contacts__container contacts__container_email">
        <img src={darkTheme? emailDark : emailLight} className="contacts__logo" alt="Иконка"/>
        <p className="contacts__about">aleksandrs.hd@yandex.ru</p>
      </div>
      <img src={photo} className="contacts__photo" alt="Фото"/>
    </div>
  );
}