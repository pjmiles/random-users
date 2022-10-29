import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import axios from "axios";
import ErrorBoundary from "./ErrorBoundary";

const Users = () => {
  const [getUsers, setGetUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");
  const [pageNumber, setPageNumber] = useState(0);

  const BASE_URL = "https://randomuser.me/api/?results=50";
  const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const fectchUser = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      console.log(data.results);
      setGetUsers(data.results);
      const person = data.results[0];

      const { phone, email } = person;
      const {
        login: { password },
      } = person;
      const { first, last } = person.name;
      const { large: image } = person.picture;
      const {
        dob: { age },
      } = person;
      const {
        street: { number, name },
      } = person.location;
      const newPerson = {
        image,
        phone,
        email,
        password,
        age,
        name: `${first} ${last}`,
        street: `${number} ${name}`,
      };
      setPerson(newPerson);
      setTitle("name");
      setValue(newPerson.name);
      setLoading(false);
      // setGetUsers(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fectchUser();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  // mapping through getUsers state
  const displayUsers = getUsers
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map(({ id, picture, name, icon }) => {
      return (
        <div className="users-container">
          <div className="image-container" key={id.value}>
            <img
              alt="random user"
              src={picture.large}
              onMouseOver={handleValue}
              className="user-image"
            />
            <h1>
              {name.title}{" "}
              <strong>
                {name.first} {name.last}
              </strong>
            </h1>
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
          </div>
        </div>
      );
    });

  // page count
  const pageCount = Math.ceil(getUsers.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <ErrorBoundary>
      <section>
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-image"
          />
          <p className="user-title">
            My {title} is <strong>{value}</strong>
          </p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
        </div>

        {!loading ? displayUsers : "Loading..."}
      </section>
      
      <div className="buttons-conatiner">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"prevBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </ErrorBoundary>
  );
};

export default Users;
