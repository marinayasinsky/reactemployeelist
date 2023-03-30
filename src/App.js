import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import "./styles.css";
import employees from "../data/employeeData";

export default function App() {
  return (
    <div className="App">
      <HomePage />
      <EmployeePage
        imgUrl={employees[0].image}
        name={employees[0].name}
        title={employees[0].title}
      />
    </div>
  );
}
