import React, { Component } from 'react';

const TeamMember = (props) => {

    return (
        <div className="member">
            <img src={props.img} />
        </div>
    )
}



class TeamPage extends Component {
    constructor (props) {
        super (props);

        this.state = {
            teamImages: {
                val: require('../images/team/val.png'),
                demetre: require('../images/team/Demetre.png'),
                kelly: require('../images/team/kelly.png'),
                kim: require('../images/team/Kim.png'),
                liza: require('../images/team/Liza.png'),
                mark: require('../images/team/mark.png'),
                matt: require('../images/team/Matt.png'),
                sarah: require('../images/team/Sarah.png'),
                shannon: require('../images/team/shannon.png'),
                ziba: require('../images/team/ziba.png'),

            }
        }
    }

    render () {
        return (
            <div>
                <div className="bg">
                </div>
                <div className="team-box">
                    <div className="team-info">
                        <h1>Meet the team!</h1>
                        <p>Our barbers & stylists are dedicated, hard working, and passionate about their clients and their work.</p>
                    </div>
                    {
                        Object.keys(this.state.teamImages).map( (item, index) => (
                            <TeamMember img={this.state.teamImages[item]} />
                        ))
                    }
                </div>
            </div>

        )
    }
}

export default TeamPage