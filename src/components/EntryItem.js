import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import EntryModal from './EntryModal';
import { startEditEntry, startRemoveEntry } from '../actions/entries';

export class EntryItem extends React.Component {
  state = {
    show: false,
    canEdit: true,
  };

  showModal = () => {
    this.setState(() => ({ show: true }));
  };

  onRemove = () => {
    this.props.startRemoveEntry({ id: this.props.entry.id });
    this.setState({ show: false });
  };

  onSubmit = (entry) => {
    this.props.startEditEntry(this.props.entry.id, entry);
    this.setState({ show: false });
  };

  closeModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <button className='entry-item' onClick={this.showModal}>
          <div>
            <h1 className='entry-item__date'>
              {moment(this.props.createdAt).format('DD MMM YYYY HH:mm')}
            </h1>
          </div>
          {this.props.title && (
            <h1 className='entry-item__title'>{this.props.title}</h1>
          )}
          <div className='entry-item__text'>{this.props.entryText}</div>
        </button>
        <EntryModal
          showModal={this.state.show}
          selectedEntry={this.props.entry}
          onSubmit={this.onSubmit}
          closeModal={this.closeModal}
          canEdit={this.state.canEdit}
          onRemove={this.onRemove}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    entry: state.entries.find((entry) => entry.id === props.id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  startEditEntry: (id, entry) => dispatch(startEditEntry(id, entry)),
  startRemoveEntry: (entry) => dispatch(startRemoveEntry(entry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryItem);