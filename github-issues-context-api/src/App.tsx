import React from "react";
import IssueProvider from "./contexts/Issues";
import Issues from "./Issues";

function App() {
  return (
    <IssueProvider url="https://api.github.com/repos/woliveiras/blog/issues">
      <Issues />
    </IssueProvider>
  );
}

export default App;
