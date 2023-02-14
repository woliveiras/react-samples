import { useState, FormEvent } from "react";

const Controlled = () => {
  const [state, setState] = useState({
    firstName: "William",
    lastName: "Oliveira",
  });

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
        value={state.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={state.lastName}
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

export default Controlled;
