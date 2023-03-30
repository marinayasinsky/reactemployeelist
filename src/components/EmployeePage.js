import Header from "./Header";

function EmployeePage({ name, title, imgUrl }) {
  return (
    <div className="EmployeePage gap-1">
      <Header title="Employee" />
      <div className="back-btn">
        <button>&lt;</button>
      </div>
      <section className="intro">
        <div className="avatar-container">
          <img src={imgUrl} alt={`employee ${name}`} />
        </div>
        <div className="info-container">
          <h2>{name}</h2>
          <h3>{title}</h3>
        </div>
      </section>
      <section className="contact flex-col">
        <div className="contact-ind align-items-center">
          <div>
            <h3>Call Office</h3>
            <h4>781-000-0002</h4>
          </div>
          <div>
            <button>&gt;</button>
          </div>
        </div>
        <div className="contact-ind align-items-center">
          <div>
            <h3>Call Mobile</h3>
            <h4>617-000-0002</h4>
          </div>
          <div>
            <button>&gt;</button>
          </div>
        </div>
        <div className="contact-ind align-items-center">
          <div>
            <h3>SMS</h3>
            <h4>617-000-0002</h4>
          </div>
          <div>
            <button>&gt;</button>
          </div>
        </div>
        <div className="contact-ind align-items-center">
          <div>
            <h3>Email</h3>
            <h4>bobthedob@bigbob.com</h4>
          </div>
          <div>
            <button>&gt;</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EmployeePage;
