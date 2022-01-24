import Names from './Names';
import PersonalInformation from './PersonalInformation';

const GeneralInformation = () => {
  return (
    <section className="general-info">
      <Names />
      <PersonalInformation />
    </section>
  );
};

export default GeneralInformation;
