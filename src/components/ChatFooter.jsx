import recordAudio from "@/utils/recordAudio";
import {
  CancelRounded,
  CheckCircleRounded,
  MicRounded,
  Send,
} from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

const ChatFooter = ({
  input,
  onChange,
  image,
  user,
  room,
  roomId,
  sendMessage,
  setAudioId,
}) => {
  const record = useRef();
  const [isRecording, setRecording] = useState(false);

  const timerInterval = useRef();
  const [duration, setDuration] = useState("00:00");

  const canRecord =
    !!navigator.mediaDevices.getUserMedia && !!window.MediaRecorder;
  const canSendMessage = input.trim() || (input === "" && image);
  const recordIcons = (
    <>
      <Send style={{ width: 20, height: 20, color: "white" }} />
      <MicRounded style={{ width: 24, height: 24, color: "white" }} />
    </>
  );

  useEffect(() => {
    if (isRecording) {
      record.current.start();
      startTimer();
    }

    function pad(value) {
      return value < 10 ? "0" + value : "" + value; // add zero in front of numbers < 10
    }

    function startTimer() {
      const start = Date.now();
      timerInterval.current = setInterval(setTime, 100);

      function setTime() {
        const timeElapsed = Date.now() - start;
        const totalSeconds = Math.floor(timeElapsed / 1000);
        const minutes = pad(parseInt(totalSeconds / 60));
        const seconds = pad(parseInt(totalSeconds % 60));
        const duration = `${minutes}:${seconds}`;
        setDuration(duration);
      }
    }
  }, [isRecording]);

  async function startRecording(e) {
    e.preventDefault();
    record.current = await recordAudio();
    setRecording(true);
    setAudioId("");
  }

  return (
    <div className="chat__footer">
      <form action="">
        <input
          value={input}
          onChange={onChange}
          placeholder="Type a message"
          style={{
            width: isRecording ? "calc(100% - 20px)" : "calc(100% - 112px)",
          }}
        />

        {canRecord ? (
          <button
            onClick={canSendMessage ? sendMessage : startRecording}
            type="submit"
            className="send__btn"
          >
            {recordIcons}
          </button>
        ) : (
          <>
            <label htmlFor="capture" className="send__btn">
              {sendIcons}
            </label>
            <input
              type="file"
              id="capture"
              style={{ display: "none" }}
              accept="audio/*"
              capture
            />
          </>
        )}
      </form>
      {isRecording && (
        <div className="record">
          <CancelRounded style={{ width: 30, height: 30, color: "#f20519" }} />
          <div>
            <div className="record__redcircle" />
            <div className="record__duration">{duration}</div>
          </div>
          <CheckCircleRounded
            style={{ width: 30, height: 30, color: "#41bf49" }}
          />
        </div>
      )}
    </div>
  );
};

export default ChatFooter;
