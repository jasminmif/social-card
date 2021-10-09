import UserProfile from "./UserProfile";

export default function UserList() {
    return <div className="flex flex-col space-y-10">
        <UserProfile
            profilePictureUrl=""
            fullName="Lois Zemlak"
            email="Maida.Becker98@gmail.com"
            address="Cremin Plains St, Apt.462, North Connortown, 99373"
            phoneNo="(293) 414-8005"
            website="marianne.org"
        />

        <UserProfile
            profilePictureUrl="./profile_picture.jpg"
            fullName="Lois Zemlak"
            email="Maida.Becker98@gmail.com"
            address="Cremin Plains St, Apt.462, North Connortown, 99373"
            phoneNo="(293) 414-8005"
            website="marianne.org"
        />  
    </div>
}