import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spring } from 'react-spring/renderprops';
import SearchIcon from './SearchIcon';
import EntryListFilters from './EntryListFilters';
import { startLogout } from '../actions/auth';
import LogoutIcon from './LogoutIcon';

export class Header extends React.Component {
  state = {
    showSearchBar: false,
  };

  showHideSearch = () => {
    this.setState(() => ({
      showSearchBar: !this.state.showSearchBar,
    }));
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = (e) => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(e.target)) {
      this.setState({ showSearchBar: false });
    }
  };

  render() {
    return (
      <header className='header'>
        <div className='content-container'>
          <div className='header__content'>
            {!this.state.showSearchBar && (
              <Link className='header__title' to='/dashboard'>
                <h1>JOURNAL</h1>
              </Link>
            )}
            {this.state.showSearchBar && (
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {(props) => (
                  <div style={props}>
                    <EntryListFilters
                      tabIndex='0'
                      onBlur={this.showHideSearch}
                    />
                  </div>
                )}
              </Spring>
            )}
            <div className='right-header'>
              <SearchIcon showSearch={this.showHideSearch} />
              <LogoutIcon startLogout={this.props.startLogout} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
