import React from "react";
import { User } from "../User";

type Props = {
  onUserSave: (user: User) => void;
};

const UserForm = ({ onUserSave }: Props) => {
  const [showForm, setShowForm] = React.useState(true);
  const [formData, setFormData] = React.useState({
    id: "",
    fullname: "",
    age: 0,
    gender: "",
    education: "",
    skills: [] as string[],
    bio: "",
  });

  const onClickAddUser = () => {
    setShowForm(() => !showForm);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedUser = {
      ...formData,
      id: Math.random().toString(36).substring(2, 9),
    };
    if (formData.id === "") {
      updatedUser.id = crypto.randomUUID();
    }
    onUserSave(updatedUser as User);
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFormData((prevData) => {
      const skills = checked
        ? [...prevData.skills, value]
        : prevData.skills.filter((skill) => skill !== value);
      return {
        ...prevData,
        skills,
      };
    });
  };

  return (
    <div>
      <button onClick={onClickAddUser}>Add User</button>
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              onChange={handleChange}
              value={formData.fullname}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              onChange={handleChange}
              value={formData.age || ""}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              onChange={handleChange}
              value={formData.gender}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="education">Education</label>
            <select
              id="education"
              name="education"
              onChange={handleChange}
              value={formData.education}
            >
              <option value="">Select</option>
              <option value="High School">High School</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
            </select>
          </div>
          <div>
            <h3>Skills</h3>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="JavaScript"
                onChange={handleCheckboxChange}
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="TypeScript"
                onChange={handleCheckboxChange}
              />
              TypeScript
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="NodeJs"
                onChange={handleCheckboxChange}
              />
              NodeJs
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="Python"
                onChange={handleCheckboxChange}
              />
              Python
            </label>
          </div>
          <div>
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" name="bio" onChange={handleChange}></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div>
            <button type="reset">Clear</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserForm;
