import { AppPlugin } from '@grafana/data';
import { loadPluginCss } from '@grafana/runtime';

loadPluginCss({
  dark: 'plugins/grafana-zabbix-audio/styles/dark.css',
  light: 'plugins/grafana-zabbix-audio/styles/light.css',
});

export const plugin = new AppPlugin<{}>();
