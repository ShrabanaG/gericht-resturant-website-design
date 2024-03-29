import SubHeading from "../../SubHeading/SubHeading";
import "./newsLetter.css";

const NewsLetter = () => {
    return (
        <div className="gericht__newsletter">
            <div className="gericht__newsletter-heading">
                <SubHeading title="Newsletter" />
                <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
                <p className="p__opensans">And never miss latest Updates!</p>
            </div>
            <div className="gericht__newsletter-input flex__center">
                <input type="email" placeholder="Enter your email address" />
                <button type="button" className="custom__button">Subscribe</button>
            </div>
        </div>
    )

}

export default NewsLetter