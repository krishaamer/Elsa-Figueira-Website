Meteor.startup(function () {
  analytics.track("Client Startup");
});

Router.configure({
  layoutTemplate: 'layout',
  waitOn: function(){ 
    Meteor.setTimeout(function(){ 
      Accounts.loginServicesConfigured(); 
    },500); 
  } 
});

Router.route('/', function() {
  TAPi18n.setLanguage("en")
  this.render('stopviolence');
});

Router.route('/video', function () {
  this.render('video');
  analytics.track("Showing video");
  analytics.track("Default home");
});

Router.route('/stopviolence', function () {
  TAPi18n.setLanguage("en")
  this.render('stopviolence');
  analytics.track("English");
});

Router.route('/peata-vagivald', function () {
  TAPi18n.setLanguage("et")
  this.render('stopviolence');
  analytics.track("Estonian");
});

Router.route('/stopviolencia', function () {
  TAPi18n.setLanguage("pt")
  this.render('stopviolence');
  analytics.track("Portuguese");
});


Template.stopviolence.events({
  "click .joinnow": function (event, template) {
    analytics.track("Click show video");
    Router.go('/video#elsa');
  }
});

Template.partners.events({
  "click .becomesupporter": function (event, template) {
    analytics.track("Click become supporter");
    $('.ui.modal.contact').modal('show');
  }
});

Template.header.onRendered(function () {
  $('.ui.dropdown').dropdown({
    onChange: function(value) {
      if(value == "et") {
        Router.go('/peata-vagivald');
      } else if (value == "pt") {
        Router.go('/stopviolencia');
      } else {
        Router.go('/stopviolence');
      }
    }
  });
});

Template.stopviolence.onRendered(function () {

  $('.text').popup();
  $('.button').popup();
});

Template.media.onRendered(function () {

  this.$('.ui.embed').embed();
});

Template.video.onRendered(function () {

  this.$('.ui.embed').embed({
    autoplay: true
  });

});

Template.team.onRendered(function () {

  $('.icon').popup();
  $('.image').popup();
});


Template.header.onRendered(function () {

  $('.button').popup();
  $('.icon').popup();
});


Template.header.helloName = function() {
  Meteor.subscribe("current_user_data");

  analytics.identify({
    email: Meteor.user().profile.email,
    first_name: Meteor.user().profile.first_name,
    last_name: Meteor.user().profile.last_name
  });

  return Meteor.user().profile.first_name;
}

Template.header.events({
  "click #logout": function (err, tmpl) {
    Meteor.logout(function (err) {      
      if (err) {
        //Session.set("status", err.reason);
        analytics.track("Logout error");
        
      } else {
        analytics.track("Logout success");
      }
    })
  },
  "click #login": function (err, tmpl) {
    
    analytics.track("Login Clicked");
    
    Meteor.loginWithFacebook({ 
      requestPermissions: ['email']},
    function (err) {
        if (err) {
          analytics.track("Login failed", {
            problem: err,
            why: err.reason
          });
          
        } else {
          analytics.track("Login success");
        }
    });
  }
})