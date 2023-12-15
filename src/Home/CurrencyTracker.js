import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Main from "./Main";
import "./CurrencyTracker.css";
import { useRef } from "react";
import { Button } from "@mui/material";

function CurrencyTracker() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  // const [Rates, setRates] = useState([]);
  // function GetCurrencyValue(value) {
  //   api.getCurrencyValue().then((response) => {
  //     setRates(response.data.rates);
  //     console.log(response.data.rates);
  //   });
  // }

  let rates = {
    AED: 0.04407632166857789,
    AUD: 0.017864399843261786,
    CAD: 0.016124293642921308,
    CNY: 0.08546673123416941,
    EUR: 0.010981738077964659,
    GBP: 0.009435616418627843,
    INR: 1,
    JPY: 1.6999555348331477,
    MXN: 0.2075225941254374,
    NZD: 0.019307363515640517,
    RUB: 1.0777252316719201,
    SGD: 0.01595045344269004,
    USD: 0.01200139456204811,
  };

  let dataKeys = Object.keys(rates);
  let dataValues = Object.values(rates);
  const inputRef = useRef("USD");
  function handleClick() {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <>
      <Main />
      <div className="currency">
        <div className="search-container">
          <input
            type="text"
            name="search"
            placeholder="Search your Country COD here!....."
            className="search-input"
            ref={inputRef}
          />
          {/* <Link to="/" className="search-btn" onClick={GetCurrencyValue(inputRef.current.value)}> */}
          <Button onClick={handleClick} className="search-btn">
            <i className="fas fa-search"></i>
          </Button>
        </div>
        <h2 style={{ textAlign: "center" }}>
          {/* Latest Currency Rate : Base Currency - {inputRef.current.value} */}
          Latest Currency Rate : Base Currency - INR
        </h2>
        <TableContainer style={{ width: "800px" }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                {dataKeys.map((key) => (
                  <StyledTableCell>{key}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataValues.map((value, i) => (
                <StyledTableCell align="right" datatype="">
                  {value}
                </StyledTableCell>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
export default CurrencyTracker;
