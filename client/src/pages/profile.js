import ProfileCard from "../components/layout/profileCard";
import FavoriteBar from "../components/layout/favorites";
import FriendsBar from "../components/layout/friendsBar";

const Profile = () => {
  return (
    <div className="d-flex">
      <ProfileCard />
      <div className="sideBar">
      <FavoriteBar/>
      <FriendsBar/>
      </div>
      
    </div>
   
  );
}

export default Profile;
