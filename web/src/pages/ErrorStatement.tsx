import "../styles/Error.css";

interface ErrorStatementProps {
  errorText: String;
}

export default function ErrorStatement(props: ErrorStatementProps) {
  const { errorText } = props;
  return (
    <div className="error">
      <p className="error-text">{errorText}</p>
    </div>
  );
}
