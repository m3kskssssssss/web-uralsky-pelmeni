import "./style.css";
import ellipse from "./../../img/icons/ellipse_text.svg" 

const Header = () => {
    return (    
        




        






    <header className="header">
    <div className="header__wrapper">
        
    
        

        <div className="header__text">
            

            <div className="header__background">
                <img src={ellipse} alt="Rotating Icon" className="rotating-icon-text" />
                <div className="tab">
            <h1> Наступило время показать свои навыки городу и родителям, 
                здесь ты точно сможешь реализовать себя как успешного работника. 
                не упусти свой шанс взять в свои руки ту практику,
                которая уже тебя заждалась  </h1>
            </div>
            </div>
        </div>
    </div>
    </header>);
}

export default Header;