
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";
import { UserContext } from "../../context/UserContext";
import type { User } from "../../types/User";


function EditView() {
  const { users, usersDispatch } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const editUser = users.find((user) => String(user.id) === id);

  if (!editUser) {
    return <p>Benutzer nicht gefunden.</p>;
  }

  function updateUser(user: User) {
    usersDispatch({ type: "UPDATE_USER", users: user });
    alert("Benutzer erfolgreich aktualisiert!");
    navigate(-1);
  }
  return <UserForm key={editUser.id} user={editUser} onSubmit={updateUser} />;
}
export default EditView;
