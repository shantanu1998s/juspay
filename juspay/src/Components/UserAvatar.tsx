import * as Avatar from "@radix-ui/react-avatar";
import { getInitials } from "../utils/utils";

interface UserAvatarProps {
  src: string;
  username: string;
  delay?: number;
  size?: number;
}

const UserAvatar = ({
  src: profilePictureUrl,
  username,
  delay = 600,
  size = 24,
}: UserAvatarProps) => {
  return (
    <Avatar.Root
      className="user-avatar-wrapper"
      style={{ width: size, height: size, userSelect: "none" }}
    >
      <Avatar.Image
        className="user-avatar"
        src={profilePictureUrl}
        alt={`Profile picture of ${username}`}
        style={{ width: size, height: size, borderRadius: "50%" }}
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={delay}>
        {getInitials(username)}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default UserAvatar;
