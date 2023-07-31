const RegistrationFormBody = (p) => {
    const { isSubmitted, values, handleSubmit, handleInputChange } = p;
    return (
        <form className="register-form" onSubmit={handleSubmit} noValidate>
            <section>
                <h2 className="top-header">Membership Registration</h2>
                <label className="form-label required" htmlFor="firstName">
                    First Name
                </label>
                <input
                    className="form-field"
                    type="text"
                    name="firstName"
                    autoComplete="off"
                    value={values.firstName}
                    onChange={handleInputChange}
                />

                {isSubmitted && !values.firstName && (
                    <span id="first-name-error">Please enter a first name</span>
                )}

                <label className="form-label" htmlFor="lastName">
                    Last Name
                </label>
                <input
                    className="form-label  form-field"
                    type="text"
                    name="lastName"
                    autoComplete="off"
                    value={values.lastName}
                    onChange={handleInputChange}
                />

                <label className="form-label required" htmlFor="phoneNumber">
                    Phone Number
                </label>
                <input
                    className="  form-field"
                    type="tel"
                    name="phoneNumber"
                    autoComplete="off"
                    value={values.phoneNumber}
                    onChange={handleInputChange}
                />

                {isSubmitted && !values.phoneNumber && (
                    <span id="phone-error">Please enter a phone number</span>
                )}

                <label className="form-label required" htmlFor="email">
                    Email
                </label>
                <input
                    className="form-field"
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={values.email}
                    onChange={handleInputChange}
                />
                {isSubmitted && !values.email && (
                    <span id="email-error">Please enter an email address</span>
                )}

                <label className="form-label required" htmlFor="password">
                    Password
                </label>
                <input
                    className="form-field"
                    type="password"
                    name="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    value={values.password}
                    onChange={handleInputChange}
                />
                {isSubmitted && !values.password && (
                    <span id="password-error">Please enter a password</span>
                )}

                <label className="form-label" htmlFor="hearAboutUs">
                    How did you hear about us?
                </label>
                <select
                    className="form-field select-selected"
                    name="hearAboutUs"
                    onChange={handleInputChange}
                >
                    <option value=""></option>
                    <option value="searchEngine">Search Engine</option>
                    <option value="email">Email</option>
                    <option value="tvAd">TV Ad</option>
                    <option value="radioAd">Radio Ad</option>
                    <option value="friend">Friend's Suggestion</option>
                    <option value="other">Other</option>
                </select>

                <label className="form-label required" htmlFor="birthday">
                    Date of Birth
                </label>

                <input
                    className="form-field birthday-field"
                    type="date"
                    name="birthday"
                    max={new Date().toISOString().split("T")[0]}
                    value={values.birthday}
                    onChange={handleInputChange}
                />

                {isSubmitted && !values.birthday && (
                    <span id="birthday-error">
                        Please enter a date for your birthday
                    </span>
                )}

                <section className="center-align">
                    <button
                        className="center-align register-button button-color"
                        type="submit"
                    >
                        Register
                    </button>
                </section>
            </section>
        </form>
    );
};

export default RegistrationFormBody;
