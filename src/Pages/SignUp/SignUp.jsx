import { useForm } from "react-hook-form";
import signUpBackgroundImg from "../../assets/Banner/banner1.jpg";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import GitHubLogin from "../../Components/SocialLogin/GitHubLogin";
import AnimatedComponent from "../../Components/AnimatedComponent/AnimatedComponent";
import Swal from "sweetalert2";
const SignUp = () => {
  const { createNewUser, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, photoURL, email, password } = data;
    createNewUser(email, password).then((result) => {
      console.log(result.user);

      updateUserProfile(name, photoURL).then(() => {
        console.log("Update successfully");
        if ((name, photoURL)) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sign up successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    });
  };

  return (
    <>
      <AnimatedComponent animation="fade-in">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${signUpBackgroundImg})`,
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
                    <span className="label-text text-2xl font-medium">
                      Sign up
                    </span>
                  </label>
                </div>
                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name")}
                    placeholder="Full Name"
                    className="input input-bordered rounded-full"
                    required
                  />
                </div>
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email")}
                    placeholder="Email"
                    className="input input-bordered rounded-full"
                    required
                  />
                </div>
                {/* photoURL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    {...register("photoURL")}
                    placeholder="PhotoURL"
                    className="input input-bordered rounded-full"
                    required
                  />
                </div>
                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                        message:
                          "Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long",
                      },
                    })}
                    className="input input-bordered rounded-full"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-[#1563DF] text-white text-base rounded-full"
                  >
                    Sign up
                  </button>
                </div>

                <SocialLogin />
                <GitHubLogin />
                <p className="text-center mt-3">
                  Do not have have an account?{" "}
                  <Link to="/login" className="underline text-[#1563DF] ">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </>
  );
};

export default SignUp;
