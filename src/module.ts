import { PanelPlugin, PanelProps } from '@grafana/data';
import { PerconaGifPanel } from './PerconaGifPanel';

export const plugin = new PanelPlugin<PanelProps>(PerconaGifPanel);
