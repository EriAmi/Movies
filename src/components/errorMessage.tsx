const ErrorMessage: React.FC<{
  title: string;
  message: string;
}> = ({ title, message }) => {
  return (
    <div className="h-2/3 w-2/3 bg-slate-300 p-2 rounded">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
