import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Widget from '../components/Widget';

const Index = props => (
  <div>
    <Layout />
    <div className="content">
      {props.widgets.map(wn => (
        <Widget key={wn} id={wn} data={props.data[wn]} api={props.api} />
      ))}
    </div>
  </div>
);

Index.getInitialProps = async function() {
  const api = process.env.FIAPI
  const res = await fetch(api);
  const data = await res.json();
  const widgets = Object.keys(data['Available API Endpoints']);

  return {
    data: data['Available API Endpoints'],
    widgets,
    api
  };
};

export default Index;
