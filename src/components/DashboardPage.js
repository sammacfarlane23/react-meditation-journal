import React from "react";
import EntryList from "./EntryList";
import AddEntryButton from "./AddEntryButton";

const DashboardPage = () => (
  <div className="dashboard-layout">
    <div className="content-container">
      <EntryList />
    </div>
    <AddEntryButton />
  </div>
);

export default DashboardPage;
