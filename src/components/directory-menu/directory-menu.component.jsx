import React, { Component } from "react";

import "./directory-menu.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

class DirectoryMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: [
        {
          id: 1,
          title: "Hats"
        },
        {
          id: 2,
          title: "Jackets"
        },
        {
          id: 3,
          title: "Sneakers"
        },
        {
          id: 4,
          title: "Womans"
        },
        {
          id: 5,
          title: "Mans"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.departments.length &&
          this.state.departments.map(sec => (
            <MenuItem key={sec.id} {...sec} />
          ))}
      </div>
    );
  }
}

export default DirectoryMenu;
