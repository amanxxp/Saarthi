import React from "react";
import Image1 from "../assets/illustration1.png";
import Image2 from "../assets/illustration2.png";
import Image3 from "../assets/illustration3.png";
import Image4 from "../assets/illustration4.jpg";
import Image5 from "../assets/illustration5.png";
import Image6 from "../assets/illustration6.png";
import Image7 from "../assets/illustration7.png";

const Content = () => {
  return (
    <>
      {" "}
      <div className=" flex justify-center items-center">
        {/*frame 1 */}
        <div className="w-[1440px] h-[700px] justify-center items-center gap-[114px] inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="w-[561px] text-black text-5xl font-bold font-['Inter']">
              Empowering Women Through Support and Resources
            </div>
            <div className="w-[514px] h-[207px] text-black text-xl font-normal font-['Inter']">
              Welcome to our website, dedicated to providing assistance and
              guidance for women in need. Whether you're looking for job
              opportunities, government schemes, health awareness, or a
              supportive community, we've got you covered.
            </div>
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-[150px] h-[51px] relative">
                <div className="w-[150px] h-[51px] left-0 top-0 absolute bg-black" />
                <div className="left-[19px] top-[12px] absolute text-center text-white text-xl font-normal font-['Inter']">
                  Get started
                </div>
              </div>
              <div className="w-[149px] h-[51px] relative">
                <div className="w-[149px] h-[51px] left-0 top-0 absolute bg-white shadow border border-black" />
                <div className="left-[20px] top-[12px] absolute text-center text-black text-xl font-normal font-['Inter']">
                  Learn More
                </div>
              </div>
            </div>
          </div>
          <img className="w-[558px] h-[529px]" src={Image1} />
        </div>
      </div>
      {/*Frame 2 */}
      <div className=" flex justify-center items-center">
        <div className="w-[1440px] h-[768px] justify-start items-center inline-flex">
          <div className="h-[529px] pl-[75px] pr-[137px] justify-start items-center gap-[131px] flex">
            <img className="w-[558px] h-[529px]" src={Image2} />
            <div className="w-[566px] h-[396px] py-5 flex-col justify-center items-start gap-[35px] inline-flex">
              <div className="self-stretch text-black text-5xl font-extrabold font-['Inter']">
                Find Your Dream Job with Ease
              </div>
              <div className="w-[566px] text-black text-xl font-medium font-['Inter']">
                Discover job opportunities that match your skills and interests.
                Join thousands of successful job seekers who found their dream
                jobs through our platform.
              </div>
              <div className="justify-start items-center gap-3.5 inline-flex">
                <div className="w-[149px] h-[51px] relative">
                  <div className="w-[149px] h-[51px] left-0 top-0 absolute bg-white shadow border border-black" />
                  <div className="left-[20px] top-[12px] absolute text-center text-black text-xl font-normal font-['Inter']">
                    Learn More
                  </div>
                </div>
                <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-[9px] inline-flex">
                    <div className="text-center text-black text-2xl font-normal font-['Inter']">
                      {" "}
                      Sign Up Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Frame 3 */}
      <div className=" flex justify-center items-center">
        <div className="w-[1440px] h-[768px] justify-start items-center inline-flex">
          <div className="w-[882px] h-[534px] pl-[133px] pr-[57px] py-5 flex-col justify-start items-start gap-[35px] inline-flex">
            <div className="self-stretch text-black text-5xl font-extrabold font-['Inter']">
              Discover the Latest Government Schemes for Women and <br />
              How to Access Them
            </div>
            <div className="w-[566px] text-black text-xl font-medium font-['Inter']">
              Explore a wide range of government schemes designed to empower
              women. Learn how to easily access these programs and take
              advantage of the benefits they offer.
            </div>
            <div className="w-[566px] justify-start items-start gap-[35px] inline-flex">
              <div className="w-64">
                <span className="text-black text-5xl font-extrabold font-['Inter']">
                  50%
                  <br />
                </span>
                <span className="text-black text-2xl font-medium font-['Inter']">
                  Find the support you need to thrive and succeed
                </span>
              </div>
              <div className="grow shrink basis-0">
                <span className="text-black text-5xl font-extrabold font-['Inter']">
                  50%
                  <br />
                </span>
                <span className="text-black text-2xl font-medium font-['Inter']">
                  Find the support you need to thrive and succeed
                </span>
              </div>
            </div>
          </div>
          <img className="w-[558px] h-[558px]" src={Image3} />
        </div>
      </div>
      {/*Frame 4 */}
      <div className=" flex justify-center items-center">
        <div className="w-[1436px] h-[925px] flex-col justify-start items-start gap-[67px] inline-flex">
          <div className="w-[1436px] justify-start items-center gap-[113px] inline-flex">
            <div className="w-[680px] h-[130px] pl-[116px] pr-[58px] flex-col justify-start items-start gap-[72px] inline-flex">
              <div className="w-[602px] text-black text-5xl font-extrabold font-['Inter']">
                Fuel Your Body:
                <br />
                Nutrition Tips for Women
              </div>
            </div>
            <div className="w-[546px] flex-col justify-start items-start gap-[18px] inline-flex">
              <div className="w-[566px] text-black text-xl font-medium font-['Inter']">
                Proper nutrition is essential for women's health. Our website
                provides valuable information and resources on the importance of
                a balanced diet and healthy eating habits. From tips on managing
                weight to guidance on meeting specific nutrient needs, we cover
                it all. Discover how you can optimize your nutrition and take
                control of your well-being today.
              </div>
              <div className="w-[149px] h-[51px] relative">
                <div className="w-[149px] h-[51px] left-0 top-0 absolute bg-white shadow border border-black" />
                <div className="left-[20px] top-[12px] absolute text-center text-black text-xl font-normal font-['Inter']">
                  Learn More
                </div>
              </div>
            </div>
          </div>
          <img className="w-[1436px] h-[529px] object-cover" src={Image4} />
        </div>
      </div>
      {/*Frame 5 */}
      <div className=" flex justify-center items-center">
        <div className="w-[1438px] h-[730px] flex-col justify-start items-start gap-[67px] inline-flex">
          <div className="w-[1255px] h-[130px] px-[58px] flex-col justify-start items-start gap-[10px] flex">
            <div className="w-[1365px] text-black text-5xl font-extrabold font-['Inter']">
              Connect and Share Experiences with Our Community Features
            </div>
          </div>
          <div className="w-[1273px] px-[71px] justify-start items-start gap-[63px] inline-flex">
            <div className="justify-start items-center gap-[103px] flex">
              <div className="flex-col justify-center items-start inline-flex">
                <img className="w-[391px] h-[190px]" src={Image5} />
                <div className="w-[391px] h-[306px] py-5 flex-col justify-start items-start gap-[35px] flex">
                  <div className="self-stretch text-black text-[32px] font-extrabold font-['Inter']">
                    Join Chats, Forums, and Groups to Connect with Other Women
                  </div>
                  <div className="self-stretch">
                    <span className="text-black text-base font-medium font-['Inter']">
                      Our community features provide a platform for women to
                      connect, share experiences, and support each other
                    </span>
                    <span className="text-black text-xl font-medium font-['Inter']">
                      .
                    </span>
                  </div>
                  <div className="flex-col justify-start items-center gap-2.5 flex">
                    <div className="justify-center items-center gap-[9px] inline-flex">
                      <div className="text-center text-black text-base font-normal font-['Inter']">
                        Explore
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center items-start inline-flex">
              <img className="w-[391px] h-[190px]" src={Image6} />
              <div className="w-[391px] h-[306px] py-5 flex-col justify-start items-start gap-[35px] flex">
                <div className="self-stretch text-black text-[32px] font-extrabold font-['Inter']">
                  Find Support and Advice in Our Community Forums
                </div>
                <div className="self-stretch text-black text-base font-medium font-['Inter']">
                  Our forums are a safe space for women to seek advice, share
                  stories, and find support from others.
                </div>
                <div className="flex-col justify-start items-center gap-2.5 flex">
                  <div className="justify-center items-center gap-[9px] inline-flex">
                    <div className="text-center text-black text-base font-normal font-['Inter']">
                      Join
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center items-start inline-flex">
              <img className="w-[391px] h-[190px]" src={Image7} />
              <div className="w-[391px] h-[306px] py-5 flex-col justify-start items-start gap-[35px] flex">
                <div className="self-stretch text-black text-[32px] font-extrabold font-['Inter']">
                  Discover Groups for Women with Similar Interests and Goals
                </div>
                <div className="self-stretch text-black text-base font-medium font-['Inter']">
                  Our groups bring together women who share common interests,
                  passions, and goals, fostering connections and collaboration.
                </div>
                <div className="flex-col justify-start items-center gap-2.5 flex">
                  <div className="justify-center items-center gap-[9px] inline-flex">
                    <div className="text-center text-black text-base font-normal font-['Inter']">
                      Discover
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Frame 6 */}
      <div className=" flex justify-center items-center">
        <div className="w-[1440px] h-[254px] px-[63px] justify-start items-center gap-[195px] inline-flex">
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-black text-5xl font-extrabold font-['Inter']">
              Join our empowering women <br />
              community
            </div>
            <div className="text-black text-base font-medium font-['Inter']">
              Discover resources, support, and opportunities for women
            </div>
          </div>
          <div className="justify-start items-start gap-[18px] flex">
            <div className="w-[150px] h-[51px] relative">
              <div className="w-[150px] h-[51px] left-0 top-0 absolute bg-black" />
              <div className="left-[19px] top-[12px] absolute text-center text-white text-xl font-normal font-['Inter']">
                Get started
              </div>
            </div>
            <div className="w-[149px] h-[51px] relative">
              <div className="w-[149px] h-[51px] left-0 top-0 absolute bg-white shadow border border-black" />
              <div className="left-[20px] top-[12px] absolute text-center text-black text-xl font-normal font-['Inter']">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
