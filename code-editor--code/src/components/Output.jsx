import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const result = await executeCode(language, sourceCode);
      console.log(result);

      setOutput(result.run.output.split("\n")); // convert to array
      result.run.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      setToastMessage({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div>
        <p style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>Output</p>
        <Button
          variant='outline-success'
          style={{ marginBottom: "1rem" }}
          onClick={runCode}
          disabled={isLoading}
        >
          {isLoading ? <Spinner animation='border' size='sm' /> : "Run Code"}
        </Button>

        <div
          style={{
            height: "75vh",
            padding: "0.5rem",
            color: isError ? "red" : "",
            border: "1px solid",
            borderRadius: "0.25rem",
            borderColor: isError ? "red" : "#333",
            overflowY: "auto",
          }}
        >
          {output
            ? output.map((line, i) => <p key={i}>{line}</p>)
            : 'Click "Run Code" to see the output here'}
        </div>
      </div>
    </>
  );
};

export default Output;
