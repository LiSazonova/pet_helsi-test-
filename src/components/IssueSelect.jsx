import '../styles/components/IssueSelect.scss';
import Select from 'react-select';

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

const options = [
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
  { value: 'Алергічна реакція', label: 'Алергічна реакція', icon: allergyIcon },
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
    <img src={allIcon} alt="Placeholder" className="placeholder-icon" />
    <span>Що турбує тварину?</span>
  </div>
);

const IssueSelect = ({ setSelectedIssue }) => {
  const handleChange = selectedOption => {
    setSelectedIssue(selectedOption.value);
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder={<Placeholder />}
      className="problems-select"
      classNamePrefix="select"
      components={{ Option }}
    />
  );
};

export default IssueSelect;
