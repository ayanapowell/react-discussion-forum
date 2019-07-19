import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderEl = styled.div`
  padding: 15px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ccc;
  ul {
    display: flex;
    align-items: center;
  }
  p {
    margin: 0;
  }
`;

function Header() {
  return (
    <div>
      <HeaderEl className="">
        <ul className="list-unstyled">
          <li>
            <Link to="/">
              <h1>
                <strong>Juno discuss</strong>
              </h1>
            </Link>
          </li>
        </ul>
      </HeaderEl>
    </div>
  );
}

export default Header;
