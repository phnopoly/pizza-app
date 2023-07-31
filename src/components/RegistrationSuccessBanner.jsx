const RegistrationSuccessBanner = (p) => {
    const { firstName } = p;

    return (
        <div className="success-message">
            <h3>Welcome {firstName}</h3>
            <p>Your registration was successful!</p>
        </div>
    );
};

export default RegistrationSuccessBanner;
