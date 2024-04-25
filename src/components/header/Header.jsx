import Navbar from "../navbar/Navbar";
import Searchform from "../searchform/Searchform";
import "./header.css";

const Header = () => {
  return (
    <div className="holder">
      <div className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            deleniti animi magni, perferendis qui consectetur, nemo nulla eaque
            nostrum dolores fugit. Repellat velit, iusto molestiae obcaecati
            nulla magnam repudiandae eos. Sed aspernatur omnis ex eaque
            temporibus ipsum voluptatem aliquid magnam hic amet, ut, reiciendis
            doloremque expedita officiis possimus minima? Hic quae autem
            molestiae animi fuga dolore dolorum blanditiis aliquid repudiandae!
            Molestias sequi, suscipit distinctio dicta quia corporis quas
            excepturi doloremque consectetur quidem voluptas explicabo tempora
            at pariatur eaque, voluptatum quis. Quasi aliquam nostrum esse error
            accusantium quis ratione. Architecto, est? Possimus accusantium
            aliquam esse, quidem dicta impedit iste vitae necessitatibus,
            ratione id autem maiores nesciunt porro explicabo fuga quam
            quibusdam rerum blanditiis distinctio illum, minima consequuntur.
            Possimus molestiae laborum accusamus. Autem temporibus voluptate
            consectetur error ea ipsum quos laboriosam aspernatur, veritatis sit
            voluptatibus consequatur necessitatibus animi aut officia et quo
            fugit ipsam ab nisi at asperiores delectus? Cumque, deleniti nisi.
          </p>
          <Searchform />
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};
export default Header;
