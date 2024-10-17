import '../styles/components/Header.scss';
import '../styles/utils/_common.scss';
import dogImage from '../images/icons/dog-image.svg';
import AnimalSelect from './AnimalSelect';
import IssueSelect from './IssueSelect';
import FindVetButton from './FindVetButton';
import { useState } from 'react';
import DatePickerComponent from './DatePicker';

const Header = () => {
  const [selectedAnimal, setSelectedAnimal] = useState('Кіт');
  const [selectedIssue, setSelectedIssue] = useState('Шкірні/вушні інфекції');
  const [selectedDate, setSelectedDate] = useState('1 Лютого');

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1>
              Ветеринарна онлайн консультація <span>24/7</span>
            </h1>
            <p>
              Новий рівень турботи про здоров’я вашого улюбленця. Де б ви не
              були, ми завжди поруч!
            </p>
          </div>
          <div className="header-img">
            <img src={dogImage} alt="Dog" />
          </div>
        </div>
        <div className="header-form">
          <div className="dropdown-menu">
            <AnimalSelect
              selectedAnimal={selectedAnimal}
              setSelectedAnimal={setSelectedAnimal}
            />
            <IssueSelect
              selectedIssue={selectedIssue}
              setSelectedIssue={setSelectedIssue}
            />
            <DatePickerComponent
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <FindVetButton />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
