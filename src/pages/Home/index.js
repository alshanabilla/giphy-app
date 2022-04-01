// import React, { Component } from 'react'
import React, { useEffect, useState } from 'react';
import Gif from '../../components/Gif'
// import SearchBar from '../../components/SearchBar'
// import gifs from '../../data/gifs'
// import config from '../../lib/config'

const Home = () => {
    const [ gifs, setGifs ] = useState([]);
    const [ text, setText ] = useState("");

    useEffect(() => {
        getGif()
    }, []);

    const handleInput = (e) => {
        setText(e.target.value);
    }

    const getGifs = (e) => {
        e.preventDefault();
        getGif();
    };

    const getGif = async () => {
        const gifs = await fetch(
            `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
          ).then((response) => response.json());
      
          setGifs(gifs.data);
    }

    return (
        <div>
            <form className="form-search" onSubmit={getGifs}>
                <input type="text" className="form-search__input" required onChange={handleInput}/>
                <button type="submit" className="form-search__button">Search</button>
            </form>

            
        <div className="gifs">
            {gifs.map((g) => (
                <Gif
                key={g.id}
                url={g.images.original.url}
                title={g.title}
                />
            ))}
        </div>
    </div>
    )
        
}

export default Home;

// export default class Home extends Component {
//   state = {
//     gifs: [],
//     text: '',
//   }

//   handleInput = (e) => {
//     this.setState({ text: e.target.value });
//   }

//   getGifs = async (e) => {
//     e.preventDefault()

//     const { text: query } = this.state
//     const LIMIT = 12
//     const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY

//     const gifs = await fetch(
//         `${config.GIPHY_BASE_URL}/gifs/search?q=${query}&api_key=${GIPHY_KEY}&limit=${LIMIT}`
//       ).then((response) => response.json());

//     this.setState({ gifs: gifs.data });
//   };

//   render() {
//     return (
//       <div>
//         <form className="form-search" onSubmit={this.getGifs}>
//           <input
//             type="text"
//             placeholder="Search..."
//             className="form-search__input"
//             required
//             onChange={this.handleInput}
//           />
//           <button type="submit" className="form-search__button">Search</button>
//         </form>

//         <div className="gifs">
//           {this.state.gifs.map((gif) => (
//             gif.rating === 'g' && (
//               <Gif
//                 key={gif.id}
//                 url={gif.images.original.url}
//                 title={gif.title}
//               />
//             )
//           ))}
//         </div>
//       </div>
//     )
//   }
// }