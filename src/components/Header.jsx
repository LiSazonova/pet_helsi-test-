import '../styles/components/Header.scss';
import '../styles/utils/_common.scss';
import dogImage from '../images/icons/dog-image.svg';
import { useState } from 'react';
import CustomSelect from './CustomSelect';
import FindVetButton from './FindVetButton';
import DatePickerComponent from './DatePickerComponent';

import dogIcon from '../images/icons/animals/dog.svg';
import catIcon from '../images/icons/animals/cat.svg';
import rabbitIcon from '../images/icons/animals/rabbit.svg';
import birdIcon from '../images/icons/animals/bird.svg';
import turtleIcon from '../images/icons/animals/turtle.svg';
import pawIcon from '../images/icons/animals/paw.svg';
import eatIcon from '../images/icons/problems/eating-disorder.svg';
import skinIcon from '../images/icons/problems/skin-infection.svg';
import eyeIcon from '../images/icons/problems/eye-problems.svg';
import digestiveIcon from '../images/icons/problems/digestive-problems.svg';
import insectsIcon from '../images/icons/problems/insects.svg';
import bonesIcon from '../images/icons/problems/bones.svg';
import careIcon from '../images/icons/problems/care.svg';
import allergyIcon from '../images/icons/problems/allergy.svg';

import otherIcon from '../images/icons/problems/other.svg';
import allIcon from '../images/icons/problems/allproblems.svg';

const Header = () => {
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const animalOptions = [
    { value: 'Собака', label: 'Собака', icon: dogIcon },
    { value: 'Кіт', label: 'Кіт', icon: catIcon },
    { value: 'Гризун', label: 'Гризун', icon: rabbitIcon },
    { value: 'Птах', label: 'Птах', icon: birdIcon },
    { value: 'Плазун', label: 'Плазун', icon: turtleIcon },
    { value: 'Інше', label: 'Інше', icon: otherIcon },
  ];

  const issueOptions = [
    { value: 'Харчовий розлад', label: 'Харчовий розлад', icon: eatIcon },
    {
      value: 'Шкірні/вушні інфекції',
      label: 'Шкірні/вушні інфекції',
      icon: skinIcon,
    },
    { value: 'Проблеми з очима', label: 'Проблеми з очима', icon: eyeIcon },
    {
      value: 'Проблеми із травленням',
      label: 'Проблеми із травленням',
      icon: digestiveIcon,
    },
    { value: 'Блохи/кліщи', label: 'Блохи/кліщики', icon: insectsIcon },
    {
      value: 'Травмування частин тіла',
      label: 'Травмування частин тіла',
      icon: bonesIcon,
    },
    {
      value: 'Догляд та утримання',
      label: 'Догляд та утримання',
      icon: careIcon,
    },
    {
      value: 'Алергічна реакція',
      label: 'Алергічна реакція',
      icon: allergyIcon,
    },
    { value: 'Інше', label: 'Інше', icon: otherIcon },
  ];

  const handleFindVet = () => {
    // Логіка пошука ветеринара
    console.log(
      'Пошук ветеринара:',
      selectedAnimal,
      selectedIssue,
      selectedDate,
    );
  };

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
            <CustomSelect
              options={animalOptions}
              placeholder={{
                icon: pawIcon,
                text: 'Тварина',
              }}
              value={selectedAnimal}
              onChange={option => setSelectedAnimal(option)}
            />
            <CustomSelect
              options={issueOptions}
              placeholder={{
                icon: allIcon,
                text: 'Що турбує тварину?',
              }}
              value={selectedIssue}
              onChange={option => setSelectedIssue(option)}
            />
            <DatePickerComponent
              selectedDate={selectedDate}
              onDateChange={date => setSelectedDate(date)}
            />
          </div>
          <FindVetButton onClick={handleFindVet} />
        </div>
      </header>
    </div>
  );
};

export default Header;
