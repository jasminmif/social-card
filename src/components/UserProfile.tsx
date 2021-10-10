import { useState } from "react";
import { IUser } from "../store/UserStore";
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
  user: IUser;
  onUserChange: (user: IUser) => void;
}

export default function UserProfile({ user, onUserChange }: UserProfileProps) {
  const {
    id,
    profilePicUrl,
    fullName,
    email,
    address,
    phoneNo,
    website,
    companyName,
    companyDesc,
  } = user;
  const [editMode, setEditMode] = useState(false);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditMode(true);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;
    const data = {
      id,
      companyName,
      companyDesc,
      profilePicUrl,
      fullName: target.fullName.value,
      email: target.email.value,
      address: target.address.value,
      phoneNo: target.phoneNo.value,
      website: target.website.value,
    };

    onUserChange(data);
    setEditMode(false);
  };

  return (
    <UserProfileContainer
      profilePictureComponent={
        <ProfilePicture
          url={profilePicUrl}
          text={getInitialsOnly(fullName)}
          editMode={editMode}
        />
      }
    >
      <form
        className="flex-1 flex flex-col justify-between"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center pb-3 sm:pb-0">
          {editMode ? (
            <Input
              name="fullName"
              placeholder="Full Name"
              variant="md"
              value={fullName}
              onChange={(e) => e} // I am using this to prevent React throwing an error since im not using a Form handler.
            />
          ) : (
            <h1 className="font-dm-serif text-2xl sm:text-3xl text-gray-900">
              {fullName}
            </h1>
          )}

          {editMode ? (
            <div className="flex flex-row space-x-3 mb-2 sm:mb-0">
              <Button variant="save" type="submit">
                Save
              </Button>
              <Button
                variant="cancel"
                onClick={(e) => handleCancel(e)}
                type="button"
              >
                Cancel
              </Button>
            </div>
          ) : (
            <Button variant="edit" onClick={(e) => handleEdit(e)} type="button">
              Edit
            </Button>
          )}
        </div>
        <div className="space-y-3 sm:space-y-2 font-open-sans text-sm mb-7 sm:mb-0 leading-tight">
          <DescriptionRow icon={<MailIcon />}>
            {editMode ? (
              <Input
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => e.target.value}
              />
            ) : (
              <Link text={email} type="email" />
            )}
          </DescriptionRow>
          <DescriptionRow icon={<ContactsIcon />}>
            {editMode ? (
              <Input
                name="address"
                placeholder="Address"
                value={address}
                onChange={(e) => e}
              />
            ) : (
              address
            )}
          </DescriptionRow>
          <DescriptionRow icon={<PhoneNumberIcon />}>
            {editMode ? (
              <Input
                name="phoneNo"
                placeholder="Phone number"
                value={phoneNo}
                onChange={(e) => e}
              />
            ) : (
              <Link text={phoneNo} type="phone" />
            )}
          </DescriptionRow>
          <DescriptionRow icon={<GlobeIcon />}>
            {editMode ? (
              <Input
                name="website"
                placeholder="Website"
                value={website}
                onChange={(e) => e}
              />
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
            <div className="font-bold">{companyName}</div>
            <div className="flex-1 sm:whitespace-nowrap">{companyDesc}</div>
          </div>
        </div>
      </form>
    </UserProfileContainer>
  );
}
