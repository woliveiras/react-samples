import { FC, useContext } from "react";
import { IssueContext, Issue } from "./contexts/Issues";

const Issues: FC = () => {
  const { issues, url } = useContext(IssueContext);

  return (
    <>
      <h1>woliveiras' blog issues</h1>

      {issues.map((issue: Issue) => (
        <p key={`issue-${issue.number}`}>
          <strong>${issue.number}</strong>
          {",  "}
          <a href={`${url}/${issue.number}`}>{issue.title}</a>
          {",  "}
          status: {issue.state}
        </p>
      ))}
    </>
  );
};

export default Issues;
