<template>
  <div>
    <FullCalendar
      class=""
      :options="calendarOptions"
    />
  <!-- <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row> -->
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

export default {
  name: 'IndexPage',
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ resourceTimelinePlugin ],
        initialView: 'resourceTimelineDay',
        // initialView: 'dayGridMonth',
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        aspectRatio: 2,
        headerToolbar: {
          left: 'today prev,next',
          center: 'title',
          right: 'resourceTimelineDay,resourceTimelineWeek'
        },
        editable: true,
        resourceAreaHeaderContent: 'スケジュール',
        resourceGroupField: 'building',
    resources: [
      { id: 'a', building: 'スタッフ', title: 'スタッフ A', eventColor: 'green' },
      { id: 'b', building: 'スタッフ', title: 'スタッフ B', eventColor: 'green' },
      { id: 'c', building: 'スタッフ', title: 'スタッフ C', eventColor: 'green' },
      { id: 'd', building: 'スタッフ', title: 'スタッフ D', eventColor: 'green' },
      { id: 'g', building: '利用者', title: '利用者 G', eventColor: 'orange' },
      { id: 'h', building: '利用者', title: '利用者 H', eventColor: 'orange' },
      { id: 'i', building: '利用者', title: '利用者 I', eventColor: 'orange' },
      { id: 'j', building: '利用者', title: '利用者 J', eventColor: 'orange' },
      { id: 'k', building: '利用者', title: '利用者 K', eventColor: 'orange' },
      { id: 'l', building: '利用者', title: '利用者 L', eventColor: 'orange' },
      { id: 'm', building: '利用者', title: '利用者 M', eventColor: 'orange' }
    ],
    events: [
        { id: '1', resourceId: 'a', start: '2023-07-13T09:00:00', end: '2023-07-13T17:00:00' },
        { id: '2', resourceId: 'b', start: '2023-07-13T10:00:00', end: '2023-07-13T18:00:00' },
        { id: '3', resourceId: 'c', start: '2023-07-13T16:00:00', end: '2023-07-13T21:00:00' },
        { id: '4', resourceId: 'd', start: '2023-07-13T10:00:00', end: '2023-07-13T18:00:00' },
        { id: '5', resourceId: 'g', start: '2023-07-13T09:00:00', end: '2023-07-13T17:00:00' },
        { id: '6', resourceId: 'h', start: '2023-07-13T15:00:00', end: '2023-07-13T18:00:00' },
        { id: '7', resourceId: 'i', start: '2023-07-13T09:00:00', end: '2023-07-13T17:00:00' },
        { id: '8', resourceId: 'j', start: '2023-07-13T09:00:00', end: '2023-07-13T17:00:00' },
        { id: '9', resourceId: 'k', start: '2023-07-13T13:00:00', end: '2023-07-13T19:00:00' },
        { id: '10', resourceId: 'l', start: '2023-07-13T13:00:00', end: '2023-07-13T17:00:00' },
        { id: '11', resourceId: 'm', start: '2023-07-13T09:00:00', end: '2023-07-13T17:00:00' },
    ]
      }
    }
  }
}
</script>

<style scoped>
a {
  height: 100px;
}

.fc .fc-event {
    border-radius: 30px;
  }

.fc .fc-timeline-event {
    padding: 30px;
  }

  .fc-event {
    height: 100%;

  }
</style>
