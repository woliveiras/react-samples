import {
  FC,
  createContext,
  useState,
  useEffect,
  ReactElement,
  useCallback,
} from "react";
import axios from "axios";

export type Issue = {
  number: number;
  title: string;
  url: string;
  state: string;
};

type IssueContextType = {
  issues: Issue[];
  url: string;
};

type Props = {
  url: string;
  children: ReactElement;
};

export const IssueContext = createContext<IssueContextType>({
  issues: [],
  url: "",
});

const IssueProvider: FC<Props> = ({ children, url }) => {
  const [issues, setIssues] = useState<Issue[]>([]);

  const fetchIssues = useCallback(async () => {
    const res = await axios(url);

    if (res) {
      setIssues(res.data);
    }
  }, [url]);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  const context = {
    issues,
    url,
  };

  return (
    <IssueContext.Provider value={context}>{children}</IssueContext.Provider>
  );
};

export default IssueProvider;
