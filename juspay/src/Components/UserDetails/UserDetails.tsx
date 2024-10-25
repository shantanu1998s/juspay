import UserAvatar from "../UserAvatar";
import "./UserDetails.css";

/*
 * The User Details of the account owner
 * Ideally, the user details must be available through the handshake made on first page load
 * and contact with the backend.
 *
 * For the purpose of the assignment, I have used hard coded values as shown in the design
 * https://www.figma.com/design/XBEbJlKyCR4kdwlhJvzAUS/UI-Developer-Assignment?node-id=2-15403&t=FyXORb76TtQbTIO6-4
 */

const UserDetails: React.FC = () => {
  return (
    <div className="userdetails-wrapper">
      <UserAvatar src="/images/UserProfileAvatar.png" username="Bye Wind" />
      <h2>ByeWind</h2>
    </div>
  );
};

export default UserDetails;
