import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Navbar from "./navbar/navbar";
import Hero from "./hero";
import { useState } from "react";
import hero from "../data/hero.json";
import MyEditor from "./textEditor";
import parse from "html-react-parser";
import CreateIcon from '@mui/icons-material/Create';
import { Button } from "@mui/material";

const drawerWidth = 400;
const drawerHeight = 740;

const config = {
  buttons: ["bold", "italic"],
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const [title, setTitle] = useState(hero.title);
  const [description, setDescription] = useState(hero.description);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const resetData = () => {
    setTitle(hero.title);
    setDescription(hero.description);

    saveData();
  };

  const saveData = () => {
    var dataToSave = {};
    dataToSave.title = title;
    dataToSave.description = description;
    localStorage.setItem("hero-data", JSON.stringify(dataToSave));
  };

  return (
    <Box >
      <div className="mt-[50px] absolute ">
      <Button className="rounded-[80%]" variant="contained" onClick={handleDrawerOpen} endIcon={<CreateIcon  />}></Button>
      </div>
  
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          height: drawerHeight,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: drawerHeight,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <div>
            <form onSubmit={handleSubmit}>
              <label className="text-[30px] pl-[15px]">Title</label>
              <br></br>
              <input
                type="text"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-black text-sx  focus:ring-blue-500 focus:border-blue-500 block mx-auto w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Stay Ahead"
              ></input>
              <label className="text-[30px] pl-[15px]">Description</label>
              <MyEditor
                value={hero.description}
                setDescription={setDescription}
                config={config}
              ></MyEditor>

              <br></br>
              <button
                className="mt-[250px] border-[1px] w-[130px]   bg-primary text-black hover:bg-blue-700 text-white font-bold py-1.5  rounded-full"
                onClick={resetData}
              >
                Reset
              </button>
              <button
                className="mt-[250px] ml-[10px] w-[240px]  bg-blue text-primary hover:bg-blue-700 text-white font-bold py-2  rounded-full"
                onClick={saveData}
              >
                Save
              </button>
            </form>
          </div>
        </List>
      </Drawer>
      <Main open={open}>
        <Typography component={"span"}>
          <Navbar />
        </Typography>
        <DrawerHeader />
        <Hero description={description} title={title} />
      </Main>
    </Box>
    </Box>
  );
}
