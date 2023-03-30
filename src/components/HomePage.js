import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import employees from "../../data/employeeData.js";

function HomePage() {
  // let employees = [
  //   {
  //     name: "Bob Dob",
  //     title: "Chief Dobber",
  //     imgUrl:
  //       "https://as2.ftcdn.net/v2/jpg/02/26/78/43/1000_F_226784334_JAwpvCo4W55ho6L9sUdmmQP0S9C290TI.jpg"
  //   },
  //   {
  //     name: "Dob Bobbins",
  //     title: "Bobber in Chief",
  //     imgUrl:
  //       "https://us.123rf.com/450wm/molokowall/molokowall2201/molokowall220100015/180568257-young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style.jpg?ver=6"
  //   },
  //   {
  //     name: "Sue Bloo",
  //     title: "Terror in the Night",
  //     imgUrl:
  //       "https://us.123rf.com/450wm/molokowall/molokowall2204/molokowall220400015/184111601-young-smiling-woman-mia-avatar-3d-vector-people-character-illustration-cartoon-minimal-style.jpg?ver=6"
  //   },
  //   {
  //     name: "Greg",
  //     title: "Collector of Souls",
  //     imgUrl: "https://img.freepik.com/free-icon/man_318-860796.jpg"
  //   }
  // ];
  return (
    <div class="HomePage">
      <Header title="Employee Directory" />
      <SearchBar placeholderText="Who are you looking for?" />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default HomePage;
