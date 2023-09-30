import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from "@mui/material/Link";
import University from "./components/universities/University";
import CodingSkills from "./components/coding-skills/CodingSkills";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export default function App() {
  const [option, setOption] = useState("Universities");

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Multi purpose website
            </Typography>
            <Link href="/universities">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={option}
                label="option"
                onChange={(e) => setOption(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Universities"}>Universities&nbsp;to&nbsp;Study&nbsp;in&nbsp;Abroad</MenuItem>
                <MenuItem value={"CodingSkills"}>Improve&nbsp;CodingSkills</MenuItem>
              </Select>
            </Link>
            &nbsp;
            <Link href={option} >
              <Button variant="contained" color="success">Go</Button>
            </Link>
            &nbsp;
            <Link href="/">
              <Button color="error" variant="outlined">Back</Button>
            </Link>
            &nbsp;
          </Toolbar>
        </AppBar>
      </Box>

      <BrowserRouter basename="/react-project">
        <Routes>
          <Route exact path="/universities" element={<University />} />
          <Route path="/codingskills" element={<CodingSkills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
