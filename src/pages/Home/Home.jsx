import { useSelector } from "react-redux";
import { Settings } from "../../api";

const Home = () => {
  const { token } = useSelector((state) => state.auth);
  const errorMessage = sessionStorage.getItem("errorMessage");

  const handleOpenLobby = () => {
    const url = `${Settings.lobby}/${token}`;
    window.location.href = url;
  };
  return token ? (
    <div className="wrapper">
      <div id="loader-box" style={{ display: "none" }} className="loaderBox">
        <div
          className="verCenter middle"
          style={{ height: "inherit", marginTop: "18vh" }}
        >
          <img
            id="loader-logo"
            src="/logo.png"
            style={{ marginBottom: "36vh" }}
            alt="goldmines"
          />
          <div
            className="loader-progress-label"
            style={{ width: "90%", height: "25px" }}
          >
            <div style={{ display: "flex" }}>
              <div
                id="loaderTxt"
                style={{ width: "100%" }}
                data-trans="loading"
              >
                Loading game...
              </div>
              <div>
                <span id="per">100</span>%
              </div>
            </div>
          </div>
          <div
            className="loader-progress"
            style={{ width: "90%", height: "25px" }}
          >
            <div
              id="loader"
              className="loader-progress-bar"
              style={{ width: "100%", height: "25px" }}
            />
          </div>
        </div>
      </div>
      <div
        id="bg-box"
        style={{ display: "block", left: "unset" }}
        className="bgVideo"
      >
        <video
          style={{ display: "block" }}
          type="video/mp4"
          className="videoBGMobile"
          src="/bg-2-low.mp4"
          id="bg-video"
          autoPlay
          muted
          playsInline
          loop
        >
          {/* <source id='bg-source1' src="" type="video/mp4">
		<source id='bg-source2' src="" type="video/ogg"> */}
        </video>
      </div>
      <div
        id="logo-box"
        style={{ display: "block", opacity: 1 }}
        className="logoBox animated-element visible-on-start"
      >
        <img alt="goldmines" src="/logo-mobile.png" />
        <div
          onClick={handleOpenLobby}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            padding: "6px 15px",
            fontSize: "12px",
            fontWeight: 600,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "gray",
            borderRadius: "9999px",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          <svg
            style={{ width: "1rem", height: "1rem" }}
            width={25}
            height={24}
            viewBox="0 0 139 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C1.1002 79.6415 1.7002 77.1415 2.5002 74.6415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
              fill="#929292"
            />
            <path
              d="M25.4002 46.3414L20.7002 45.3414C25.5002 40.2414 31.0002 35.4414 37.2002 31.0414C37.7002 30.6414 38.3002 30.3414 38.8002 29.9414L39.2002 30.3414H39.1002C33.5002 35.3414 28.9002 40.7414 25.4002 46.3414Z"
              fill="#929292"
            />
            <path
              d="M74.1001 123.041C73.4001 123.241 72.7001 123.441 72.0001 123.541C61.7001 126.041 51.6001 126.941 42.4001 126.141L36.1001 112.241C36.8001 112.341 37.5001 112.441 38.3001 112.541C47.7001 113.541 58.1001 112.441 68.7001 109.241V108.941L74.1001 123.041Z"
              fill="#929292"
            />
            <path
              d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415L67.9002 106.241L68.8002 108.641V109.141Z"
              fill="#929292"
            />
            <path
              d="M64.9999 18.0415L64.8999 16.4415C67.8999 15.2415 70.9999 14.3415 73.9999 13.4415C79.1999 11.9415 84.3999 10.8415 89.3999 10.2415L86.5999 15.3415C79.8999 14.7415 72.4999 15.6415 64.9999 18.0415Z"
              fill="#929292"
            />
            <path
              d="M87.4001 77.7414C86.1001 78.6414 84.8001 79.5414 83.5001 80.4414C77.7001 84.1414 71.6001 86.7414 65.6001 88.2414C57.5001 90.3414 49.7001 90.5414 43.1001 88.7414C40.0001 87.9414 37.2001 86.6414 34.7001 85.0414C32.1001 83.3414 30.0001 81.1414 28.3001 78.5414C26.7001 76.0414 25.7001 73.2414 25.3001 70.2414C24.5001 65.0414 25.4001 59.3414 27.7001 53.7414C31.0001 45.8414 37.2001 37.8414 45.7001 31.4414C47.3001 30.2414 48.9001 29.1414 50.6001 28.0414C55.7001 24.8414 61.0001 22.4414 66.2001 20.8414C71.4001 19.2414 76.5001 18.4414 81.3001 18.4414C85.1001 18.4414 88.7001 18.9414 92.0001 19.9414C93.6001 20.4414 95.2001 21.0414 96.6001 21.7414C100.4 23.6414 103.6 26.3414 105.8 29.9414C108 33.3414 109 37.3414 109.1 41.4414C109.2 46.1414 108 51.2414 105.7 56.2414C102.2 63.9414 95.9001 71.6414 87.4001 77.7414Z"
              fill="black"
            />
            <path
              d="M129.2 81.8414C123.9 93.0414 117.2 99.8414 110.9 104.041C110.7 104.241 110.4 104.341 110.2 104.541L106.3 88.9414L105.1 84.3414L96.7998 77.2414C101.7 72.9414 105.8 68.2414 109 63.3414L126.2 66.3414V66.4414C127.2 71.5414 128.2 76.7414 129.2 81.8414Z"
              fill="#929292"
            />
            <path
              d="M138.5 42.9414L134 34.3414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C136 24.2414 138.5 42.9414 138.5 42.9414Z"
              fill="#929292"
            />
            <path
              d="M133.9 34.4414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C126.8 15.2414 127.7 16.4414 128.5 17.7414C131.8 22.6414 133.5 28.3414 133.9 34.4414Z"
              fill="black"
            />
            <path
              d="M39.3 30.4414C33.5 35.3414 28.9002 40.7414 25.4002 46.3414L20.7002 45.3414L10 43.0414C14.9 35.3414 21.5 27.9414 29.4 21.3414L38.8 30.0414L39.3 30.4414Z"
              fill="black"
            />
            <path
              d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415C67.5002 93.1415 67.7002 93.1414 67.9002 93.0414L68.7002 108.641L68.8002 109.141Z"
              fill="black"
            />
            <path
              d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C0.300195 79.9415 0.1 77.7415 0 75.5415L2.5 74.7415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
              fill="url(#paint0_linear_693_22)"
            />
            <path
              d="M95.1001 0.141422L89.5001 10.2414L86.7001 15.3414C80.0001 14.8414 72.6001 15.7414 65.1001 18.1414L65.0001 16.5414L64.6001 4.14142C73.3001 1.44142 81.8001 0.0414213 89.8001 0.0414213C91.5001 -0.0585787 93.3001 0.0414217 95.1001 0.141422Z"
              fill="black"
            />
            <path
              d="M126.2 66.3414C126.2 66.4414 126.2 66.4414 126.2 66.3414C121.2 74.4414 114.5 82.1414 106.2 88.9414C106.2 88.9414 106.1 88.9414 106.1 89.0414L94.6001 79.1414C95.3001 78.5414 96.1001 77.9414 96.8001 77.3414C101.7 73.0414 105.8 68.3414 109 63.4414L126.2 66.3414Z"
              fill="black"
            />
            <defs>
              <linearGradient
                id="paint0_linear_693_22"
                x1="-373.769"
                y1="63.3372"
                x2="314.773"
                y2="63.3372"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="black" />
                <stop offset="0.5594" stopColor="black" />
                <stop offset={1} stopColor="black" />
              </linearGradient>
            </defs>
          </svg>
          <span style={{ color: "black" }}>Lobby</span>
        </div>
      </div>
      <div
        id="bet-box"
        className="bet-box animated-element"
        style={{ display: "block", opacity: 1, height: "366px", zIndex: 11 }}
      >
        <div className="bet-box-top" style={{ height: "100%" }}>
          <div
            className="cashout-remove fadeInDown"
            style={{ display: "block" }}
          >
            <span
              className="bet-box-bb animated-element"
              style={{ opacity: 1 }}
            >
              <span id="bet-box-type" className="bet-box-holder whiteBg">
                <button
                  data-trans="manual"
                  id="bb-manual"
                  className="Btns2 noselection grayBg"
                >
                  MANUAL
                </button>
                <button
                  data-trans="auto"
                  id="bb-auto"
                  className="Btns2 disabledBtn"
                >
                  Autoplay
                </button>
              </span>
            </span>
            <div id="manual-bb">
              <div
                className="labelsColor animated-element label-move"
                data-trans="betAmount"
                style={{ opacity: 1 }}
              >
                BET AMOUNT
              </div>
              <div
                className="bet-box-holder animated-element"
                style={{ opacity: 1 }}
              >
                <button className="bet-box-holder Btns">-</button>
                <input
                  id="betAmount"
                  className="bet-box-holder heightOfInput"
                  type="number"
                  defaultValue="0.1"
                  max={1000}
                  min="0.02"
                  step=".01"
                  style={{ color: "unset" }}
                />
                <button className="bet-box-holder Btns">+</button>
              </div>
              <div
                id="predefinedBtnsContent"
                className="betBoxTransparent animated-element"
                style={{ opacity: 1 }}
              >
                <button data-real-value="0.02" className="fill predefinedBets">
                  0.02
                </button>
                <button data-real-value="0.1" className="fill predefinedBets">
                  0.1
                </button>
                <button data-real-value="0.5" className="fill predefinedBets">
                  0.5
                </button>
                <button data-real-value={1} className="fill predefinedBets">
                  1
                </button>
                <button data-real-value={2} className="fill predefinedBets">
                  2
                </button>
                <button
                  data-real-value={4}
                  className="fill predefinedBets currentPreferedBtn"
                >
                  4
                </button>
              </div>
              <div
                className="labelsColor animated-element label-move"
                id="dinamite-label"
                data-trans="addMoreDinamite"
                style={{ opacity: 1 }}
              >
                Add more dynamite
              </div>
              <div
                className="bet-box-holder animated-element"
                style={{ opacity: 1 }}
              >
                <button id="decDynamite" className="bet-box-holder Btns">
                  -
                </button>
                <input
                  id="dynamiteAmount"
                  className="bet-box-holder heightOfInput"
                  readOnly="readonly"
                  style={{ cursor: "default", color: "unset" }}
                  type="number"
                  defaultValue={1}
                  max
                  min={2}
                  step={1}
                />
                <button id="incDynamite" className="bet-box-holder Btns">
                  +
                </button>
              </div>
            </div>
            <div id="auto-bb" style={{ display: "none" }}>
              <div className="auto-title-holder">
                <div className="labelsColor" data-trans="selectAutoFieldTitle">
                  SELECT FIELDS TO OPEN
                </div>
                <div
                  className="labelsColor"
                  style={{ width: "43%", textAlign: "right" }}
                >
                  <span id="autoSelected">0</span>/<span id="autoSum">24</span>
                </div>
              </div>
              <div
                className="centerNoHeight grid-board-holder"
                style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
              >
                <div
                  className="myField2 middle"
                  id="auto-00"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-00"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-01"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-01"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-02"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-02"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-03"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-03"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div
                className="centerNoHeight grid-board-holder"
                style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
              >
                <div
                  className="myField2 middle"
                  id="auto-10"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-10"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-11"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-11"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-12"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-12"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-13"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-13"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div
                className="centerNoHeight grid-board-holder"
                style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
              >
                <div
                  className="myField2 middle"
                  id="auto-20"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-20"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-21"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-21"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-22"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-22"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-23"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-23"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div
                className="centerNoHeight grid-board-holder"
                style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
              >
                <div
                  className="myField2 middle"
                  id="auto-30"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-30"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-31"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-31"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-32"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-32"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-33"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-33"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div
                className="centerNoHeight grid-board-holder"
                style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
              >
                <div
                  className="myField2 middle"
                  id="auto-40"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-40"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-41"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-41"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-42"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-42"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-43"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-43"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div
                className="centerNoHeight grid-board-holder"
                style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
              >
                <div
                  className="myField2 middle"
                  id="auto-50"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-50"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-51"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-51"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-52"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-52"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div
                  className="myField2 middle"
                  id="auto-53"
                  data-status="default"
                >
                  <label className="autoBoardContainer">
                    <input
                      type="checkbox"
                      id="auto-status-53"
                      name="autoBoard"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="start-stop-holder">
            <button
              id="startBtn"
              className="middle animated-element start"
              style={{
                cursor: "pointer",
                position: "absolute",
                opacity: 1,
                color: "unset",
              }}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAArCAYAAAAKasrDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAwuSURBVHgB1Zh7cFTVHcd/99595ckKJECpJIYgSBAi0YpTB4JPBuwAw2DttFOgTivWsQXb6lQqCe1osYwCZWBsR3nUEZRgiQWRNwFECAImISxJCGHz3FeS3WQfdx/33tPf7yR3Z0MSkr7+6G/mJHfPfZzP/f5+53d+5wowDGOMZfce+gRB8A1yPh+bFVsWtuyE077eVonNjvdXwH/DcFArtmJsXtbXTmFbhu2X2HYMcH4o8/beVzgcDmEQOFJjP/RVYtjm8/l4I7NarbwNYqXYVgzklUEBe911SocrKyuD0tJSPmB+fj4sWrQIsrOz4yB0rqKiAux2O//f2Ng44EB0L7U5c+bA8uXLE0+VIeBc+BcASblFdFxcXAzr1q2D5ORkSE1NBbfbzeEWLlzIYU6fPs3voXNjx46F3Nxc/p+uT0lJ4eeCwSCEQiGoqqqCpqYmaG9v58/YsWMHFBYW6sNmI2TjkIC96t2i4507d8KKFStgwYIFsHTpUjrH+3QoUmPGjBkwZcoUmDZtGqiqCoqigKZpfQYgwNbWVkAAMJlMXOkDBw5ATk4OnDp1il+Dty42GITSgQANiT9wkLmSJPHjzZs3Q15eHixbtgxu3brFlSQllixZArNnz4YJEyZALBbj18qy3O/B0WgUnE4n+P3+Pn0tLS3cEzNnzoz3d3W5Q71isTsBCkxg9+g/yIWknA6XlpYGW7ZsgfT0dK6mDjeQdXR0cIhENUk5Up/+k2s3btzI+yPRsHPxS49fxy4Jw10ZFLCwqFDydndEM6xj+G+aefQwmiQUT2vXruWQBDeYkZJtbW0QDofjfXRMzygvL+fPpNhLnCQV176+yGLBu+yQ7cHX6Aco6QfjMhXz1IkFWTl3T1qoP3j37t3crRs2bICMjAy4k5Fqzc3NPA51u3DhAnzyySd8ZtOE27NnD8yaNatXuUik9OieC3/4829OsCi0Cc6gx+UK9nOLqB9YTRZj8Tuv2GNKlAcUpROuLGo/FJzD4eDxphspv2vXLjhy5AgHojApKiqK50N7c33byjXPfbrpg7cqQROZYBKYcYI4oGviLhZZkvTE7CfHGw2mJPpNMUhGs/hORsp1dnby40R3UirZv39//EXJfN1e/5adfzx95PSBVlEQEAi1o+VTZH45yaHcEdDpbtHmz108Rf9NKYUGycrKGhSOZiVNBuhV7bPPPuPJe9WqVX0UI3eeOHeoev22NVcYMA1zDv7RZAxnp6CqDVI06LYVwJ0BwWKJTZpwXx5/UxyEZtxQ6nk8Hh6jump6KND9icvb2+/97uixMwcdHI4JGGcsIIqCA/NfLTOpdW5wdMM60AYaIx6DXWqKmpaaPomOdfc+9NBDg8J5vV4OQrFGcPQyW7du5amJ1KdJodvaX2z43sHtX/1gy7q/zZ4+dWaIMa0KBLFcEuWrroDospXAoDkrrmBGalg0GIx5iYD6mjuYeqQcTQ5KG/Pnz+f9BEhGuZNMBx2RflfaA3nfmfrumvdHn7xw+PlXNv72+rjuRrm+bGDX3g4ovPPaR7l6JwFS7qM1dSAj9QhQDwMdTjeCpCWOIOklaFmkbEATxmJJypxfuPjDJ7/7zGO49H0DQxh3McazkDFqdI7eSQE/lHrkWnoJXbFE+/zzz+HQoUNgTU+BLk8T7NrxPixevBhWr16tX2I1Go0ne8u6oQFtNhDkUMAEwzBS79ixYzz+SKW9e/f2OU+/CX75oofhVumL8M0HS8B78tdQ/NNHYdOmTbwA0SGx7U+o1gc07uKGuwpEyWgeqXd2dXXFy6Xb7caNG1BZWcnjjlSmGKNQePbZZzncvn37YPnT98COl9EhrBUg1HNf0XN3Y16aBsU4gSh19cZmNrZTCDkXqx37oIAmr8vg9DgiUyfN4J0jRozgddtA6h0/fpyrR3lODwMazIZuoFa87H4o+vG0gcbC/vt7ru87gbLvBMkB0ywxUdMUEYYwUo8mkK4eHxRBaSkjt+ZPvGtQuGFCPnB7+c+hgkZVvHKtPH6CBtdXCN0o3kg9HSrRKLbIFj36bRiOEeQyDAOa5fq9OuTt13JAxaEJDY114URAmql6sUnVck1NTT/1aG1NfJjdGcQWgOHYzldncUia2aR+r+WjikX9AEeOHAk1N6/JITnIA4/yFtm5c+d4yqmrq+OVCX/7XvUIbv+R3ZfpmJY1ynOHL7ZBtb172JCbfj4Tw8LKX1pfHNBW0Za3D6DRLDFFY0qLs7GefuubmYaGBu5aqlZuV+/TLz66/I+je+MbHQJ3esPwxvYqsLtCw4K0pprg1LuP439jfOWBnvST3wfQ4w8qTFLCLa325kRFSD0ycq8Ooau3q2RbjcfrCp0tP1GlvxRVyxU3vfD2HhuHdHbKQ0KmJhmhcMaYRAWpbJvYB7AL0lVT1CL/Zffmi/oJ2lrqe10qBghAV6/0yMflAJofazrfpu1vnnN62jqonxSmWXn4awdsLa2Dmmb/HSEVlfEXau+K9OmXI0ETFPWw8T+ZHpsGhmC4zd3S2ezo2Xnr7qQajyxhkxM5f+lEA1abrbgnanR5nJ41f3r5kM/fM2FIZYLcd6YZdh6+xSFbPKF+cOGoCpfqOqC+1c9bwh4Zam5U+5bapvIUyPck5MnxuZlmURQzI0o46dEH5063WCwcct68ebB+/fq4euXfnLn68cGdX2FtZ5MYuJlBTPH6XJaLlV+1Fj7ydLbFnGSmwWgfvPkD/AbABJgwJgV8gShCaRCQFWjrkKG+LQBNuNt8Y/tV6I6Z+H6FQosm6g9/tWArdJs7bt50xfRNE5t4X5qkGERrfcP1lHFjxqfmZk8ZT5AERv/5i+Be4qW1PzoAKrMrqlYtJkO7oAgmBoLV6/UYLl290DTn4afikHxv8vcyDjklKx18uCfq9EchEO6BXL31CoejrYGeOc5fOXvu5JdfXPQnh10OmzcS39Vlz7KCGhJTBEEae+br4yFUQE4yJbFAyC873C0dB4+XVLzx7itfojCduL2uCUf89Wos5jVbUjVRBTOThLROb7tw6er5pnmzF042GAwSlVeJkLnj08BkFKGi3stne5hZ+NcFfafnand4Xnz9+/twK9CUrCpOe40vHP/0gWWTZI9e+ZbJYHgEgz+fgTgSK3R+HmEFKtexyRIT6hVVPdfkkmuff+r5SIltW/JoGHUPU6EAGSbjNSMemTE7883XtjxjMpnNdD8lY33FSLUYuILkGYLTQ4e8s+r3Pznk6XDXM1E4a+7oqCor8wTiCuJCzx6cnMnCFgnLLgG/DaqpyEWBKqBitF2PYXMLolgjglhffayhCwtWzbM0pIz2pIeZKimSICbhy6U2u+wxp7utfc6sJ++lZ1Mc61lg6rTpsHLlSg5MH5rIUPXaF15/7ijGXxDVaI5GtNpodrPHcRk0KXFmTZ/+mBpU3Fg1MElTBAuS4ZgCgYUEjblx8DomwXVVCLhbbN09+4jTwBx5TyhTNHcYDExVmGCRBEi9Ya/F4bq8kyfen0kxSXAESbAUb3pcny4/dvXVt144gzqooAkugak2k5ndejqnM4gFO+sDSCrmPWGNqS4tpFmA4tCPvm3HLWITJqQaMQq1XQGf8/IBR9/khvdljW2PaSlWWRCNCkZGkihCyrW6ysCl6guN3x6XZULVhdSUtOSeVBWJ3Giwtbz30Ttn/7pn0zWCw3E8oiDWgKDZOkWTZ982D9+rDPiFtaCgwAg53mQTGFIFVTIISiAWNhuDMlhkW4mNlBvwKwAKZBDHTRsVjkQmAxPzcWuZhTM8GT0RL+VGjcwwtXe4IzS0IPIHRUUSQRFqNYNaGY3UNV06wGQe9oMBJpgIS/GaEg6kwTCs4GdgTG7PGq0w470CSDNESZiA0ysZQwUjh8bDPMA/QaHOgoBfFpgHu22CBNXdJm9r1YeuYOLzpCHGY2DjcAyGaRTYGcm5EbNVk0ESoxi7KCQOjwGGn/eQhSn4tCh2+pnCWhlo10Qzq1bVUOvlPY5+6+JQgP+W4cckhMyKJGWG/Zpi6EbJ/BjuQdSuG8E6UT8HOrhBY6YaFlNrmSh7zpe0UD3aT4ihXPwfGeXWBvlL84i0UWlyUE4zJ5ksmsZwukZw0TMGtEC7v1yeTt9OVBjES/9TwAQTCwpA6srMFRVZEUb57erlHIzpElDh/93+CWAqCxlAaN69AAAAAElFTkSuQmCC" />
              <span id="startBtnText">Start Game</span>
            </button>
            <button
              id="stopAutoPlayBtn"
              className="cashoutBtn middle animated-element"
              style={{ display: "none", position: "absolute", opacity: 1 }}
            >
              <img id="startBtnIco" src />
              <span data-trans="stopAP">Stop Autoplay</span>
              <span id="apAmount">(0.33USD)</span>
              <span id="apCounter" />
            </button>
          </div>
        </div>
        <div className="htp-cover" />
        <div
          id="scrollBetBoxArea"
          className="scrollArea"
          style={{ height: "calc(100% - 366px)" }}
        />
      </div>
      <div
        id="menu"
        className="verCenter menu animated-element visible-on-start"
        style={{ opacity: 1 }}
      >
        <div id="menuIcon" className="menuIcon">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="menuContent" style={{ display: "none" }} className="menuContent">
        <div className="verCenter">
          <div id="menu-sound-btn" className="fill menuField">
            <p className="subP" data-trans="sound">
              Sound settings
            </p>
            <label className="switch">
              <input id="sounds-input" type="checkbox" />
              <span className="slider round">
                <span className="slider-buttons on" data-trans="on">
                  ON
                </span>
                <span className="slider-buttons off" data-trans="off">
                  OFF
                </span>
              </span>
            </label>
          </div>
          <div className="fill menuField">
            <p className="subP" data-trans="music">
              Music settings
            </p>
            <label className="switch">
              <input id="music-input" type="checkbox" />
              <span className="slider round">
                <span className="slider-buttons on" data-trans="on">
                  ON
                </span>
                <span className="slider-buttons off" data-trans="off">
                  OFF
                </span>
              </span>
            </label>
          </div>
          <div id="menuUsername" className="fill menuField">
            <p className="subP" data-trans="username">
              Change username
            </p>
            <div className="menu-arrow" />
          </div>
          <div className="fill menuField">
            <p className="subP" data-trans="changeAvatar">
              Change avatar
            </p>
            <div className="menu-arrow" />
          </div>
          <div className="fill menuField">
            <p className="subP" data-trans="fair">
              Choose Difficulty
            </p>
            <div className="menu-arrow" />
          </div>
          <div className="fill menuField">
            <p className="subP" data-trans="gameRules">
              Game Rules
            </p>
            <div className="menu-arrow" />
          </div>
          <div className="fill menuField">
            <p className="subP" data-trans="paytables">
              Paytable
            </p>
            <div className="menu-arrow" />
          </div>
          <div className="fill menuField">
            <p className="subP" data-trans="myBetHistory">
              My Bet History
            </p>
            <div className="menu-arrow" />
          </div>
          <div className="fill menuField">
            <p className="subP" data-trans="help">
              Help
            </p>
            <div className="menu-arrow" />
          </div>
          <div
            className="fill menuField"
            id="backUrlBtn"
            style={{ display: "block" }}
          >
            <button
              className="bet-box-holder Btns no-width"
              data-trans="back_to_home"
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
      <div id="demo-logo" style={{ display: "block" }} className="demo-badge">
        <div className="sticker">DEMO</div>
      </div>
      <div
        id="msgBox"
        className="msg-box error fadeInDown"
        style={{ display: "none" }}
      />
      <div id="jackpot" style={{ display: "flex", zIndex: 1 }}>
        <div className="jackpot-txt">
          <img id="gold-icon" src="/diamond.webp" alt="gold" />
          <span data-trans="goldRushJP">Gold Rush Jackpot</span>
        </div>
        <div className="jackpot-content">
          <div
            id="numAnimHolder2-holder"
            className="horCenter numAnimHolderSmall"
          >
            <div
              id="numAnimHolder2numAnim0"
              className="numAnimSmall"
              style={{ display: "none" }}
            >
              <div
                className="ringSmall-numAnimHolder2-0 ringSmall0"
                data-slot={0}
                data-root="numAnimHolder2"
              >
                <div
                  className="panelSmall0 gradient-text"
                  data-root-numanimholder2-0
                >
                  0
                </div>
                <div
                  className="panelSmall0 gradient-text"
                  data-root-numanimholder2-0
                >
                  -angle 1
                </div>
                <div
                  className="panelSmall0 gradient-text"
                  data-root-numanimholder2-0
                >
                  2
                </div>
                <div
                  className="panelSmall0 gradient-text"
                  data-root-numanimholder2-0
                >
                  3
                </div>
                <div
                  className="panelSmall0 gradient-text"
                  data-root-numanimholder2-0
                >
                  4
                </div>
                <div
                  className="panelSmall0 gradient-text"
                  data-root-numanimholder2-0
                >
                  5
                </div>
                <div
                  className="panelSmall0 gradient-text"
                  data-root-numanimholder2-0
                >
                  6
                </div>
                <div
                  className="panelSmall0 gradient-text"
                  data-root-numanimholder2-0
                >
                  7
                </div>
                <div
                  className="panelSmall0 gradient-text"
                  data-root-numanimholder2-0
                >
                  8
                </div>
                <div
                  className="panelSmall0 gradient-text"
                  data-root-numanimholder2-0
                >
                  9
                </div>
              </div>
            </div>
            <div
              id="numAnimHolder2numAnim1"
              className="numAnimSmall"
              style={{ display: "none" }}
            >
              <div
                className="ringSmall-numAnimHolder2-1 ringSmall1"
                data-slot={0}
                data-root="numAnimHolder2"
              >
                <div
                  className="panelSmall1 gradient-text"
                  data-root-numanimholder2-1
                >
                  0
                </div>
                <div
                  className="panelSmall1 gradient-text"
                  data-root-numanimholder2-1
                >
                  1
                </div>
                <div
                  className="panelSmall1 gradient-text"
                  data-root-numanimholder2-1
                >
                  2
                </div>
                <div
                  className="panelSmall1 gradient-text"
                  data-root-numanimholder2-1
                >
                  3
                </div>
                <div
                  className="panelSmall1 gradient-text"
                  data-root-numanimholder2-1
                >
                  4
                </div>
                <div
                  className="panelSmall1 gradient-text"
                  data-root-numanimholder2-1
                >
                  5
                </div>
                <div
                  className="panelSmall1 gradient-text"
                  data-root-numanimholder2-1
                >
                  6
                </div>
                <div
                  className="panelSmall1 gradient-text"
                  data-root-numanimholder2-1
                >
                  7
                </div>
                <div
                  className="panelSmall1 gradient-text"
                  data-root-numanimholder2-1
                >
                  8
                </div>
                <div
                  className="panelSmall1 gradient-text"
                  data-root-numanimholder2-1
                >
                  9
                </div>
              </div>
            </div>
            <div
              id="numAnimHolder2numAnim2"
              className="numAnimSmall"
              style={{ display: "none" }}
            >
              <div
                className="ringSmall-numAnimHolder2-2 ringSmall2"
                data-slot={0}
                data-root="numAnimHolder2"
              >
                <div
                  className="panelSmall2 gradient-text"
                  data-root-numanimholder2-2
                >
                  0
                </div>
                <div
                  className="panelSmall2 gradient-text"
                  data-root-numanimholder2-2
                >
                  1
                </div>
                <div
                  className="panelSmall2 gradient-text"
                  data-root-numanimholder2-2
                >
                  2
                </div>
                <div
                  className="panelSmall2 gradient-text"
                  data-root-numanimholder2-2
                >
                  3
                </div>
                <div
                  className="panelSmall2 gradient-text"
                  data-root-numanimholder2-2
                >
                  4
                </div>
                <div
                  className="panelSmall2 gradient-text"
                  data-root-numanimholder2-2
                >
                  5
                </div>
                <div
                  className="panelSmall2 gradient-text"
                  data-root-numanimholder2-2
                >
                  6
                </div>
                <div
                  className="panelSmall2 gradient-text"
                  data-root-numanimholder2-2
                >
                  7
                </div>
                <div
                  className="panelSmall2 gradient-text"
                  data-root-numanimholder2-2
                >
                  8
                </div>
                <div
                  className="panelSmall2 gradient-text"
                  data-root-numanimholder2-2
                >
                  9
                </div>
              </div>
            </div>
            <div
              id="numAnimHolder2numAnim3"
              className="numAnimSmall"
              style={{ display: "none" }}
            >
              <div
                className="ringSmall-numAnimHolder2-3 ringSmall3"
                data-slot={0}
                data-root="numAnimHolder2"
              >
                <div
                  className="panelSmall3 gradient-text"
                  data-root-numanimholder2-3
                >
                  0
                </div>
                <div
                  className="panelSmall3 gradient-text"
                  data-root-numanimholder2-3
                >
                  1
                </div>
                <div
                  className="panelSmall3 gradient-text"
                  data-root-numanimholder2-3
                >
                  2
                </div>
                <div
                  className="panelSmall3 gradient-text"
                  data-root-numanimholder2-3
                >
                  3
                </div>
                <div
                  className="panelSmall3 gradient-text"
                  data-root-numanimholder2-3
                >
                  4
                </div>
                <div
                  className="panelSmall3 gradient-text"
                  data-root-numanimholder2-3
                >
                  5
                </div>
                <div
                  className="panelSmall3 gradient-text"
                  data-root-numanimholder2-3
                >
                  6
                </div>
                <div
                  className="panelSmall3 gradient-text"
                  data-root-numanimholder2-3
                >
                  7
                </div>
                <div
                  className="panelSmall3 gradient-text"
                  data-root-numanimholder2-3
                >
                  8
                </div>
                <div
                  className="panelSmall3 gradient-text"
                  data-root-numanimholder2-3
                >
                  9
                </div>
              </div>
            </div>
            <div
              id="numAnimHolder2numAnim4"
              className="numAnimSmall"
              style={{ display: "none" }}
            >
              <div
                className="ringSmall-numAnimHolder2-4 ringSmall4"
                data-slot={0}
                data-root="numAnimHolder2"
              >
                <div
                  className="panelSmall4 gradient-text"
                  data-root-numanimholder2-4
                >
                  0
                </div>
                <div
                  className="panelSmall4 gradient-text"
                  data-root-numanimholder2-4
                >
                  1
                </div>
                <div
                  className="panelSmall4 gradient-text"
                  data-root-numanimholder2-4
                >
                  2
                </div>
                <div
                  className="panelSmall4 gradient-text"
                  data-root-numanimholder2-4
                >
                  3
                </div>
                <div
                  className="panelSmall4 gradient-text"
                  data-root-numanimholder2-4
                >
                  4
                </div>
                <div
                  className="panelSmall4 gradient-text"
                  data-root-numanimholder2-4
                >
                  5
                </div>
                <div
                  className="panelSmall4 gradient-text"
                  data-root-numanimholder2-4
                >
                  6
                </div>
                <div
                  className="panelSmall4 gradient-text"
                  data-root-numanimholder2-4
                >
                  7
                </div>
                <div
                  className="panelSmall4 gradient-text"
                  data-root-numanimholder2-4
                >
                  8
                </div>
                <div
                  className="panelSmall4 gradient-text"
                  data-root-numanimholder2-4
                >
                  9
                </div>
              </div>
            </div>
            <div
              id="numAnimHolder2numAnim5"
              className="numAnimSmall"
              style={{ display: "grid" }}
            >
              <div
                className="ringSmall-numAnimHolder2-5 ringSmall5"
                data-slot={4}
                data-root="numAnimHolder2"
              >
                <div
                  className="panelSmall5 gradient-text"
                  data-root-numanimholder2-5
                >
                  0
                </div>
                <div
                  className="panelSmall5 gradient-text"
                  data-root-numanimholder2-5
                >
                  1
                </div>
                <div
                  className="panelSmall5 gradient-text"
                  data-root-numanimholder2-5
                >
                  2
                </div>
                <div
                  className="panelSmall5 gradient-text"
                  data-root-numanimholder2-5
                >
                  3
                </div>
                <div
                  className="panelSmall5 gradient-text"
                  data-root-numanimholder2-5
                >
                  4
                </div>
                <div
                  className="panelSmall5 gradient-text"
                  data-root-numanimholder2-5
                >
                  5
                </div>
                <div
                  className="panelSmall5 gradient-text"
                  data-root-numanimholder2-5
                >
                  6
                </div>
                <div
                  className="panelSmall5 gradient-text"
                  data-root-numanimholder2-5
                >
                  7
                </div>
                <div
                  className="panelSmall5 gradient-text"
                  data-root-numanimholder2-5
                >
                  8
                </div>
                <div
                  className="panelSmall5 gradient-text"
                  data-root-numanimholder2-5
                >
                  9
                </div>
              </div>
            </div>
            <div id="numAnimHolder2numAnim6" className="numAnimSmall">
              <div
                className="ringSmall-numAnimHolder2-6 ringSmall6"
                data-slot={2}
                data-root="numAnimHolder2"
              >
                <div
                  className="panelSmall6 gradient-text"
                  data-root-numanimholder2-6
                >
                  0
                </div>
                <div
                  className="panelSmall6 gradient-text"
                  data-root-numanimholder2-6
                >
                  1
                </div>
                <div
                  className="panelSmall6 gradient-text"
                  data-root-numanimholder2-6
                >
                  2
                </div>
                <div
                  className="panelSmall6 gradient-text"
                  data-root-numanimholder2-6
                >
                  3
                </div>
                <div
                  className="panelSmall6 gradient-text"
                  data-root-numanimholder2-6
                >
                  4
                </div>
                <div
                  className="panelSmall6 gradient-text"
                  data-root-numanimholder2-6
                >
                  5
                </div>
                <div
                  className="panelSmall6 gradient-text"
                  data-root-numanimholder2-6
                >
                  6
                </div>
                <div
                  className="panelSmall6 gradient-text"
                  data-root-numanimholder2-6
                >
                  7
                </div>
                <div
                  className="panelSmall6 gradient-text"
                  data-root-numanimholder2-6
                >
                  8
                </div>
                <div
                  className="panelSmall6 gradient-text"
                  data-root-numanimholder2-6
                >
                  9
                </div>
              </div>
            </div>
            <div id="numAnimHolder2numAnim7" className="numAnimSmall">
              <div
                className="ringSmall-numAnimHolder2-7 ringSmall7"
                data-slot={5}
                data-root="numAnimHolder2"
              >
                <div
                  className="panelSmall7 gradient-text"
                  data-root-numanimholder2-7
                >
                  0
                </div>
                <div
                  className="panelSmall7 gradient-text"
                  data-root-numanimholder2-7
                >
                  1
                </div>
                <div
                  className="panelSmall7 gradient-text"
                  data-root-numanimholder2-7
                >
                  2
                </div>
                <div
                  className="panelSmall7 gradient-text"
                  data-root-numanimholder2-7
                >
                  3
                </div>
                <div
                  className="panelSmall7 gradient-text"
                  data-root-numanimholder2-7
                >
                  4
                </div>
                <div
                  className="panelSmall7 gradient-text"
                  data-root-numanimholder2-7
                >
                  5
                </div>
                <div
                  className="panelSmall7 gradient-text"
                  data-root-numanimholder2-7
                >
                  6
                </div>
                <div
                  className="panelSmall7 gradient-text"
                  data-root-numanimholder2-7
                >
                  7
                </div>
                <div
                  className="panelSmall7 gradient-text"
                  data-root-numanimholder2-7
                >
                  8
                </div>
                <div
                  className="panelSmall7 gradient-text"
                  data-root-numanimholder2-7
                >
                  9
                </div>
              </div>
            </div>
            <div
              id="numAnimHolder2numAnimD"
              className="numAnimSmall"
              style={{ zIndex: 2, marginRight: "0px" }}
            >
              ,
            </div>
            <div id="numAnimHolder2numAnim8" className="numAnimSmall">
              <div
                className="ringSmall-numAnimHolder2-8 ringSmall8"
                data-slot={3}
                data-root="numAnimHolder2"
              >
                <div
                  className="panelSmall8 gradient-text"
                  data-root-numanimholder2-8
                >
                  0
                </div>
                <div
                  className="panelSmall8 gradient-text"
                  data-root-numanimholder2-8
                >
                  1
                </div>
                <div
                  className="panelSmall8 gradient-text"
                  data-root-numanimholder2-8
                >
                  2
                </div>
                <div
                  className="panelSmall8 gradient-text"
                  data-root-numanimholder2-8
                >
                  3
                </div>
                <div
                  className="panelSmall8 gradient-text"
                  data-root-numanimholder2-8
                >
                  4
                </div>
                <div
                  className="panelSmall8 gradient-text"
                  data-root-numanimholder2-8
                >
                  5
                </div>
                <div
                  className="panelSmall8 gradient-text"
                  data-root-numanimholder2-8
                >
                  6
                </div>
                <div
                  className="panelSmall8 gradient-text"
                  data-root-numanimholder2-8
                >
                  7
                </div>
                <div
                  className="panelSmall8 gradient-text"
                  data-root-numanimholder2-8
                >
                  8
                </div>
                <div
                  className="panelSmall8 gradient-text"
                  data-root-numanimholder2-8
                >
                  9
                </div>
              </div>
            </div>
            <div id="numAnimHolder2numAnim9" className="numAnimSmall">
              <div
                className="ringSmall-numAnimHolder2-9 ringSmall9"
                data-slot={6}
                data-root="numAnimHolder2"
              >
                <div
                  className="panelSmall9 gradient-text"
                  data-root-numanimholder2-9
                >
                  0
                </div>
                <div
                  className="panelSmall9 gradient-text"
                  data-root-numanimholder2-9
                >
                  1
                </div>
                <div
                  className="panelSmall9 gradient-text"
                  data-root-numanimholder2-9
                >
                  2
                </div>
                <div
                  className="panelSmall9 gradient-text"
                  data-root-numanimholder2-9
                >
                  3
                </div>
                <div
                  className="panelSmall9 gradient-text"
                  data-root-numanimholder2-9
                >
                  4
                </div>
                <div
                  className="panelSmall9 gradient-text"
                  data-root-numanimholder2-9
                >
                  5
                </div>
                <div
                  className="panelSmall9 gradient-text"
                  data-root-numanimholder2-9
                >
                  6
                </div>
                <div
                  className="panelSmall9 gradient-text"
                  data-root-numanimholder2-9
                >
                  7
                </div>
                <div
                  className="panelSmall9 gradient-text"
                  data-root-numanimholder2-9
                >
                  8
                </div>
                <div
                  className="panelSmall9 gradient-text"
                  data-root-numanimholder2-9
                >
                  9
                </div>
              </div>
            </div>
          </div>
          <div
            id="jpCurrencyKM"
            style={{
              display: "none",
              fontSize: "18px",
              marginTop: "4px",
              marginRight: "2px",
            }}
            className="gradient-text"
          >
            K
          </div>
          <div id="jpCurrency" className="gradient-text">
            USD
          </div>
        </div>
      </div>
      <div
        id="ruby-box"
        style={{ display: "none", top: "unset", zIndex: 1, opacity: 1 }}
        className="middle animated-element"
      >
        <div className="ruby-content-holder">
          <div className="ruby-box-title" data-trans="useRuby">
            USE RUBY
          </div>
          <div style={{ display: "flex" }} className="ruby-box">
            <div
              id="ruby-box-content"
              style={{ display: "flex", width: "500%" }}
            />
          </div>
        </div>
      </div>
      <div
        id="board"
        style={{ display: "block", top: "134px" }}
        className="verCenter board mobile-disable"
      >
        <div id="board-shema" style={{ height: "418px" }}>
          <div
            className="board-grid grid-board-holder"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            <div
              className="myField animated-element"
              data-sequence={1}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={2}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={3}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={4}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
          </div>
          <div
            className="board-grid grid-board-holder"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            <div
              className="myField animated-element"
              data-sequence={5}
              id={10}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={6}
              id={11}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={7}
              id={12}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={8}
              id={13}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
          </div>
          <div
            className="board-grid grid-board-holder"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            <div
              className="myField animated-element"
              data-sequence={9}
              id={20}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={10}
              id={21}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={11}
              id={22}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={12}
              id={23}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
          </div>
          <div
            className="board-grid grid-board-holder"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            <div
              className="myField animated-element"
              data-sequence={13}
              id={30}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={14}
              id={31}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={15}
              id={32}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={16}
              id={33}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
          </div>
          <div
            className="board-grid grid-board-holder"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            <div
              className="myField animated-element"
              data-sequence={17}
              id={40}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={18}
              id={41}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={19}
              id={42}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={20}
              id={43}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
          </div>
          <div
            className="board-grid grid-board-holder"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            <div
              className="myField animated-element"
              data-sequence={21}
              id={50}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={22}
              id={51}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={23}
              id={52}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
            <div
              className="myField animated-element"
              data-sequence={24}
              id={53}
              data-status="default"
              data-status-prevent="default"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "64.79px",
                opacity: 1,
              }}
            >
              <img className="finalField" src />
              <img
                className="itemShadow"
                src="/shadow.png"
                style={{ top: "52%" }}
              />
              <img className="rock" src="/rock.webp" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="character-box"
        style={{ display: "none" }}
        className="characterVideo zoomOutLeft"
      >
        <video id="character-video" autoPlay muted playsInline>
          <source id="ch1-source1" src type="video/quicktime" />
          <source id="ch1-source3" src type="video/webm" />
          <source id="ch1-source2" src type="video/ogg" />
        </video>
      </div>
      <div
        id="playerHistory"
        style={{ display: "none" }}
        className="verCenter playerHistory"
      >
        <div className="select-box-border-gamerules">
          <div className="tabs-switch">
            <div data-trans="bet_history" className="active history-tab">
              BET HISTORY
            </div>
            <div data-trans="bonusing_history" className="history-tab">
              BONUSING HISTORY
            </div>
          </div>
          <button className="close-icon" />
          <div className="select-box-line-big" />
          <div className="select-box-line-middle" />
          <div className="select-box-line-small" />
          <div className="selectBox">
            <div className="bet-history">
              <h1
                className="selBoxBigTitle"
                data-trans="bet_history"
                style={{ marginBottom: "20px" }}
              >
                BET HISTORY
              </h1>
              <div id="phContent">
                <table className="pay-table history-table">
                  <tbody>
                    <tr>
                      <th data-trans="createdTime">Created time</th>
                      <th data-trans="bet">STAKE</th>
                      <th data-trans="quota">Multiplier</th>
                      <th data-trans="win">WIN</th>
                    </tr>
                    <tr className="row-first">
                      <td className="createdTimeMyBet">24.07.25 14:29</td>
                      <td>0.1 USD</td>
                      <td>3.30</td>
                      <td>
                        <label>0.33</label> USD
                      </td>
                    </tr>
                    <tr className="row-second">
                      <td className="createdTimeMyBet">24.07.25 14:27</td>
                      <td>0.1 USD</td>
                      <td>0.00</td>
                      <td>
                        <label>0</label> USD
                      </td>
                    </tr>
                    <tr className="row-first">
                      <td className="createdTimeMyBet">24.07.25 14:21</td>
                      <td>0.1 USD</td>
                      <td>1.69</td>
                      <td>
                        <label>0.16</label> USD
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bonus-history" style={{ display: "none" }}>
              <h1
                className="selBoxBigTitle"
                data-trans="bonusing_history"
                style={{ marginBottom: "20px" }}
              >
                BONUSING HISTORY
              </h1>
              <div id="bhContent" />
            </div>
          </div>
        </div>
      </div>
      <div id="askFS" style={{ display: "none" }}>
        <div className>
          <div className>
            <div className="not-content">
              <h1 style={{ marginTop: "25vh" }} data-trans="fullscreenAsk">
                For the better user experience the game will start in fullscreen
                mode.
              </h1>
              <div style={{ display: "block", marginBottom: "5%" }}>
                <span style={{ width: "50%", textAlign: "center" }}>
                  <button
                    style={{ cursor: "pointer" }}
                    className="Btns"
                    data-trans="allow"
                  >
                    Allow
                  </button>
                </span>
                <span style={{ width: "50%", textAlign: "center" }}>
                  <button
                    style={{ cursor: "pointer" }}
                    className="Btns"
                    data-trans="deny"
                  >
                    Deny
                  </button>
                </span>
              </div>
              <img src="/logo.webp" />
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .paytables {\n          height: 100%;\n        }\n\n        #ptContent {\n          overflow: auto;\n        }\n      ",
        }}
      />
      <div
        id="paytables"
        style={{ display: "none", zIndex: 13 }}
        className="verCenter paytables"
      >
        <div className="select-box-border-gamerules paytables-popup">
          <button className="close-icon" />
          <div className="select-box-line-big" />
          <div className="select-box-line-middle" />
          <div className="select-box-line-small" />
          <div
            className="selectBox"
            style={{ height: "-webkit-fill-available", overflow: "auto" }}
          >
            <h1
              className="selBoxBigTitle"
              data-trans="paytables"
              style={{ marginBottom: "20px" }}
            >
              Paytable
            </h1>
            <div id="ptContent" className="paytable-content-holder" />
          </div>
        </div>
      </div>
      <div id="mobile-nav" className="mobileNav" style={{ display: "block" }}>
        <div className="horCenter">
          <div className="mobile-nav-btn active" data-trans="findGold">
            FIND GOLD
          </div>
          <div
            id="mobNavProspectors"
            className="mobile-nav-btn"
            data-trans="topProspectors"
          >
            TOP PROSPECTORS
          </div>
        </div>
      </div>
      <div
        id="bottom-bar"
        style={{ display: "none", opacity: 1 }}
        className="animated-element bottom-bar"
      >
        <div className="bottom-content">
          <div className="balance">
            <img id="moneyBag" src="/money-bag.png" alt="money bag" />
            <div className="balance-holder desktop_">
              <div id="nickname">Lee130</div>
              <span data-trans="balance">BALANCE</span>
              <div>
                <span id="bBalance">10215.19</span>&nbsp;
                <span id="bCurrency">USD</span>
              </div>
            </div>
            <div>
              <img
                id="bottomBarAvatarImg"
                style={{ margin: "auto", marginLeft: "5px", marginTop: "3px" }}
                width={45}
                height={45}
                src="/0.svg"
              />
            </div>
          </div>
          <div className="copyright">
            <div
              id="FSCLOCK"
              style={{
                width: "50%",
                textAlign: "end",
                display: "block",
                position: "relative",
                left: "-10px",
                top: "0px",
                color: "white",
                background: "transparent",
              }}
            >
              2:33:14 PM
            </div>
            <div>Copyright © Elbet 2024</div>
          </div>
          <div className="bottombar-btns-holder">
            <button id="statusBtn" className="bottombar-btn">
              No active ticket
            </button>
            <img
              style={{ margin: "auto", marginLeft: "7px", cursor: "pointer" }}
              width={20}
              height={20}
              src="/fs.png"
            />
          </div>
        </div>
      </div>
      <div id="tooltip" style={{ display: "none" }} className="tooltip">
        <div className="verCenter menuField">
          <p className="subP MiddleTextSize" data-trans="balance">
            BALANCE
          </p>
          <p id="hoverBalanceValue" className="MiddleTextSize2">
            10215.199
          </p>
        </div>
      </div>
      <div
        id="balance-mobile"
        style={{ display: "block", opacity: 1 }}
        className="animated-element"
      >
        <div className="balance">
          <img id="moneyBagMobile" src="/money-bag.png" alt="money bag" />
          <div className="balance-holder mobile_">
            <div id="nicknameMob" style={{ marginBottom: "5px" }}>
              Lee130
            </div>
            <div>
              <span id="bBalanceMobile">10215.19</span>&nbsp;
              <span id="bCurrencyMobile">USD</span>
            </div>
          </div>
          <img
            id="bottomBarAvatarImgMob"
            className="mobile-avatar"
            width={45}
            height={45}
            src="/0.svg"
          />
        </div>
      </div>
      <div
        id="select-box"
        style={{ display: "none" }}
        className="select-box-border"
      >
        <button id="closeSelectBoxBtn" className="close-icon" />
        <div className="select-box-line-big" />
        <div className="select-box-line-middle" />
        <div className="select-box-line-small" />
        <div className="selectBox">
          <h1 className="selBoxBigTitle" data-trans="selectBox">
            Choose difficulty
          </h1>
          <h4 className="selBoxText" data-trans="selectBoxTitle">
            Where would you like to mine?
          </h4>
          <div className="horCenterSelBox myRadius">
            <div
              id="select-easy"
              className="animatedLevelCard1 selectBoxItem Easy"
            >
              <div data-trans="easy" className="selectBoxItemContent">
                Easy
              </div>
              <div className="hoverBottom">
                <h3 className="selBoxTile">
                  16 <span data-trans="tile">Tile</span>
                  <span data-trans="easy">Easy</span>
                </h3>
                <h1 className="selBoxTextLevel" data-trans="opulentValley">
                  Opulent Valley
                </h1>
                <button
                  id="easyField"
                  style={{ display: "none" }}
                  data-trans="playThisLevel"
                  className="bet-box-holder Btns"
                >
                  Play this level
                </button>
              </div>
            </div>
            <div
              id="select-medium"
              className="animatedLevelCard2 selectBoxItem Mid"
            >
              <div data-trans="medium" className="selectBoxItemContent">
                Medium
              </div>
              <div className="hoverBottom">
                <h3 className="selBoxTile">
                  24 <span data-trans="tile">Tile</span>
                  <span data-trans="medium">Medium</span>
                </h3>
                <h1 className="selBoxTextLevel" data-trans="riskyValley">
                  Risky Valley
                </h1>
                <button
                  id="mediumField"
                  style={{ display: "none" }}
                  data-trans="playThisLevel"
                  className="bet-box-holder Btns"
                >
                  Play this level
                </button>
              </div>
            </div>
            <div
              id="select-hard"
              className="animatedLevelCard3 selectBoxItem Hard"
            >
              <div data-trans="hard" className="selectBoxItemContent">
                Hard
              </div>
              <div className="hoverBottom">
                <h3 className="selBoxTile">
                  28 <span data-trans="tile">Tile</span>
                  <span data-trans="hard">Hard</span>
                </h3>
                <h1 className="selBoxTextLevel" data-trans="deathValley">
                  Death Valley
                </h1>
                <button
                  id="hardField"
                  style={{ display: "none" }}
                  data-trans="playThisLevel"
                  className="bet-box-holder Btns"
                >
                  Play this level
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="useRubyPopup"
        style={{ display: "none", overflow: "visible" }}
        className="verCenter useRubyPopup"
      >
        <div className="select-box-border ruby-box-popup">
          <img id="bigRubyImg" src className="bigRubiPopup" />
          <button className="close-icon" />
          <div className="stripes-holder">
            <div className="select-box-line-big" />
            <div className="select-box-line-middle" />
            <div className="select-box-line-small" />
          </div>
          <div className="selectBox">
            <h1 className="selBoxBigTitle" data-trans="useThisRuby">
              USE THIS RUBY?
            </h1>
            <h4 className="selBoxText" data-trans="useThisRubyText">
              You will play a free game with the amount that is writen bellow:
            </h4>
            <div id="rubyItemCenter" />
            <h2 className="useRubyPopupLabel" data-trans="useThisRubyText2">
              You will have
              <span className="ruby-left">
                <span id="rubyLeft" /> <b>left.</b>
              </span>
            </h2>
            <button className="activate-ruby-btn" data-trans="activateRuby">
              ACTIVATE THE RUBY
            </button>
          </div>
        </div>
      </div>
      <div id="balloon-box" style={{ display: "none" }} className="balloonBox">
        <img className="ballon-edge" src="/buble-edge.png" alt="balloon-edge" />
        <p data-trans="balloonStartDigging">
          <span className="baloon-title">START DIGGING PROSPECTORS</span> <br />
          Lets find some gold, rubies or diamonds! Just be carefull not to hit
          those darn dynamites.
        </p>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .gameRules {\n          z-index: 3;\n          height: 100%;\n        }\n      ",
        }}
      />
      <div
        id="gameRules"
        style={{ display: "none" }}
        className="verCenter gameRules"
      >
        <div className="select-box-border-gamerules">
          <button className="close-icon" />
          <div className="select-box-line-big" />
          <div className="select-box-line-middle" />
          <div className="select-box-line-small" />
          <div className="selectBox">
            <div className="game-rules-row">
              {/* <img class="rules-character" src="" /> */}
              <div className="selBoxText">
                <h3 style={{ textAlign: "left" }} data-trans="grGeneral">
                  General
                </h3>
                <p data-trans="grGeneral1">
                  Goal of the game is to reveal gold and avoid dynamite. With
                  each revealed gold field, payout multiplier increases. Tiles
                  can be revealed by selecting certain tile.
                </p>
                <p data-trans="grGeneral2">
                  Player can cash out winnings at any time by clicking “Cashout”
                  button.
                </p>
                <p data-trans="grGeneral3">
                  Number of dynamites per field can be adjusted from dropdown.
                  This affects game odds and bet multiplier.
                </p>
                <p data-trans="grGeneral4">
                  The maximum winning odds for this game depends on the size of
                  the grid and number of dynamites on the grid. Odds table can
                  be seen in the “Odds Table” section of the menu.
                </p>
                <p data-trans="grGeneral5">
                  Minimum number of Dynamites on grid is 4. Maximum number of
                  Dynamites on the grid is two less than the grid size.
                </p>
                <p data-trans="grGeneral6">
                  In Menu section HELP, there is short graphical tutorial how to
                  choose levels and play the game.
                </p>
              </div>
            </div>
            <div className="game-rules-row">
              <div className="selBoxText">
                <h3 style={{ textAlign: "left" }} data-trans="grInterface">
                  Game Interface
                </h3>
                <ul>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grInterface1">
                      Bets can be made from the bet panel, by selecting
                      predefined bet amounts, or entering your own. Click (-) or
                      (+) buttons to move between bet options.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grInterface2">
                      Player balance shows available funds to play.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grInterface3">
                      Sound can be turned off and back on from game menu.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grInterface4">
                      Bet history can be accessed from game menu.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grInterface5">
                      Game information and rules can be accessed from game menu.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grInterface6">
                      By clicking on the “My Bet History” button in a menu, a
                      player may review his latest bets.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="game-rules-row">
              <div className="selBoxText">
                <h3 style={{ textAlign: "left" }} data-trans="grSSymbols">
                  Special Promo Symbols
                </h3>
                <ul>
                  <li id="hiddenJpLi" style={{ display: "none" }}>
                    <p style={{ margin: 0 }} data-trans="grSSymbols1">
                      “Diamond” - Player that reveals a “Diamond” symbol on the
                      grid will win the progressive jackpot.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grSSymbols2">
                      “Ruby” - Player that reveals a “Ruby” symbol on the grid
                      will receive a free bet with the stake of the original bet
                      that was used in the game where the Ruby symbol was
                      uncovered.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grSSymbols21">
                      Free bet does not contribute to a progressive jackpot
                      fund. The jackpot cannot be won with a free bet.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grSSymbols3">
                      “Lantern” - Player that reveals a “Lantern” symbol will
                      reveal one Dynamite symbol on the grid.
                    </p>
                  </li>
                </ul>
                <p style={{ margin: 0 }} data-trans="grSSymbols4">
                  Note: Special symbols need to be revealed by the player in
                  order to claim the reward.
                </p>
              </div>
            </div>
            <div className="game-rules-row" id="game-rules-text">
              <div className="selBoxText">
                <h3 style={{ textAlign: "left" }} data-trans="grAutoPlay">
                  Auto Play
                </h3>
                <ul>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grAutoPlay2">
                      Autoplay is activated by pressing the “Autoplay” button.
                      To continue tiles on the board should be selected and
                      number of rounds set.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grAutoPlay3">
                      Maximum number of auto play rounds is 100.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grAutoPlay4">
                      When tiles on the board are selected and number of rounds
                      set pressing “Auto Play” button activates Auto play.
                    </p>
                  </li>
                </ul>
                {/* <p style="margin: 0;" data-trans="grAutoPlay1"></p> */}
              </div>
            </div>
            <div className="game-rules-row">
              <div className="selBoxText">
                <h3 style={{ textAlign: "left" }} data-trans="grAdditionalInfo">
                  Additional Information
                </h3>
                <ul>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grAdditionalInfo2">
                      Inactive games will be forfeited in 2 minutes. If no
                      fields are open on the grid, bet will be canceled and
                      funds refunded to the player. If any field is open on the
                      grid, the game will be automatically cashed out.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="grAdditionalInfo3">
                      If the internet connection is interrupted when the bet is
                      active, the game will auto cash out with the current
                      multiplier after the two minute period elapses, and the
                      winning amount will be added to your balance.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="game-rules-row">
              <div className="selBoxText">
                <h3 style={{ textAlign: "left" }} data-trans="freeBetFeature">
                  Free Bet Feature
                </h3>
                <ul>
                  <li>
                    <p style={{ margin: 0 }} data-trans="freeBetFeature1">
                      Ruby Symbol: When a ruby symbol appears, you are awarded a
                      free bet.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="freeBetFeature2">
                      Random Occurrence: The ruby symbol can appear at any time
                      during gameplay. When it is revealed player is awarded
                      with one free bet with amount of current bet.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="freeBetFeature3">
                      Using Free Bets: Free bets can be used in any round, just
                      like a regular bet, but they do not cost any money.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="progressiveJpHolder"
              className="game-rules-row"
              style={{ display: "none" }}
            >
              <div className="selBoxText">
                <h3
                  style={{ textAlign: "left" }}
                  data-trans="progressiveJackpot"
                >
                  Progressive Jackpot
                </h3>
                <ul className="no-bullets">
                  <li>
                    <p style={{ margin: 0 }} data-trans="progressiveJackpot1">
                      From each stake 0.4% is dedicated to a progressive jackpot
                      fund. This fund serves progressive jackpot system.
                    </p>
                  </li>
                  <li>
                    <p style={{ margin: 0 }} data-trans="progressiveJackpot2">
                      Jackpot is awarded using a “Mystery” or “must-hit-by”
                      mechanics. The value of every “must-hit-by” jackpot is
                      determined immediately after the preceding jackpot is won
                      by a random number generator and stored as an encrypted
                      value in the remote database. The value is encrypted, and
                      thus hidden and is not known. When jackpot reach mystery
                      value, “diamond” (jackpot) is available as chance for a
                      player to reveal it. If a player reveals “diamond” symbol,
                      he will win the jackpot and if not, first next game from
                      some player will have same chance for Jackpot (“diamond”).
                    </p>
                  </li>
                </ul>
                <p style={{ margin: 0 }} data-trans="progressiveJackpot3">
                  Note: Jackpot winner can be only one single player actively
                  playing. There is no possibility that if the player have won
                  the jackpot, would have to share it with any other player.
                </p>
              </div>
            </div>
            <div className="game-rules-row">
              <div className="selBoxText">
                <h3 style={{ textAlign: "left" }} data-trans="rtp">
                  Return to Player
                </h3>
                <p style={{ margin: 0 }}>
                  <label
                    id="showJpText"
                    data-trans="rtp1"
                    style={{ display: "none" }}
                  >
                    The overall theoretical return to player (RTP), including
                    jackpot and promo symbols is
                  </label>
                  <label
                    id="hideJpText"
                    data-trans="rtp1.1"
                    style={{ display: "inline-block" }}
                  >
                    The overall theoretical return to player (RTP), including
                    promo symbols is
                  </label>
                  <label id="companyRTP">95.00</label>%.
                  <label data-trans="rtp2">
                    The RTP percentages are continuously monitored and verified
                    by independent third parties.
                  </label>
                </p>
              </div>
            </div>
            <div className="game-rules-row">
              <div className="selBoxText">
                <p style={{ margin: 0 }}>
                  <label data-trans="grGeneral7">Max bet is </label>
                  <label id="companyMax">1,000.00 USD</label>.
                </p>
                <p style={{ margin: 0 }}>
                  <label data-trans="grGeneral8">Min bet is </label>
                  <label id="companyMin">0.02 USD</label>.
                </p>
                <p style={{ margin: 0 }}>
                  <label data-trans="grGeneral9">Maximum payout is </label>
                  <label id="companyMaxPay">10,000.00 USD</label>
                  <label data-trans="grGeneral10">per bet.</label>
                </p>
                <p style={{ margin: 0, color: "red" }}>
                  <label data-trans="grGeneral11">
                    Malfunction voids all Pays and Plays.
                  </label>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .provablyFair {\n          z-index: 3;\n          height: 100%;\n        }\n      ",
        }}
      />
      <div
        id="provablyFair"
        style={{ display: "none" }}
        className="verCenter provablyFair bg-primary"
      >
        <h1 data-trans="fair">Choose Difficulty</h1>
        <div>
          --------------------- ADD provablyFair CONTENT ---------------------
        </div>
        <button>Hide</button>
      </div>
      <div id="help" style={{ display: "none" }}>
        <div className="select-box-border">
          <button className="close-icon" />
          <div className="select-box-line-big" />
          <div className="select-box-line-middle" />
          <div className="select-box-line-small" />
          <div className="selectBox">
            <div id="help-content" />
            <div className="help-nav">
              <div className="activeIndicator">
                <div className="indicator active" />
                <div className="indicator" />
                <div className="indicator" />
              </div>
              <div className="web-btns">
                <button id="skipbtn2" className="skipBack" />
                <button className="nextButton" />
              </div>
            </div>
          </div>
        </div>
        <div
          id="mobileBtns"
          style={{ display: "none" }}
          className="mobile-btns"
        >
          <button id="skipbtn" className="skipBack" data-trans="skip">
            Skip
          </button>
          <button className="nextButton" data-trans="next">
            Next
          </button>
        </div>
      </div>
      <div
        id="jackpotPopup"
        style={{ display: "none" }}
        className="verCenter jpPopup"
      >
        <video className id="jackpot-video" autoPlay muted loop>
          <source
            id="jackpot-bg"
            src="assets/themes/default/videos/ori.webm"
            type="video/webm"
          />
        </video>
        <div className="select-box-border ruby-box-popup jackpot-popup">
          <img
            id="bigDiamondImg"
            src="/diamond-shine.png"
            className="bigRubiPopup"
          />
          <div className="stripes-holder">
            <div className="select-box-line-big" />
            <div className="select-box-line-middle" />
            <div className="select-box-line-small" />
          </div>
          <div className="selectBox">
            <h4 className="selBoxText" data-trans="youHaveWin">
              You have a win!
            </h4>
            <h1 className="selBoxBigTitle" data-trans="goldRushJP">
              Gold Rush Jackpot
            </h1>
            <h4 className="selBoxText" data-trans="amount">
              Amount:
            </h4>
            <div id="numAnimHolder1-holder" className="horCenter numAnimHolder">
              <div
                id="numAnimHolder1numAnim0"
                className="numAnim"
                style={{ display: "none" }}
              >
                <div
                  className="ring-numAnimHolder1-0 ring0"
                  data-slot={0}
                  data-root="numAnimHolder1"
                >
                  <div className="panel0" data-root-numanimholder1-0>
                    0
                  </div>
                  <div className="panel0" data-root-numanimholder1-0>
                    1
                  </div>
                  <div className="panel0" data-root-numanimholder1-0>
                    2
                  </div>
                  <div className="panel0" data-root-numanimholder1-0>
                    3
                  </div>
                  <div className="panel0" data-root-numanimholder1-0>
                    4
                  </div>
                  <div className="panel0" data-root-numanimholder1-0>
                    5
                  </div>
                  <div className="panel0" data-root-numanimholder1-0>
                    6
                  </div>
                  <div className="panel0" data-root-numanimholder1-0>
                    7
                  </div>
                  <div className="panel0" data-root-numanimholder1-0>
                    8
                  </div>
                  <div className="panel0" data-root-numanimholder1-0>
                    9
                  </div>
                </div>
              </div>
              <div
                id="numAnimHolder1numAnim1"
                className="numAnim"
                style={{ display: "none" }}
              >
                <div
                  className="ring-numAnimHolder1-1 ring1"
                  data-slot={0}
                  data-root="numAnimHolder1"
                >
                  <div className="panel1" data-root-numanimholder1-1>
                    0
                  </div>
                  <div className="panel1" data-root-numanimholder1-1>
                    1
                  </div>
                  <div className="panel1" data-root-numanimholder1-1>
                    2
                  </div>
                  <div className="panel1" data-root-numanimholder1-1>
                    3
                  </div>
                  <div className="panel1" data-root-numanimholder1-1>
                    4
                  </div>
                  <div className="panel1" data-root-numanimholder1-1>
                    5
                  </div>
                  <div className="panel1" data-root-numanimholder1-1>
                    6
                  </div>
                  <div className="panel1" data-root-numanimholder1-1>
                    7
                  </div>
                  <div className="panel1" data-root-numanimholder1-1>
                    8
                  </div>
                  <div className="panel1" data-root-numanimholder1-1>
                    9
                  </div>
                </div>
              </div>
              <div id="numAnimHolder1numAnim2" className="numAnim">
                <div
                  className="ring-numAnimHolder1-2 ring2"
                  data-slot={0}
                  data-root="numAnimHolder1"
                >
                  <div className="panel2" data-root-numanimholder1-2>
                    0
                  </div>
                  <div className="panel2" data-root-numanimholder1-2>
                    1
                  </div>
                  <div className="panel2" data-root-numanimholder1-2>
                    2
                  </div>
                  <div className="panel2" data-root-numanimholder1-2>
                    3
                  </div>
                  <div className="panel2" data-root-numanimholder1-2>
                    4
                  </div>
                  <div className="panel2" data-root-numanimholder1-2>
                    5
                  </div>
                  <div className="panel2" data-root-numanimholder1-2>
                    6
                  </div>
                  <div className="panel2" data-root-numanimholder1-2>
                    7
                  </div>
                  <div className="panel2" data-root-numanimholder1-2>
                    8
                  </div>
                  <div className="panel2" data-root-numanimholder1-2>
                    9
                  </div>
                </div>
              </div>
              <div id="numAnimHolder1numAnim3" className="numAnim">
                <div
                  className="ring-numAnimHolder1-3 ring3"
                  data-slot={0}
                  data-root="numAnimHolder1"
                >
                  <div className="panel3" data-root-numanimholder1-3>
                    0
                  </div>
                  <div className="panel3" data-root-numanimholder1-3>
                    1
                  </div>
                  <div className="panel3" data-root-numanimholder1-3>
                    2
                  </div>
                  <div className="panel3" data-root-numanimholder1-3>
                    3
                  </div>
                  <div className="panel3" data-root-numanimholder1-3>
                    4
                  </div>
                  <div className="panel3" data-root-numanimholder1-3>
                    5
                  </div>
                  <div className="panel3" data-root-numanimholder1-3>
                    6
                  </div>
                  <div className="panel3" data-root-numanimholder1-3>
                    7
                  </div>
                  <div className="panel3" data-root-numanimholder1-3>
                    8
                  </div>
                  <div className="panel3" data-root-numanimholder1-3>
                    9
                  </div>
                </div>
              </div>
              <div id="numAnimHolder1numAnim4" className="numAnim">
                <div
                  className="ring-numAnimHolder1-4 ring4"
                  data-slot={0}
                  data-root="numAnimHolder1"
                >
                  <div className="panel4" data-root-numanimholder1-4>
                    0
                  </div>
                  <div className="panel4" data-root-numanimholder1-4>
                    1
                  </div>
                  <div className="panel4" data-root-numanimholder1-4>
                    2
                  </div>
                  <div className="panel4" data-root-numanimholder1-4>
                    3
                  </div>
                  <div className="panel4" data-root-numanimholder1-4>
                    4
                  </div>
                  <div className="panel4" data-root-numanimholder1-4>
                    5
                  </div>
                  <div className="panel4" data-root-numanimholder1-4>
                    6
                  </div>
                  <div className="panel4" data-root-numanimholder1-4>
                    7
                  </div>
                  <div className="panel4" data-root-numanimholder1-4>
                    8
                  </div>
                  <div className="panel4" data-root-numanimholder1-4>
                    9
                  </div>
                </div>
              </div>
              <div id="numAnimHolder1numAnim5" className="numAnim">
                <div
                  className="ring-numAnimHolder1-5 ring5"
                  data-slot={0}
                  data-root="numAnimHolder1"
                >
                  <div className="panel5" data-root-numanimholder1-5>
                    0
                  </div>
                  <div className="panel5" data-root-numanimholder1-5>
                    1
                  </div>
                  <div className="panel5" data-root-numanimholder1-5>
                    2
                  </div>
                  <div className="panel5" data-root-numanimholder1-5>
                    3
                  </div>
                  <div className="panel5" data-root-numanimholder1-5>
                    4
                  </div>
                  <div className="panel5" data-root-numanimholder1-5>
                    5
                  </div>
                  <div className="panel5" data-root-numanimholder1-5>
                    6
                  </div>
                  <div className="panel5" data-root-numanimholder1-5>
                    7
                  </div>
                  <div className="panel5" data-root-numanimholder1-5>
                    8
                  </div>
                  <div className="panel5" data-root-numanimholder1-5>
                    9
                  </div>
                </div>
              </div>
              <div id="numAnimHolder1numAnim6" className="numAnim">
                <div
                  className="ring-numAnimHolder1-6 ring6"
                  data-slot={0}
                  data-root="numAnimHolder1"
                >
                  <div className="panel6" data-root-numanimholder1-6>
                    0
                  </div>
                  <div className="panel6" data-root-numanimholder1-6>
                    1
                  </div>
                  <div className="panel6" data-root-numanimholder1-6>
                    2
                  </div>
                  <div className="panel6" data-root-numanimholder1-6>
                    3
                  </div>
                  <div className="panel6" data-root-numanimholder1-6>
                    4
                  </div>
                  <div className="panel6" data-root-numanimholder1-6>
                    5
                  </div>
                  <div className="panel6" data-root-numanimholder1-6>
                    6
                  </div>
                  <div className="panel6" data-root-numanimholder1-6>
                    7
                  </div>
                  <div className="panel6" data-root-numanimholder1-6>
                    8
                  </div>
                  <div className="panel6" data-root-numanimholder1-6>
                    9
                  </div>
                </div>
              </div>
              <div id="numAnimHolder1numAnim7" className="numAnim">
                <div
                  className="ring-numAnimHolder1-7 ring7"
                  data-slot={0}
                  data-root="numAnimHolder1"
                >
                  <div className="panel7" data-root-numanimholder1-7>
                    0
                  </div>
                  <div className="panel7" data-root-numanimholder1-7>
                    1
                  </div>
                  <div className="panel7" data-root-numanimholder1-7>
                    2
                  </div>
                  <div className="panel7" data-root-numanimholder1-7>
                    3
                  </div>
                  <div className="panel7" data-root-numanimholder1-7>
                    4
                  </div>
                  <div className="panel7" data-root-numanimholder1-7>
                    5
                  </div>
                  <div className="panel7" data-root-numanimholder1-7>
                    6
                  </div>
                  <div className="panel7" data-root-numanimholder1-7>
                    7
                  </div>
                  <div className="panel7" data-root-numanimholder1-7>
                    8
                  </div>
                  <div className="panel7" data-root-numanimholder1-7>
                    9
                  </div>
                </div>
              </div>
              <div
                id="numAnimHolder1numAnimD"
                className="numAnim"
                style={{ margin: "0px", fontSize: "40px" }}
              >
                ,
              </div>
              <div id="numAnimHolder1numAnim8" className="numAnim">
                <div
                  className="ring-numAnimHolder1-8 ring8"
                  data-slot={0}
                  data-root="numAnimHolder1"
                >
                  <div className="panel8" data-root-numanimholder1-8>
                    0
                  </div>
                  <div className="panel8" data-root-numanimholder1-8>
                    1
                  </div>
                  <div className="panel8" data-root-numanimholder1-8>
                    2
                  </div>
                  <div className="panel8" data-root-numanimholder1-8>
                    3
                  </div>
                  <div className="panel8" data-root-numanimholder1-8>
                    4
                  </div>
                  <div className="panel8" data-root-numanimholder1-8>
                    5
                  </div>
                  <div className="panel8" data-root-numanimholder1-8>
                    6
                  </div>
                  <div className="panel8" data-root-numanimholder1-8>
                    7
                  </div>
                  <div className="panel8" data-root-numanimholder1-8>
                    8
                  </div>
                  <div className="panel8" data-root-numanimholder1-8>
                    9
                  </div>
                </div>
              </div>
              <div id="numAnimHolder1numAnim9" className="numAnim">
                <div
                  className="ring-numAnimHolder1-9 ring9"
                  data-slot={0}
                  data-root="numAnimHolder1"
                >
                  <div className="panel9" data-root-numanimholder1-9>
                    0
                  </div>
                  <div className="panel9" data-root-numanimholder1-9>
                    1
                  </div>
                  <div className="panel9" data-root-numanimholder1-9>
                    2
                  </div>
                  <div className="panel9" data-root-numanimholder1-9>
                    3
                  </div>
                  <div className="panel9" data-root-numanimholder1-9>
                    4
                  </div>
                  <div className="panel9" data-root-numanimholder1-9>
                    5
                  </div>
                  <div className="panel9" data-root-numanimholder1-9>
                    6
                  </div>
                  <div className="panel9" data-root-numanimholder1-9>
                    7
                  </div>
                  <div className="panel9" data-root-numanimholder1-9>
                    8
                  </div>
                  <div className="panel9" data-root-numanimholder1-9>
                    9
                  </div>
                </div>
              </div>
            </div>
            <div
              id="jpCurrencyKMpopup"
              style={{ display: "none" }}
              className="gradient-text"
            >
              K
            </div>
            <button
              style={{ cursor: "pointer", zIndex: 2 }}
              className="activate-ruby-btn"
              data-trans="finishGame"
            >
              Finish current game
            </button>
          </div>
        </div>
      </div>
      <div id="howToPlay" style={{ display: "none" }}>
        <div className="htp-arrow">
          <img src="/arrow-big.png" alt="arrow" />
        </div>
        <p className="htp-text fadeInDown" data-trans="htp-text">
          Enter <span>bet amount</span> and/or add more
          <span>dynamite</span> for bigger payoff chance!
        </p>
      </div>
      <div
        id="popupAutoPlay"
        style={{ display: "none", zIndex: 15 }}
        className="verCenter paytables"
      >
        <div className="select-box-border-gamerules paytables-popup">
          <button className="close-icon" />
          <div className="select-box-line-big" />
          <div className="select-box-line-middle" />
          <div className="select-box-line-small" />
          <div
            className="selectBox"
            style={{ height: "-webkit-fill-available", overflow: "auto" }}
          >
            <h1
              className="selBoxBigTitle"
              data-trans="auto"
              style={{ marginBottom: "20px" }}
            >
              Autoplay
            </h1>
            <div id="ptContent1" className="autoplay-popup-content">
              <span className="paytable-content" data-trans="autoplaytitle">
                Choose how many rounds you want your game to run automatically
              </span>
              <div
                id="preferedAutoPlayBtns"
                className="prefered-auto-btns"
                style={{}}
              >
                <button id="defaultAutoPlayPrefered" className="ruby-price">
                  5
                </button>
                <button className="ruby-price">10</button>
                <button className="ruby-price">20</button>
                <button className="ruby-price">50</button>
                <button className="ruby-price">100</button>
              </div>
              <button className="autoplaypopupBtn" data-trans="startautoplay">
                Start Autoplay
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="popupChangeNickname"
        style={{ display: "none", zIndex: 15 }}
        className="verCenter paytables"
      >
        <div className="select-box-border-gamerules paytables-popup">
          <button className="close-icon" />
          <div className="select-box-line-big" />
          <div className="select-box-line-middle" />
          <div className="select-box-line-small" />
          <div
            className="selectBox"
            style={{ height: "-webkit-fill-available", overflow: "auto" }}
          >
            <h1
              className="selBoxBigTitle"
              data-trans="username"
              style={{ marginBottom: "20px" }}
            >
              Change username
            </h1>
            <div id="ptContent2" className="autoplay-popup-content">
              <span className="paytable-content" data-trans="nicknameText">
                Please enter desired username
              </span>
              <div id="nick" className="prefered-auto-btns" style={{}}>
                <input
                  style={{ width: "50%", minWidth: "190px" }}
                  id="newNickname"
                  className="bet-box-holder heightOfInput"
                />
                <div
                  style={{ paddingTop: "5px", color: "red" }}
                  id="nicknameErrorLog"
                />
              </div>
              <button
                style={{ width: "150px" }}
                className="autoplaypopupBtn"
                data-trans="ok"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="popupTopJackpot"
        style={{ display: "none", zIndex: 15 }}
        className="verCenter paytables"
      >
        <div className="select-box-border-gamerules">
          <button className="close-icon" />
          <div className="select-box-line-big" />
          <div className="select-box-line-middle" />
          <div className="select-box-line-small" />
          <div
            className="selectBox"
            style={{ height: "-webkit-fill-available", overflow: "auto" }}
          >
            <h1
              data-trans="jpHistory"
              className="selBoxBigTitle"
              style={{ marginBottom: "20px" }}
            >
              Jackpot History
            </h1>
            <div id="ptContent4" className="autoplay-popup-content" />
          </div>
        </div>
      </div>
      <div
        id="popupChangeAvatar"
        style={{ display: "none", zIndex: 15 }}
        className="verCenter playerHistory"
      >
        <div className="select-box-border-gamerules">
          <button className="close-icon" />
          <div className="select-box-line-big" />
          <div className="select-box-line-middle" />
          <div className="select-box-line-small" />
          <div
            className="selectBox"
            style={{ height: "-webkit-fill-available", overflow: "auto" }}
          >
            <h1
              className="selBoxBigTitle"
              data-trans="changeAvatar"
              style={{ marginBottom: "20px" }}
            >
              Change avatar
            </h1>
            <div
              className="autoplay-popup-content"
              style={{ marginBottom: "15px" }}
            >
              <span className="paytable-content" data-trans="changeAvatarText">
                Pick your avatar image
              </span>
              <div
                id="ptContent3"
                className
                style={{
                  textAlign: "center",
                  height: "45vh",
                  overflow: "auto",
                  overflowX: "hidden",
                }}
              />
            </div>
            <button
              style={{ width: "150px" }}
              className="autoplaypopupBtn"
              data-trans="ok"
            >
              OK
            </button>
          </div>
        </div>
      </div>
      <div id="errorPopup" style={{ display: "none" }}>
        <div className>
          <div className="error-content errorTitle">
            <h1 data-trans="elbetGoldMines">Elbet Gold Mines</h1>
            <h2 id="M0" data-trans="network_error">
              undefined
            </h2>
            <h2 id="M1">
              Please try latter or check your internet connection.
            </h2>
            <h3 id="M2">
              Goldmines will refresh page in
              <span id="reconnectCounter">5</span> seconds...
            </h3>
            <img src="/logo.webp" />
          </div>
        </div>
      </div>
      <div
        id="prospectors"
        style={{ display: "none" }}
        className="verCenter prospectors"
      >
        <div className="prospectors-title label-move">
          <span
            className="animated-element"
            data-trans="topProspectors"
            style={{ opacity: 1 }}
          >
            TOP PROSPECTORS
          </span>
          <span
            className="animated-element"
            data-trans="inLastDays"
            style={{ opacity: 1 }}
          >
            In last <span id="days">7</span> days.
          </span>
        </div>
        <div id="pContent" className="pContent">
          <div className="horCenter prospector prospectors-top">
            <div className="prospectors-left" style={{ display: "flex" }}>
              <div className="subItemIcon middle">
                <div className="top-avatar">
                  <img className="avatar-hat" src="/hat.png" alt="hat" />
                  <img
                    width={32}
                    height={32}
                    data-avatar={0}
                    src="/0.svg"
                    alt="avatar"
                  />
                  <div className="avatar-star">1</div>
                </div>
              </div>
              <div className="prospector-user-holder">
                <div className="prospector-valley top">Risky Valley</div>
                <div data-username="Otto941" className="prospector-username">
                  <span>Otto941</span>
                  <img width="22px" height="12px" src="/rs.svg" alt="flag" />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="prospector-bet top">
                <div className="prospector-bet-title" data-trans="quota">
                  Multiplier
                </div>
                <div data-win="262.2" className="prospector-bet-amount">
                  262.2
                </div>
              </div>
            </div>
          </div>
          <div className="horCenter prospector prospectors-top">
            <div className="prospectors-left" style={{ display: "flex" }}>
              <div className="subItemIcon middle">
                <div className="top-avatar">
                  <img className="avatar-hat" src="/hat.png" alt="hat" />
                  <img
                    width={32}
                    height={32}
                    data-avatar={0}
                    src="/0.svg"
                    alt="avatar"
                  />
                  <div className="avatar-star">2</div>
                </div>
              </div>
              <div className="prospector-user-holder">
                <div className="prospector-valley top">Risky Valley</div>
                <div data-username="Charles572" className="prospector-username">
                  <span>Charles572</span>
                  <img width="22px" height="12px" src="/ar.svg" alt="flag" />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="prospector-bet top">
                <div className="prospector-bet-title" data-trans="quota">
                  Multiplier
                </div>
                <div data-win="14.12" className="prospector-bet-amount">
                  14.12
                </div>
              </div>
            </div>
          </div>
          <div className="horCenter prospector prospectors-top">
            <div className="prospectors-left" style={{ display: "flex" }}>
              <div className="subItemIcon middle">
                <div className="top-avatar">
                  <img className="avatar-hat" src="/hat.png" alt="hat" />
                  <img
                    width={32}
                    height={32}
                    data-avatar={0}
                    src="/0.svg"
                    alt="avatar"
                  />
                  <div className="avatar-star">3</div>
                </div>
              </div>
              <div className="prospector-user-holder">
                <div className="prospector-valley top">Risky Valley</div>
                <div data-username="Harry185" className="prospector-username">
                  <span>Harry185</span>
                  <img width="22px" height="12px" src="/ar.svg" alt="flag" />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="prospector-bet top">
                <div className="prospector-bet-title" data-trans="quota">
                  Multiplier
                </div>
                <div data-win={10} className="prospector-bet-amount">
                  10
                </div>
              </div>
            </div>
          </div>
          <div className="horCenter prospector prospectors-item">
            <div className="prospectors-left" style={{ display: "flex" }}>
              <div className="subItemIcon middle">
                <div className="top-avatar bottom">
                  <img
                    width={32}
                    height={32}
                    data-avatar={0}
                    src="/0.svg"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="prospector-user-holder">
                <div className="prospector-valley">Risky Valley</div>
                <div data-username="Howard391" className="prospector-username">
                  <span>Howard391</span>
                  <img width="22px" height="12px" src="/et.svg" alt="flag" />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="prospector-bet">
                <div className="prospector-bet-title" data-trans="quota">
                  Multiplier
                </div>
                <div data-win={10} className="prospector-bet-amount">
                  10
                </div>
              </div>
            </div>
          </div>
          <div className="horCenter prospector prospectors-item">
            <div className="prospectors-left" style={{ display: "flex" }}>
              <div className="subItemIcon middle">
                <div className="top-avatar bottom">
                  <img
                    width={32}
                    height={32}
                    data-avatar={0}
                    src="/0.svg"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="prospector-user-holder">
                <div className="prospector-valley">Risky Valley</div>
                <div data-username="Charles572" className="prospector-username">
                  <span>Charles572</span>
                  <img width="22px" height="12px" src="/ar.svg" alt="flag" />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="prospector-bet">
                <div className="prospector-bet-title" data-trans="quota">
                  Multiplier
                </div>
                <div data-win="7.39" className="prospector-bet-amount">
                  7.39
                </div>
              </div>
            </div>
          </div>
          <div className="horCenter prospector prospectors-item">
            <div className="prospectors-left" style={{ display: "flex" }}>
              <div className="subItemIcon middle">
                <div className="top-avatar bottom">
                  <img
                    width={32}
                    height={32}
                    data-avatar={0}
                    src="/0.svg"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="prospector-user-holder">
                <div className="prospector-valley">Risky Valley</div>
                <div data-username="Harry185" className="prospector-username">
                  <span>Harry185</span>
                  <img width="22px" height="12px" src="/ar.svg" alt="flag" />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="prospector-bet">
                <div className="prospector-bet-title" data-trans="quota">
                  Multiplier
                </div>
                <div data-win="6.53" className="prospector-bet-amount">
                  6.53
                </div>
              </div>
            </div>
          </div>
          <div className="horCenter prospector prospectors-item">
            <div className="prospectors-left" style={{ display: "flex" }}>
              <div className="subItemIcon middle">
                <div className="top-avatar bottom">
                  <img
                    width={32}
                    height={32}
                    data-avatar={0}
                    src="/0.svg"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="prospector-user-holder">
                <div className="prospector-valley">Risky Valley</div>
                <div data-username="Harry185" className="prospector-username">
                  <span>Harry185</span>
                  <img width="22px" height="12px" src="/ar.svg" alt="flag" />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="prospector-bet">
                <div className="prospector-bet-title" data-trans="quota">
                  Multiplier
                </div>
                <div data-win="4.71" className="prospector-bet-amount">
                  4.71
                </div>
              </div>
            </div>
          </div>
          <div className="horCenter prospector prospectors-item">
            <div className="prospectors-left" style={{ display: "flex" }}>
              <div className="subItemIcon middle">
                <div className="top-avatar bottom">
                  <img
                    width={32}
                    height={32}
                    data-avatar={0}
                    src="/0.svg"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="prospector-user-holder">
                <div className="prospector-valley">Risky Valley</div>
                <div data-username="Harry185" className="prospector-username">
                  <span>Harry185</span>
                  <img width="22px" height="12px" src="/ar.svg" alt="flag" />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="prospector-bet">
                <div className="prospector-bet-title" data-trans="quota">
                  Multiplier
                </div>
                <div data-win="3.48" className="prospector-bet-amount">
                  3.48
                </div>
              </div>
            </div>
          </div>
          <div className="horCenter prospector prospectors-item">
            <div className="prospectors-left" style={{ display: "flex" }}>
              <div className="subItemIcon middle">
                <div className="top-avatar bottom">
                  <img
                    width={32}
                    height={32}
                    data-avatar={0}
                    src="/0.svg"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="prospector-user-holder">
                <div className="prospector-valley">Risky Valley</div>
                <div data-username="Harry185" className="prospector-username">
                  <span>Harry185</span>
                  <img width="22px" height="12px" src="/ar.svg" alt="flag" />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="prospector-bet">
                <div className="prospector-bet-title" data-trans="quota">
                  Multiplier
                </div>
                <div data-win="2.6" className="prospector-bet-amount">
                  2.6
                </div>
              </div>
            </div>
          </div>
          <div className="horCenter prospector prospectors-item">
            <div className="prospectors-left" style={{ display: "flex" }}>
              <div className="subItemIcon middle">
                <div className="top-avatar bottom">
                  <img
                    width={32}
                    height={32}
                    data-avatar={0}
                    src="/0.svg"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="prospector-user-holder">
                <div className="prospector-valley">Risky Valley</div>
                <div data-username="Harry185" className="prospector-username">
                  <span>Harry185</span>
                  <img width="22px" height="12px" src="/ar.svg" alt="flag" />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="prospector-bet">
                <div className="prospector-bet-title" data-trans="quota">
                  Multiplier
                </div>
                <div data-win="2.6" className="prospector-bet-amount">
                  2.6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="alert alert-danger text-center m-0" role="alert">
        {errorMessage ||
          "URL parameters are missing or invalid. Key: token | Value"}
      </div>
    </div>
  );
};

export default Home;
