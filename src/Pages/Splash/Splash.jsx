import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import "./Splash.css";

function AnimatedSplash() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffff");
// 
  const [quote, setQuote] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      setQuote(data.text);
    })();
    setTimeout(() => {
      setQuote((q) => {
        if (q) return q;
        return "Your internet is slower than my crushs reply😕";
      });
    }, 3000);
  }, []);

  return (
    <div className="logo_wrapper">
      <div className="loading">
        <PropagateLoader size={20} color={color} id="logo" loading={loading} style={{float:"center"}} />
        <div className="loadingText">
          <h2 className="quoteHead">Do you know?</h2>
          <p>{quote}</p>
        </div>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }
  render() {
    return this.state.redirect ? <Navigate to="/home" /> : <AnimatedSplash />;
  }
}
export default Splash;
