import '../styles/components/CustomSelect.scss';
import Select from 'react-select';

const CustomSelect = ({ options, placeholder, value, onChange }) => {
  const Option = ({ innerRef, innerProps, data }) => (
    <div ref={innerRef} {...innerProps} className="select-option">
      <img src={data.icon} alt={data.label} className="option-icon" />
      <span>{data.label}</span>
    </div>
  );

  const Placeholder = () => (
    <div className="select-placeholder">
      <img
        src={placeholder.icon}
        alt={placeholder.text}
        className="placeholder-icon"
      />
      <span>{placeholder.text}</span>
    </div>
  );

  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={<Placeholder />}
      className="custom-select"
      classNamePrefix="select"
      components={{ Option }}
    />
  );
};

export default CustomSelect;
