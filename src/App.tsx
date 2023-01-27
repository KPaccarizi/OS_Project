import { PowerButton } from "@components/PowerButton/PowerButton";
import { useAuthContext } from "@context/AuthContext/AuthContext";

import { Login } from "@pages/Login/Login";
import { MainScreen } from "@pages/MainScreen/MainScreen";

function App() {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="w-full flex bg-gradient-to-b h-screen from-primary to-secondary dark:from-[#28313B] dark:to-[#485461] dark:text-white ">
      {!isAuthenticated ? <Login /> : <MainScreen />}

      <PowerButton />
    </div>
  );
}

export default App;
