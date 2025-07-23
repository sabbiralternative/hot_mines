const ModalsNotUsing = () => {
  return (
    <>
      <div
        className="modal fade cmn-modal-cl gameRuleModal_cl"
        id="gameRuleModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Game Rules
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.14979%203.20668C4.02405%203.08524%203.85565%203.01805%203.68085%203.01956C3.50606%203.02108%203.33885%203.0912%203.21524%203.2148C3.09164%203.33841%203.02152%203.50562%203.02001%203.68041C3.01849%203.85521%203.08568%204.02361%203.20712%204.14935L7.05712%207.99935L3.20645%2011.8493C3.14278%2011.9108%203.09199%2011.9844%203.05705%2012.0657C3.02211%2012.1471%203.00372%2012.2345%203.00295%2012.3231C3.00219%2012.4116%203.01905%2012.4994%203.05257%2012.5813C3.08609%2012.6632%203.1356%2012.7377%203.19819%2012.8003C3.26079%2012.8629%203.33522%2012.9124%203.41715%2012.9459C3.49908%2012.9794%203.58687%2012.9963%203.67539%2012.9955C3.76391%2012.9947%203.85139%2012.9763%203.93272%2012.9414C4.01406%2012.9065%204.08762%2012.8557%204.14912%2012.792L7.99979%208.94201L11.8498%2012.792C11.9755%2012.9134%2012.1439%2012.9806%2012.3187%2012.9791C12.4935%2012.9776%2012.6607%2012.9075%2012.7843%2012.7839C12.9079%2012.6603%2012.9781%2012.4931%2012.9796%2012.3183C12.9811%2012.1435%2012.9139%2011.9751%2012.7925%2011.8493L8.94245%207.99935L12.7925%204.14935C12.9139%204.02361%2012.9811%203.85521%2012.9796%203.68041C12.9781%203.50562%2012.9079%203.33841%2012.7843%203.2148C12.6607%203.0912%2012.4935%203.02108%2012.3187%203.01956C12.1439%203.01805%2011.9755%203.08524%2011.8498%203.20668L7.99979%207.05668L4.14979%203.20668Z'%20fill='white'/%3e%3c/svg%3e"
                  alt="close icon"
                />
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-body-content">
                <p className="modal-bet-txt">Bet limits are presented below</p>
                <div className="min-max-betTxt">
                  <div className="bet-txt-cl">Min Bet:</div>
                  <input
                    className="form-control"
                    disabled
                    readOnly
                    defaultValue={10}
                    style={{ userSelect: "none", pointerEvents: "none" }}
                  />
                </div>
                <div className="min-max-betTxt">
                  <div className="bet-txt-cl">Max Bet:</div>
                  <input
                    className="form-control"
                    disabled
                    readOnly
                    defaultValue="20,000"
                    style={{ userSelect: "none", pointerEvents: "none" }}
                  />
                </div>
                <div className="min-max-betTxt">
                  <div className="bet-txt-cl">Max Win:</div>
                  <input
                    className="form-control"
                    disabled
                    readOnly
                    defaultValue="2,00,000"
                    style={{ userSelect: "none", pointerEvents: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade cmn-modal-cl mybetHistoryModal_cl"
        id="mybetHistoryModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                My Bet History
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.14979%203.20668C4.02405%203.08524%203.85565%203.01805%203.68085%203.01956C3.50606%203.02108%203.33885%203.0912%203.21524%203.2148C3.09164%203.33841%203.02152%203.50562%203.02001%203.68041C3.01849%203.85521%203.08568%204.02361%203.20712%204.14935L7.05712%207.99935L3.20645%2011.8493C3.14278%2011.9108%203.09199%2011.9844%203.05705%2012.0657C3.02211%2012.1471%203.00372%2012.2345%203.00295%2012.3231C3.00219%2012.4116%203.01905%2012.4994%203.05257%2012.5813C3.08609%2012.6632%203.1356%2012.7377%203.19819%2012.8003C3.26079%2012.8629%203.33522%2012.9124%203.41715%2012.9459C3.49908%2012.9794%203.58687%2012.9963%203.67539%2012.9955C3.76391%2012.9947%203.85139%2012.9763%203.93272%2012.9414C4.01406%2012.9065%204.08762%2012.8557%204.14912%2012.792L7.99979%208.94201L11.8498%2012.792C11.9755%2012.9134%2012.1439%2012.9806%2012.3187%2012.9791C12.4935%2012.9776%2012.6607%2012.9075%2012.7843%2012.7839C12.9079%2012.6603%2012.9781%2012.4931%2012.9796%2012.3183C12.9811%2012.1435%2012.9139%2011.9751%2012.7925%2011.8493L8.94245%207.99935L12.7925%204.14935C12.9139%204.02361%2012.9811%203.85521%2012.9796%203.68041C12.9781%203.50562%2012.9079%203.33841%2012.7843%203.2148C12.6607%203.0912%2012.4935%203.02108%2012.3187%203.01956C12.1439%203.01805%2011.9755%203.08524%2011.8498%203.20668L7.99979%207.05668L4.14979%203.20668Z'%20fill='white'/%3e%3c/svg%3e"
                  alt="close icon"
                />
              </button>
            </div>
            <div className="modal-body">
              <div className="bet-history-parent">
                <div className="bet-history-header">
                  <div>Time</div>
                  <div>Bet</div>
                  <div>Mult.</div>
                  <div>Win</div>
                </div>
                <p className="text-center text-gray-500">No history found</p>
              </div>
              <button
                type="button"
                className="play_btn_cl loadMore_btn"
                disabled
                style={{
                  opacity: "0.5",
                  cursor: "not-allowed",
                  margin: "0px auto",
                }}
              >
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade cmn-modal-cl howtoPlayModal_cl"
        id="howtoPlayModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                How to play?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.14979%203.20668C4.02405%203.08524%203.85565%203.01805%203.68085%203.01956C3.50606%203.02108%203.33885%203.0912%203.21524%203.2148C3.09164%203.33841%203.02152%203.50562%203.02001%203.68041C3.01849%203.85521%203.08568%204.02361%203.20712%204.14935L7.05712%207.99935L3.20645%2011.8493C3.14278%2011.9108%203.09199%2011.9844%203.05705%2012.0657C3.02211%2012.1471%203.00372%2012.2345%203.00295%2012.3231C3.00219%2012.4116%203.01905%2012.4994%203.05257%2012.5813C3.08609%2012.6632%203.1356%2012.7377%203.19819%2012.8003C3.26079%2012.8629%203.33522%2012.9124%203.41715%2012.9459C3.49908%2012.9794%203.58687%2012.9963%203.67539%2012.9955C3.76391%2012.9947%203.85139%2012.9763%203.93272%2012.9414C4.01406%2012.9065%204.08762%2012.8557%204.14912%2012.792L7.99979%208.94201L11.8498%2012.792C11.9755%2012.9134%2012.1439%2012.9806%2012.3187%2012.9791C12.4935%2012.9776%2012.6607%2012.9075%2012.7843%2012.7839C12.9079%2012.6603%2012.9781%2012.4931%2012.9796%2012.3183C12.9811%2012.1435%2012.9139%2011.9751%2012.7925%2011.8493L8.94245%207.99935L12.7925%204.14935C12.9139%204.02361%2012.9811%203.85521%2012.9796%203.68041C12.9781%203.50562%2012.9079%203.33841%2012.7843%203.2148C12.6607%203.0912%2012.4935%203.02108%2012.3187%203.01956C12.1439%203.01805%2011.9755%203.08524%2011.8498%203.20668L7.99979%207.05668L4.14979%203.20668Z'%20fill='white'/%3e%3c/svg%3e"
                  alt="close icon"
                />
              </button>
            </div>
            <div className="modal-body">
              <div className="howtoPlay_content">
                <div className="howtoPlay_content_chlid">
                  <div className="howtoPlay_content_item">
                    <span>1.</span>
                    <span>
                      Select the risk level. The more bombs on the playing
                      field, the higher odds for opening a spin with a cactus.
                    </span>
                  </div>
                  <div className="howtoPlay_content_item">
                    <span>2.</span>
                    <span>Enter your amount and start a game.</span>
                  </div>
                  <div className="howtoPlay_content_item">
                    <span>3.</span>
                    <span>
                      The goal is to open as many cactuses as possible without
                      exploding on the bomb. Your winnings increase with each
                      cactus you open.
                    </span>
                  </div>
                  <div className="howtoPlay_content_item">
                    <span>4.</span>
                    <span>
                      You can collect your winnings after each successfully
                      opened slot.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalsNotUsing;
