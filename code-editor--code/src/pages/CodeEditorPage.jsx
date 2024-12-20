import { Col, Container, Row } from "react-bootstrap";
import LanguageSelector from "../components/LanguageSelector";
import { useRef, useState } from "react";
import { CODE_SNIPPETS } from "../utils/constants";
import Editor from "@monaco-editor/react";
import Output from "../components/Output";

const CodeEditorPage = () => {
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState("");
  const editorRef = useRef();

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  return (
    <Container>
      <Row>
        <Col md={8}>
          {/* step 1  ---  language select */}
          <LanguageSelector language={language} onSelect={onSelect} />

          {/* step 2  ---  Editor setup */}

          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height='75vh'
            theme='vs-dark'
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Col>
        <Col md={4}>
          {/* step 3  ---  Output setup */}

          <Output editorRef={editorRef} language={language} />
        </Col>
      </Row>
    </Container>
  );
};

export default CodeEditorPage;
