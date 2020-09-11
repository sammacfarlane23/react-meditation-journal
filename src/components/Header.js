import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchIcon from './SearchIcon';
import EntryListFilters from './EntryListFilters';
import { startLogout } from '../actions/auth';
import { setTextFilter } from '../actions/filters';
import LogoutIcon from './LogoutIcon';
import CrossIcon from './CrossIcon';

export class Header extends React.Component {
  state = {
    showSearchBar: false,
  };

  showHideSearch = () => {
    this.props.setTextFilter('');
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
      this.props.setTextFilter('');
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
              <EntryListFilters tabIndex='0' onBlur={this.showHideSearch} />
            )}
            <div className='right-header'>
              {this.state.showSearchBar ? (
                <CrossIcon showSearch={this.showHideSearch} />
              ) : (
                <SearchIcon showSearch={this.showHideSearch} />
              )}
              <LogoutIcon startLogout={this.props.startLogout} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
