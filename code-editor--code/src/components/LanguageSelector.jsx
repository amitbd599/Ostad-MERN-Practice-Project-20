import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { LANGUAGE_VERSIONS } from "../utils/constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({language, onSelect}) => {
  return (
    <div>
      <div className='ml-2 mb-4'>
        <p className='mb-2' style={{ fontSize: "1.25rem" }}>
          Language:
        </p>
        <Dropdown as={ButtonGroup}>
          <Button variant='secondary'>{language}</Button>
          <Dropdown.Toggle
            split
            variant='secondary'
            id='dropdown-split-basic'
          />
          <Dropdown.Menu>
            {languages.map(([lang, version]) => (
              <Dropdown.Item
                key={lang}
                active={lang === language}
                onClick={() => onSelect(lang)}
              >
                {lang}
                &nbsp;
                <span style={{ color: "gray", fontSize: "0.875rem" }}>
                  ({version})
                </span>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default LanguageSelector;
