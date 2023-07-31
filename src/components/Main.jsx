import { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import MainMenuHeader from "./MainMenuHeader";

const Main = () => {
    // mainMenu, myOrders, placeOrder, login, registration
    const [pageState, setPageState] = useState("mainMenu");

    return (
        <div>
            <MainMenuHeader setPageState={setPageState} />
            {pageState === "mainMenu" ? (
                <img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80s"
                    width="500"
                    height="auto"
                    alt="Spotlight Pizza"
                ></img>
            ) : (
                <RegistrationForm />
            )}
        </div>
    );
};

export default Main;
