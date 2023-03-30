function EmployeeListItem({ name, title, imgUrl }) {
  return (
    <div className="EmployeeListItem">
      <div class="avatar-container">
        <img src={imgUrl} alt={`employee ${name}`} />
      </div>
      <div className="info-container">
        <h2>{name}</h2>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default EmployeeListItem;
