import { useForm } from "../../hooks/useForm";
import { Gender, type User } from "../../types/User";
import DateInput from "../input/DateInput";
import SelectInput from "../input/SelectInput";
import UserInput from "../input/UserInput";
import SubmitButton from "../Button/SubmitButton";

type UserFormProps = {
  user: User | undefined
  onSubmit: (user: User) => void
};

function UserForm({user, onSubmit}: UserFormProps) {
  const userNameProp = useForm(user?.name ??"", true);
  const userBirthProp = useForm(user?.birth ??"", true);
  const userGenderProp = useForm(user?.gender ??"", true);
  const userEmailProp = useForm(user?.email ??"", true);
  const userAddressProp = useForm(user?.address ??"", true);
  const userPhoneProp = useForm(user?.phone ??"", true);
  const userWebsiteProp = useForm(user?.website ??"", true);

  function convertStringToGender(value: string): Gender {
    switch (value) {
      case "Männlich":
        return Gender.Männlich;
      case "Weiblich":
        return Gender.Weiblich;
      case "Divers":
        return Gender.Divers;
      default:
        return Gender.Divers;
    }
  }

function validateForm(): boolean {
  const fields = [
    userNameProp,
    userBirthProp,
    userGenderProp,
    userEmailProp,
    userAddressProp,
    userPhoneProp,
    userWebsiteProp,
  ];

  const results = fields.map((field) =>
    field.validateInput(field.value)
  );

  return results.every((result) => result === true);
}

function handleSubmit() {
  if (validateForm()) {
    const newUser: User = {
      id: user?.id ?? Math.random(),
      name: userNameProp.value,
      birth: userBirthProp.value,
      gender: convertStringToGender(userGenderProp.value),
      email: userEmailProp.value,
      address: userAddressProp.value,
      phone: userPhoneProp.value,
      website: userWebsiteProp.value,
    };
    onSubmit(newUser);
  } else {
    alert("Bitte füllen Sie alle erforderlichen Felder korrekt aus.");
  }
}

return (
    <div className="create-container">
      <div className="create-view">
        <div className="create-title">Username</div>
        <UserInput value={userNameProp.value} onChange={userNameProp.handleInputChange} error={userNameProp.error} />
      </div>
      <div className="create-view">
        <div className="create-title">Geburtsdatum</div>
        <DateInput value={userBirthProp.value} onChange={userBirthProp.handleInputChange} error={userBirthProp.error} />
      </div>
      <div className="create-view">
        <div className="create-title">Geschlecht</div>
        <SelectInput value={userGenderProp.value} onChange={userGenderProp.handleInputChange} options={["Männlich", "Weiblich", "Divers"]} error={userGenderProp.error} />
      </div>
      <div className="create-view">
        <div className="create-title">Email Adresse</div>
        <UserInput value={userEmailProp.value} onChange={userEmailProp.handleInputChange} error={userEmailProp.error} />
      </div>
      <div className="create-view">
        <div className="create-title">Post Adresse</div>
        <UserInput value={userAddressProp.value} onChange={userAddressProp.handleInputChange} error={userAddressProp.error} />
      </div>
      <div className="create-view">
        <div className="create-title">Telefonnumer</div>
        <UserInput value={userPhoneProp.value} onChange={userPhoneProp.handleInputChange} error={userPhoneProp.error} />
      </div>
      <div className="create-view">
        <div className="create-title">Webseite</div>
        <UserInput value={userWebsiteProp.value} onChange={userWebsiteProp.handleInputChange} error={userWebsiteProp.error} />
      </div>
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
}

export default UserForm;