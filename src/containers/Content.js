import React from 'react';
import axios from 'axios';
import Picture from '../components/content/Picture';
import Title from '../components/content/Title';
import Year from '../components/content/Year';
import Genre from '../components/content/Genre';




// const Content = () => (
//     <div className="content">
//         <div className="film-item">
//             <Picture imgSrc="" />
//             <Title filmTitle="title" />
//             <Year filmYear="1988" />
//             <Genre filmGenre="Fiction" />
//         </div>
//     </div>
// );

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filmsData: [],
        }
    }
    
    componentDidMount() {
        axios.get('https://reactjs-cdp.herokuapp.com/movies')
        .then(response => {
            this.setState({ filmsData: response.data.data });
        })
        .catch(error => {
            console.error(error);
        });
    }

    render() {
        const { filmsData } = this.state;
        return (
        <div className="content">
                {filmsData.map(item => (
                    <div className="film-item" key={ item.id } >
                        <Picture imgSrc={ item.poster_path } />
                        <Title filmTitle={ item.title } />
                        <Year filmYear={ item.release_date } />
                        <Genre filmGenre={ item.genres } />
                    </div>
                ))}
        </div>);
    }
}

export default Content;