import { useForm } from "react-hook-form";
import estateImg from "../../assets/Banner/banner2.jpg";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import GitHubLogin from "../../Components/SocialLogin/GitHubLogin";
const Login = () => {
  const [err, setErr] = useState("");
  const { loginUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile();
        // Navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setErr("Email or Password invalid please try again");
        console.error(error);
      });
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${estateImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>{" "}
        {/* Optional overlay for better contrast */}
        <div className="hero-content flex-col w-full justify-center items-center">
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-medium">Login</span>
                </label>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  {...register("email")}
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register("password")}
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control">
                <button
                  type="submit"
                  className="btn bg-[#1563DF] text-white text-base rounded-full my-4"
                >
                  Sign in
                </button>
                <SocialLogin />
                <GitHubLogin />
                {err && <p className="text-red-500">{err}</p>}
                <p className="text-center mt-3">
                  Do not have have an account?{" "}
                  <Link to="/signUp" className="underline text-[#1563DF] ">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
