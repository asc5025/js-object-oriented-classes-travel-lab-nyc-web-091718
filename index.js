let eastWest = [
                '1st Avenue',
                '2nd Avenue',
                '3rd Avenue',
                'Lexington Avenue',
                'Park',
                'Madison Avenue',
                '5th Avenue'
                ]

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0).getFullYear()
    console.log(endDate)
    console.log(this.startDate.getFullYear())
    return (endDate - this.startDate.getFullYear())
  }

}

// let al = new Driver('Albert', 'September 17 2018')
// console.log(al)
// al.yearsExperienceFromBeginningOf(2018)
// console.log(al.startDate.getFullYear())

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let horizontalDistance = eastWest.findIndex(avenue =>
      avenue == this.endingLocation.horizontal) - eastWest.findIndex(location =>
        location == this.beginningLocation.horizontal);
        console.log(horizontalDistance)
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    console.log(verticalDistance)
    return Math.abs(horizontalDistance) + Math.abs(verticalDistance)
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }

}
