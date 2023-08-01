import "./app.css";
import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import NavigationHeader from "./components/NavigationHeader";
import { Image, chakra } from "@chakra-ui/react";

const App = () => {
    // mainMenu, myOrders, placeOrder, login, registration
    const [pageState, setPageState] = useState("mainMenu");
    return (
        <chakra.div>
            <NavigationHeader setPageState={setPageState} />
            {pageState === "mainMenu" ? (
                <>
                    <Image
                        src="/img/sampleLogo3.jpg"
                        boxSize="full"
                        alt="Logo"
                    ></Image>
                    <Image
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80s"
                        alt="Spotlight Pizza"
                    ></Image>
                </>
            ) : (
                <RegistrationForm setPageState={setPageState} />
            )}
        </chakra.div>
    );
};

export default App;
