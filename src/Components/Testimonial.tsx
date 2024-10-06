import {useState} from "react";
import {MultiSelect} from "primereact/multiselect";
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import {isMobile} from "../Utility";
import  facebook from "../Assests/facebook.webp"
import  linkdin from "../Assests/linkdin.webp"
import  twitter from "../Assests/twitter.webp"
import  instagram from "../Assests/insta.svg"
    import img1 from '../Assests/2.1.webp'
    import img2 from '../Assests/2.2.webp'
    import img3 from '../Assests/2.3.webp'
    import img4 from '../Assests/2.4.webp'
    import img5 from '../Assests/2.5.webp'
    import img6 from '../Assests/2.6.webp'
    import img7 from '../Assests/2.7.webp'
    import img8 from '../Assests/2.8.webp'
    import img9 from '../Assests/2.9.webp'
import {Carousel} from "react-responsive-carousel";
import slide1 from "../Assests/slide1.webp";
import slide2 from "../Assests/slide2.webp";
import slide3 from "../Assests/slide3.webp";


export function Testimonial (){
    const [options, setOptions] = useState([{name: 'Other'},{name: 'Diabetes', id: 1},{name: 'Digestion Issues', id: 2},{name: 'Digestion Issues', id: 3},{name: 'Fatty Liver', id: 4},{name: 'Gall Bladder Issues', id: 5},{name: 'High BP', id: 6},{name: 'Kidney Stones', id: 7},{name: 'Low BP', id: 8},{name: 'PCOD', id: 9},{name: 'Uric Acid', id: 10},{name: 'Thyroid Issues', id: 11}]);
    const [selectedValue, setSelectedValues] = useState([]);

    function onSelect() {

    }
    function onRemove() {

    }

    return (
        <>
        <section className="section3">
            <div className="contact-testimonial-section">
                <div className="schedule-appointment-container">
                    <div className="schedule-appointment">
                        <div className="schedule-header">
                            <h2 className="appointment">Schedule An Appointment</h2>
                        </div>

                        <p className="contact-info1">
                            We'd love to hear from you! Fill out the form below, and one of our fitness experts will
                            reach
                            out to you within 24 hrs.
                        </p>
                    </div>

                    <form className="appointment-form" method="post" action="send_mail.php">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name *" required/>
                            <input type="number" name="whatsapp" placeholder="WhatsApp Number *" required/>
                            <input type="number" name="weight" placeholder="Enter Weight (kg) *" required/>
                            <input type="number" name="height" placeholder="Enter Height (cm) *" required/>
                        </div>

                        <div className="form-group">
                            <select name="category" id="">
                                <option value="" disabled selected>Select Gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>

                            <MultiSelect value={selectedValue} onChange={(e) => setSelectedValues(e.value)} options={options} optionLabel="name"
                                         placeholder="Select issues you face?" maxSelectedLabels={3} className="w-full md:w-20rem multi-select-react"/>

                        </div>

                        <div className="form-group">
                            <textarea name="concerns" id="" placeholder="Your Health Goals & Concerns*"
                                      ></textarea>
                        </div>

                        <div className="contact-footer">
                            <button type="submit" className="submit-button">Submit</button>
                            <div className="col-md-51">
                                <ul className="social-media-list">
                                    <li>
                                        <a href="https://www.facebook.com/vm4fitness/" target="_blank"
                                           rel="noopener noreferrer">
                                            <img src={facebook} alt="facebook"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/vm4fitness/" target="_blank"
                                           rel="noopener noreferrer">
                                            <img src={instagram} alt="insta"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/vm4fitness/" target="_blank"
                                           rel="noopener noreferrer">
                                            <img src={linkdin} alt="linkedin"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/vm4fitness" target="_blank" rel="noopener noreferrer">
                                            <img src={twitter} alt="twitter"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>

                </div>
                {
                   isMobile() ? <></> :
                       <div id="testimonial">
                           <div className="testimonial-slider">
                               <h2 className="testi">What our clients say</h2>
                               <Carousel showThumbs={false} useKeyboardArrows={true} autoPlay={true} infiniteLoop={true}
                                         interval={3000} showStatus={false} stopOnHover={false}>
                                   <div className="slide2">
                                       <img src={img1} alt="Client 1"/>
                                       <p className="paragraph">Great service, highly recommend!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img2} alt="Client 2"/>
                                       <p className="paragraph">Fantastic experience, will come back again!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img3} alt="Client 4"/>
                                       <p className="paragraph">Excellent service and support!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img4} alt="Client 5"/>
                                       <p className="paragraph">Highly professional and reliable!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img5} alt="Client 5"/>
                                       <p className="paragraph">Highly professional and reliable!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img6} alt="Client 5"/>
                                       <p className="paragraph">Highly professional and reliable!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img7} alt="Client 5"/>
                                       <p className="paragraph">Highly professional and reliable!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img8} alt="Client 5"/>
                                       <p className="paragraph">Highly professional and reliable!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img9} alt="Client 5"/>
                                       <p className="paragraph">Highly professional and reliable!</p>
                                   </div>
                               </Carousel>

                           </div>
                       </div>

                }
            </div>
        </section>
            {
                isMobile() ?
                    <div id="">
                        <div className="testimonial-slider">
                            <h2 className="testi">What our clients say</h2>
                            <Carousel showThumbs={false} useKeyboardArrows={true} autoPlay={true} infiniteLoop={true}
                                      interval={3000} showStatus={false} stopOnHover={false}>
                                <div className="slide2">
                                    <img src={img1} alt="Client 1"/>
                                    <p className="paragraph">Great service, highly recommend!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img2} alt="Client 2"/>
                                    <p className="paragraph">Fantastic experience, will come back again!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img3} alt="Client 4"/>
                                    <p className="paragraph">Excellent service and support!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img4} alt="Client 5"/>
                                    <p className="paragraph">Highly professional and reliable!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img5} alt="Client 5"/>
                                    <p className="paragraph">Highly professional and reliable!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img6} alt="Client 5"/>
                                    <p className="paragraph">Highly professional and reliable!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img7} alt="Client 5"/>
                                    <p className="paragraph">Highly professional and reliable!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img8} alt="Client 5"/>
                                    <p className="paragraph">Highly professional and reliable!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img9} alt="Client 5"/>
                                    <p className="paragraph">Highly professional and reliable!</p>
                                </div>
                            </Carousel>
                        </div>
                    </div> : <></>

            }

        </>
    );
}