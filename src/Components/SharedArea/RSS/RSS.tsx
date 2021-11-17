import { Component } from "react";
// src/App/index.tsx

import * as Parser from "rss-parser";
// Types

import "./RSS.css";

interface RSSProps {
  name: string;
}

interface RSSState {
  feed: any[];
}

class RSS extends Component<RSSProps, RSSState> {
  public constructor(props: RSSProps) {
    super(props);
    this.state = { feed: [] };
  }
  async componentDidMount() {
    const feed = await Parser.prototype.parseURL("http://www.ynet.co.il/Integration/StoryRss1854.xml");
    this.setState({ feed });
  }
  public render(): JSX.Element {
    return (
      <div className="RSS">
        <h1>RSS Feed</h1>
        {this.state.feed.map((item, i) => (
          <div key={i}>
            <h1>item.title</h1>
            <a href="http://www.ynet.co.il/Integration/StoryRss1854.xml">http://www.ynet.co.il/Integration/StoryRss1854.xml</a>
          </div>
        ))}
      </div>
    );
  }
}

export default RSS;
