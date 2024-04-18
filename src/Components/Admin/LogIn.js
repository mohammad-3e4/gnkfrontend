import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminPage from './AdminPage';
import { baseUrl } from '../../baseUrl';
export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    const [emailMatched, setEmailMatched] = useState(false);
    const [passwordMatched, setPasswordMatched] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function emailChange(event) {
        setEmail(event.target.value);
    }

    function passwordChange(event) {
        setPassword(event.target.value);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/login`);
            console.log(response.data[0]);            
            setData(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if email matches any in the data
        const matchedEmail = data.some(item => item.Email === email);
        setEmailMatched(matchedEmail);

        // Check if password matches the corresponding email's password
        const matchedPassword = data.some(item => item.Email === email && item.Password === password);
        setPasswordMatched(matchedPassword);

        // If both email and password are matched, set loggedIn to true
        if (matchedEmail && matchedPassword) {
            setLoggedIn(true);
        }
    }

    // If logged in, render a different component or section
    if (loggedIn) {
        return (
            <>
                <AdminPage />
            </>
        );
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="./images/school_logo.png"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Login to your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Enter Email address
                        </label>
                        <input
                            type='email'
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={email}
                            onChange={emailChange}
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Enter Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={passwordChange}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className=" rounded-md absolute inset-y-6 bottom-0 right-0 flex items-center px-3 py-1 text-sm font-medium leading-5 text-gray-700 bg-transparent focus:outline-none"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-orange duration-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue"
                    >
                        Submit
                    </button>
                </form>

                {emailMatched && passwordMatched && (
                    <div>
                        <p className="block text-sm text-center font-medium leading-6 text-green-500 mt-5">Login Successfully!!</p>
                    </div>
                )}
                {emailMatched && !passwordMatched && (
                    <div>
                        <p className="block text-sm text-center font-medium leading-6 text-red-500 mt-5">Incorrect Password</p>
                    </div>
                )}
                {!emailMatched && (
                    <div>
                        <p className="block text-sm text-center font-medium leading-6 text-red-500 mt-5">Please Enter Valid Email</p>
                    </div>
                )}
            </div>
        </div>
    );
}
