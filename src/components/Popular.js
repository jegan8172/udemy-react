import two from "../assets/images/c1.avif"
import three from "../assets/images/c2.avif"
import four from "../assets/images/c3.avif"
import five from "../assets/images/c4.avif"

function Popular(){
    return(<div className="popular">
        <div className="popular__title">
          <h1>Most Popular</h1>
          <p>Pick the best fit</p>
        </div>
        <div className="popular__container">
          <div className="course-card">
            <img src={two} alt="1" ></img>
            <h3>2023 Python Data vizualization masterclass</h3>
            <p>Col Steele</p>
            <p>4.1⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
          </div>
          <div className="course-card">
            <img src={three} alt="2"></img>
            <h3>Web Development bootcamp 2023|Advance</h3>
            <p>Col Steele</p>
            <p>4.0⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
          </div>
          <div className="course-card">
            <img src={four} alt="3"></img>
            <h3>Master Ui/Ux Designjing with Figma</h3>
            <p>Col Steele</p>
            <p>3.0⭐⭐⭐</p>
            <p>499<del>1999</del></p>
          </div>
          <div className="course-card">
            <img src={five} alt="4"></img>
            <h3>Basic to Advance Java core training</h3>
            <p>Col Steele</p>
            <p>5.0⭐⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
          </div>
          <div className="course-card">
            <img src={two}alt="1" ></img>
            <h3>2023 Python Data vizualization masterclass</h3>
            <p>Col Steele</p>
            <p>4.1⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
          </div>
          <div className="course-card">
          <img src={three} alt="2"></img>
            <h3>Web Development bootcamp 2023|Advance</h3>
            <p>Col Steele</p>
            <p>4.0⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
          </div>
          <div className="course-card">
          <img src={four} alt="3"></img>
            <h3>Master Ui/Ux Designjing with Figma</h3>
            <p>Col Steele</p>
            <p>3.0⭐⭐⭐</p>
            <p>499<del>1999</del></p>
          </div>
          <div className="course-card">
          <img src={five} alt="4"></img>
            <h3>Basic to Advance Java core training</h3>
            <p>Col Steele</p>
            <p>5.0⭐⭐⭐⭐⭐</p>
            <p>499<del>1999</del></p>
          </div>
        </div>
      </div>)
}
export default Popular