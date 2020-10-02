import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import SearchIcon from './SearchIcon';
import EntryListFilters from './EntryListFilters';
import { startLogout } from '../actions/auth';
import { setTextFilter } from '../actions/filters';
import LogoutIcon from './LogoutIcon';
import CrossIcon from './CrossIcon';

export class Header extends React.Component {
  state = {
    isSearchShown: false,
  };

  showHideSearch = () => {
    this.props.setTextFilter('');
    this.setState(() => ({
      isSearchShown: !this.state.isSearchShown,
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
      this.setState({ isSearchShown: false });
    }
  };

  render() {
    return (
      <header className='header'>
        <div className='content-container'>
          <div className='header__content'>
            {!this.state.isSearchShown && (
              <h1 className='header__title'>JOURNAL</h1>
            )}
            {this.state.isSearchShown && (
              <EntryListFilters tabIndex='0' onBlur={this.showHideSearch} />
            )}
            <div className='header__right'>
              {this.state.isSearchShown ? (
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
