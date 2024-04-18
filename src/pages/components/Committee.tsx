import "../../css/home.css"
import { motion } from "framer-motion";
function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section-bg mt-5 h-screen mt-5">
      <div className="container">
        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Present Managing Committee</h2>
          <p>The current PKS Managing Committee, led by Shri. B. Madhusudan Nair, comprises dedicated middle-aged and young members. They are actively sustaining the society's activities on a large scale. In the late 1970s, PKS had just 8 Life Members and fewer than 100 ordinary members, with fees of Rs.3/- for ordinary members and Rs.25/- for Life Members annually. Despite the Life Membership Fee now being Rs.1000/-, PKS has grown its Life Membership to 350, showcasing a commendable achievement in expanding its membership base.</p>
        </div>

        <div className='flex-row justify-center gap-4'>
        <motion.div whileHover={{ scale: 1.10 }} whileTap={{ scale: 0.8 }} >
          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper flex items-center gap-8 justify-center">
           
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="src/assets/img/committee/committee/Bmadhunair.jpg" className="testimonial-img" alt="" />
                  <h3>B Madhu Nair</h3>
                  <h4>President &amp; 9822061992</h4>
                </div>
              </div>
            

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="src/assets/img/committee/committee/vjy.jpg" className="testimonial-img" alt="" />
                  <h3>K Vijayakumar</h3>
                  <h4>Vice President &amp; 9373318875</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="src/assets/img/committee/committee/Gopall.jpg" className="testimonial-img" alt="" />
                  <h3>Gopalakrishnan Nair.D</h3>
                  <h4>General Secretary &amp; 9822271700 </h4>
                </div>
              </div>
             {/* <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="/src/assets/img/committee/MN_Nambiar.jpg" className="testimonial-img" alt="" />
                <h3>M. N. Nambiar</h3>
                <h4>Treasurer &amp; 9850403055 </h4>
              </div>
            </div> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="src/assets/img/committee/committee/Jagdish_Poduval.jpg" className="testimonial-img" alt="" />
                <h3>Jagdish Poduval</h3>
                <h4>Joint Treasurer &amp; 9960266271</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="src/assets/img/committee/committee/sureshn.jpg" className="testimonial-img" alt="" />
                <h3>C. Sureshan</h3>
                <h4>Joint Secretary &amp; 9309849480</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="src/assets/img/committee/committee/som.jpg" className="testimonial-img" alt="" />
                <h3>C. Soman</h3>
                <h4>Joint Secretary &amp; 9850972250</h4>
              </div>
            </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}

export default Testimonials;
