if (Meteor.isClient) {
  Meteor.subscribe("userData");
}

if (Meteor.isServer) {
  Meteor.publish("userData", function () {
    if (this.userId) {
      return Meteor.users.find({_id: this.userId},
                               {fields: {'services.eve.character': 1}});
    } else {
      this.ready();
    }
  });
}
