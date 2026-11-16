import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import UserForm from "../../components/UserForm/UserForm";
import type { User } from "../../types/User";
import "./createView.scss";
import { useNavigate } from "react-router-dom";

function CreateView() {
  const { usersDispatch } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmitNew(user: User) {
    usersDispatch({ type: "ADD_USER", users: user });
    alert("Benutzer erfolgreich erstellt!");
    navigate(-1);
  }

  return <UserForm user={undefined} onSubmit={handleSubmitNew} />;
}

export default CreateView;
