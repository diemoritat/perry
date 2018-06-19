import { h } from "preact"; 
import habitat from "preact-habitat";
import Widget from "../../components/Widget";

const renderBugReporter = options => {
  const Wrapper = () => <Widget {...options} />;
  
  const { render } = habitat(Wrapper);

  render({
    selector: 'body',
    clean: false,
  });
};

export default renderBugReporter;