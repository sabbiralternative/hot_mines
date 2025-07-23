import { useState } from "react";
import { cn } from "../../utils/cn";

const NumberContainerSlider = () => {
  const [translate, setTranslate] = useState(0);

  const handleSlide = (type) => {
    if (type === "plus") {
      if (translate === 0) {
        return;
      } else {
        setTranslate((prev) => prev + 90);
      }
    }
    if (type === "minus") {
      if (translate === -1530) {
        return;
      } else {
        setTranslate((prev) => prev - 90);
      }
    }
  };
  console.log(translate);
  return (
    <div className="auto_width_cl">
      <div className="auto_width_cl1">
        <div className="item_slide_parent">
          <div className="slider-container slider_cl false">
            <div className="slick-slider slick-initialized" dir="ltr">
              <button
                onClick={() => handleSlide("plus")}
                type="button"
                data-role="none"
                className={cn(
                  "slick-arrow slick-prev",
                  translate === 0 && "slick-disabled"
                )}
                style={{ display: "block" }}
              >
                Previous
              </button>
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    width: "1710px",
                    opacity: 1,
                    transform: `translate3d(${translate}px, 0px, 0px)`,
                    transitionDuration: "500ms",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <div
                    data-index={0}
                    className="slick-slide  "
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">1 hit</span>
                        <span className="fltpUt">x1.19</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={1}
                    className="slick-slide "
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">2 hit</span>
                        <span className="fltpUt">x1.25</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={2}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">3 hit</span>
                        <span className="fltpUt">x1.32</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={3}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">4 hit</span>
                        <span className="fltpUt">x1.40</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={4}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">5 hit</span>
                        <span className="fltpUt">x1.50</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={5}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">6 hit</span>
                        <span className="fltpUt">x1.61</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={6}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">7 hit</span>
                        <span className="fltpUt">x1.73</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={7}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">8 hit</span>
                        <span className="fltpUt">x1.87</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={8}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">9 hit</span>
                        <span className="fltpUt">x2.04</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={9}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">10 hit</span>
                        <span className="fltpUt">x2.25</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={10}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">11 hit</span>
                        <span className="fltpUt">x2.50</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={11}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">12 hit</span>
                        <span className="fltpUt">x2.81</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={12}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">13 hit</span>
                        <span className="fltpUt">x3.21</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={13}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">14 hit</span>
                        <span className="fltpUt">x3.75</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={14}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">15 hit</span>
                        <span className="fltpUt">x4.50</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={15}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">16 hit</span>
                        <span className="fltpUt">x5.62</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={16}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">17 hit</span>
                        <span className="fltpUt">x7.50</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={17}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">18 hit</span>
                        <span className="fltpUt">x11.25</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={18}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "90px" }}
                  >
                    <div>
                      <div
                        className="slider-content multi-slide"
                        tabIndex={-1}
                        style={{
                          width: "100%",
                          display: "inline-block",
                        }}
                      >
                        <span className="glIXKb">19 hit</span>
                        <span className="fltpUt">x22.50</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleSlide("minus")}
                type="button"
                data-role="none"
                className={cn(
                  "slick-arrow slick-next",
                  translate === -1530 && "slick-disabled"
                )}
                style={{ display: "block" }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberContainerSlider;
