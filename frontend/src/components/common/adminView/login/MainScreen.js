import React from "react";
import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";
import AddExpenseBG from "../../../../images/GQ.png";

const MainScreen = ({ title, children }) => {
  return (
    <div
      className="mainback"
      style={{
        backgroundImage: `url(${AddExpenseBG})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "#fff",
      }}
    >
      <Container
        style={{ backgroundColor: "rgba(0,0,0,0.5)", marginLeft: "-100px" }}
      >
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading" style={{ color: "white" }}>
                  {title}
                </h1>

                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
