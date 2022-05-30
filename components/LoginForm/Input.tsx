import { ChangeEvent } from "react";
import { InputProps } from "@typings/LoginForm";

const Input: React.FC<InputProps> = ({ id, type, form, children }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const temp = { ...form.state };
    temp[id] = event.target.value;
    form.setForm(temp);
  };
  return (
    <div className="flex justify-between text-submenu">
      <label htmlFor={id} className="">
        {children}
      </label>
      <input
        id={id}
        type={type}
        onChange={handleChange}
        className="border border-grey bg-grey rounded px-2"
      />
    </div>
  );
};

export default Input;
