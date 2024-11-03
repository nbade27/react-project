import Link from "@mui/material/Link";
import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function MenuBar() {
    const [option, setOption] = useState("CodingSkills");
    const navigate = useNavigate();
    useEffect(() => {
        // alert(`Option changed to ${option}`)
    }, [option])

    const handleGoButton = (e) => {
        console.log('clicked on go button!');
        switch (option) {
            case 'CodingSkills':
                navigate("/codingskills")
                break;
            case 'Universities':
                navigate("/universities")
                break;
            default:
                break;
        }

    }

    const handleOnChangeAction = (e) => {
        setOption(e.target.value)
    }

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
                            My Learnings
                        </Typography>
                        <Link href="/universities">
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={option}
                                label="option"
                                onChange={handleOnChangeAction}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Universities"}>Universities&nbsp;to&nbsp;Study&nbsp;in&nbsp;Abroad</MenuItem>
                                <MenuItem value={"CodingSkills"}>Git&nbsp;repos&nbsp;for&nbsp;Improving&nbsp;CodingSkills</MenuItem>
                            </Select>
                        </Link>
                        &nbsp;
                        <Button variant="contained" color="success" onClick={handleGoButton}>Go</Button>
                        &nbsp;
                        <Link href="/">
                            <Button color="error" variant="outlined">Back</Button>
                        </Link>
                        &nbsp;
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    );
}
