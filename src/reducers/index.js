import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "It's Okay To Cry", duration: "4:35" },
    { title: "Faceshopping", duration: "3:38" },
    { title: "BIPP", duration: "3:54" },
    { title: "Ponyboy", duration: "4:02" },
  ];
};

const selectedSognReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSognReducer,
});
