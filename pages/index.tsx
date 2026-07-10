import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
const NavConfig = [
    {
        "name": "HOME",
        "link": "home",
    },
    {
        name: "ABOUT US",
        link: "about",
    },
    {
        name: "SCHEDULE",
        link: "schedule",
    },
    {
        name: "TRAINING & SERVICES",
        link: "training_and_services",
    },
    {
        name: "CONTACT US",
        link: "contact",
    },
];
const ServiceConfig = [
    {
        icon: "child",
        title: "TEENAGERS",
        description: `Three 2-Hour Driving Lessons For Teenagers
    (The One-Hour Rate is NOW Discounted. Teenager Package Includes Taxes & Fees, and Six Hours of Drivers Training Behind the Wheel). This Package Has Been Priced For Those Who Pay in Advance; For Teenage Driving Lessons: NOW ONLY $690!`
    },
    {
        icon: "user",
        title: "ADULTS",
        description: `Three 2-Hour Driving Lessons For Adults, Ages 18 and Up.
    (The One-Hour Rate is NOW Discounted. Adult Package Includes Taxes & Fees, and Six Hours of Drivers Training Behind the Wheel). This Package Has Been Discounted For Those Who Pay in Advance; For Adult Driving Lessons: NOW ONLY $690!`
    },
    {
        icon: "universal-access",
        title: "SENIORS",
        description: `One-Hour Driving Lesson For Seniors "Behind-The-Wheel Refresher".
    (The One-Hour Rate is NOW Discounted. Seniors "Behind-The-Wheel Refresher" Package Includes Taxes & Fees, One Hour of Behind the Wheel). This Package Has Been Discounted For Those Who Pay in Advance; For a Seniors "Behind-The-Wheel Refresher": NOW ONLY $125!`
    },
];
const Home: NextPage = () => {
    const onScrollToView = useCallback((elemId: string) => {
        const elem = document.getElementById(elemId);
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
        }
    }, 
    []);
    return (
        <div>
            <Head>
                <title>eStop Driving School, The Best Driving School of Novato in Marin County to Sonoma County, CA | Teaching Expert Driving in North Bay, South Bay — San Francisco | Instructor Has Over Four Decades of Experience</title>
                <meta name="description" content="Award Winning | Teaching Driving Teenagers, Adults, & Seniors How to Drive Marin County & Since 1983" />
                <meta name="googletagmanager" content="https://www.googletagmanager.com/gtag/js?id=GTM-52S8PDBJ"/>
                <script async
                        script-src="https://www.googleanalytics.com/gtag/js?id=GTM-52S8PDBJ">
                </script>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <main className="main">
                <div id="home" className="flex items-center justify-center py-4">
                    <Image
                        src="/logo.png"
                        alt="eStop Driving School Logo"
                        width={80}
                        height={80}
                    />
                </div>
                <div className="flex items-center justify-center py-4">
                    <ul>
                        {NavConfig.map(({ name, link }) => (
                            <li className="inline-block" key={name}>
                                <a
                                    className="text-xl px-2"
                                    href={`#${link}`}
                                    onClick={() => onScrollToView(link)}
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    className="flex items-end"
                    style={{
                        background: "url(./tony.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: 400,
                        backgroundPosition: "center",
                    }}
                >
                    <div className="container mx-auto">
                        <div className="text-2xl mb-16 p-4" style={{ maxWidth: 600 }}>
                            <div className="message" style={{ marginBottom:188, maxHeight: 250, maxWidth: 600 }}>
                                GIVE ME 6 HOURS OF YOUR TIME, AND I WILL GIVE YOU 30,000 DAYS!
                                <a className="bg-red-700 hover:bg-red-900 text-white px-4 py-2 m-2 text-xl"
                                   href="https://calendar.app.google/HMwwZEXYNCrUxCve7"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                >
                                    TRY NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="about" className="container mx-auto py-4">
                    <h1 className="text-2xl text-center py-4 font-bold">eStop Driving School, Novato, CA &ndash; Driving Lessons in Marin County & Sonoma County!</h1>
                    <div className="grid sm:grid-cols-1  md:grid-cols-2 gap-4">
                        <div className="flex items-center justify-center">
                            <div className="container">
                                <h2 className="text-center font-bold">
                                    EVERY DAY, TONY (TESHOME) IS GRATEFUL FOR ALL OF THE DAYS HE WAKES UP, AND FOR EVERY BREATH HE TAKES EVERY MINUTE OF THE DAY!</h2>
                            </div>

                            <div
                                className="container">
                                <a
                                    href="https://qualitybusinessawards.com/2024/the-best-driving-school-in-novato/nile-driving-school?_uax=NjIxMjM6OTUyNDE3MDI6ODc2NDI6NDYwNzQ2OjI1NzUyMTk1MDM6NTYxMzY1MjE"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Image
                                        src="2024-best-award.jpg"
                                        alt="Novato Best Driving Instructor Award"
                                        width={350}
                                        height={350}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="font-bold leading-relaxed mb-4">
                                <p className="mb-2">
                                    Welcome to eStop Driving School. I am Tony(Teshome), the founder and owner of eStop Driving School
                                    (previously known as Nile Driving School). I have been teaching behind-the-wheel driving since 1983.
                                </p>
                                <p className="mb-2"> I have trained more than 33,000 teenagers and over 5,000 adults and seniors during my almost four-decade career (of course, they are of legal driving age and status).
                                    Basic training and services are at a flat hourly rate of $125. If you need any additional services, please do not hesitate to contact me for more details.
                                </p>
                                <p className="mb-2">
                                    Since 1983, I have {new Date().getFullYear() - 1983} years of experience training and teaching adults,
                                    teenagers and seniors behind-the-wheel driving. All while doing what I love!
                                </p>
                                <p className="mb-2">
                                    Every day, I take great pride in and receive so much joy from what I do for a living, I love my job!
                                </p>
                                <p className="mb-2">
                                    <b> My life philosophy is...&ldquo;speak STOP fluently and flawlessly for life!&rdquo;</b>
                                </p>
                                <p className="mb-2">
                                    Please feel free to call or text Tony anytime at:
                                </p>
                                <p className="mb-2">
                                    <a href="tel:415-897-7002" rel="noopener noreferrer">
                                        415-897-7002
                                    </a>.
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex py-20"
                    style={{
                        background: "url(./driving.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="container mx-auto py-2">
                        <h2 className="text-2xl text-center py-2 font-bold text-white">
                            <a href="#schedule" className="text-2xl text-center py-2 font-bold text-white"
                               rel="noopener noreferrer"
                            >
                                SCHEDULE AN APPOINTMENT TODAY!
                            </a>
                        </h2>
                        <p className="text-center text-white mx-2">
                            TO SCHEDULE YOUR DRIVING LESSONS, <a href="tel:415-897-7002" rel="noopener noreferrer">CALL ME</a> OR <a href="tel:415-897-7002" rel="noopener noreferrer">TEXT ME</a> TODAY!
                        </p>
                    </div>
                </div>
                <div id="training_and_services" className="bg-gray-100">
                    <div className="container mx-auto py-3">
                        <h2 className="text-2xl text-center py-3 font-bold">
                            TRAINING &amp; SERVICES
                        </h2>
                        <p className="text-center mx-1">
                            <h3 className="text-xl text-center font-bold">
                                eStop Driving School Clients Receive Valet Pick-Up and Drop-Off Services Anywhere!</h3>
                            <h3 className="text-xl text-center font-bold">Tony will pick you up anywhere in Marin County, Sonoma County, East Bay, and West Bay such as San Francisco.</h3>

                            <h3 className="text-xl text-center font-bold"> No Need to Worry, You Will Safely Be Returned to The Location You Were Picked Up At. Or Even if You Need to Be Dropped Off at a Different Location Than Where You Were Picked Up!
                                <p>&nbsp;</p>
                                Basic training and services are set at an hourly rate of $125. If you happen to need additional services, please do not hesitate to call or text Tony at <a href="tel:415-897-7002" rel="noopener noreferrer">415-897-7002</a> for more details.
                                <p>&nbsp;</p>
                                <b>&bull; &bull; We Only Accept Cash!, Personal Checks, and Zelle &bull; &bull;</b>
                                <p>&nbsp;</p>
                                We Prefer to Use Zelle Due to Security and Banking Applications. However We Do Accept Personal Checks and Cash! We Are Very Excited to Announce that We Can Book All Appointment Bookings Online Through Google!
                            </h3>
                        </p>

                        <div className="py-3 grid xs:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {ServiceConfig.map(({ icon, title, description }) => (
                                <div
                                    key={title}
                                    className="p-3 flex flex-col text-center items-center"
                                    style={{ fontSize: 12 }}
                                >
                                    <FontAwesomeIcon
                                        // @ts-ignore
                                        icon={icon}
                                        className="text-red-500 m-4"
                                        style={{ width: 96, height: 96 }}
                                    />
                                    <h3 className="font-bold text-lg">{title}</h3>
                                    <p className="text-base">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                 <div id="new-services"
                         className="container mx-auto py-2">
                        <h2 className="text-2xl text-center py-3 font-bold">
                            eSTOP DRIVING SCHOOL OFFERS CALIFORNIA DMV APPROVED NEW SERVICES! 
                        </h2>
                        <div className="py-3 grid xs:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-3 flex flex-col text-center items-center">
                         <h3 className="font-bold">CA-DMV TRAFFIC SCHOOL</h3>                          
                          <p className="text-base"><a href="https://trafficschool.estopdrivingschoolonline.com/signup" rel="noopener noreferrer" target="_blank">CLICK HERE TO SIGN-UP FOR TRAFFIC SCHOOL</a></p>
                          <p className="text-base"><a href="https://trafficschool.estopdrivingschoolonline.com/login" rel="noopener noreferrer" target="_blank">CLICK HERE TO LOGIN FOR TRAFFIC SCHOOL</a></p>
                            
                    </div>
                         <div className="p-3 flex flex-col text-center items-center">
                         <h3 className="font-bold">CA-DMV 350 Q&A STUDY GUIDE</h3>                          
                          <p className="text-base"><a href="https://studyguide.estopdrivingschoolonline.com/signup" rel="noopener noreferrer" target="_blank">CLICK HERE TO BUY YOUR STUDY GUIDE</a></p>
                          <p className="text-base"><a href="https://studyguide.estopdrivingschoolonline.com/login" rel="noopener noreferrer" target="_blank">CLICK HERE TO LOGIN TO YOUR STUDY GUIDE</a></p>
                            
                    </div>
                         <div className="p-3 flex flex-col text-center items-center">
                         <h3 className="font-bold">CA-DMV DRIVERS EDUCATION</h3>                          
                          <p className="text-base"><a href="https://drivered.estopdrivingschoolonline.com/signup" rel="noopener noreferrer" target="_blank">CLICK HERE TO ENROLL IN DRIVERS ED</a></p>
                          <p className="text-base"><a href="https://drivered.estopdrivingschoolonline.com/login" rel="noopener noreferrer" target="_blank">CLICK HERE TO LOGIN TO DRIVERS ED</a></p>
                            
                    </div>
                </div>
                     </div>
                <div
                    className="fixed bottom-2 right-2"
                    onClick={() => onScrollToView("home")}
                >
                    <FontAwesomeIcon
                        icon="arrow-up"
                        className="text-red-500"
                        style={{ width: 36, height: 36 }}
                    />
                </div>
                <div
                    className="flex  */}
         py-5 
        bg-gray-200">
                    <div id="schedule"
                         className="container mx-auto py-2">
                        <h2 className="text-2xl text-center py-3 font-bold">
                            SCHEDULE AN APPOINTMENT
                        </h2>
                        <p className="text-center  mx-2">
                           Once you've selected your preferred appointment day and time, simply fill out the brief form and hit submit.</p>

                        <p className="text-center  mx-2">
                            <b>Important:</b> Keep this website tab open! A text field will pop up asking for a verification code. Check your email for a code sent by Google on behalf of eStop Driving School (if you don't see it, check your spam folder or search your email provider for 'Google').</p>

                        <p className="text-center  mx-2">
                            Enter the verification code into the pop-up text field and click submit one final time. Your appointment will be saved, and Tony will contact you ASAP to kick off your driving lessons!</p>
                        <p>&nbsp;</p>
                        <iframe
                            src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ZCzKMpxsDgy3QIYZTfsvvJUdvRk-jvBV0w8lJruHsQC7XKkoXjSkAI2Tti5absT-wnaXc05Zy"
                            className="iframe"
                            title="The Best Driving School - eStop Driving School in Marin County and Sonoma County"
                        />
                    </div>
                </div>
                <div id="contact" className="flex bg-gray-200">
                    <div className="container mx-auto py-2">
                        <h2 className="text-2xl text-center font-bold py-2">CONTACT eSTOPDRIVING SCHOOL</h2>
                        <p className="text-center  mx-2">
                            If you have any questions, feel free to call Tony anytime at: <a href="tel:415-897-7002" rel="noopener noreferrer">415-897-7002</a>
                        </p>
                        <div className="p-8 m-auto grid sm:grid-cols-1 md:grid-cols-2">
                            <div className="flex justify-end px-8">
                                <a href="https://www.yelp.com/biz/estop-driving-school-novato-2?utm_medium=biz_embedded_content&amp;utm_source=biz_badge">
                                    <img
                                        alt="eStop Driving School, Previously Nile Driving School"
                                        src="https://dyn.yelpcdn.com/extimg/en_US/fsc/aqPJ63Ipo5dYtkh9JfJYRQ.png"
                                        height={"55"}
                                        width={"125"}
                                    />
                                </a>
                            </div>
                            <div>
                                <p className="mb-2 font-bold">Tony (Teshome Kebere)</p>
                                <p><b>ADDRESS:</b> <a href="https://maps.app.goo.gl/iuwCYbJZx8y8CMtr7" rel="noopener noreferrer">Suite N, 7075 Redwood Blvd, Novato, CA 94945</a></p>
                                <p><b>CALL/TEXT:</b> <a href="tel:415-897-7002" rel="noopener noreferrer">415-897-7002</a></p>

                                <p> Licensed Instructor No. 2055001,
                                    Please call me or text me in advance at 415-897-7002 to schedule a personal appointment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="locations flex bg-gray-100">
                    <div className="container mx-auto py-2">
                        <h2>eStop Driving School Provides Driving Lessons to The Following Locations: 
                            Novato, CA; Tiburon, CA; Petaluma, CA; San Rafael, CA; Corte Madera, CA; Sausalito, CA; Sebastopol, CA; Mill Valley, CA; San Anselmo, CA; Greenbrae, CA; Kentfield, CA. 
                            If you do not see your location listed here; Please do not hesitate to contact Teshome (Tony) via text or phone.</h2>
                    </div>
                </div>
            </main>
            <footer className="flex bg-gray-900 text-white py-4 text-sm">
                <div className="container m-auto text-center">
                    <a
                        href="#"
                        title="#"
                    >
                        Copyright @2026 |
                    </a>
                    <a
                        href="https://estopdrivingschool.com/"
                        title="eStopDrivingSchool"
                    >
                        eSTOPDRIVINGSCHOOL |
                    </a>{" "}
                    <a
                        href="tel:415-897-7002"
                        title="eStopDrivingSchool Phone Number">
                        CALL/TEXT: 415-897-7002 |
                    </a>
                    <a
                        href="https://www.facebook.com/estopdrivingschool/"
                        title="Facebook eStopDrivingSchool"
                    >
                        FACEBOOK |
                    </a>
                    <a
                        href="https://www.youtube.com/@teshomekebere4491"
                        title="YouTube eStopDrivingSchool"
                    >
                        YOUTUBE |
                    </a>
                    <a
                        href="https://lisagorewitdecker.com"
                        title="Best Full-Stack Developer Free eStopDrivingSchool"
                    >
                        SITE WEB DEV LISA GOREWIT-DECKER
                    </a>
                </div>
                <Analytics />
            </footer>
        </div>
    );
};
export default Home;
