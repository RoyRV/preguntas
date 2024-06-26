<template>
  <section class="vue-winwheel" v-if="shouldRender">
    <div class="mobile-container">
      <div class="wheel-wrapper">
        <div class="canvas-wrapper">
          <canvas id="canvas" width="310" height="310">
            <p
              style="
                 {
                  color: white;
                }
              "
              align="center"
            >
              Sorry, your browser doesn't support canvas. Please try Google
              Chrome.
            </p>
          </canvas>
        </div>
        <div class="button-wrapper">
          <a
            class="btn btn-play"
            href="#"
            @click.prevent="startSpin()"
            v-if="!loadingPrize && !wheelSpinning"
            >{{ buttontext }}!</a
          >
        </div>
      </div>
    </div>
    <div class="custom-modal modal-mask" id="modalSpinwheel" v-if="modalPrize">
      <div slot="body">
        <a href="" @click.prevent="hidePrize()" class="modal-dismiss">
          <i class="icon_close"></i>
        </a>
        <h1 style="margin-top: -30px">{{ prizeName }}</h1>
        <h2>{{ question }}</h2>
      </div>
    </div>
  </section>
</template>


<script>
import * as Winwheel from "./Winwheel";
import { playerService } from "../services";

export default {
  name: "VueWinWheel",
  props: {
    options: {
      default() {
        return [];
      },
    },
    buttontext: {
      type: String,
      default: "Spin",
    },
    question: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      shouldRender: false,
      loadingPrize: false,
      theWheel: null,
      modalPrize: false,
      wheelPower: 1,
      wheelSpinning: false,
      prizeName: "BUY 1 GET 1",
      WinWheelOptions: {
        textFontSize: 14,
        outterRadius: 410,
        innerRadius: 25,
        lineWidth: 8,
        animation: {
          type: "spinOngoing",
          duration: 0.2,
        },
      },
      segments: JSON.parse(JSON.stringify(this.options)),
    };
  },
  methods: {
    spinStopped() {
      this.$emit("finished");
    },

    showPrize() {
      this.modalPrize = true;
    },
    hidePrize() {
      this.modalPrize = false;
    },
    assignNewSegments(options) {
      this.segments = options;
    },
    startSpin() {
      if (this.wheelSpinning === false) {
        this.theWheel.startAnimation();
        this.wheelSpinning = true;
        this.theWheel = new Winwheel.Winwheel({
          ...this.WinWheelOptions,
          numSegments: this.segments.length,
          segments: this.segments,
          animation: {
            type: "spinToStop",
            duration: 1,
            spins: 5,
            callbackFinished: this.onFinishSpin,
          },
        });

        // example input prize number get from Backend
        // Important thing is to set the stopAngle of the animation before stating the spin.

        var prizeNumber = Math.floor(Math.random() * this.segments.length); // or just get from Backend
        var stopAt =
          (360 / this.segments.length) * prizeNumber -
          360 / this.segments.length / 2; // center pin
        // var stopAt = 360 / this.segments.length * prizeNumber - Math.floor(Math.random() * 60) //random location
        this.theWheel.animation.stopAngle = stopAt;
        this.theWheel.startAnimation();
        this.wheelSpinning = false;
      }
    },
    resetWheel() {
      this.theWheel = new Winwheel.Winwheel({
        ...this.WinWheelOptions,
        numSegments: this.segments.length,
        segments: this.segments,
      });

      if (this.wheelSpinning) {
        this.theWheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
      }

      this.theWheel.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.
      this.theWheel.draw(); // Call draw to render changes to the wheel.
      this.wheelSpinning = false; // Reset to false to power buttons and spin can be clicked again.
    },
    initSpin() {
      this.loadingPrize = true;
      this.resetWheel();
      this.loadingPrize = false;
    },
    onFinishSpin(indicatedSegment) {
      this.prizeName = indicatedSegment.text;
      this.showPrize();
      this.spinStopped();
    },
  },
  computed: {},
  updated() {},
  mounted() {
    this.initSpin();
    // this.resetWheel()
  },
  created() {
    this.segments = playerService.getSegments(2);
    this.shouldRender = true;
  },
};
</script>

<style scoped>
.vue-winwheel {
  text-align: center;
  background-image: url("/static/img/obstacle-run/bg-spinner-mobile.svg");
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
}
.vue-winwheel h1 {
  color: #b32656;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 36px;
  line-height: 90px;
  letter-spacing: 4px;
  margin: 0;
}
.vue-winwheel h2 {
  margin: 0;
}
.vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content {
  width: calc(100vw - 30px);
  padding-top: 52px;
}
.vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content h2 {
  text-transform: uppercase;
  color: #b32656;
  margin-bottom: 16px;
  margin-top: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 18px;
  letter-spacing: 1.1px;
  margin: 0;
}
.vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content p {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: black;
  text-align: center;
  line-height: 25px;
}
.vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content p strong {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.vue-winwheel
  #modalSpinwheel.custom-modal
  .content-wrapper
  .content
  .modal-dismiss {
  top: 12px;
  right: 12px;
}
.vue-winwheel
  #modalSpinwheel.custom-modal
  .content-wrapper
  .content
  .modal-dismiss
  i.icon_close {
  font-size: 30px;
  color: #da2a52;
}
.vue-winwheel canvas#canvas {
  position: relative;
}
.vue-winwheel .canvas-wrapper {
  position: relative;
}
.vue-winwheel .canvas-wrapper:after {
  content: "";
  display: block;
  width: 42px;
  background: #c4376f;
  height: 42px;
  position: absolute;
  left: calc(50% - 25px);
  margin: auto;
  border-radius: 100%;
  top: calc(50% - 29px);
  border: 5px solid white;
  box-sizing: content-box;
}
.vue-winwheel .canvas-wrapper:before {
  content: "";
  display: block;
  width: 310px;
  background: #0f0f0f;
  height: 310px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 100%;
  top: 0;
}
.vue-winwheel .wheel-wrapper {
  position: relative;
}
.vue-winwheel .wheel-wrapper:before {
  content: "";
  width: 62px;
  height: 47px;
  position: absolute;
  top: -10px;
  left: calc(50% - 31px);
  right: 0;
  display: block;
  z-index: 99999;
  background-image: url("./spinner-marker.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.vue-winwheel .wheel-wrapper .button-wrapper {
  margin: 20px auto -60px;
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 231px;
  height: 118px;
}
.vue-winwheel .wheel-wrapper .btn.btn-play {
  padding: 0 58px !important;
  background: #c4376f;
  height: 40px;
  line-height: 40px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 2px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  letter-spacing: 2px;
}
</style>