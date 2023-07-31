import "./app.css";
import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import MainMenuHeader from "./components/MainMenuHeader";

const App = () => {
    // mainMenu, myOrders, registration, login
    const [pageState, setPageState] = useState("mainMenu");

    return (
        <div>
            <MainMenuHeader />
            <RegistrationForm />
        </div>
    );
};
export default App;
