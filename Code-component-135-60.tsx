import React from "react";

type Props = {
  className?: string;
  message?: string;
};

const CodeComponent13560: React.FC<Props> = ({ className = "", message = "Component 135-60" }) => {
  return (
    <section className={`p-4 rounded shadow-sm bg-gray-50 ${className}`}>
      <p className="text-sm text-gray-700">{message}</p>
    </section>
  );
};

export default CodeComponent13560;
