import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";
import Image1 from "../assets/illustration8.png";
import "./job.css";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { createjobRoute, getjobRoute } from "../utils/APIRoutes";
import axios from "axios";
// Dummy data
const jobsData = [
  {
    title: "Software Engineer",
    department: "Engineering",
    description: "Develops software applications using modern technologies.",
    location: "San Francisco, CA",
    contractType: "Full-time",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    description:
      "Leads marketing campaigns and strategies to promote products.",
    location: "New York, NY",
    contractType: "Contract",
  },
  {
    title: "Customer Service Representative",
    department: "Customer Support",
    description: "Assists customers with inquiries and resolves issues.",
    location: "Chicago, IL",
    contractType: "Part-time",
  },
  {
    title: "Financial Analyst",
    department: "Finance",
    description:
      "Analyzes financial data to provide insights and recommendations.",
    location: "Los Angeles, CA",
    contractType: "Full-time",
  },
  {
    title: "Graphic Designer",
    department: "Design",
    description:
      "Creates visually appealing graphics and designs for various projects.",
    location: "Austin, TX",
    contractType: "Freelance",
  },
  {
    title: "HR Coordinator",
    department: "Human Resources",
    description:
      "Supports HR functions such as recruitment and employee relations.",
    location: "Seattle, WA",
    contractType: "Full-time",
  },
  {
    title: "Sales Associate",
    department: "Sales",
    description:
      "Handles sales inquiries and assists customers with product selection.",
    location: "Miami, FL",
    contractType: "Commission-based",
  },
  {
    title: "Project Manager",
    department: "Project Management",
    description:
      "Plans, organizes, and oversees project execution and delivery.",
    location: "Denver, CO",
    contractType: "Contract",
  },
  {
    title: "Content Writer",
    department: "Content Creation",
    description:
      "Writes engaging content for websites, blogs, and social media.",
    location: "Portland, OR",
    contractType: "Part-time",
  },
  {
    title: "Data Scientist",
    department: "Data Science",
    description:
      "Utilizes data analysis techniques to extract insights and make data-driven decisions.",
    location: "Boston, MA",
    contractType: "Full-time",
  },
  {
    title: "UX/UI Designer",
    department: "UX/UI Design",
    description:
      "Designs user interfaces and user experiences for digital products.",
    location: "Atlanta, GA",
    contractType: "Full-time",
  },
  {
    title: "Operations Manager",
    department: "Operations",
    description:
      "Manages day-to-day operations and ensures efficiency and productivity.",
    location: "Dallas, TX",
    contractType: "Full-time",
  },
  {
    title: "Healthcare Specialist",
    department: "Healthcare",
    description: "Provides healthcare services and support to patients.",
    location: "Houston, TX",
    contractType: "Part-time",
  },
  {
    title: "IT Support Technician",
    department: "Information Technology",
    description: "Provides technical support and assistance to end-users.",
    location: "Philadelphia, PA",
    contractType: "Full-time",
  },
  {
    title: "Legal Counsel",
    department: "Legal",
    description: "Provides legal advice and support to the organization.",
    location: "Washington, D.C.",
    contractType: "Full-time",
  },
];

const Jobs = () => {
  const [showAd, setshowAd] = useState(false);
  const [Job, SetJob] = useState([
    {
      title: "Software Engineer",
      department: "Engineering",
      description: "Develops software applications using modern technologies.",
      location: "San Francisco, CA",
      contractType: "Full-time",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      description:
        "Leads marketing campaigns and strategies to promote products.",
      location: "New York, NY",
      contractType: "Contract",
    },
    {
      title: "Customer Service Representative",
      department: "Customer Support",
      description: "Assists customers with inquiries and resolves issues.",
      location: "Chicago, IL",
      contractType: "Part-time",
    },
    {
      title: "Financial Analyst",
      department: "Finance",
      description:
        "Analyzes financial data to provide insights and recommendations.",
      location: "Los Angeles, CA",
      contractType: "Full-time",
    },
    {
      title: "Graphic Designer",
      department: "Design",
      description:
        "Creates visually appealing graphics and designs for various projects.",
      location: "Austin, TX",
      contractType: "Freelance",
    },
    {
      title: "HR Coordinator",
      department: "Human Resources",
      description:
        "Supports HR functions such as recruitment and employee relations.",
      location: "Seattle, WA",
      contractType: "Full-time",
    },
    {
      title: "Sales Associate",
      department: "Sales",
      description:
        "Handles sales inquiries and assists customers with product selection.",
      location: "Miami, FL",
      contractType: "Commission-based",
    },
    {
      title: "Project Manager",
      department: "Project Management",
      description:
        "Plans, organizes, and oversees project execution and delivery.",
      location: "Denver, CO",
      contractType: "Contract",
    },
    {
      title: "Content Writer",
      department: "Content Creation",
      description:
        "Writes engaging content for websites, blogs, and social media.",
      location: "Portland, OR",
      contractType: "Part-time",
    },
    {
      title: "Data Scientist",
      department: "Data Science",
      description:
        "Utilizes data analysis techniques to extract insights and make data-driven decisions.",
      location: "Boston, MA",
      contractType: "Full-time",
    },
    {
      title: "UX/UI Designer",
      department: "UX/UI Design",
      description:
        "Designs user interfaces and user experiences for digital products.",
      location: "Atlanta, GA",
      contractType: "Full-time",
    },
    {
      title: "Operations Manager",
      department: "Operations",
      description:
        "Manages day-to-day operations and ensures efficiency and productivity.",
      location: "Dallas, TX",
      contractType: "Full-time",
    },
    {
      title: "Healthcare Specialist",
      department: "Healthcare",
      description: "Provides healthcare services and support to patients.",
      location: "Houston, TX",
      contractType: "Part-time",
    },
    {
      title: "IT Support Technician",
      department: "Information Technology",
      description: "Provides technical support and assistance to end-users.",
      location: "Philadelphia, PA",
      contractType: "Full-time",
    },
    {
      title: "Legal Counsel",
      department: "Legal",
      description: "Provides legal advice and support to the organization.",
      location: "Washington, D.C.",
      contractType: "Full-time",
    },
  ]);
  const user = useRecoilValue(userAtom);
  const handleAdClick = () => {
    console.log("click");
    setshowAd(true);
  };
  const [values, setValues] = useState({
    title: "",
    department: "",
    description: "",
    location: "",
    contract_duration: "",
    mail: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {
        title,
        department,
        description,
        location,
        contract_duration,
        mail,
      } = values;
      console.log(values);
      console.log(user._id);
      const res = await axios.post(createjobRoute, {
        postedBy: user._id,
        ...values,
      });
      const data = await res.data;
      if (data.error) {
        console.error(data.error);
        return;
      }
      console.log("Success:", data);

      // data is here you just now have to sow it in UI
      setshowAd(false);
    } catch (er) {
      console.log(er);
    }
  };
  useEffect(() => {
    const getJob = async () => {
      console.log("hey from job");
      const res = await axios.get(getjobRoute);
      const data = await res.data;
      if (data.error) {
        console.error(data.error);
        return;
      }
      console.log("Success:", data);
      SetJob((prevJob) => [...prevJob, ...data]);
    };
    getJob();
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <Nav />
      {showAd && (
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="cardd">
            <div className="cardin">
              <h1 className="title">Title</h1>
              <input
                type="text"
                placeholder="title"
                name="title"
                onChange={(e) => handleChange(e)}
                min="3"
              />
            </div>
            <div className="cardin">
              <h1 className="title">Department</h1>
              <input
                type="text"
                placeholder="Marketing"
                name="department"
                onChange={(e) => handleChange(e)}
                min="3"
              />
            </div>
            <div className="cardin">
              <h1 className="title">Description</h1>
              <input
                type="text"
                placeholder="Description"
                name="description"
                onChange={(e) => handleChange(e)}
                min="3"
              />
            </div>
            <div className="cardin">
              <h1 className="title">Location</h1>
              <input
                type="text"
                placeholder="Location"
                name="location"
                onChange={(e) => handleChange(e)}
                min="3"
              />
            </div>
            <div className="cardin">
              <h1 className="title">Contact Duration</h1>
              <input
                type="text"
                placeholder="Contact Duration"
                name="contract_duration"
                onChange={(e) => handleChange(e)}
                min="3"
              />
            </div>
            <div className="cardin">
              <h1 className="title">Mail</h1>
              <input
                type="text"
                placeholder="Mail"
                name="mail"
                onChange={(e) => handleChange(e)}
                min="3"
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
      <div className="content pt-20">
        <div className="data">
          <h1 className="text">Open Opportunities</h1>
          <p className="text2">
            Here are the various job opportunities for women
          </p>
          <button onClick={handleAdClick}>Add Job</button>
        </div>
        <img src={Image1} alt="" />
      </div>

      <div className="ml-6">
        {Job.slice()
          .reverse()
          .map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
