import React from "react";

import "./Contacts.css";
import UserAvatar from "../UserAvatar";

interface ContactData {
  name: string;
  src: string;
}

interface ContactProps {
  name: string;
  src: string;
  compact?: boolean;
}

const contacts: ContactData[] = [
  { name: "Natali Craig", src: "/images/ContactImages/NataliCraig.png" },
  { name: "Drew Cano", src: "/images/ContactImages/DrewCano.png" },
  { name: "Orlando Diggs", src: "/images/ContactImages/OrlandoDiggs.png" },
  { name: "Andi Lane", src: "/images/ContactImages/AndiLane.png" },
  { name: "Kate Morrison", src: "/images/ContactImages/KateMorrison.png" },
  { name: "Koray Okumus", src: "/images/ContactImages/KorayOkumus.png" },
];

const Contacts: React.FC = () => {
  return (
    <section className="info-group-wrapper" aria-labelledby="contacts-heading">
      <header className="contact-header-wrapper">
        <h2 id="contacts-heading" className="contact-header">
          Contacts
        </h2>
      </header>
      <ul role="list" className="info-group-list">
        {contacts.map((contact) => (
          <Contact key={contact.name} name={contact.name} src={contact.src} />
        ))}
      </ul>
    </section>
  );
};

export const Contact: React.FC<ContactProps> = ({
  name,
  src,
  compact = false,
}) => {
  return (
    <li className="contact-wrapper" role="listitem">
      <UserAvatar src={src} username={name} />
      {!compact && <p className="contact-name">{name}</p>}
    </li>
  );
};

export default Contacts;
