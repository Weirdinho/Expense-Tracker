import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Orb from "../Orb/Orb";
import bg from "../../img/bg.png";

function LandingPage() {
  const navigate = useNavigate();

   const orbMemo = useMemo(() => {
      return <Orb />;
    }, []);

  return (
    <Container bg={bg}>
     {orbMemo}
      <h1>Welcome to the Student Expense Tracking System</h1>
      <p>Manage your expenses efficiently and stay on top of your finances.</p>
      <button onClick={() => navigate("/auth")}>Get Started</button>
    </Container>
  );
}

export default LandingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: #f4f4f4;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    color: white;
    background: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background: #0056b3;
  }
`;
