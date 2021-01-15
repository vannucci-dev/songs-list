import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  return song ? (
    <div>
      <h3>Title:</h3>
      <p>{song.title} - Sophie</p>
      <h4>Duration:</h4>
      {song.duration}
    </div>
  ) : (
    ""
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
