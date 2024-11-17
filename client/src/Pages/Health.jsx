import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import "./health.css";

const Health = () => {
  return (
    <div>
      <Nav />
      <div className="main">
        <div className="left">
          <h1 className="heading">Nutrition and fitness</h1>
          <p className="par">
            For women, nutrition should emphasize a balanced diet rich in
            calcium, iron, and folic acid, vital for bone health, iron levels,
            and prenatal care. Incorporating cardiovascular exercises, strength
            training, and flexibility activities boosts heart health, muscle
            strength, and overall fitness. Particularly post-pregnancy or during
            menopause, pelvic floor exercises and mindful recovery periods are
            crucial for women's health.
          </p>
          <div className="las">
            <div className="gets">Get started</div>
            <div className="learnm">Learn More</div>
          </div>
        </div>
        <img className="image" src={image1} alt="" />
      </div>
      <div className="w-[full] h-[0px] border border-black "></div>
      <div className="main">
        <div className="left">
          <h1 className="heading">Mental Wellness</h1>
          <p className="par">
            Mental wellness entails maintaining a state of emotional balance and
            resilience, fostering positive mental health. It involves
            cultivating self-awareness, managing stress effectively, and
            developing coping strategies for life's challenges. Practices like
            mindfulness, meditation, and regular exercise contribute to mental
            clarity and emotional stability.
          </p>
          <div className="las">
            <div className="gets">Get started</div>
            <div className="learnm">Learn More</div>
          </div>
        </div>
        <img className="image" src={image2} alt="" />
      </div>
      <div className="w-[full] h-[0px] border border-black "></div>
      <div className="main">
        <div className="left">
          <h1 className="heading">Menstrual Health</h1>
          <p className="par">
            Menstrual health encompasses the physical, emotional, and social
            well-being during the menstrual cycle. It involves understanding and
            managing menstrual symptoms, such as cramps, fatigue, and mood
            changes, with self-care practices and medical interventions if
            necessary. Access to menstrual products and education is essential
            for hygiene and dignity.
          </p>
          <div className="las">
            <div className="gets">Get started</div>
            <div className="learnm">Learn More</div>
          </div>
        </div>
        <img className="image" src={image3} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Health;
