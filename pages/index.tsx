import Script from "next/script";
import React, { Component } from "react";
import CountUp, { useCountUp } from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useCallback } from "react";

const NavConfig = [
  {
    name: "HOME",
    link: "home",
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
    (The one-Hour Rate is $125 an Hour and Includes All Taxes and Fees). Total Service Cost is $750.`
  },
  {
    icon: "user",
    title: "ADULTS",
    description: `Three 2-Hour Driving Lessons For Adults, Ages 18 and Up.
    (The one-Hour Rate is $125 an Hour and Includes All Taxes and Fees). Total Service Cost is $750.`
  },
  {
    icon: "universal-access",
    title: "SENIORS",
    description: `One-Hour Driving Lesson For Seniors "Behind-The-Wheel Refresher".
    (The one-Hour Rate is $125 an Hour and Includes All Taxes and Fees). Total Service Cost is $125.`
  },
];
const Home: NextPage = () => {
  const onScrollToView = useCallback((elemId: string) => {
    const elem = document.getElementById(elemId);
    console.log("🚀 ~ file: index.tsx ~ line 54 ~ onScrollToView ~ elem", elem);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div>
      <Head>
        <title>eStop Driving School, The Best Driving School of Novato in Marin County to Sonoma County, CA | Teaching Expert Driving in North Bay, South Bay — San Francisco | Instructor Has Over Four Decades of Experience</title>
        <meta name="description" content="Award Winning | Teaching Driving Teenagers, Adults, & Seniors How to Drive Marin County & Since 1983" />
       <script async 
         src="https://www.googletagmanager.com/gtag/js?id=G-HF75XQ6F80"
         >
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
              <a className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 m-2 text-xl"
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0Vtgnt2HCrNnjTlXkJD_44kPo16Xj0ZReg9kh0aKMA_Sxnbe8a4zIVHQ3rTSBTRUPDBxq-apyw"
                target=" _blank"
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
                <h3 className="text-center">
                  <b>TESHOME (TONY/TK) IS GRATEFUL FOR 26,334 DAYS ALIVE & EVERY BREATH I TAKE EVERYDAY!</b></h3>
              </div>
               
              <div
                className="container">
              <a 
                href="https://qualitybusinessawards.com/2024/the-best-driving-school-in-novato/nile-driving-school?_uax=NjIxMjM6OTUyNDE3MDI6ODc2NDI6NDYwNzQ2OjI1NzUyMTk1MDM6NTYxMzY1MjE"
                rel="noopener noreferrer"
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
                Basic training and services are at a flat hourly rate of $115. If you need any additional services, please do not hesitate to contact me for more details.
              </p>
              <p className="mb-2">
                 Since 1983, I Have 40 Years of Experience Training and Teaching Adults,
                Teenagers and Seniors Behind-The-Wheel Driving. All While Doing What I Love!
               </p>
              <p className="mb-2">
                Every Day, I take great pride in and receive so much joy from what I do for a living!
              </p>
              <p className="mb-2">
               <b> My Life Philosophy Is...&ldquo;Speak STOP Fluently and Flawlessly For Life!&rdquo;</b>
              </p>
              <p className="mb-2">
                Please Feel Free to Contact Me Anytime By
              </p>
            <p className="mb-2">
                <a href="tel:415-897-7002" rel="noopener noreferrer">
                <b>CALL ME</b></a> OR <a href="tel:415-897-7002" rel="noopener noreferrer">
                <b>TEXT ME</b></a> AT 415-897-7002.
              </p>
              </p> 
            </div>
          </div>
        </div>
        <div
          id="schedule"
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
              SCHEDULE AN APPOINTMENT TODAY!
            </h2>
            <p className="text-center text-white mx-2">
            TO SCHEDULE YOUR DRIVING TRAINING SESSIONS <a href="tel:415-897-7002" rel="noopener noreferrer">CALL ME</a> OR <a href="tel:415-897-7002" rel="noopener noreferrer">TEXT ME</a> TODAY!
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
              My Clients Receive Valet Service!</h3>
              <h3 className="text-xl text-center font-bold"> I Will Pick You Up Anywhere in Marin County, and Or Sonoma County, East Bay and San Francisco.</h3> 
              <h3 className="text-xl text-center font-bold"> No Need to Worry, You Will Safely Be Returned to The Location You Were Picked Up At!</h3>
              <p> &nbsp;  </p>
              Basic Training and Services are at an Hourly Rate of $115. If You Happen To Need Additional Services, 
              Please Do Not Hesitate To Call Or Text Me At 415-897-7002 For More Details.
                 <p> &nbsp;  </p>
              <b>** Lastly, We No Longer Accept Cash and or Checks!**</b> 
              However, We Do Accept Direct ApplePay Payments, and Can Accept and Send Bank Transfers from Zelle Through Your Banking Apps, 
              We Are Very Excited to Announce That We Will Be Making All Appointment Bookings and Also Accepting
              Payments Through Square in The Very Near Future!
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
        <div id="contact" className="flex py-20 bg-gray-200">
          <div className="container mx-auto py-2">
            <h2 className="text-2xl text-center font-bold py-2">CONTACT eSTOPDRIVING SCHOOL</h2>
            <p className="text-center  mx-2">
              If You Have Any Questions, Feel Free To Call Me Anytime At <a href="tel:415-897-7002" rel="noopener noreferrer">415-897-7002</a>
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
                  Please Call Me Or Text Me In Advance At 415-897-7002 To or Scheduled A Personal Appointment.
                </p>  
              </div>
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
            py-20 
            bg-gray-200">
          <div 
            className="container 
            mx-auto py-2">
            <h2 className="text-2xl text-center py-3 font-bold">
              SUBSCRIBE TO RECEIVE OUR EMAIL NEWSLETTER
            </h2>
        <form 
          action="https://squareup.com/outreach/bfsXvM/subscribe" 
          method="POST"
          className="p-3 flex flex-col text-center items-center"
          >
          <input 
            type="email" 
            name="email_address" 
            placeholder="Your Email Address" 
            className="imput-square"
          />
          <input 
            type="hidden" 
            name="embed" 
            value="true"
            className="imput-square"
          />
          <button 
            type="submit" 
            className="square-button"
            >
            Join Now
          </button>
          </form>
        </div>
            </div>
        </main>
      <footer className="bg-gray-900 text-gray-400 py-4 text-sm">
         <div className="locations">
         <h2>eStop Driving School Provides Dring Lessons to The Following Locations: Novato, CA; Tiburon, CA; Petaluma, CA; San Rafael, CA; Corte Madera, CA; Sausalito, CA; Sebastopol, CA; Mill Valley, CA; San Anselmo, CA; Greenbrae CA; Kentfield, CA. If You Do Not See Your Location Listed Here; Please Do Not Hesitate to Contact Teshome (Tony or TK) Via Text or Phone.</h2> 
         </div>
        <div className="container m-auto text-center">
          Copyright @2024{" "} | 
          <a
            className="text-gray-400"
            href="http://estopdrivingschool.com/"
            title="eStopDrivingSchool"
          >
            eSTOPDRIVINGSCHOOL | 
          </a>{" "}
          <a
            className="text-gray-400"
            href="tel:415-897-7002"
            title="eStopDrivingSchool Phone Number">
            CALL/TEXT: 415-897-7002 | 
          </a>
          <a
            href="https://www.facebook.com/estopdrivingschool/"
            className="text-gray-400"
            title="Facebook eStopDrivingSchool"
          >
          FACEBOOK | 
          </a>
            <a
            href="https://www.youtube.com/@teshomekebere4491"
            className="text-gray-400"
            title="YouTube eStopDrivingSchool"
          >
          YOUTUBE | 
          </a>
           <a
            href="https://lisagorewitdecker.com"
            className="text-gray-400"
            title="Best Full-Stack Developer Free eStopDrivingSchool"
          >
          SITE WEB DEV LISA GOREWIT-DECKER
          </a>
       
        </div>

 </footer>
    </div>
  );
};
export default Home;
