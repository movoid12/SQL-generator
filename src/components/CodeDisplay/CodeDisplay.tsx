/* eslint-disable react/no-children-prop */
import { Prism } from "@mantine/prism";

const CodeDisplay = () => {
  const longCode = `

SELECT column1
,column2
FROM table1
WHERE column3 IN
(
SELECT TOP(1) column4
FROM table2
INNER JOIN table3
ON table2.column1 = table3.column1
)
`;
  return (
    <Prism withLineNumbers copyLabel="Copy" copiedLabel="Code copied to clipboard" language="sql">
      {longCode}
    </Prism>
  );
};

export default CodeDisplay;
