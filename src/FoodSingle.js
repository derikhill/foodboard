import { Component } from 'react';
import { Skeleton, Badge } from '@webeetle/windy';

class FoodSingle extends Component {
  state = { loading: true };

  async componentDidMount() {
    const URL = process.env.REACT_APP_API_URL;
    const res = await fetch(
      `${URL}/meals/${this.props.match.params.id}`
    );

    const json = await res.json();
    this.setState(Object.assign({ loading: false}, json));
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="w-30 md:w-96 m-20">
          <Skeleton className="w-3/4 mb-3" />
          <Skeleton className="mb-3" />
          <Skeleton className="w-1/2 mb-3" />
        </div>
      )
    }

    const { id, title, description, category } = this.state;
    return (
      <div 
        id={ id }
        className="md:grid grid-cols-2 gap-3 container mt-4 p-8"
      >
        <img 
          className="place-self-center"
          src='http://lorempixel.com/500/600/food' 
          alt={ title }
        />
        <div>
          <Badge 
            text={ category }
            size="xs"
            className="md:w-1/6 text-center text-xs float-right"
          />
          <h2 className="text-3xl font-bold mt-10 mb-3">{ title }</h2>
          <p>{ description }</p>
          <p>Est ipsum id pariatur elit dolor et do quis magna. Duis sit nisi ut dolore culpa adipisicing irure deserunt eiusmod tempor dolore labore minim amet. Proident est labore consequat dolor veniam dolor. Cillum velit ad laboris aute ullamco excepteur eiusmod adipisicing dolore aliquip. Fugiat deserunt velit elit occaecat qui eiusmod amet officia ea laborum. Lorem tempor dolor cillum labore nostrud culpa non sit qui. Qui in est exercitation irure Lorem Lorem nisi.</p>
        </div>
      </div>
    )
  }
}

export default FoodSingle;
