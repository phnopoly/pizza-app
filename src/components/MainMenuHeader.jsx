const MainMenuHeader = (p) => {
    const { setPageState } = p;
    return (
        <header className="main-header">
            <button className="header-button">My Orders</button>
            <button className="header-button">Place Order</button>
            <button className="header-button">Sign In</button>
            <button
                className="header-button"
                onClick={() => setPageState("registration")}
            >
                Sign Up
            </button>
        </header>
    );
};

export default MainMenuHeader;
