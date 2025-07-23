import sound from "../assets/sound";

export const plaMusic = () => {
  return new Audio(sound.music).play();
};
export const playSingleClick = () => {
  return new Audio(sound.singleClick).play();
};
export const playWheelSound = () => {
  return new Audio(sound.wheel_sound).play();
};
