/*
  In this sample we will call an GET API and render data to UI

  we will use useEffect Hook from react.
  useEffect -> By using this hook, you tell React that your component needs to do something after render :)
  we also use useState to maintain state at different stages
  
  
  
  This is the sample API
  https://jsonplaceholder.typicode.com/users

  we will create useState and then we will assign the data fetched from that API
  then we will add data to the UI




  Next Updates : 
  1.If I click on country name then immadietly get the data
  2.Top 10 Universities
  3.Pagination
  4.Loader must come in middle
  5.Make search data as table elements(And need to write separate component if possible)
  

*/

import { useState } from "react";
import LoadingSpinner from "../loader/LoadingSpinner";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";


export default function University() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("United+States");
  const [isLoading, setIsLoading] = useState(false);
  /**
     * 
    http://universities.hipolabs.com/search?country=United+States
  https://dog.ceo/api/breeds/image/random
  
     */
  function clickHandler() {
    //adding spinner before loading
    setIsLoading(true);
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        //stopping spinner after getting data
        setIsLoading(false);
      })
      .catch((err) => {
        setData([]);
        setIsLoading(false);
      })
      .finally(() => {});
  }

  function clearData() {
    setData([]);
  }

  return (
    <div>
      {isLoading ? <LoadingSpinner /> : []}
      <Button variant="outlined" onClick={clickHandler}>
        Get all Universities in {country === "United+States" ? "USA" : country}
      </Button>{" "}
      &nbsp;
      <Button variant="outlined" onClick={clearData}>
        Clear
      </Button>
      &nbsp;
      <Select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label="Country"
      >
        <MenuItem value={"United+States"}>USA</MenuItem>
        <MenuItem value={"India"}>India</MenuItem>
        <MenuItem value={"Canada"}>Canada</MenuItem>
        <MenuItem value={"Australia"}>Australia</MenuItem>
        <MenuItem value={"China"}>China</MenuItem>
      </Select>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Country</b>
                </TableCell>
                <TableCell align="middle">
                  <b>Domain</b>
                </TableCell>
                <TableCell align="middle">
                  <b>Institute&nbsp;Name</b>
                </TableCell>
                <TableCell align="middle">
                  <b>Website</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(0, 1000)
                .map(({ name, country, domains, web_pages }) => (
                  <TableRow
                    key={name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {country}
                    </TableCell>
                    <TableCell align="middle">{domains}</TableCell>
                    <TableCell align="middle">{name}</TableCell>
                    <TableCell align="middle">
                      <Link href={web_pages} color="inherit" target="blank">
                        {web_pages}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
