<template>
  <div class="calendar-container">
    <div class="calendar">
      <FullCalendar
        :options="calendarOptions"

      />
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [resourceTimelinePlugin, interactionPlugin],
        timeZone: 'UTC',
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        views: {
          resourceTimeline10days: {
            type: 'resourceTimeline',
            duration: { days: 10 },
            slotDuration: '24:00:00'
          },
        },
        initialView: 'resourceTimeline10days',
        resources: [
          {
            id: 'uche',
            title: 'Uchenna Nebedum',
            children: [
              { id: 'timelog', title: 'Timelogging Sheet' },
              { id: 'clickup', title: 'Clickup Clone' },
            ],
          },
          {
            id: 'yaswan',
            title: 'Yaswan Azziz',
            children: [
              { id: 'timelog-yas', title: 'Timelogging Sheet' },
              { id: 'daily', title: 'Daily Tasks' },
            ],
          },
        ],
        events: [
          {
            id: 'event1',
            title: 'Timelogging Sheet',
            start: '2023-06-11',
            end: '2023-06-23',
            resourceId: 'timelog',
          },
          {
            id: 'event2',
            title: 'Clickup Clone',
            start: '2023-06-01',
            end: '2023-06-09',
            resourceId: 'clickup',
          },
          {
            id: 'event3',
            title: 'Timelogging Sheet',
            start: '2023-06-02',
            end: '2023-06-15',
            resourceId: 'timelog-yas',
          },
          {
            id: 'event4',
            title: 'Daily Tasks',
            start: '2023-06-08',
            end: '2023-06-12',
            resourceId: 'daily',
          },
        ]
      },
    }
  },
  methods: {
    renderEventContent(arg) {
      return `
        <div class="event-container">
          <div class="event-title">${arg.event.title}</div>
        </div>
      `;
    },
    adjustEventPosition(info) {
      const { event, el } = info;
      const userEventPositions = this.userEventPositions[event.userId] || [];
      const column = userEventPositions.findIndex(pos => info.isIntersecting(pos));
      if (column !== -1) {
        const top = column * 25; // Adjust the top position as needed
        el.style.top = `${top}px`;
        this.userEventPositions[event.userId][column] = {
          start: info.event.start,
          end: info.event.end,
        };
      } else {
        const top = userEventPositions.length * 25; // Adjust the top position as needed
        el.style.top = `${top}px`;
        this.userEventPositions[event.userId] = [{
          start: info.event.start,
          end: info.event.end,
        }];
      }
    },
  },
}
</script>

<style scoped>
</style>