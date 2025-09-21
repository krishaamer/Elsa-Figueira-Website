import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/pwix:blaze-layout';

// Simple analytics placeholder - replace with your preferred analytics service
const analytics = {
  track: function(event, data) {
    console.log('Analytics:', event, data);
    // Add your analytics service here (Google Analytics, Mixpanel, etc.)
  },
  identify: function(data) {
    console.log('Analytics identify:', data);
    // Add your analytics service here
  }
};

// Simple language state
const Language = {
  current: 'en',
  setLanguage: function(lang) {
    this.current = lang;
    // Store in session for persistence
    Session.set('language', lang);
  },
  getLanguage: function() {
    return Session.get('language') || this.current;
  }
};

// Use FlowRouter for routing
const SimpleRouter = FlowRouter;

// FlowRouter routes with simple template rendering
FlowRouter.route('/', {
  name: 'home',
  action: function() {
    Language.setLanguage("en");
    analytics.track("English");
    BlazeLayout.render('layout', { yield: 'stopviolence' });
  }
});

FlowRouter.route('/video', {
  name: 'video',
  action: function() {
    analytics.track("Showing video");
    analytics.track("Default home");
    BlazeLayout.render('layout', { yield: 'video' });
  }
});

FlowRouter.route('/stopviolence', {
  name: 'stopviolence',
  action: function() {
    Language.setLanguage("en");
    analytics.track("English");
    BlazeLayout.render('layout', { yield: 'stopviolence' });
  }
});

FlowRouter.route('/peata-vagivald', {
  name: 'peata-vagivald',
  action: function() {
    Language.setLanguage("et");
    analytics.track("Estonian");
    BlazeLayout.render('layout', { yield: 'stopviolence' });
  }
});

FlowRouter.route('/stopviolencia', {
  name: 'stopviolencia',
  action: function() {
    Language.setLanguage("pt");
    analytics.track("Portuguese");
    BlazeLayout.render('layout', { yield: 'stopviolence' });
  }
});

Meteor.startup(function () {
  analytics.track("Client Startup");

  // Wait for accounts to be configured
  Meteor.setTimeout(function(){
    Accounts.loginServicesConfigured();
  }, 500);
});


Template.stopviolence.events({
  "click .joinnow": function (event, template) {
    analytics.track("Click show video");
    SimpleRouter.go('/video#elsa');
  }
});

Template.partners.events({
  "click .becomesupporter": function (event, template) {
    analytics.track("Click become supporter");
    $('.ui.modal.contact').modal('show');
  }
});

Template.header.onRendered(function () {
  const initial = Language.getLanguage();
  $('.ui.dropdown').dropdown('set selected', initial);
  $('.ui.dropdown').dropdown({
    onChange: function(value) {
      if(value == "et") {
        SimpleRouter.go('/peata-vagivald');
      } else if (value == "pt") {
        SimpleRouter.go('/stopviolencia');
      } else {
        SimpleRouter.go('/stopviolence');
      }
    }
  });
  $('.button').popup();
  $('.icon').popup();
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


// (merged header onRendered above)


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
