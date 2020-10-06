import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./News.css";
// import { NEWS_API_KEY } from "../settings/keys";

const NEWS_API_HOST = "https://news67.p.rapidapi.com";
const NEWS_ENDPOINT_PATH = "/trending";
const NEWS_ENDPOINT = new URL(NEWS_ENDPOINT_PATH, NEWS_API_HOST);
const news_settings = {
  limit: "10",
  langs: "en",
  skip: "1",
};
const NEWS_URL_PARAMS = new URLSearchParams();
for (const [key, value] of Object.entries(news_settings)) {
  NEWS_URL_PARAMS.append(key, value);
}

const hour = 60 * 60 * 1000;

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshRate: hour,
    };
    this.getNews = this.getNews.bind(this);
  }

  async getNews() {
    // console.log("getNews called");
    const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const NEWS_API_URL = `${NEWS_ENDPOINT}?${NEWS_URL_PARAMS.toString()}`;
    try {
      const response = await fetch(NEWS_API_URL, {
        method: "GET",
        headers: {
          "x-rapidapi-key": NEWS_API_KEY,
        },
      });
      const data = await response.json();
      // console.log("data", data);
      this.setState({
        data: data,
      });
    } catch (err) {
      console.dir(err);
      this.setState({
        error: err,
      });
    }
  }

  componentDidMount() {
    this.getNews();
  }

  render() {
    const styles = {
      marginRight: "10px",
    };
    return (
      <List>
        {this.state.data.map((story, i) => (
          <ListItem key={i} className="news">
            <div style={styles}>
              <img src={story.image} alt={story.title} width="100" />
            </div>
            <div>
              <ListItemText
                primary={<a href={story.url}> {story.title}</a>}
                secondary={story.summarization || story.description}
              />
            </div>
          </ListItem>
        ))}
      </List>
    );
  }
}
export default News;

// const list = [];
// for (let [index, story] of this.state.data.entries()) { [0, 'thing], [1, 'other]
//   list.push(
//     <li key={index}>
//       <img src={story.urlToImage} alt={''} width="50" />
//       <a href={story.url}>{story.title}</a> by{story.author}{' '}
//     </li>
//   );
// }
