import { useState } from "react";
import { getInitialsOnly } from "../util/ultils";
import CompanyLogo from "./CompanyLogo";
import DescriptionRow from "./DescriptionRow";
import ContactsIcon from "./icons/ContactsIcon";
import GlobeIcon from "./icons/GlobeIcon";
import MailIcon from "./icons/MailIcon";
import PhoneNumberIcon from "./icons/PhoneNumberIcon";
import ProfilePicture from "./ProfilePicture";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Link from "./ui/Link";
import UserProfileContainer from "./UserProfileContainer";

interface UserProfileProps {
  profilePictureUrl?: string;
  fullName: string;
  email: string;
  address: string;
  phoneNo: string;
  website: string;
}

export default function UserProfile({
  profilePictureUrl,
  fullName,
  email,
  address,
  phoneNo,
  website,
}: UserProfileProps) {
  const [editMode, setEditMode] = useState(false);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditMode(false);
  }

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // propagate event to main windows
    setEditMode(false);
  }

  return (
    <UserProfileContainer
      profilePictureComponent={
        <ProfilePicture
          url={profilePictureUrl}
          text={getInitialsOnly(fullName)}
          editMode={editMode}
        />
      }
    >
      <form className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row flex-col-reverse justify-between items-center pb-3 sm:pb-0">
          {editMode ? (
            <Input name="fullName" placeholder="Full Name" variant="md" />
          ) : (
            <h1 className="font-dm-serif text-2xl sm:text-3xl text-gray-900">
              {fullName}
            </h1>
          )}

          {editMode ? (
            <div className="flex flex-row space-x-3 mb-2 sm:mb-0">
              <Button variant="save" onClick={e => handleSave(e)}>
                Save
              </Button>
              <Button variant="cancel" onClick={e => handleCancel(e)}>
                Cancel
              </Button>
            </div>
          ) : (
            <Button variant="edit" onClick={_e => setEditMode(true)}>
              Edit
            </Button>
          )}
        </div>
        <div className="space-y-3 sm:space-y-2 font-open-sans text-sm mb-7 sm:mb-0 leading-tight">
          <DescriptionRow icon={<MailIcon />}>
            {editMode ? (
              <Input name="email" placeholder="Email" />
            ) : (
              <Link text={email} type="email" />
            )}
          </DescriptionRow>
          <DescriptionRow icon={<ContactsIcon />}>
            {editMode ? (
              <Input name="address" placeholder="Address" />
            ) : (
              address
            )}
          </DescriptionRow>
          <DescriptionRow icon={<PhoneNumberIcon />}>
            {editMode ? (
              <Input name="phoneNo" placeholder="Phone number" />
            ) : (
              <Link text={phoneNo} type="phone" />
            )}
          </DescriptionRow>
          <DescriptionRow icon={<GlobeIcon />}>
            {editMode ? (
              <Input name="website" placeholder="Website" />
            ) : (
              <Link text={website} type="link" className="text-blue-500" />
            )}
          </DescriptionRow>
        </div>
        
        <div className="flex items-center overflow-clip overflow-hidden">
          <div className="pr-3">
            <CompanyLogo />
          </div>
          <div className="flex flex-col text-gray-500 text-xs sm:text-sm leading-tight">
            <div className="font-bold">McKenzie LLC</div>
            <div className="flex-1 sm:whitespace-nowrap">
              Quality-focused value-added synergy
            </div>
          </div>
        </div>
      </form>
    </UserProfileContainer>
  );
}
