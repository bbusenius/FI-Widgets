import React, { Component } from 'react';
import Input from "./Input";
import Label from "./Label";

const titleCase = str => {
  return str.toLowerCase().split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
}

const convertFunctionName = str => {
  return titleCase(str.replace(/_/g, " "))
}

const getType = x => {
  const types = { 
    "<class 'int'>": "Integer",
    "<class 'float'>": "Decimal",
    "<class 'bool'>": "Boolean",
    "typing.List[float]": "Decimal",
  }
  return types[x] || 'Undefined'
}

const getPlaceholder = x => {
  const types = { 
    "<class 'int'>": "0",
    "<class 'float'>": "0.0",
    "<class 'bool'>": "True",
    "typing.List[float]": "0.0",
  }
  return types[x] || 'Undefined'
}

class Widget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      params: {},
      answer: '',
    };
  }

  handleChange (e, api, wn, arg) {
    const { params } = this.state
    const ival = e.target.value
    params[arg] = ival
    const strParams = Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&');
    const query = `${api}${wn}?${strParams}`

    fetch(query)
      .then(res => res.json())
      .then((res) => {
        if (res.error && res.error.code === 400) {
          // TODO - Some error handling
        } else if (!res.error) {

          if (typeof(res) === 'object') {
            const str = Object.keys(res).map(key => `${key}: ${res[key]}\n`)
            this.setState({
              answer: str,
            });
          } else {
            this.setState({
              answer: res,
            });
          }
        }
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line no-console
      });
  }

  handleClick () {
    this.handleChange();
  }

  render() {
    const { id } = this.props;
    const { api } = this.props;
    const { data } = this.props;
    const { answer } = this.state
    const name = convertFunctionName(id);
    const args = Object.keys(data);
    return (
      <div className="widget">
        <h2>{name}</h2>
        <form id={id} action={api + id}>
          {args.map(arg => (
            <div className="input-group" key={arg + id}>
              <Label htmlFor={`${id  }_${  arg}`} text={convertFunctionName(arg)} />
              <Input
                arg={`${id  }_${ arg}`}
                onChange={(e) => {this.handleChange(e, api, id, arg)}}
                placeholder={getPlaceholder(data[arg])}
              />
              <small>{getType(data[arg])}</small>
            </div>
          ))}
        </form>
        <p className="answer"><strong>{answer}</strong></p>
      </div>
    );
  }
}

export default Widget
