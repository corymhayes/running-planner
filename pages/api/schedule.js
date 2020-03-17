const scheduleMaker = day => {
  const schedule = {
    week1: {
      label: 'Week 1 (' + day[0] + " - " +  day[6] + ')',
      monday: {
        label:  day[0] + " - Mon",
        exercise: "Rest",
        tag: "rest"
      },
      tuesday: {
        label:  day[1] + " - Tue",
        exercise: "3 mi run",
        tag: "run"
      },
      wednesday: {
        label:  day[2] + " - Wed",
        exercise: "2 mi run or cross",
        tag: "cross"
      },
      thursday: {
        label:  day[3] + " - Thu",
        exercise: "3 mi run",
        tag: "run"
      },
      friday: {
        label:  day[4] + " - Fri",
        exercise: "Rest",
        tag: "rest"
      },
      saturday: {
        label:  day[5] + " - Sat",
        exercise: "30 min cross",
        tag: "cross"
      },
      sunday: {
        label:  day[6] + " - Sun",
        exercise: "4 mi run",
        tag: "run"
      },
    },
    week2: {
      label: 'Week 2 (' + day[7] + " - " +  day[13] + ')',
      monday: {
        label:  day[7] + " - Mon",
        exercise: "Rest",
        tag: "rest"
      },
      tuesday: {
        label:  day[8] + " - Tue",
        exercise: "3 mi run",
        tag: "run"
      },
      wednesday: {
        label:  day[9] + " - Wed",
        exercise: "2 mi run or cross",
        tag: "cross"
      },
      thursday: {
        label:  day[10] + " - Thu",
        exercise: "3 mi run",
        tag: "run"
      },
      friday: {
        label:  day[11] + " - Fri",
        exercise: "Rest",
        tag: "rest"
      },
      saturday: {
        label:  day[12] + " - Sat",
        exercise: "30 min cross",
        tag: "cross"
      },
      sunday: {
        label:  day[13] + " - Sun",
        exercise: "4 mi run",
        tag: "run"
      },
    }
  }

  return schedule
}

export default scheduleMaker