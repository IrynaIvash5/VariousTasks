<template>
<!-- Таймер зворотнього відліку-->
<div>
    <div class="timer-center">
        <h1 class="timer">Countdown Timer</h1>
        <div class="border">
            <div class="block-flex">
                <div class="block-timer lefts">
                    <p class="min-sec">Hours</p>
                    <input v-model="minusHour" class="input" type="number" min="0" placeholder="enter minetes">
                </div>
                <div class="block-timer">
                    <p class="min-sec">Minutes</p>
                    <input v-model="minusMinute" class="input" type="number" min="0" max="59" placeholder="enter minetes">
                </div>
                <div class="input-block-timer">
                    <p class="min-sec">Secondes</p>
                    <input v-model="minusSecond" class="input" min="0" max="59" type="number" placeholder="enter secondes">
                </div>
            </div>
            <div class="go-timer">
                <div id="container">
                    <p class="p">{{this.time}}</p>
                </div>
                <div class="audio-timer" v-if="this.time == '00:00:00' || !resetMinusTime">
                    <audio controls="true" autoplay loop>
                        <source src="@/assets/musik/unholy.mp3" type="audio/mpeg">
                    </audio>
                </div>
                <div class="btn-block">
                    <button @click="startMinusTime()" class="sent-time-btn ">Start</button>
                    <button @click="resetMinusTime()" class="sent-time-btn ">Reset</button>
                    <button v-if="!this.pause" @click="stopMinusTime()" class="sent-time-btn ">Stop</button>
                    <button v-else @click="continueTime()" class="sent-time-btn ">Continue</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Таймер звичайний-->
    <div class="timer-center top-block">
        <h1 class="timer">Timer</h1>
        <div class="border">
            <div class="go-timer">
                <div class="block-flex ">
                    <p class="min-sec left">Minutes</p>
                    <p class="min-sec ">Secondes</p>
                </div>
                <div class="number-timer-two">
                    {{timeAdd}}
                </div>
                <div class="btn-block">
                    <button @click="startPlusTime()" class="sent-time-btn ">Start</button>
                    <button @click="resetAddTime()" class="sent-time-btn ">Reset</button>
                    <button @click="stopAddTime()" class="sent-time-btn ">Stop</button>
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import { clearInterval, setInterval } from 'worker-timers';
import moment from 'moment'
let ProgressBar = require('progressbar.js')

export default {
    name: 'timer-timer',
    data() {
        return {
            minusSecond: 0,
            minusMinute: 0,
            minusHour: 0,
            plusSecond: 0,
            plusMinute: 0,
            plusHour: 0,
            time: '',
            timeAdd: '',
            bar: null,
            pause: false
        }
    },
    methods: {
        async startMinusTime() {
            let format = 'HH:mm:ss'
            let dateNow = moment(new Date(0, 0, 0, this.minusHour, this.minusMinute, this.minusSecond))
            this.minusHour = this.minusHour * 60 * 60
            this.minusMinute = this.minusMinute * 60
            this.duration = this.minusHour + this.minusMinute + this.minusSecond
            this.minusHour = '0'
            this.minusMinute = '0'
            this.minusSecond = '0'
            this.bar = new ProgressBar.Circle('#container', {
                strokeWidth: 3,
                easing: 'easeInOut',
                duration: this.duration * 1000,
                color: '#eee',
                trailColor: '#2E8B57',
                trailWidth: 5,
                svgStyle: null
            });
            this.bar.animate(-1.0);
                this.intervalMinusTime =  setInterval(() => {
                if(!this.pause){
                this.time = dateNow.subtract(1, 's').format(format)
                if (this.time == '00:00:00') {
                    clearInterval(this.intervalMinusTime)
                    this.bar.destroy()
                }
                }
            }, 1000)

        },
        resetMinusTime() {
            this.time = '00:00:00'
            if (this.bar) {
                this.bar.destroy()
            }
            clearInterval(this.intervalMinusTime)
        },
        stopMinusTime() {
            if (this.bar) {
                this.bar.stop()
            }
            this.pause = true
        },
        continueTime() {
            this.pause = false
            this.bar.animate(-1, 0)
        },
        startPlusTime() {
            let format = 'HH:mm:ss'
            let dateNow = moment(new Date(0, 0, 0, this.plusHour, this.plusMinute, this.plusSecond))
            this.intervalPlusTime = setInterval(() => {
                this.timeAdd = dateNow.add(1, 's').format(format)
            }, 1000)
        },
        resetAddTime() {
            this.timeAdd = '00:00:00'
            clearInterval(this.intervalPlusTime)
        },
        stopAddTime() {
            clearInterval(this.intervalPlusTime)
        }
    }

}
</script>

<style lang="scss" scoped>
$cdark: rgb(42, 42, 43);
$clight: rgb(92, 90, 90);

%flex {
    display: flex;
    justify-content: center;
}

%colum {
    display: flex;
    flex-direction: column;
}

%input {
    width: 150px;
    height: 33px;
    background-color: $clight;
    border: none;
}

%text {
    font-family: cursive;
    color: white;
}

#container {
    margin-left: 38%;
    margin-top: 20px;
    width: 180px;
    height: 180px;
}

.audio-timer {
    @extend %flex;
    margin-top: 15px;
    background-color: $cdark;
    border-radius: 15%;

    audio {
        height: 25px;
        width: 450px;
    }
}

audio::-webkit-media-controls-panel {
    background-color: $cdark;
}

.container {
    @extend %flex;
    flex-direction: column;
}

.border {
    padding: 30px;

    .top-block {
        margin-top: 40px;
    }
}

.timer-center {
    background-color: $cdark;
    border-radius: 15px;
    margin: 10px;
}

.timer {
    text-align: center;
    padding-top: 15px;
    @extend %text;

    .block-timer {
        @extend %colum;
        margin-left: 10px;
    }
}

.left {
    margin-right: 30px;
}

.lefts {
    margin-right: 10px;
}

.block-flex {
    @extend %flex;

    .min-sec {
        font-size: 22px;
        @extend %text;
        ;
        margin-bottom: 8px;
        text-align: center;
    }
}

.input {
    @extend %input;
    border-radius: 5px;
    font-size: 18px;
    color: rgb(26, 25, 25);
}

.input-block-timer {
    margin-left: 10px;
}

.go-timer {
    @extend %colum;
    @extend %flex;
    position: relative;

    .number-timer-two {
        font-size: 32px;
        @extend %text;
        text-align: center;
        margin-top: 20px;
        border: 6px solid #2E8B57;
        border-style: double;
        border-radius: 50%;
        margin-left: 38%;
        width: 180px;
    }

    .p {
        position: absolute;
        font-size: 32px;
        @extend %text;
        text-align: center;
        margin-left: 2.8%;
        margin-top: 8%;
    }
}

.btn-block {
    @extend %flex;
    margin-right: 10px;

    .sent-time-btn {
        height: 33px;
        width: 150px;
        font-size: 18px;
        margin-top: 15px;
        margin-left: 10px;
        font-family: Bradley Hand, cursive;
        background-color: rgb(58, 57, 57);
        color: black;
        border: none;
        cursor: pointer;

        &:hover {
            color: white;
            background-color: black;
        }
    }
}
</style>
