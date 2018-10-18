import React from 'react';
import Modal from 'react-responsive-modal';
import BigBossBox from '../2-BigBoss-Comments/BigBossBox'
import BigBossStats from '../characters/BigBossStats'
import { Button } from 'reactstrap';
import { ModalHeader } from 'reactstrap';
export default class BigBoss extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  
  
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button className="welcomeBox" onClick={this.onOpenModal}>Enter</Button>
        <Modal open={open} onClose={this.onCloseModal} >
        <ModalHeader toggle={this.onCloseModal}></ModalHeader>
        <div>
        <img className="boxmodal" width="100%" src="https://i.kym-cdn.com/photos/images/facebook/001/025/548/67a.jpg" alt="BBHero" />
        </div>
        <div className="main">
          <center>
          <p>
          <br/>
          "I won't scatter your sorrow to the heartless sea. I will always be with you. <br />Plant your roots in me. I won't see you end as ashes. You're all diamonds."  <br /> <br />
          </p>
          <h2>-Big Boss</h2>
          </center>
          <BigBossStats />
          <br /> 
          <p>
          Big Boss, real name John, also known as Jack, and formerly known as Naked Snake, Vic Boss, Ishmael, Saladin, or simply Snake, was a renowned special forces operative and mercenary commander. He founded U.S. Army Special Forces Unit FOXHOUND, along with the mercenary company Militaires Sans Frontières, and was one of the founding members of the Patriots. Big Boss later established the military states of Outer Heaven and Zanzibar Land as bases for his companies, in order to realize his ambitions of creating a nation for soldiers. Considered by some as "The Greatest Warrior of the 20th Century," he earned such monikers as "the Legendary Soldier" and "the Legendary Mercenary," feared in combat by both friend and foe as a hero and a madman.
          <br /> <br />
          During the Cold War, Big Boss was an apprentice to The Boss, the so-called "Mother of Special Forces," and later served as a black ops field agent for the CIA's FOX Unit, under Major Zero.
          <br /> <br />
          Having his genetic code used as part of the government project Les Enfants Terribles, Big Boss was the genetic father of Solid Snake (his subordinate and later nemesis), Liquid Snake and Solidus Snake. He was also the mental and physical template for his body double and former subordinate, Venom Snake, with whom he shared the title of "Big Boss."
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/67/17/09/671709b07ce56b931af6a6181bc79d85.jpg" alt="mgs3" />
          <br /><br />
          <h4>Biography</h4>
          </center>
          <hr />
          <p>
          During his youth, he was willing to sacrifice himself for his country if need be, although his patriotism towards America came into serious question after he was forced to kill The Boss in a conspiracy that showcased to him how even the best of soldiers are expendable to the government. While Big Boss did still have some respect for his country, he wasn't going to live his life the way The Boss had, as a tool for corrupt political aims, and anything he did would be done out of loyalty to himself rather than a country.
          <br /> <br />
          The cornea and lens of Big Boss's right eye was damaged, and the eyeball itself ruptured, due to the muzzle burn from Major Ocelot's revolver in Operation Snake Eater. From then on he adopted the use of an eyepatch. Coincidentally, two of his clones would later utilize similar attire, but on their left eyes instead: Solidus Snake, to cover his own damaged eye, and Solid Snake, to aid the vision of his still functioning eye via the Solid Eye device.
          <br /> <br />
          Perhaps the biggest effect had on Big Boss's personality was when he was forced to kill The Boss, who was akin to a mother figure to him, during Operation Snake Eater, an action that haunted him for the rest of his life. In his final moments, he told Solid Snake that he was already dead from the moment he killed her. It wasn't until ten years after Operation Snake Eater that he was able to find some closure to the event and go by the title of Big Boss.
          <br /> <br />
          Big Boss was implied to be disillusioned after killing The Boss, misinterpreting her final message as The Boss wanted absolute freedom for all. His disillusionment was pushed further at the end of the Peace Walker Incident when Strangelove said that The Boss laid down her gun and wanted to live in peace. Big Boss at this moment believed that The Boss betrayed him and everything she stood for as a soldier. On his death in 2014, Big Boss finally realized what her final will was.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/fb/23/f1/fb23f1f0f50afb81b4f5c8f487313c3c.jpg" alt="mgs3" />
          </center>
          </div>
        <BigBossBox />
        </Modal>
      </div>
    );
  }
}