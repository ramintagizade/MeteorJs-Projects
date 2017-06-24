import { Meteor } from 'meteor/meteor';
Tasks = new Mongo.Collection('meteor-tasks');
Meteor.methods({
  addTask: function(name){
    if(!Meteor.userId()){
      throw new Meteor.Error("No access!");
    }
    Tasks.insert({name:name,
      createdAt:new Date(),
      userId: Meteor.userId()
    });
  },
  deleteTask: function(taskId){
    Tasks.remove(taskId);
  }
});
Meteor.publish('meteor-tasks',function(){
  return Tasks.find({userId:this.userId});
});
Meteor.startup(() => {
  // code to run on server at startup
});
