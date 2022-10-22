import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [getUsers, setGetUsers] = useState([]);
  const BASE_URL = "https://randomuser.me/api/";

  const fectchUsers = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      setGetUsers(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fectchUsers();
  }, []);

  return (
    <section>
      <div>
        {getUsers.map((item) => {
            return(
                <div>
                    <h1>{item.name}</h1>
                </div>
            )
        })}
      </div>
    </section>
  );
};

export default Users;
