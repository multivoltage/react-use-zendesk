import React, { useEffect, useRef, useState } from "react";

interface Props {
  onChangeKey: (key: string) => void;
}

export const KeyForm: React.FC<Props> = ({ onChangeKey }) => {
  const [value, setValue] = useState<string>(
    process.env.NEXT_PUBLIC_ZENDESK_API_KEY || ""
  );
  const inputRef = useRef<HTMLInputElement>(null);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setValue(query);
  }

  useEffect(() => {
    onChangeKey(value);
  }, [value]);

  return (
    <div className="key-container">
      <p className="title">insert API KEY</p>
      <input ref={inputRef} type="text" value={value} onChange={handleChange} />
    </div>
  );
};
