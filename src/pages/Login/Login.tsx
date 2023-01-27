import { LoginForm } from "@components/Login/LoginForm/LoginForm";
import { UserImage } from "@components/Login/UserImage/UserImage";

export const Login = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <UserImage />
      <LoginForm />
    </div>
  );
};
