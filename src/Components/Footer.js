import {  EnvelopeOpenIcon,  InformationCircleIcon, MapIcon, PhoneArrowDownLeftIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function Footer() {
    return ( 
        <div className="relative bg-blue  overflow-hidden  pb-8 sm:pb-18 lg:pb-22 pt-8 sm:pt-18 lg:pt-22"  >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">ABOUT <span style={{ color: "var(--orange)" }}>US</span> </h2>
                        <p className="mt-2 leading-7 text-justify text-white">
                            Guru Nanak Khalsa Sr. Secondary School is co-educational, Govt. aided institute of a rich reputation. School was established on the auspicious day of Baisakhi 13th April, 1965 and successfully completed 50 years.
                        </p>
                        
                        <div className="grid grid-cols-4 gap-x-0 w-50 mt-4">
                            <Link to="https://www.facebook.com/profile.php?id=100095540462840&mibextid=ZbWKwL"><i className="fa fa-facebook text-white hover:text-orange " style={{fontSize:"25px"}}></i></Link>
                            <Link to=""><i className="fa fa-instagram text-white hover:text-orange" style={{fontSize:"25px"}}></i></Link>
                            <Link to="https://www.youtube.com/@GurunanakKhalsa"><i className="fa fa-youtube text-white hover:text-orange" style={{fontSize:"25px"}}></i></Link>
                            <Link to="https://twitter.com/GNKSSS30b"><i className="fa fa-twitter text-white hover:text-orange" style={{fontSize:"25px"}}></i></Link>
                        </div>
                        
                    </div>

                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <MapIcon className="h-6 w-6 text-white" aria-hidden="true" style={{ color: "var(--orange)" }} />
                            </div>
                            <dt className="mt-4 font-semibold text-white">ADDRESS</dt>
                            <dd className="m-0 leading-7 text-white">
                                Guru Nanak Khalsa Sr. Secondary School (Affiliated with C.B.S.E. - Affiliation No. 2630003) (Permanently Recognized by U.T. Chandigarh) Sector 30-B, Chandigarh - 160 030.              </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <PhoneArrowDownLeftIcon className="h-6 w-6 text-white" aria-hidden="true" style={{ color: "var(--orange)" }} />
                            </div>
                            <dt className="mt-4 font-semibold text-white">CONTACT US</dt>
                            <dd className="m-0  leading-7 text-white"><EnvelopeOpenIcon className="inline-block h-5 w-5 " aria-hidden="true" /> gurunanak_30b@rediffmail.com</dd>

                            <dd className="m-0 leading-7 text-white"> <PhoneIcon className="inline-block h-5 w-5 " aria-hidden="true" />   +91-172-2654693, 5030579</dd>

                            <dd className="m-0 leading-7 text-white"><InformationCircleIcon className="inline-block h-5 w-5 " aria-hidden="true"  />  www.gnkschool.info</dd>

                            <dd className="m-0 leading-7 text-white">  For any grievance : greivance.gnkhs30b@gmail.com</dd>

                            <dd className="m-0 leading-7 text-white">  Contact: +91-6284623516             </dd>
                        </div>

                    </dl>
                </div>
            </div>
            <div>
                <p className='text-white text-center mt-2 mb-0'>© 2024. All Rights Reserved | Design by <span style={{ color: "var(--orange)" }}>Skyway Technologies</span> </p>
            </div>
        </div>
    )

}