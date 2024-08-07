import { Href, ImagePath, Logout } from "@/Constant";
import { UserProfileData } from "@/Data/Layout";
import { useAppSelector } from "@/Redux/Hooks";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut } from "react-feather";

export const Profile = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);

  const router = useRouter();
  const LogOutUser = () => {
    Cookies.remove("invento_token");
    router.push("/auth/login");
  };

  return (
    <li className="profile-nav onhover-dropdown px-0 py-0">
      <div className="d-flex profile-media align-items-center">
        <img className="img-30" src={`${ImagePath}/dashboard/profile.png`} alt="" />
        <div className="flex-grow-1">
          <span>Tetsme</span>
          <p className="mb-0 font-outfit">
            Server
          </p>
        </div>
      </div>
    </li>
  );
};
