import React, { Component } from "react";

import Cards from "./cards/Cards";
import "./Dashboard.css";

/* icons */
import today from "../../Icons/calendar-today.svg";
import task from "../../Icons/clipboard-check.svg";
import notes from "../../Icons/note.svg";
import message from "../../Icons/Path 53.svg";
import billing from "../../Icons/Path 444.svg";
import nurse from "../../Icons/np_nurse_1067188_000000.svg";
import outsidelabs from "../../Icons/np_chemistry_1173838_000000.svg";
import labresults from "../../Icons/np_searching-testtube_295071_000000.svg";
import insidediag from "../../Icons/np_clinic_85623_000000.svg";
import diagresult from "../../Icons/np_medical-folder_942724_000000.svg";
import referral from "../../Icons/np_man_1237306_000000.svg";
import medicine from "../../Icons/np_medicine_375012_000000.svg";
import screening from "../../Icons/np_microscope_163553_000000.svg";
import screeningresults from "../../Icons/np_medical-form_879545_000000.svg";
class Dashboard extends Component {
    onView = e => {};

    onAdd = e => {};

    onViewNote = e => {};

    onAddNote = e => {};

    render() {
        return (
            <div className="cards-container">
                <Cards
                    count="1200"
                    icon={today}
                    text="Today's Appointment"
                    onView={this.onView}
                    onAdd={this.onAdd}
                />
                <Cards
                    count="26"
                    icon={task}
                    text="Task"
                    onView={this.onView}
                    onAdd={this.onAdd}
                />
                <Cards
                    count="6"
                    icon={notes}
                    text="Notes"
                    onView={this.onViewNote}
                    onAdd={this.onAddNote}
                />
                <Cards
                    count="6"
                    icon={message}
                    text="Messages"
                    onView={this.onView}
                    onAdd={this.onAdd}
                />
                <Cards
                    count="100"
                    icon={billing}
                    text="Billing Messages"
                    onView={this.onView}
                    onAdd={this.onAdd}
                />
                <Cards
                    count="6"
                    icon={nurse}
                    text="Nurse ToDos"
                    onView={this.onView}
                    onAdd={this.onAdd}
                />
                <Cards
                    count="5"
                    icon={outsidelabs}
                    text="Outside Labs"
                    onView={this.onView}
                    onAdd={this.onAdd}
                />
                <Cards
                    count="7"
                    icon={labresults}
                    text="Lab Results"
                    onView={this.onView}
                />
                <Cards
                    count="6"
                    icon={insidediag}
                    text="Inside Diagnostics"
                    onView={this.onView}
                />
                <Cards
                    count="30"
                    icon={diagresult}
                    text="Diagnostic Result"
                    onView={this.onView}
                />
                <Cards
                    count="6"
                    icon={referral}
                    text="Referral"
                    onView={this.onView}
                />
                <Cards
                    count="88"
                    icon={medicine}
                    text="Medicines"
                    onView={this.onView}
                />
                <Cards
                    count="88"
                    icon={screening}
                    text="Screening Todos"
                    onView={this.onView}
                />
                <Cards
                    count="88"
                    icon={screeningresults}
                    text="Screening Results"
                    onView={this.onView}
                />
            </div>
        );
    }
}

export default Dashboard;
