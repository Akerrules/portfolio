import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareCaretLeft } from "@fortawesome/free-regular-svg-icons";
export default function Projects() {
  return (
    <main className=" w-full md:w-1/2   md:pl-10">
      <div className="p-4 rounded bg-stone-700 bg-blur justify-center items-center    ">
        <div className="w-full space-y-10">
          <div className="flex flex-col md:flex-row gap-10    text-white ">
            <div className="w-2/3  bg-gradient-to-r from-neutral-300/20 to-stone-400/20 backdrop-blur-lg rounded shadow-lg     ">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="rounded-lg "
                  src="/images/GameSwap.png"
                  style={{
                    width: "auto",
                    height: "atuo",
                  }}
                ></img>
                <div className=" flex felx-row p-4">
                  <div>
                    <h1 className=" text-2xl font-bold">
                      GameSwap | Honours Project
                    </h1>
                    <h1 className="hidden md:block">
                      To revolutionize the way gamers connect, share, and
                      discover new gaming experiences, encapsulating the spirit
                      of innovation and community.
                    </h1>
                  </div>
                  <div className="text-5xl ">
                    {" "}
                    <a
                      target="_blank"
                      href="https://github.com/Honours-Porject/HonoursProject"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    {/* <FontAwesomeIcon icon={faSquareCaretLeft} /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3  bg-gradient-to-r from-neutral-300/20 to-stone-400/20  backdrop-blur-lg rounded shadow-lg      ">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="rounded-lg "
                  src="/images/hello-eve.jpg"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                ></img>
                <div className="flex felx-row p-4">
                  <div>
                    <h1 className=" text-2xl text-[##FFFDD0] font-bold">
                      Hello Eve | Hackathon
                    </h1>
                    {/* "Hello Eve" is a virtual assistant for EV drivers that plans
                    trips, suggests charging stops, and recommends activities
                    like coffee breaks or scenic views based on time, season,
                    and location. Built using Node.js, Express, Google Maps API,
                    and Cohere for speech-to-text and intent detection, the
                    project integrates NLP and AI to enhance the driving
                    experience. The next step is to improve personalized advice
                    further by integrating more advanced AI features. */}
                    <h1 className="text-sm hidden md:block">
                      "Hello Eve" is a virtual assistant for EV drivers that
                      plans trips, suggests charging stops, and recommends
                      activities like coffee breaks or scenic views based on
                      time, season, and location. Built using Node.js, Express,
                      Google Maps API, and Cohere....
                    </h1>
                  </div>
                  <div className="text-5xl ">
                    {" "}
                    <a
                      target="_blank"
                      href="https://devpost.com/software/hello-eve"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    {/* <FontAwesomeIcon icon={faSquareCaretLeft} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10    text-white ">
            <div className="w-2/3  bg-gradient-to-r from-neutral-300/20 to-stone-400/20 backdrop-blur-lg rounded shadow-lg     ">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="rounded-lg "
                  src="https://github.com/Akerrules/US_AQI_Analysis/raw/main/resource/dashboard.png"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                ></img>
                <div className="class flex felx-row p-4">
                  <div>
                    <h1 className=" text-2xl font-bold">U.S Air Quality</h1>
                    {/* Air Quality Insights" is a project focused on analyzing air
                    quality data to support climate change efforts and
                    policy-making. It utilizes the Air Quality Index (AQI) to
                    assess air quality, forecast pollution, and analyze
                    geographical and seasonal trends. The project involves four
                    phases: conceptual design, where a dimensional model is
                    developed; physical design, including data staging and
                    transformation; OLAP queries and BI dashboards for data
                    visualization; and data mining to discover patterns and
                    suggest improvements for reducing pollution and supporting
                    public health policies. The US Air Quality dataset from
                    Kaggle serves as the primary data source */}
                    <h1 className="hidden md:block">
                      Air Quality Insights" is a project focused on analyzing
                      air quality data to support climate change efforts and
                      policy-making. It utilizes the Air Quality Index (AQI) to
                      assess air quality, forecast pollution, and analyze
                      geographical and seasonal trends....
                    </h1>
                  </div>
                  <div className="text-5xl ">
                    {" "}
                    <a
                      target="_blank"
                      href="https://github.com/Akerrules/US_AQI_Analysis"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    {/* <FontAwesomeIcon icon={faSquareCaretLeft} /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3       "></div>
          </div>
        </div>
      </div>
    </main>
  );
}
