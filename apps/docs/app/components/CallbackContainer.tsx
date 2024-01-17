import { useEffect, useState } from "react";

interface Props {
  id: string;
  params: any;
  key: string;
}

export const CallbackContainer: React.FC<Props> = ({ id, params }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`callBackContainer ${mounted && "zoom"}`}>
      <code>{id}</code> called with arguments:
      <pre>{JSON.stringify(params, null, 4)}</pre>
    </div>
  );
};
