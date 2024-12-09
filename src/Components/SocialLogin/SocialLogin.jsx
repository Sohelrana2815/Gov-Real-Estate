import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { googleSignIn } = useAuth();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        //Navigate after login
        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <button
      className="btn btn-outline rounded-full"
      onClick={handleGoogleLogin}
    >
      <FcGoogle className="text-lg" />
      Continue With Google
    </button>
  );
};

export default SocialLogin;
