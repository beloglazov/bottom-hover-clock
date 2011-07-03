const St = imports.gi.St;
const Mainloop = imports.mainloop;

const Main = imports.ui.main;
const MessageTray = imports.ui.main.messageTray;

function _showTime() {
  let text = new St.Label({ style_class: 'date-time-label', text: (new Date()).toLocaleString() });
  let monitor = global.get_primary_monitor();
  global.stage.add_actor(text);
  text.set_position(Math.floor (monitor.width / 2 - text.width / 2),
  Math.floor(monitor.height / 2 - text.height / 2));
  Mainloop.timeout_add(3000, function () { text.destroy(); });
}

function main(extensionMeta) {
  MessageTray.actor.connect('notify::hover', _showTime);
}


