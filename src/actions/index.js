const selectSong = (song) => {
  return {
    type: "SELECT_SONG",
    payload: song,
  };
};

export default selectSong;
