import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
    title: "TEENS",
    description: `6 Hours of Teenager Drivers Training`,
  },
  {
    icon: "user",
    title: "ADULTS",
    description: `2 Hours Minimum for Adults Per Day`,
  },
  {
    icon: "universal-access",
    title: "SENIORS",
    description: `1 Hour Minimum for Seniors "Behind-The-Wheel Refresher"`,
  },
  //{
    //icon: "car",
    //title: "CAR RENTAL",
    //description: `Car Rental for DMV "Behind-The-Wheel" Test at DMV`,
  //},
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
        <title>eStop Driving School</title>
        <meta name="description" content="Teaching Driving to Teenagers, Adults, and Seniors Since 1983" />
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
                href="tel:"
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
          <h1 className="text-2xl text-center py-4 font-bold">About eStop Driving School Of Novato, CA 94945 &ndash; Located in Marin County!</h1>
          <div className="grid sm:grid-cols-1  md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <Image
                src="/tony-good-morning.jpg"
                alt="eStopDrivingSchool Logo"
                width={400}
                height={400}
              />
            </div>
            <div className="p-4">
              <p className="font-bold leading-relaxed mb-4"> 
              <p className="mb-2">
                Welcome to eStop Driving School. I am Tony(Teshome), the founder and owner of eStop Driving School
                (previously known as Nile Driving School). I have been teaching behind-the-wheel driving since 1983.
              </p>
              </p> 
              <p className="mb-2"> I have trained more than 5,000 teenagers, adults, and seniors (of course, they are of legal driving age and status). 
                Basic training and services are at a flat rate of $95/Hour If you need any additional services, please do not hesitate to contact us for more details.
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
                <a href="tel:415-897-7002" target="_blank" rel="noopener noreferrer">
                <b>CALLL US</b></a> OR <a href="tel:415-897-7002" target="_blank" rel="noopener noreferrer">
                <b>TEXT US</b></a> AT 415-897-7002.
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
            TO SCHEDULE YOUR DRIVING TRAINING SESSIONS <a
                href="tel:415-897-7002"
                target="_blank"
                rel="noopener noreferrer"
              >CALL ME</a> OR <a
                href="tel:415-897-7002"
                target="_blank"
                rel="noopener noreferrer"
                > TEXT ME</a> TODAY!
            </p>
          </div>
        </div>
        <div id="training_and_services" className="bg-gray-100">
          <div className="container mx-auto py-3">
            <h2 className="text-2xl text-center py-3 font-bold">
              TRAINING &amp; SERVICES
            </h2>
            <p className="text-center mx-1">
               Basic Training And Services Are A $95/Hour Flat Rate. If You Happen To Need
               Any Additional Services, Please Do Not Hesitate To Contact Us For More Details.
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
              If You Have Any Questions, Feel Free To Call Me Anytime At<a href="tel:415-897-7002" target="_blank" rel="noopener noreferrer">415-897-7002</a>.
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
                <p><b>ADDRESS:</b> <a href="https://maps.app.goo.gl/iuwCYbJZx8y8CMtr7" target="_blank" rel="noopener noreferrer">Suite N, 7075 Redwood Blvd, Novato, CA 94945</a></p>
                <p><a href="tel:415-897-7002" target="_blank" rel="noopener noreferrer"><b>CALL ME:</b> 415-897-7002</a>415-897-7002</p>
                <p className="mb-4">
                   <a href="tel:415-897-7002" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                  <b>TEXT ME:</b> 
                  </a>
                </p>
                <p>
                  Licensed Instructor No. 2055001, 
                  Please <a href="tel:415-897-7002" target="_blank" rel="noopener noreferrer">Call Us</a> Or <a href="tel:415-897-7002" target="_blank" rel="noopener noreferrer">Text Us</a> At <a href="tel:415-897-7002" target="_blank" rel="noopener noreferrer">415-897-7002</a> In Advance To Scheduled A Personal Appointment.
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
      </main>
      <footer className="bg-gray-900 text-gray-400 py-4 text-sm">
        <div className="container m-auto text-center">
          Copyright @2024{" "} &nbsp; | &nbsp;
          <a
            className="text-gray-400"
            href="http://estopdrivingschool.com/"
            title="eStopDrivingSchool"
          >
           &nbsp; eSTOPDRIVINGSCHOOL &nbsp; | &nbsp;
          </a>{" "}
          <a
            className="text-gray-400"
            href="tel:415-897-7002"
            title="eStopDrivingSchool Phone Number 415-897-7002 "
          >
            CALL/TEXT: 415-897-7002 &nbsp;| &nbsp;
          </a>
          <a
            href="https://www.facebook.com/estopdrivingschool/"
            className="text-gray-400"
            title="Facebook eStopDrivingSchool"
          >
          FACEBOOK &nbsp;| &nbsp;
          </a>
           <a
            href="https://lisagorewitdecker.com"
            className="text-gray-400"
            title="Web Developer of eStopDrivingSchool"
          >
          SITE WEB DEV LISA GOREWIT-DECKER
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
