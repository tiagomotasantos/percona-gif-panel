import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import axios from 'axios';
import './scss/_percona-gif-panel.scss';

interface State {
  gifs: [];
  loading: boolean;
}

const BASE_URL = 'https://api.giphy.com/v1/gifs/';
const API_KEY = 'ni5YKcpDLNzDIePILfrMgnmOqrKdzdsn';
const LIMIT = 100;

export class PerconaGifPanel extends PureComponent<PanelProps, State> {
  private searchTimer: any;

  constructor(props: PanelProps) {
    super(props);

    this.state = { gifs: [], loading: false };
    this.getTrending();
  }

  searchGifs(s: string) {
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }

    if (s) {
      this.searchTimer = setTimeout(() => {
        this.getGifs(`${BASE_URL}search?q=${s}&`);
      }, 750);
    } else {
      this.getTrending();
    }
  }

  getTrending() {
    this.getGifs(`${BASE_URL}trending?`);
  }

  private getGifs(url: string) {
    this.setState({ loading: true });
    axios.get(`${url}api_key=${API_KEY}&offset=0&limit=${LIMIT}`).then(res => {
      const gifs = res.data.data.map((el: any) => el.images.preview_gif.url);
      this.setState({ gifs, loading: false });
    });
  }

  render() {
    return (
      <div className="percona-gif-panel">
        <input type="text" className="gf-form-input" placeholder="search all GIFs" onChange={e => this.searchGifs(e.target.value)} />
        {this.state.loading && <div className="percona-gif-panel__loader"></div>}
        {!this.state.loading && (
          <div className="percona-gif-panel__grid">
            {this.state.gifs.map((url: string) => (
              <div className="percona-gif-panel__grid-item" key={url}>
                <img className="percona-gif-panel__gif" src={url} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
