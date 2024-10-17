import '../styles/components/FindVetButton.scss';

const FindVetButton = ({ onClick }) => {
  return (
    <button className="find-vet" onClick={onClick}>
      Знайти ветеринара
    </button>
  );
};

export default FindVetButton;
