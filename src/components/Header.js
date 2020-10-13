import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {
  faSearch,
  faSignOutAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import EntryListFilters from './EntryListFilters';
import { startLogout } from '../actions/auth';
import { setTextFilter } from '../actions/filters';
import IconComponent from './IconComponent';

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
              <button className='button--big' onClick={this.showHideSearch}>
                {this.state.isSearchShown ? (
                  <IconComponent
                    aria-label='cancel-button'
                    icon={faTimes}
                    size='2x'
                  />
                ) : (
                  <IconComponent
                    aria-label='search-button'
                    icon={faSearch}
                    size='2x'
                  />
                )}
              </button>
              <button
                className='button--big'
                aria-label='logout-button'
                onClick={this.props.startLogout}
              >
                <IconComponent icon={faSignOutAlt} size='2x' />
              </button>
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
