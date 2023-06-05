import Header from "@/components/Header/Header";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 100px)",
        }}
      >
        <h3>An error occurred</h3>
        <Link to="/">Back to homepage</Link>
      </div>
    </main>
  );
};

export default Error;
