import "../styles/contact.scss";
import { FaUserCircle, FaEnvelope, FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">Contact</h1>
      <div className="contact__cards">
        <div className="contact__card">
          <FaUserCircle size={60} />
          <h3>Name</h3>
          <p>
            Vladislav Zhakun <br />
            <a href="tel:+380994880575">+38 (099) 488-05-75</a>
          </p>
        </div>
        <div className="contact__card">
          <FaEnvelope size={60} />
          <h3>Email</h3>
          <p>
            <a href="mailto:vladislav.zhakun100@gmail.com">
              vladislav.zhakun100@gmail.com
            </a>
          </p>
        </div>
        <div className="contact__card">
          <FaTelegramPlane size={60} />
          <h3>Telegram</h3>
          <p>
            <a
              href="https://t.me/V_OTEC"
              target="_blank"
              rel="noopener noreferrer"
            >
              @V_OTEC
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
