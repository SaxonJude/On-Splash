import React from 'react';
import './ImageList.css'

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="searchPadding">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div>
                        <h2><span>On</span>Splash</h2>
                        <div className="mainText">
                            <label>The internet's source of freely-usable images.</label> <br />
                            <em className="poweredBy">Powered by Un-Splash's free API!</em>
                        </div>
                        <input
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })}
                            placeholder="Search free high resolution images"
                            className="searchBar"
                        />
                    </div>
                </form>
            </div>
            );
    };
};

export default SearchBar;
