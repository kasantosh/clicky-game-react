import React, { Component } from "react";
import Menu from "./navigation/Menu";
import Banner from "./navigation/Banner";
import Gamebox from "./gameArea/Gamebox";
import Footer from "./footer/Footer";

export class Game extends Component {
  state = {
    score: 0,
    topScore: 0,
    topmessage: "Click on an image to begin"
  };

  boxlist = [
    {
      id: 0,
      link:
        "https://www.phipps.conservatory.org/assets/images/as_art_image/Danaus-plexippus_-_Paul_g._Wiegman2.jpg"
    },
    {
      id: 1,
      link:
        "https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/37720933_682725785401949_4331121720812371968_n.jpg?_nc_cat=109&_nc_ht=scontent.fyto1-1.fna&oh=71664c368b48485db8d1de8bc0c95396&oe=5DC72D60"
    },
    {
      id: 2,
      link:
        "https://scontent.cdninstagram.com/vp/cdadf5ce07a1860ac8cfb5e793c24c90/5D6EAAC7/t51.2885-15/sh0.08/e35/s640x640/23164184_2132847683609382_5545964219897217024_n.jpg?_nc_ht=scontent.cdninstagram.com"
    },
    {
      id: 3,
      link:
        "http://www.riveredgenaturecenter.org/wp-content/uploads/2016/09/viceroy15-4rz.jpg"
    },
    {
      id: 4,
      link:
        "https://www.joyfulbutterfly.com/wp-content/uploads/2017/02/tiger-swallowtail-butterfly-cosmos-510x510.jpg"
    },
    {
      id: 5,
      link:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/butterfly-and-yellow-cosmo-flower-judy-via-wolff.jpg"
    },
    {
      id: 6,
      link:
        "https://www.naba.org/chapters/nabambc/species-data/Lycaena-phlaeas-photo-8.jpg?ver=0008"
    },
    {
      id: 7,
      link:
        "https://www.hersheygardens.org/Content/images/uploads/Leopard_Lacewing.jpg"
    },
    {
      id: 8,
      link:
        "https://butterflyreleasecompany.com/media/ecom/prodlg/PAINTEDLADY_PRODUCT_1.jpg"
    },
    {
      id: 9,
      link:
        "https://www.nwf.org/-/media/NEW-WEBSITE/Design/Trending-Buttons/insect_monarch-butterfly_Wisconsin_Mary-Windhorst_300x300.ashx?h=300&w=300&la=en&hash=3A7E8C61792BF4AC834AB771516A4CE3E917B2EE"
    },
    {
      id: 10,
      link:
        "https://www.dilmahtea.com/sustainability/images/conservation_projects/biodiversity/butterfly-gardens/butterfly-gardens-listing.jpg"
    },
    {
      id: 11,
      link: "http://www.primates.lk/wp-content/uploads/2015/04/bf1.jpg"
    }
  ];

  // -----------------Shuffle array --------------

  shuffle = arra1 => {
    var ctr = arra1.length,
      temp,
      index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);

      ctr--;

      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  };

  game = [];
  handleClick = id => {
    if (!this.game.includes(id)) {
      this.game.push(id);
      this.setState({
        score: this.state.score + 1,
        topmessage: "Yay! You got it right!"
      });
      this.shuffle(this.boxlist);
    } else {
      if (this.state.score > this.state.topScore) {
        this.setState({
          topScore: this.state.score,
          topmessage: "Sorry you got it wrong!!",
          score: 0
        });
        this.shuffle(this.boxlist);
      } else {
        this.setState({
          topmessage: "Sorry you got it wrong!!",
          score: 0
        });
        this.shuffle(this.boxlist);
      }
      this.game = [];
    }
  };

  render() {
    return (
      <div className="container-fluid p-0">
        <Menu
          Score={this.state.score}
          topScore={this.state.topScore}
          topmessage={this.state.topmessage}
        />
        <Banner />
        <Gamebox images={this.boxlist} handleClick={this.handleClick} />
        <Footer />
      </div>
    );
  }
}

export default Game;
