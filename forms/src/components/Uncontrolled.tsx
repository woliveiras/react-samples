import { useState, FormEvent } from "react";

const Uncontrolled = () => {
  const [state, setState] = useState({ firstName: "", lastName: "" });

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        onChange={handleChange}
      />
      <button>Send</button>
      {state ? (
        <p>
          {state.firstName} {state.lastName}
        </p>
      ) : null}
    </form>
  );
};

export default Uncontrolled;
