const uiEvents = {
  install(Vue, options) {
    Vue.mixin({
      mounted() {

        let ui = {

          // initialize the plugin
          init() {
            // run methods
            ui.uiMethod();
          },

          uiMethod() {
            // run your method...
          },

        }

        // run the plugin
        ui.init();

      }
    });
  }
};

export default uiEvents;