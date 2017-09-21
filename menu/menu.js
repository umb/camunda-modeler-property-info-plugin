'use strict';

module.exports = function(electronApp, menuState) {
  return [
      {
          label: 'Toggle Property Overlay',
          accelerator: 'Alt+P',
          enabled: function() {
              return menuState.bpmn;
          },
          action: function() {
              electronApp.emit('menu:action', 'togglePropertyOverlays');
          }
      },
      {
          label: 'Toggle Element Id Overlay',
          accelerator: 'Alt+I',
          enabled: function() {
              return menuState.bpmn;
          },
          action: function() {
              electronApp.emit('menu:action', 'togglePropertyIdOverlays');
          }
      },
      {
          label: 'Toggle Transaction Overlay',
          accelerator: 'Alt+T',
          enabled: function() {
              return menuState.bpmn;
          },
          action: function() {
              electronApp.emit('menu:action', 'toggleTransactionOverlays');
          }
      },
      {
          label: 'Version: 0.0.3',
          enabled: function() {
              return false
          },
          action: function() {
          }
      }
  ];
};
