<template>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div class="w-100">
            <h2 class="mb-5">Passions</h2>

            <div class="subheading mb-3">Sports</div>
                <ul v-if="statsStrava">
                    <li>
                        <p>
                            Cette année j'ai couru : <strong >{{statsStrava.runDistance}} </strong> kms
                        </p>
                    </li>
                    <li>
                        <p>
                            Cette année j'ai fait : <strong >{{statsStrava.rideDistance}} </strong>  kms de vélo
                        </p>
                    </li>
                </ul>
        </div>
    </section>
</template>


<script>

    import axios from 'axios';
    import jsonStravaConfig from '../config/strava.json';

    const Strava = {
        runDistance: 0,
        rideDistance: 0,
        swimDistance: 0,

        printIntroduction: function () {
            //console.log(`C'est ${this.runDistance} de pris.`);
        }
    };

    export default {
        data() {
            return {
                statsStrava: [],
                errors: []
            }
        },

        // Fetches posts when the component is created.
       created() {

           axios.get(`https://www.strava.com/api/v3/athletes/`+jsonStravaConfig.id_user+`/stats`, {
                   params: {
                       'access_token': jsonStravaConfig.access_token
                   }
               })
                .then(response => {
                    // JSON responses are automatically parsed.

                    this.statsStrava = new Object(Strava);

                    this.dataStrava = response.data

                    this.statsStrava.runDistance = Math.round(this.dataStrava.ytd_run_totals.distance/1000)
                    this.statsStrava.rideDistance = Math.round(this.dataStrava.ytd_ride_totals.distance/1000)

                    console.log(this.statsStrava);
                })
                .catch(e => {
                    this.errors.push(e)
                })
       }

    }
</script>

<style>
    .card {
        font-family: Avenir;
        border: 2px solid #333;
        margin: 20px;
    }
</style>