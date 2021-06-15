import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import audioTest from "./testaudio.m4a";

const Audio = () => {
  return (
    <>
      <ReactAudioPlayer src={audioTest} controls controlsList="nodownload" />
      <audio controls controlsList="nodownload">
        <source src={audioTest} />
        <source src={audioTest} />
      </audio>
    </>
  );
};

export default Audio;
