
import './main.html';

Tasks = new Mongo.Collection('meteor-tasks');
Meteor.subscribe('meteor-tasks');
Template.tasks.helpers({
  tasks: function(){
    return Tasks.find({},{sort: {createdAt:-1}});
  }
});

Template.tasks.events({
  "submit .add-task": function(event){
    var name = event.target.name.value;
    Meteor.call('addTask',name);
    event.target.name.value = "";
    return false;
  },
  "click .delete-task" : function(event){
    if(confirm('Delete Task?')){
      Meteor.call('deleteTask',this._id);
    }
    return false;
  }
});
