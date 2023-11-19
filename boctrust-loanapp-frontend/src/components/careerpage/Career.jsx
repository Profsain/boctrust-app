import { useState, useEffect } from "react";
import jobs from "../../mockdatabase/jobs.json";
// animation library
import AOS from "aos";
import "aos/dist/aos.css";
// redux library operations
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsSuccess } from "../../redux/reducers/fetchJobs";
import { Tabs, Tab, Row } from "react-bootstrap";
import Header from "../shared/Header";
import Headline from "../shared/Headline";
import TopCard from "../shared/TopCard";
import "./Career.css";
import SearchBox from "../shared/SearchBox";
import VacancyCard from "./VacancyCard";
import BoxModel from "./BoxModel";

const Career = () => {
  const [key, setKey] = useState("joinus");

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  // redux dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobsSuccess(jobs));
  }, []);

  // redux state
  const jobsData = useSelector((state) => state.fetchJobs.jobs);

  const [vacancies, setVacancies] = useState([]);
  useEffect(() => {
    setVacancies(jobsData.jobs);
  }, [jobsData]);

  // search function
  const handleJobSearch = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = jobsData.jobs.filter((job) => {
        return job.jobtitle.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setVacancies(results);
    } else {
      setVacancies(jobsData.jobs);
    }
  };

  // open box model
  const [modalShow, setModalShow] = useState(false);
  const [singleVacancy, setSingleVacancy] = useState({});

  // filter single vacancy using id
  const getVacancy = (id) => {
    const singleJob = vacancies.filter((vacancy) => vacancy.id === id);
    setSingleVacancy(singleJob[0]);
  };

  const openModal = (e) => {
    const jobId = parseInt(e.target.id);
    getVacancy(jobId);
    setModalShow(true);
  };

  return (
    <>
      <Header imgurl="images/boccareer.jpg" />
      <div className="container-fluid">
        <div className="container TopContainer">
          <Headline spacer="48px 0" text="Welcome to BoctrustMFB Careers" />
          <TopCard
            size="1.2rem"
            padding="0 2rem"
            lineHeight="38px"
            text="Our success is our people. We are very proud of the people who work for us. They are talented, committed and resourceful. We are apt to discover more people, equally good and with the same desire for quality and pride in what they do.With continuous training and development programs, exquisite professional courses from best hands within and outside the country, we are out to maintain our standard of excellence service delivery to both our external and internal customers."
          />

          {/* Career Tabs section */}
          <div className="TabContainer">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
              fill
            >
              <Tab eventKey="joinus" title="Why Join Us">
                <div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12 p-4">
                      <Headline
                        align="left"
                        fontSize="16px"
                        spacer="0 0 16px 0"
                        text="Join Us at Boctrust Microfinance Bank and Transform Lives!"
                        data-aos="fade-up"
                      />

                      <p data-aos="fade-up">
                        Are you passionate about making a positive impact in the
                        world? Do you want to be part of a team that empowers
                        individuals, uplifts communities, and creates
                        opportunities for financial growth? Look no further than
                        Boctrust Microfinance Bank – the leading institution in
                        microfinance and social impact.
                      </p>
                      <Headline
                        align="left"
                        fontSize="16px"
                        spacer="0 0 16px 0"
                        text="Here are compelling reasons why you should join us:"
                      />
                      <hr />
                      <div data-aos="fade-up">
                        <Headline
                          align="left"
                          fontSize="16px"
                          spacer="0 0 16px 0"
                          text="1. Social Impact:"
                        />
                        <p>
                          At Boctrust Microfinance Bank, we believe in the power
                          of financial inclusion to transform lives. By joining
                          our team, you become an agent of change, helping to
                          provide financial services to the unbanked and
                          underserved communities. With our innovative
                          microfinance products, you will contribute directly to
                          poverty alleviation, economic empowerment, and social
                          progress.
                        </p>
                        <img
                          className="ImgCard"
                          src="images/bocstruststaff4.jpg"
                          alt="boctrust social impact"
                        />
                      </div>

                      <div data-aos="fade-up">
                        <Headline
                          align="left"
                          fontSize="16px"
                          spacer="24px 0 16px 0"
                          text="2. Professional Growth:"
                        />
                        <p>
                          We are committed to nurturing talent and fostering
                          professional development. When you join us, you gain
                          access to a dynamic and supportive work environment
                          that encourages creativity, collaboration, and
                          continuous learning. Whether you are starting your
                          career or seeking new challenges, Boctrust
                          Microfinance Bank offers ample opportunities for
                          growth, skill enhancement, and advancement.
                        </p>
                        <img
                          className="ImgCard"
                          src="images/social.avif"
                          alt="boctrust staff growth"
                        />
                      </div>

                      <div data-aos="fade-up">
                        <Headline
                          align="left"
                          fontSize="16px"
                          spacer="24px 0 16px 0"
                          text="3. Entrepreneurial Spirit:"
                        />
                        <p>
                          Are you an aspiring entrepreneur? At Boctrust
                          Microfinance Bank, we foster an entrepreneurial spirit
                          among our employees. We value your innovative ideas
                          and encourage you to take initiative, think outside
                          the box, and implement solutions that have a real
                          impact. Join us, and you&apos;ll have the chance to
                          bring your entrepreneurial dreams to life while making
                          a difference in the lives of our clients.
                        </p>
                        <img
                          className="ImgCard"
                          src="images/staff1.avif"
                          alt="boctrust teamwork"
                        />
                      </div>

                      <div data-aos="fade-up">
                        <Headline
                          align="left"
                          fontSize="16px"
                          spacer="24px 0 16px 0"
                          text="4. Team Culture:"
                        />
                        <p>
                          We believe in the power of teamwork and collaboration.
                          At Boctrust Microfinance Bank, you&apos;ll be
                          surrounded by like-minded individuals who are
                          passionate about our mission. Our team members come
                          from diverse backgrounds, bringing a wealth of
                          experiences and perspectives to the table. Together,
                          we create a supportive and inclusive environment where
                          everyone&apos;s voice is heard and valued.
                        </p>
                      </div>
                    </div>

                    {/* why join us right section */}
                    <div className="col-md-6 col-sm-12 p-4">
                      <div data-aos="fade-up">
                        <Headline
                          align="left"
                          fontSize="16px"
                          spacer="24px 0 16px 0"
                          text="5. Technology-driven Innovation:"
                        />
                        <p>
                          As a forward-thinking microfinance bank, we leverage
                          cutting-edge technology to enhance our operations and
                          deliver exceptional services to our clients. By
                          joining us, you&apos;ll have the opportunity to work
                          with state-of-the-art tools and systems, enabling you
                          to stay ahead in the ever-evolving digital landscape.
                          Be part of the innovation journey at Boctrust
                          Microfinance Bank and shape the future of financial
                          services.
                        </p>
                        <img
                          className="ImgCard"
                          src="images/bocstrusonline.avif"
                          alt="boctrust technology"
                        />
                      </div>

                      <div data-aos="fade-up">
                        <Headline
                          align="left"
                          fontSize="16px"
                          spacer="24px 0 16px 0"
                          text="6. Competitive Compensation and Benefit:"
                        />
                        <p>
                          We recognize the value of our employees and reward
                          their hard work accordingly. Boctrust Microfinance
                          Bank offers a competitive compensation package that
                          includes a market-leading salary, performance-based
                          incentives, health insurance, retirement plans, and
                          more. Your dedication and contribution to our mission
                          will be recognized and appropriately rewarded.
                        </p>
                       
                      </div>

                      <div data-aos="fade-up">
                        <Headline
                          align="left"
                          fontSize="16px"
                          spacer="24px 0 16px 0"
                          text="7. Ethical and Responsible Practice:"
                        />
                        <p>
                          At Boctrust Microfinance Bank, integrity and ethical
                          practices are at the core of everything we do. We
                          adhere to the highest standards of corporate
                          governance, ensuring transparency, fairness, and
                          accountability. By joining us, you become part of an
                          organization that upholds strong ethical values and
                          contributes positively to society.
                        </p>
                      </div>
                      <div data-aos="fade-up">
                        <p>
                          Join us at Boctrust Microfinance Bank, and together,
                          we can make a lasting impact on individuals, families,
                          and communities. Your skills, passion, and dedication
                          will be the driving force behind our mission to create
                          a world where financial opportunities are accessible
                          to all.{" "}
                        </p>
                        <Headline
                          align="left"
                          fontSize="16px"
                          spacer="24px 0 16px 0"
                          text="Apply now and join our journey of social and economic transformation!"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="onboard" title="New Staff Orientation">
                <div className="container p-5">
                  <Headline
                    align="left"
                    fontSize="16px"
                    spacer="0 0 16px 0"
                    text="Welcome to Boctrust Microfinance Bank!"
                    data-aos="fade-up"
                  />
                  <p>
                    We are thrilled to have you join our team and embark on a
                    journey of growth and impact. This staff onboarding
                    orientation guide is designed to help you get acquainted
                    with our organization, culture, and values. Let&apos;s dive
                    in:
                  </p>
                </div>

                <div className="px-5 Orientation">
                  <ol>
                    <li>
                      Introduction to Boctrust Microfinance Bank:
                      <ul>
                        <li>
                          Learn about our mission, vision, and core values.
                        </li>
                        <li>
                          Familiarize yourself with our organizational structure
                          and key departments.
                        </li>
                        <li>
                          Gain an understanding of our products and services.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Company Policies and Procedures:
                      <ul>
                        <li>
                          Review our employee handbook to become familiar with
                          our policies and procedures.
                        </li>
                        <li>
                          Understand our code of conduct and professional
                          standards.
                        </li>
                        <li>
                          Learn about important HR policies, including leave
                          management, attendance, and benefits.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Technology and Systems:
                      <ul>
                        <li>
                          Get access to the necessary computer systems,
                          software, and tools required for your role.
                        </li>
                        <li>
                          Attend training sessions to learn how to effectively
                          use our technology platforms.
                        </li>
                        <li>
                          Understand cybersecurity protocols and data protection
                          measures.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Team Introduction:
                      <ul>
                        <li>Meet your team members and colleagues.</li>
                        <li>
                          Learn about their roles, responsibilities, and areas
                          of expertise.
                        </li>
                        <li>
                          Schedule one-on-one meetings to establish connections
                          and foster collaboration.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Training and Development:
                      <ul>
                        <li>
                          Identify training needs specific to your role and
                          discuss them with your manager.
                        </li>
                        <li>
                          Explore opportunities for professional growth, such as
                          attending workshops or conferences.
                        </li>
                        <li>
                          Take advantage of our internal resources, knowledge
                          sharing platforms, and mentoring programs.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Company Culture and Values:
                      <ul>
                        <li>
                          Immerse yourself in our company culture and understand
                          the behaviors that align with our values.
                        </li>
                        <li>
                          Participate in team-building activities and social
                          events to build relationships and camaraderie.
                        </li>
                        <li>
                          Contribute to creating a positive and inclusive work
                          environment.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Health, Safety, and Well-being:
                      <ul>
                        <li>
                          Familiarize yourself with our health and safety
                          policies and emergency procedures.
                        </li>
                        <li>
                          Access resources for physical and mental well-being,
                          such as employee assistance programs.
                        </li>
                        <li>
                          Understand our flexible working arrangements and
                          wellness initiatives.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Communication Channels:
                      <ul>
                        <li>
                          Learn about our internal communication channels and
                          tools.
                        </li>
                        <li>
                          Understand how to effectively communicate with your
                          team and other departments.
                        </li>
                        <li>
                          Stay informed about company updates and announcements
                          through official channels.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Performance Expectations and Feedback:
                      <ul>
                        <li>
                          Discuss performance expectations and key performance
                          indicators (KPIs) with your manager.
                        </li>
                        <li>
                          Seek regular feedback and guidance to continuously
                          improve and excel in your role.
                        </li>
                        <li>
                          Understand the performance evaluation process and
                          timelines.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Support and Resources:
                      <ul>
                        <li>
                          Identify key contacts for any questions or concerns
                          you may have.
                        </li>
                        <li>
                          Utilize HR and administrative support for any
                          employment-related inquiries.
                        </li>
                        <li>
                          Access training materials, manuals, and resources to
                          enhance your knowledge and skills.
                        </li>
                      </ul>
                    </li>
                  </ol>
                  <div className="Wrap">
                    <div>
                      <img
                        src="public/images/boctruststaff1.jpg"
                        alt="boctrust staff"
                      />
                    </div>
                    <div className="Text">
                      <p>
                        Remember, this orientation guide is just the beginning.
                        As you settle into your role, don&apos;t hesitate to
                        reach out to your colleagues and managers for support
                        and guidance. We are here to help you succeed and grow.
                      </p>
                      <p>
                        Once again, welcome to Boctrust Microfinance Bank. We
                        are excited to have you on board and look forward to
                        your contributions in shaping a brighter future for our
                        clients and communities.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="vacancy" title="Vacancy">
                <div className="container ">
                  <Headline spacer="48px 0" text="Find a place with us!" />
                  <div className="SearchBox">
                    <SearchBox
                      func={handleJobSearch}
                      placeholder="Search for a job"
                      headlineTxt=""
                      marginTop="-48px"
                      width="100%"
                    />
                  </div>
                  <div className="VacancyList">
                    {vacancies?.length === 0 && (
                      <div className="NoVacancy">
                        <Headline spacer="48px 0" text="No Vacancy Available" />
                      </div>
                    )}
                    <Row xs={1} md={2} className="VacancyRow">
                      {vacancies?.map(
                        ({
                          id,
                          image,
                          jobtitle,
                          description,
                          dateposted,
                          deadline,
                        }) => (
                          <VacancyCard
                            data-aos="fade-up"
                            key={id}
                            id={id}
                            img={image}
                            title={jobtitle}
                            // shorten description to 200 characters
                            description={description.substring(0, 100) + "..."}
                            postdate={dateposted}
                            deadline={deadline}
                            func={openModal}
                          />
                        )
                      )}
                    </Row>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <BoxModel
        vacancy={singleVacancy}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Career;
