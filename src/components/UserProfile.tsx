import { useState } from "react";
import { IUser } from "../store/UserStore";
import { getInitialsOnly } from "../util/ultils";
import CompanyLogo from "./icons/CompanyLogo";
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
import { useForm } from "react-hook-form";

interface UserProfileProps {
  user: IUser;
  onUserChange: (user: IUser) => void;
}

interface IFormData {
  fullName: string;
  email: string;
  address: string;
  phoneNo: string;
  website: string;
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

  const defaultValues = {
    fullName,
    email,
    address,
    phoneNo,
    website,
  };

  const { register, handleSubmit, reset } = useForm<IFormData>({
    defaultValues,
  });
  const [editMode, setEditMode] = useState(false);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset(defaultValues);
    setEditMode(false);
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditMode(true);
  };

  const onSubmit = (formData: IFormData) => {
    const data = {
      id,
      companyName,
      companyDesc,
      profilePicUrl,
      fullName: formData.fullName,
      email: formData.email,
      address: formData.address,
      phoneNo: formData.phoneNo,
      website: formData.website,
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center pb-3 sm:pb-0">
          {editMode ? (
            <Input
              placeholder="Full Name"
              variant="md"
              {...register("fullName")}
            />
          ) : (
            <h1 className="font-dm-serif text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-gray-900">
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
        <div className="space-y-3 sm:space-y-2 font-open-sans text-sm lg:text-xs xl:text-sm mb-7 sm:mb-0 leading-tight overflow-hidden">
          <DescriptionRow icon={<MailIcon />}>
            {editMode ? (
              <Input placeholder="Email" {...register("email")} />
            ) : (
              <Link text={email} type="email" />
            )}
          </DescriptionRow>
          <DescriptionRow icon={<ContactsIcon />}>
            {editMode ? (
              <Input placeholder="Address" {...register("address")} />
            ) : (
              address
            )}
          </DescriptionRow>
          <DescriptionRow icon={<PhoneNumberIcon />}>
            {editMode ? (
              <Input placeholder="Phone number" {...register("phoneNo")} />
            ) : (
              <Link text={phoneNo} type="phone" />
            )}
          </DescriptionRow>
          <DescriptionRow icon={<GlobeIcon />}>
            {editMode ? (
              <Input placeholder="Website" {...register("website")} />
            ) : (
              <Link text={website} type="link" className="text-blue-500" />
            )}
          </DescriptionRow>
        </div>

        <div className="flex items-center">
          <div className="mr-3">
            <CompanyLogo />
          </div>
          <div className="flex-1 flex flex-col text-gray-500 text-xs sm:text-sm leading-tight w-1">
            <div className="font-bold">{companyName}</div>
            <div className="flex-1 min-w-0 overflow-hidden overflow-ellipsis whitespace-nowrap">
              {companyDesc} askdjhaskjd aks d
            </div>
          </div>
        </div>
      </form>
    </UserProfileContainer>
  );
}
