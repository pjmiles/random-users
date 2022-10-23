import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [getUsers, setGetUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const BASE_URL = "https://randomuser.me/api/";
  const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

  const fectchUser = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
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

  return (
    <section>
      <div className="container">
        <img
          src={(person && person.image) || defaultImage}
          alt="random user"
          className="user-image"
        />
        <p className="user-title">My {title} is <strong>{value}</strong></p>
      </div>
    </section>
  );
};

export default Users;
