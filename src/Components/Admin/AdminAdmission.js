import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminPageLayout from "./AdminPageLayout"
import { baseUrl } from "../../baseUrl";


export default function AdminAdmission() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);
    const fetchdata = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/form`);
            // console.log('Response from backend:', response.data.reverse());
            setData(response.data.reverse());
        } catch (error) {
            console.error('Error fetching data:', error);

        }
    };
    const handleDelete = async (news_id) => {
        try {
            await axios.delete(`${baseUrl}/api/form/${news_id}`);
            console.log(`${news_id}`);
        }
        catch (err) {
            console.log(err);
        }

    }

    return (
        <div className="flex">
            <div><AdminPageLayout /></div>

            <div className='overflow-scroll w-full h-[500px]'>
                <div className="w-full ">
                    <h2 style={{ marginBottom: "40px" }} className="text-3xl text-orange mt-5 text-center font-bold tracking-tight  sm:text-4xl">Admission <span style={{ color: "var(--blue" }}>Form</span>  </h2>

                    <div className='w-full  flex justify-center items-center h-full '>

                        {/* <ul className=' border max-w-full sm:max-w-full	 md:max-w-full lg:max-w-7xl '> */}

                        <ul className='w-[100%] lg:w-[75%]  '>

                            {data.map((file, index) => (
                                <li className=' transition duration-400 flex justify-between mb-4  w-full  items-center  gap-x-4 gap-y-2 px-4 py-2 rounded hover:shadow-md' key={index}>
                                    <p className="text-md leading-6 text-gray-900">
                                        <strong style={{ color: "var(--blue)" }} className="font-semibold">{file.date} - </strong>

                                        {file.description}
                                    </p>

                                    <button
                                        type='button'
                                        className=" bg-orange flex-none  rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                        onClick={() => handleDelete(file.id)} // Pass news ID to handleDelete function
                                    >
                                        Delete <span aria-hidden="true">&rarr;</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    )
}