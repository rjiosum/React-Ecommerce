import {
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaYoutube,
    FaGoogle,
    FaCcVisa,
    FaCcMastercard,
    FaCcStripe,
    FaCcPaypal
} from 'react-icons/fa'
import React from "react";

export const footerLinks = [
    {title: "Customer Assistance", slug: "customer-service"},
    {title: "About Us", slug: "about-us"},
    {title: "Contact Us", slug: "contact-us"},
    {title: "Terms & Conditions", slug: "terms-and-conditions"},
    {title: "Delivery Information", slug: "delivery-information"},
    {title: "Payment Methods", slug: "payment-methods"},
    {title: "Knowledge Base", slug: "knowledge-base"},
    {title: "Site Review", slug: "site-review"},
    {title: "Policies", slug: "privacy-policy"}
]

export const aboutCompany = {
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, earum praesentium. Accusamus animi deserunt ipsum necessitatibus neque provident tempore veritatis. Ad laboriosam minus natus nisi quia quo recusandae reiciendis totam, ullam voluptatum! Error expedita harum ipsam laborum omnis. Cupiditate illum impedit ipsum magni, maxime nam nobis non odio quasi voluptatum."
}

export const openingHours = [
    {day: 'Monday - Friday', hours: '8.00 to 18.00'},
    {day: 'Saturday', hours: '9.00 to 21.00'},
    {day: 'Sunday', hours: '10.00 to 21.00'}
]

export const social = [
    {url: 'https://www.linkedin.com', icon: <FaLinkedin/>},
    {url: 'https://www.twitter.com', icon: <FaTwitter/>},
    {url: 'https://www.facebook.com', icon: <FaFacebook/>},
    {url: 'https://www.youtube.com', icon: <FaYoutube/>},
    {url: 'https://www.google.com', icon: <FaGoogle/>}
]

export const payments = [
    {icon: <FaCcVisa />},
    {icon: <FaCcMastercard />},
    {icon: <FaCcStripe />},
    {icon: <FaCcPaypal />}
]