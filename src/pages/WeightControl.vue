<template>
<div class="container">
    <div v-if="this.currentStep === 'blockSex'">
        <h1 class="qwestion">Male or Female:</h1>
        <div class="btn-male-female">
            <div tabindex="1" class="div">
                <input id="man" type="radio" name="sex" v-model="sex" value="MAN" class="hide">
                <label class="btn-male" for="man">
                    <img src="@/assets/img/male.png" class="img">
                    <p class="btn-text">Male</p>
                </label>
            </div>
            <div tabindex="2" class="div">
                <input id="woman" type="radio" name="sex" v-model="sex" value="WOMAN" class="hide">
                <label class=" btn-female" for="woman">
                    <img src="@/assets/img/female.png" class="img">
                    <p class="btn-text">Female</p>
                </label>
            </div>
        </div>
        <div class="center-btn-continue">
            <button @click="this.currentStep = 'blockSport'" class="continue">Continue</button>
        </div>
    </div>
    <div v-if="this.currentStep === 'blockSport'" class="colom">
        <div class="center-btn">
            <div>
                <div class="active">
                    <input id="minActiv" type="radio" name="sport" v-model="sport" value="minActiv" class="hide">
                    <label class="sport" for="minActiv">
                        <img src="@/assets/img/sleep.png" class="img-active">
                        <div class="culom-text">
                            <div class="blue">1.200</div>
                            <div class="sport"> Для малорухомих людей, тренувань мало або відсутні</div>
                        </div>
                    </label>
                </div>
                <div class="active">
                    <input id="minAverageActiv" type="radio" name="sport" v-model="sport" value="minAverageActiv" class="hide">
                    <label class="sport" for="minAverageActiv">
                        <img src="@/assets/img/racket.png" class="img-active">
                        <div class="culom-text">
                            <div class="blue">1.375</div>
                            <div class="sport"> Для людей з низькою активністю, легкі тренування 1-3 рази в тиждень</div>
                        </div>
                    </label>
                </div>
                <div class="active">
                    <input id="averageActiv" type="radio" name="sport" v-model="sport" value="averageActiv" class="hide">
                    <label class="sport" for="averageActiv">
                        <img src="@/assets/img/dumbbells.png" class="img-active">
                        <div class="culom-text">
                            <div class="blue">1.550</div>
                            <div class="sport"> Для помірно активних людей, регулярні тренування 3-5 раз в тиждень</div>
                        </div>
                    </label>
                </div>
                <div class="active">
                    <input id="maxAverageActiv" type="radio" name="sport" v-model="sport" value="maxAverageActiv" class="hide">
                    <label class="sport" for="maxAverageActiv">
                        <img src="@/assets/img/ball.png" class="img-active">
                        <div class="culom-text">
                            <div class="blue">1.725</div>
                            <div class="sport"> Для дуже активних людей, інтенсивні тренування 6-7 раз в тиждень</div>
                        </div>
                    </label>
                </div>
                <div class="active">
                    <input id="maxActiv" type="radio" name="sport" v-model="sport" value="maxActiv" class="hide">
                    <label class="sport" for="maxActiv">
                        <img src="@/assets/img/fire.png" class="img-active">
                        <div class="culom-text">
                            <div class="blue">1.900</div>
                            <div class="sport"> Для гранично активних людей, інтенсивні тренування кожен день, фізична важка робота</div>
                        </div>
                    </label>
                </div>

            </div>
            <div class="center-btn-continue">
                <button @click="this.currentStep = 'yourInformation'" class="continue">Continue</button>
            </div>
        </div>
    </div>

    <div v-if="this.currentStep === 'yourInformation'" class="your-information">
        <div class="culom-content">
            <h1>Введіть свої данні</h1>
            <div class="information">
                <p>Ваш вік</p>
                <input v-model="age" type="text">
                <p>Ваш ріст</p>
                <input v-model="growth" type="text">
                <p>Ваш вага</p>
                <input v-model="weight" type="text">
            </div>
            <button @click="calculateCalorieRate(this.currentStep = 'blockResult')" :disabled="this.age && this.growth && this.weight != null ? !btnDisabled : btnDisabled" class="btn-kaloriya">Розрахувати норму калорій</button>
        </div>
    </div>
    <div v-if="this.currentStep === 'blockResult'" class="colom">
        <div class="block-result">
            <div class="result">
                <span>Ваш індекс маси тіла (ІМТ):</span>
                <p>{{this.resultIMT.toFixed(1)}}</p>
                <small>(Норма від 18.5 до 25)</small>
                <span>Ваш базовий метаболізм:</span>
                <p >{{this.resultMetabolism}} kkal/day</p>
                <span>Ваша норма калорій:</span>
                <p>{{this.normaKalories}} kkal/day</p>
            </div>
            <div class="center-btn-continue">
                <button @click="this.currentStep = 'blockSex'" class="continue">First</button>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'WeightControl',
    data() {
        return {
            btnDisabled: true,
            sex: 'MAN',
            sport: 'minActiv',
            age: null,
            growth: null,
            weight: null,
            resultIMT: 0,
            resultMetabolism: 0,
            normaKalories: 0,
            isContinue: false,
            currentStep: 'blockSex'
        }
    },
    methods: {
        continueWork() {
            this.continue = false
            alert('bobobo')
        },
        calculateCalorieRate() {
            this.resultIMT = (this.weight / (this.growth * this.growth)) * 10000
            if (this.sex === 'MAN') {
                this.resultMetabolism = Math.floor((9.99 * this.weight) + (6.25 * this.growth) - (4.92 * this.age) + 5)
            } else {
                this.resultMetabolism = Math.floor((9.99 * this.weight) + (6.25 * this.growth) - (4.92 * this.age) - 161)
            }
            console.log(this.resultMetabolismWomen)
            
            if (this.sport === 'minActiv') {
                this.normaKalories = Math.floor(this.resultMetabolism * 1.200)
            } else if (this.sport === 'minAverageActiv') {
                this.normaKalories = Math.floor(this.resultMetabolism * 1.375)
            } else if (this.sport === 'averageActiv') {
                this.normaKalories = Math.floor(this.resultMetabolism * 1.550)
            } else if (this.sport === 'maxAverageActiv') {
                this.normaKalories = Math.floor(this.resultMetabolism * 1.725)
            } else {
                this.normaKalories = Math.floor(this.resultMetabolism * 1.900)
            }
            this.weight = null
            this.growth = null
            this.age = null
        }

    },
}
</script>

<style lang="scss" scoped>
%flex {
    display: flex;
    justify-content: center;
}

%text {
    text-align: center;
    font-family: Bradley Hand, cursive;
    font-size: 20px;
}

%culom {
    display: flex;
    flex-direction: column;
}

.hide {
    display: none;
}

.qwestion {
    color: white;
    text-align: center;
}

.div {
    width: 270px;
    height: 270px;
    background-color: rgb(58, 57, 57);
    margin: 3px;

    &:hover {
        background-color: rgb(39, 168, 78);
    }

    &:focus {
        background-color: rgb(39, 168, 78);
    }
}

.btn-male-female {
    margin-top: 20px;
    @extend %flex;

    .img {
        width: 200px;
        margin-top: 20px;
        margin-left: 35px;
        cursor: pointer;
    }

    .btn-text {
        text-align: center;
        margin-top: 10px;
        font-size: 24px;
        font-weight: 700;
    }

}

.center-btn-continue {
    @extend %flex;

    .continue {
        margin-top: 20px;
        background-color: rgb(58, 57, 57);
        width: 545px;
        font-size: 28px;
        font-family: Bradley Hand, cursive;
        border: none;
        height: 40px;
        cursor: pointer;

        &:hover {
            color: white;
            background-color: black
        }
    }

}

.colom {
    @extend %flex;
    margin-bottom: 40px;

    .center-btn {
        // @extend %flex;

        .active {
            width: 525px;
            height: 100px;
            background-color: rgb(58, 57, 57);
            margin-top: 10px;
            display: flex;
            padding: 10px;
            border: none;
            cursor: pointer;

            &:hover {
                box-shadow: 0 8px 26px rgb(105, 104, 104);
            }

            .sport {
                @extend %flex;
            }

            .img-active {
                width: 60px;
                height: 60px;
                margin-top: 20px;
            }

            .culom-text {
                @extend %culom;
                margin-left: 15px;

                .blue {
                    color: rgb(118, 118, 224);
                    margin-left: 20px;
                    font-size: 18px;
                    margin-top: 20px;
                    display: flex;
                    justify-content: flex-start;
                }

                .sport {
                    font-size: 20px;
                    font-family: Bradley Hand, cursive;
                }
            }

        }

    }

}

.your-information {
    @extend %flex;

    .culom-content {
        @extend %flex;
        width: 545px;
        height: 430px;
        background-color: rgb(58, 57, 57);
        margin-top: 10px;
        @extend %culom;

        h1 {
            color: white;
            text-align: center;
            font-family: Bradley Hand, cursive;
        }

        .information {
            @extend %text;
            color: antiquewhite;

            p {
                margin-top: 10px;
            }

            input {
                width: 300px;
                height: 40px;
                border: 1px solid gray;
                text-align: center;
                outline: none;
            }

        }

        .btn-kaloriya {
            width: 300px;
            height: 50px;
            margin-left: 22.6%;
            margin-top: 25px;
            background-color: chartreuse;
            @extend %text;
            border: none;

            &:hover {
                background-color: rgb(100, 187, 14);
                color: white;
            }
        }
    }
}

.colom {
    @extend %flex;

    .block-result {

        // display: flex;
        // flex-direction: column;
        .result {
            @extend %text;
            width: 545px;
            height: 300px;
            background-color: rgb(58, 57, 57);
            margin-top: 10px;
            @extend %culom;
            color: white;

            span {
                margin-top: 30px;
            }

            p {
                color: green;
            }
        }
    }
}
</style>
