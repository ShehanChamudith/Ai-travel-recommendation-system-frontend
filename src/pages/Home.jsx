import React, { useState } from "react";
import ResponsiveAppBar from "../components/Navbar";
import img from "../assets/person-traveling-enjoying-their-vacation.webp";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CountrySelect from "../components/CountrySearch";
import MoodIcon from "@mui/icons-material/Mood";
import Button from "@mui/material/Button";
import RecommendIcon from '@mui/icons-material/Recommend';

function Home() {
  const addTag = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setTags([...tags, e.target.value]);
        e.target.value = "";
      }
    }
  };
  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const [tags, setTags] = useState([]);
  // const [age, setAge] = React.useState("");
  // const classes = useStyles();

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  // const [tagInput, setTagInput] = useState("");

  // const [tagCount, setTagCount] = useState(0);

  // const handleInputChange = (event) => {
  //   setTagInput(event.target.value);
  // };

  // const handleInputKeyDown = (event) => {
  //   if (event.key === "Enter" && tagInput.trim() !== "") {
  //     setTags([...tags, { id: tagCount, text: tagInput.trim() }]);
  //     setTagInput("");
  //     setTagCount(tagCount + 1);
  //   }
  // };

  // const handleTagRemove = (tagIdToRemove) => {
  //   setTags(tags.filter((tag) => tag.id !== tagIdToRemove));
  // };

  return (
    <div
      class="w-screen h-screen bg-cover bg-center pt-10 px-10 pb-10"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div class="flex flex-col w-full h-full justify-between ">
        <div className="h-1/6 ">
          <ResponsiveAppBar />
        </div>

        <div className="h-4/6 flex flex-col justify-center">
          <div className="">
            <h1 className="text-white text-6xl">Dreaming of New Horizons? </h1>
            <h4 className="text-white text-xl pl-[2px] pt-4">
              Checkout Our New AI Travel Recommendation System !
            </h4>
          </div>
        </div>

        <div className="h-[6.5rem]  rounded-3xl bg-white py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <div className="flex h-full">
            <div className=" flex w-1/4 border-r-2 h-full border-black border-opacity-30 gap-5 justify-center">
              <div className=" mt-4">
                <LocationOnIcon />
              </div>

              <div className=" ">
                <CountrySelect />
              </div>
            </div>

            <div className=" flex w-1/4 border-r-2 h-full border-black border-opacity-30 px-5 overflow-y-auto gap-5">
              <div className=" mt-5">
                <MoodIcon />
              </div>
              <TextField
                className="w-full border"
                id="standard-textarea"
                label="Describe your preference"
                placeholder="Placeholder"
                multiline
                variant="standard"
              />
            </div>

            <div className="flex w-1/4 border-r-2 h-full border-black border-opacity-30 px-12 mb-8 gap-3">
              <div className="mt-5 ">
                <FavoriteIcon />
              </div>

              <div className="w-full pt-2 overflow-y-auto">
                <div className="w-full max-w-75 flex flex-wrap min-h-30 border-b border-gray-400 py-2 ">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center p-1 border border-gray-300 rounded-md mr-2 mb-2"
                    >
                      {tag}{" "}
                      <span
                        className="ml-2 cursor-pointer"
                        onClick={() => removeTag(tag)}
                      >
                        x
                      </span>
                    </div>
                  ))}
                  <input
                    onKeyDown={addTag}
                    className="border-none flex-1 outline-none  text-black"
                    placeholder="What are your interests ?"
                    style={{ backgroundColor: 'transparent' }}
                  />
                  <style jsx>{`
  input::placeholder {
    color: #777; 
  }
`}</style>
                </div>
              </div>
            </div>

            <div className=" flex items-center justify-center w-1/4">
              <Button variant="contained" endIcon={<RecommendIcon />}>
                Get Recommendations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
