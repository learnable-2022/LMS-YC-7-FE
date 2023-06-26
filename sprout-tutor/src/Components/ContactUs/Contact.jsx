import './Contact.scss'
import heading from '../../assets/heading.png'

const Contact = () => {
  return (
    <div id='contact'>

        <img src={heading} alt="" className="heading" />
        <span>
            <h1>Contact Us</h1>
            <p>Have a question or just want to say hi? We'd love to hear from you.</p>
        </span>

        <div className="cct-content">
            <aside>
                <h1>Contact Information</h1>
                <p>Everything you need to know about SproutTutor.</p>

                <a href='tel:+234 816 515 2922'>
                    <i class="fa-solid fa-phone-volume"></i>
                    +234 816 515 2922
                </a>

                <a href='mailto:sprout.tutor@gmail.com'>
                    <i class="fa-solid fa-envelope"></i>
                    sprout.tutor@gmail.com
                </a>

                <a href=''>
                    <i class="fa-solid fa-location-dot"></i>
                    KILOMETER 7, ENUGU/ PORTHARCOURT, <br />
                    EXPRESSWAY,CENTENARY CITY, ENUGU, <br />
                    NIGERIA.
                </a>
            </aside>

            <form action="" id='contact-form'>
                
                <div id='name'>
                    <label htmlFor="">
                        <p>First name</p>
                        <input type="text" name='text' placeholder='Your First Name' id='first'/>
                    </label>

                    <label htmlFor="">
                        <p>Last Name</p>
                        <input type="text" name='text' placeholder='Your Last Name' id='last'/>
                    </label>
                </div>

                <div id="cont">
                    <label htmlFor="">
                        <p>Email</p>
                        <input type="email" name='email' placeholder='Your Email Address' id='email'/>
                    </label>

                    <label htmlFor="">
                        <p>Phone Number</p>
                        <input type="tel" name='tel' placeholder='Your Phone Number' id='phone'/>
                    </label>
                </div>

                <label htmlFor="">
                    <p>Your Message</p>
                    <textarea name="message" id="message" placeholder='Your message'></textarea>
                </label>

                <input type="submit" value="Send Message" id='send' />

            </form>
        </div>
    </div>
  )
}

export default Contact