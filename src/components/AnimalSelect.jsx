import '../styles/components/AnimalSelect.scss';
import Select from 'react-select';

import dogIcon from '../images/icons/animals/dog.svg';
import catIcon from '../images/icons/animals/cat.svg';
import rabbitIcon from '../images/icons/animals/rabbit.svg';
import birdIcon from '../images/icons/animals/bird.svg';
import turtleIcon from '../images/icons/animals/turtle.svg';
import otherIcon from '../images/icons/animals/paw.svg';
import pawIcon from '../images/icons/animals/paw.svg';

const options = [
  { value: 'Собака', label: 'Собака', icon: dogIcon },
  { value: 'Кіт', label: 'Кіт', icon: catIcon },
  { value: 'Гризун', label: 'Гризун', icon: rabbitIcon },
  { value: 'Птах', label: 'Птах', icon: birdIcon },
  { value: 'Плазун', label: 'Плазун', icon: turtleIcon },
  { value: 'Інше', label: 'Інше', icon: otherIcon },
];

const Option = ({ innerRef, innerProps, data }) => (
  <div ref={innerRef} {...innerProps} className="select-option">
    <img src={data.icon} alt={data.label} className="option-icon" />
    <span>{data.label}</span>
  </div>
);

const Placeholder = () => (
  <div className="select-placeholder">
    <img src={pawIcon} alt="Placeholder" className="placeholder-icon" />
    <span>Тварина</span>
  </div>
);

const AnimalSelect = ({ setSelectedAnimal }) => {
  const handleChange = selectedOption => {
    setSelectedAnimal(selectedOption.value);
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder={<Placeholder />}
      className="animal-select"
      classNamePrefix="select"
      components={{ Option }}
    />
  );
};

export default AnimalSelect;
