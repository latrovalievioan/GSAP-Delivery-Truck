import gsap from "gsap/all";
import selectors from "./selectors";

export default class Animation {
  constructor() {
    this._tl = gsap.timeline();
    this._tl.pause();
  }

  init() {
    this.animate();
    this.listen();
  }

  listen() {
    selectors.playBtn.addEventListener("click", () => this.play());
    selectors.truckBtn.addEventListener("click", () => this.play());
    selectors.pauseBtn.addEventListener("click", () => this.pause());
    selectors.reverseBtn.addEventListener("click", () => this.reverse());
  }

  animate() {
    //list
    this._tl.to(selectors.list, { y: -120, id: "listUp" });
    this._tl.to(selectors.list, {
      y: 0,
      id: "listDown",
      ease: "Power1.easeIn",
    });
    //listItems
    this._tl.to(selectors.listItems[0], {
      y: 70,
      opacity: 0,
      duration: 0.2,
      ease: "linear",
      id: "listItem0",
    });
    this._tl.to(
      selectors.listItems[1],
      {
        y: 70,
        opacity: 0,
        duration: 0.2,
        ease: "linear",
        id: "listItem1",
      },
      "<"
    );
    this._tl.to(
      selectors.listItems[2],
      {
        y: 70,
        opacity: 0,
        duration: 0.2,
        ease: "linear",
        id: "listItem2",
      },
      "<"
    );

    //button
    this._tl.to(selectors.truckBtnBg, {
      scale: 1.1,
      transformOrigin: "center",
      id: "truckBtnScaleUp",
      duration: 0.3,
    });
    this._tl.to(selectors.truckBtnBg, {
      scale: 1,
      ease: "power1.in",
      id: "truckBtnScaleDown",
      duration: 0.3,
    });

    //truck-container
    this._tl.to(selectors.container, { opacity: 1, id: "container" });

    this._tl.to(selectors.containerParts, {
      opacity: 1,
      id: "containerParts",
    });

    //truck-back
    this._tl.to(selectors.backWheel1, { opacity: 1, id: "backWheel1" }, "<");
    this._tl.to(selectors.backWheel2, { opacity: 1, id: "backWheel2" }, "<");
    this._tl.to(
      selectors.backWheelBack1,
      { opacity: 1, id: "backWheelBack1" },
      "<"
    );
    this._tl.to(
      selectors.backWheelBack2,
      { opacity: 1, id: "backWheelBack2" },
      "<"
    );

    //truck-front
    this._tl.to(selectors.frontGroup, { opacity: 1, id: "frontGroup" });

    //front-wheels together with front
    this._tl.to(selectors.frontWheel1, { opacity: 1, id: "frontWheel1" }, "<");
    this._tl.to(selectors.frontWheel2, { opacity: 1, id: "frontWheel2" }, "<");
    this._tl.to(
      selectors.frontWheelsBack,
      { opacity: 1, id: "frontWheelsBack" },
      "<"
    );

    //truck-move
    this._tl.to(selectors.truck, {
      x: 1000,
      ease: "back.in(2.5)",
      duration: 2.5,
      opacity: 0,
      id: "truckMovement",
    });

    this._tl.to(selectors.shippedLabel, {
      opacity: 1,
      id: "shippedLabel",
    });
  }
  play() {
    this._tl.paused() ? this._tl.resume() : this._tl.restart();
  }
  pause() {
    this._tl.pause();
  }

  reverse() {
    this._tl.reverse();
  }
}
