import { Toaster as Sonner } from "sonner@2.0.3";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        style: {
          background: 'white',
          border: '2px solid #16a34a',
          color: '#0f172a',
        },
        className: 'text-base',
        duration: 8000,
      }}
      {...props}
    />
  );
};

export { Toaster };
