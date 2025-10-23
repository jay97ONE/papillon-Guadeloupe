import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const CodeComponent13514: React.FC<Props> = ({ className = "", children }) => {
  return (
    <div className={`p-4 bg-white text-slate-900 ${className}`}>
      <pre className="whitespace-pre-wrap text-sm">{children ?? "Component 135-14"}</pre>
    </div>
  );
};

export default CodeComponent13514;


