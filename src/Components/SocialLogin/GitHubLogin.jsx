import { FaGithub } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const GitHubLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { gitHubLogin } = useAuth();

  const handleGitHubLogin = () => {
    gitHubLogin()
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
    <>
      <button
        className="btn btn-outline rounded-full mt-3"
        onClick={handleGitHubLogin}
      >
        <FaGithub className="text-lg" />
        Continue With GitHub
      </button>
    </>
  );
};

export default GitHubLogin;
