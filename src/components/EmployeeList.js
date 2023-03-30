import EmployeeListItem from "./EmployeeListItem";

function EmployeeList({ employees }) {
  return (
    <div>
      {employees.map((employee) => {
        return (
          <EmployeeListItem
            imgUrl={employee.image}
            name={employee.name}
            title={employee.title}
          />
        );
      })}
    </div>
  );
}

export default EmployeeList;
