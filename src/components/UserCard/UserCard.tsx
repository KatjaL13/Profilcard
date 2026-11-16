import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./usercard.scss";
import { faAddressBook, faCakeCandles, faEnvelope, faGlobe, faPhone, faVenusMars } from "@fortawesome/free-solid-svg-icons";
import type { User } from "../../types/User";
import DeleteButton from "../Button/DeleteButton";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";


type UserCardProps = {
  user: User;
};
function UserCard({ user }: UserCardProps) {
  const { usersDispatch } = useContext(UserContext);
  


     

  function deleteUser() {
    usersDispatch({ type: "REMOVE_USER", users: user });
    alert("Nuter erfolgreich gelöscht");
  }

  return (
    <div className="user-card">
      <DeleteButton onClick={deleteUser} />
      <div className="user-card-picture">
        <img className="user-card-image" src="https://randomuser.me/api/portraits/women/23.jpg" alt="Profile" />
      </div>
      <div className="user-card-content">
        <h2 className="user-card-name">{user.name}</h2>
        <div className="user-card-description">
          <div className="user-card-description-1">
            <div className="user-card-description-item">
              <span className="user-card-description-icon">
                <FontAwesomeIcon icon={faCakeCandles} />
              </span>
              <span className="user-card-description-text">{user.birth}</span>
            </div>
            <div className="user-card-description-item">
              <span className="user-card-description-icon">
                <FontAwesomeIcon icon={faVenusMars} />
              </span>
              <span className="user-card-description-text">{user.gender}</span>
            </div>
            <div className="user-card-description-item">
              <span className="user-card-description-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="user-card-description-text">{user.email}</span>
            </div>
          </div>
          <div className="user-card-description-2">
            <div className="user-card-description-item">
              <span className="user-card-description-icon">
                <FontAwesomeIcon icon={faAddressBook} />
              </span>
              <span className="user-card-description-text">{user.address}</span>
            </div>
            <div className="user-card-description-item">
              <span className="user-card-description-icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="user-card-description-text">{user.phone}</span>
            </div>
            <div className="user-card-description-item">
              <span className="user-card-description-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <span className="user-card-description-text">{user.website}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
