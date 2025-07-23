import { useState } from "react";
import BombSelection from "./BombSelection";

const BetSlip = () => {
  const [stake, setStake] = useState(10);
  const [bombCound, setBombCount] = useState(5);
  const [showBombSelection, setShowBombSelection] = useState(false);
  return (
    <div className="bet_alin_cl">
      <div className="bet_sec" id="mywidth">
        <div className="cactus_bomb_cl show">
          <div className="cactus_bomb_cmn">
            <img src="/player_win-BIuOfBXz.webp" className="cactus_bomb_img" />
            <span className="cactus_bomb_span">Cactuses: 19</span>
          </div>
          <div className="cactus_bomb_cmn">
            <img src="/player_fail-BqkXTxio.webp" className="cactus_bomb_img" />
            <span className="cactus_bomb_span">Bombs: 6</span>
          </div>
        </div>
        <div className="win_cl_div false">
          <span>Win:</span>
          <span style={{ whiteSpace: "nowrap" }}>0</span>
        </div>
        <div className="min_max_parent">
          <div className="min_max_child" style={{ pointerEvents: "auto" }}>
            <button
              onClick={() => setStake(10)}
              type="button"
              className="min_btn_cl"
            >
              MIN
            </button>
            <input
              onChange={(e) => setStake(e.target.value)}
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              className="input_cl false"
              value={stake}
            />
            <button
              onClick={() => setStake(10000)}
              type="button"
              className="max_btn_cl"
            >
              MAX
            </button>
          </div>
        </div>
        <div className="play_sec">
          <div className="css-kvsrle-container">
            <div
              onClick={() => setShowBombSelection((prev) => !prev)}
              className="css-xnya47-control"
              style={{ pointerEvents: "auto", opacity: 1 }}
            >
              <div className="css-9vovsb">
                <div className="hot-mines-bombs-value">
                  <span>{bombCound}</span>
                  <span className="sc-eFtZDC jgPvvC">bombs</span>
                </div>
              </div>
              <div className="sc-fmlKft cXlsWE">
                <img
                  src="data:image/svg+xml,%3csvg%20width='18'%20height='17'%20viewBox='0%200%2018%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.65698%209.45587C7.40398%209.27587%207.18698%209.07787%206.92998%208.89887C6.64298%208.69787%206.30498%208.51787%205.98798%208.32887C5.59198%208.09487%205.22998%207.84887%205.04498%207.53587C4.95898%207.39087%204.95298%207.18887%205.18498%207.12387C5.2736%207.10458%205.36449%207.09785%205.45498%207.10387C5.75998%207.10887%206.06398%207.11187%206.36798%207.11287C7.2234%207.1123%208.07878%207.1023%208.93398%207.08287C9.43398%207.07387%209.93498%207.06287%2010.436%207.05487C10.766%207.04987%2011.095%207.04487%2011.424%207.04187C11.793%207.03887%2012.162%207.03787%2012.53%207.04087C12.717%207.04087%2012.945%207.06087%2013.014%207.16487C13.056%207.22887%2013.019%207.30087%2012.974%207.36387C12.846%207.54587%2012.658%207.71087%2012.468%207.87187C11.533%208.66287%2010.495%209.40787%209.45798%2010.1519C9.38906%2010.209%209.30495%2010.2448%209.21598%2010.2549C9.11676%2010.2551%209.01933%2010.2285%208.93398%2010.1779C8.48498%209.95187%208.03398%209.72487%207.65698%209.45587Z'%20fill='%23FFDDAC'/%3e%3cpath%20d='M7.65698%209.4566C7.40398%209.2766%207.18698%209.0786%206.92998%208.8996M7.65698%209.4566C8.03398%209.7266%208.48498%209.9526%208.93398%2010.1786M7.65698%209.4566L8.93398%207.0846M7.65698%209.4566L11.424%207.0426M6.92998%208.8996C6.64298%208.6986%206.30498%208.5196%205.98798%208.3306M6.92998%208.8996L8.88298%207.0866M8.93398%2010.1786C9.01933%2010.2292%209.11676%2010.2558%209.21598%2010.2556M8.93398%2010.1786L8.88398%207.0856L8.93398%207.0846M8.93398%207.0846L9.21598%2010.2556M8.93398%207.0846L10.436%207.0556M11.424%207.0426L9.21598%2010.2556M11.424%207.0426C11.094%207.0456%2010.766%207.0506%2010.436%207.0556M5.98798%208.3306L13.014%207.1666M5.98798%208.3306L6.36798%207.1146M5.98798%208.3306L8.88298%207.0866M8.88298%207.0866C8.04498%207.1026%207.20598%207.1166%206.36798%207.1146M5.04498%207.5376C4.95898%207.3926%204.95298%207.1906%205.18498%207.1256C5.2736%207.1063%205.36449%207.09957%205.45498%207.1056C5.75998%207.1106%206.06398%207.1136%206.36798%207.1146M5.04498%207.5376C5.22998%207.8506%205.59198%208.0976%205.98798%208.3316M5.04498%207.5376L6.36798%207.1146M6.36798%207.1146L9.21598%2010.2556M12.53%207.0426C12.717%207.0426%2012.945%207.0626%2013.014%207.1666M12.53%207.0426C12.1613%207.0402%2011.7926%207.04053%2011.424%207.0436M12.53%207.0426L9.45798%2010.1526M13.014%207.1666C13.056%207.2306%2013.019%207.3026%2012.974%207.3656C12.846%207.5476%2012.658%207.7126%2012.468%207.8736C11.533%208.6646%2010.495%209.4086%209.45798%2010.1526M9.45798%2010.1526C9.38906%2010.2098%209.30495%2010.2455%209.21598%2010.2556M9.21598%2010.2556L10.436%207.0556'%20stroke='%23FFDDAC'%20stroke-width='1.608'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  alt="select arrow"
                />
              </div>
            </div>
            <BombSelection
              bombCound={bombCound}
              showBombSelection={showBombSelection}
              setBombCound={setBombCount}
              setShowBombSelection={setShowBombSelection}
            />
          </div>
          <button type="button" className="play_btn_cl">
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
