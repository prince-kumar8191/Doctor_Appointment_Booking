import React from "react";
import { assets } from '../assets/assets'
const Footer = () => {

    return (
        <div className="md:mx-10">
            <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            {/* ----------left side-------- */}
            <div>
                <img className="mb-5 w-40" src={assets.logo} alt="" />
                <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos vel aperiam quam commodi recusandae 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero deleniti quibusdam illo dolor iusto consectetur itaque nostrum voluptates velit.possimus beatae nobis quod minima!</p>
            </div>


            {/* ----------center side-------- */}
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy policy</li>
                </ul>

            </div>

            {/* ----------Right side-------- */}
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>+1-238-233-755-4758</li>
                    <li>greatstackdev@gmail.com</li>
                </ul>
            </div>
            </div>

            {/* -------copyright-text--------- */}
            <div>
                <hr />
                <p className="py-5 text-sm text-center">Copyright 2024@ Prescripto - All Right Reserved</p>

            </div>
        </div>
    )
}
export default Footer;