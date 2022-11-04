import React from "react";

interface InputProps {
  label?: string;
  onChange?: () => void;
  value?: string;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  onChange,
  value,
  placeholder,
  className,
}) => {
  return (
    <div className={className}>
      <label className="block text-lg" htmlFor="input">
        {label}
      </label>
      <input
        className="px-4 py-2 rounded-lg border-main-black border-2"
        value={value}
        onChange={onChange}
        name="input"
        placeholder={placeholder}
      />
    </div>
  );
};

Input.defaultProps = {
  label: "",
  onChange: () => {},
  value: "",
  placeholder: "",
  className: "",
};

export default Input;
