import BetSlip from "./BetSlip";
import ModalsNotUsing from "./ModalsNotUsing";
import Navbar from "./Navbar";
import NumberContainer from "./NumberContainer";
import NumberContainerSlider from "./NumberContainerSlider";

const Home = () => {
  return (
    <div>
      <div className="game_sec">
        <div className="container">
          <Navbar />
          <div className="sub_sec">
            <div className="scroll_bet_sec">
              <div className="scroll_cl1">
                <div className="canvas_cl">
                  <div className="dust_bg_cl">
                    <img src="/dust-CqL_AgLw.webp" alt="dust bg" />
                  </div>
                  <div className="sparkal_lft_bg">
                    <img src="/lft_dust_bg-eKneeF0i.png" alt="dust img" />
                  </div>
                  <div className="sparkal_rgt_bg">
                    <img src="/rgt_dust_bg-C427WYCY.png" alt="dust img" />
                  </div>
                  <div className="board_bg_parent">
                    <img
                      className="board_bg_ic"
                      src="/houseMobile-B4NDXdrg.webp"
                      alt=""
                    />
                    <div className="success-toaster">
                      <div className="notification-item">
                        <img
                          src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1007_2)'%3e%3cmask%20id='mask0_1007_2'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3cpath%20d='M24%200H0V24H24V0Z'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1007_2)'%3e%3cpath%20d='M1%2021L12%202L23%2021H1ZM4.45%2019H19.55L12%206L4.45%2019ZM12%2018C12.2833%2018%2012.521%2017.904%2012.713%2017.712C12.9043%2017.5207%2013%2017.2833%2013%2017C13%2016.7167%2012.9043%2016.4793%2012.713%2016.288C12.521%2016.096%2012.2833%2016%2012%2016C11.7167%2016%2011.4793%2016.096%2011.288%2016.288C11.096%2016.4793%2011%2016.7167%2011%2017C11%2017.2833%2011.096%2017.5207%2011.288%2017.712C11.4793%2017.904%2011.7167%2018%2012%2018ZM11%2015H13V10H11V15Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1007_2'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                          alt="error icon"
                        />
                        <span />
                      </div>
                      <button type="button" className="btn-close info-close">
                        <img
                          src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1007_9)'%3e%3cmask%20id='mask0_1007_9'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='20'%20height='20'%3e%3cpath%20d='M20%200H0V20H20V0Z'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1007_9)'%3e%3cpath%20d='M5.33366%2015.8327L4.16699%2014.666L8.83366%209.99936L4.16699%205.33269L5.33366%204.16602L10.0003%208.83269L14.667%204.16602L15.8337%205.33269L11.167%209.99936L15.8337%2014.666L14.667%2015.8327L10.0003%2011.166L5.33366%2015.8327Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1007_9'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                          alt="close icon"
                        />
                      </button>
                    </div>
                    <div className="frame_cl_parent">
                      <NumberContainer />
                      <div className="house_line_cl">
                        <img
                          src="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAi4AAAACCAYAAAB/u1e7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOOSURBVHja7VJRblxFEKzqmV3bcSzi5AMFISHxCdfgXpjzcJ74k08HCZEIZe3svjfTBdM9ensGpC3p7fRUV3dXjxYXXHDBBRdccMEF/xcwP+Hh4Tf+9OEDH3/+i+/ff+H9xyP//PvEu3ff8/M/J94+L8R3wM3hHb+8LLw+rny+bXwLYC03tr9u/HrqPF537pbxveIBB7y5uuFp7ax757I6l+asu2u+ArDsnKU5137FUsfp3KMaAJSdszVxxM5ipYqn0wml7mhd7F3EHqgsBizQWgw7QCxmPeu6i1Yquy80q0RbIRSzUmguogJqbqEtCo5W6eOU6JZct0KgAd2sVMAdpI98oZnoEgsAwQzoMDOqZ+wm0gtdjYOnI7yJNI849ZRIps7NaA5y8BS7Oww00ZjDjYy5SJ8uogAUOHKSKJhRyWvqxgmKCNAsfIDqYqm29RONgmzO2vRUD29RJ0UDd5pZzjjX54mpdcikjQMEArLoClAkoXGKgcg7oNyFRNIhBwWlJkCTRDDvAkiKlAUjdwo0kqmRyKkDwl46gBFyYHKxf8IQhekPwuxDcnrZdAFOzyJoBJQ95SC2HbZ9CHGrAWNvDX3q0qjxvKO2PY04v0EKZ5/zuemnTxtU9lb6F5gWc++NR+657SUQwTM9B1I3AMgGqe19gsOsj4uSEEhBEhLKKksuDWREuqQcli5dYSxjQMr28pCEJopnPu8zDp2mLhyQSlrC2ZsjrumX4YdSarYvLTJyUCL/23KA6SVIpjbuuVvSodXQ00zQNjW050eO2Y6EiBFbBMDkNcBZM/dS7OmY6Zhumnqe30vRP33NO5kqSLMeYqHO/qm0m/MoymMUHXKRVNyEuQtlgAKzHgAK4KLO2qnDgEcjSS4jlDunT+/5BmDO2moFdaWGZM5qLlg4PfNyySGrdeufI2df5DriyBXJXTRITgWX8ewF2Tgj7sH1DhDupRR4k5cCrCM3390s9eiAkXKDhr43AMW9okJGuXeNX6DCvakYFbWd6dcoYuZ7j7w7Va4o7y00lPms1QqgdMrNVArlI25N3DcH9qhtVS+mXaF6M9VKnQDUdZFXU2sjZ+rtpFZM+9XUqmm/s5jVluN/8Z3a8lVtV2Q6OXCH9fii633Rciy6uTpouSo6vVTd3lQdDzvdvfqkN69/0MenJ9zf7vX8zZW+fXujw6fX+vz0R/S+/+VHf3z8Xb8+QAD0L3VwBy5j6SIzAAAAAElFTkSuQmCC"
                          alt="houseLine Img"
                        />
                      </div>
                      <BetSlip />
                    </div>
                    <NumberContainerSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ModalsNotUsing />
        </div>
      </div>
    </div>
  );
};

export default Home;
