import React from 'react';
import Modal from 'react-responsive-modal';
import TheBossBox from '../1-TheBoss-Comments/TheBossBox'
import { Button } from 'reactstrap';
import TheBossStats from '../characters/TheBossStats'
import { ModalHeader } from 'reactstrap';
 
export default class TheBoss extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

 
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button className="welcomeBox" onClick={this.onOpenModal}>Enter</Button>
        <Modal open={open} onClose={this.onCloseModal} className="modalWidth" >
        <ModalHeader toggle={this.onCloseModal}></ModalHeader>
        <img className="boxmodal" width="100%" src="https://i.pinimg.com/474x/3e/6d/bd/3e6dbd64a8f579b44a20b1a7036c5e8e--freak-games-play-station.jpg" alt="TheBossHero" />
        <div className="main">
          <center>
          <p>
          <br/>
          "One must die and one must live. No victory, no defeat. <br />The survivor will carry on the fight. It is our destiny... <br />The one who survives will inherit the title of Boss.<br /> And the one who inherits the title of Boss will face an existence of endless battle."<br /> <br />
          </p>
          <h2>-The Boss</h2>
          </center>
          
          <TheBossStats />
          <p>
          <br /> 
          The Boss was born in 1922 as the daughter of one of the original and higher-ranking members of the Wisemen's Committee, and later grew up in the care of the Philosophers. She learned from her father the most forbidden secrets of the Philosophers, and as a consequence, the shadowy organization arranged for his death. The Boss later went on to become an instructor at one of the Philosophers' "charm schools."
          <br /> <br />
          The Boss, as her original codename suggested, found joy in battle. However, when she went to space, her view on war changed. She believed that there was more to life than the Cold War, recognizing the pointlessness of the conflict between the United States and the Soviet Union. As such, she longed for a world that would be united in which people would respect each other as human beings, as opposed to remaining in constant conflict. This was despite the fact that she herself was a soldier.
          <br /> <br />
          </p>
          <center> 
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/c8/af/77/c8af77ecf396135542d5e45d812ab3d7--gear-art-metal-gear-solid.jpg" alt="mgs3" />
          <br /><br />
          <h4>Biography</h4>
          </center>
          <hr />
          <p>
          Ever since failing her mission in 1943, The Boss had decidedly blamed herself for the atomic bombing of Nagasaki and the rise of the Cold War; having thought in retrospect that if she had succeeded, the Cold War might never have started in the first place. Because of this, she would go on to dedicate her entire life to her country and its faults based on what she felt was a conflict that she had brought upon the world. The Boss would go on to maintain this strong sense of loyalty to her country as a soldier; her loyalty was so great that she allowed the government to use her ruthlessly and knowingly had her killed by her apprentice Naked Snake.
          <br /> <br />
          Despite this, she was not blinded by her loyalty to the extent that she didn't know how soldiers were used, as she mentioned to Naked Snake when they re-encountered each other after five years. Her unrelenting loyalty was ultimately what led to her death; having purposely suppressed her own ideals and personal feelings for many years as part of her penance. As her idealistic notions were condemned and feared by her superiors, she allowed herself to die hoping that Naked Snake would learn the truth of her tortured life so that he may learn from her mistakes and live a normal life dedicated only to himself. Though she believed that the Philosophers had grown far too corrupt to be redeemed, she clinged onto what little hope she had that her sacrifice would somehow help in uniting the rest of the world. She also accurately predicted that America and Russia would no longer remain enemies in the 21st century.
          <br /> <br />
          Like her apprentice Big Boss and his son Solid Snake, she was a very strong-willed person and had a very strong charisma as she could take the burden of her country having her killed, turning her back on her Cobra Unit and having her reputation destroyed in order to complete her final mission. Her charisma was so strong that it influenced the very creation of the Patriots and was among the reasons she was killed. EVA herself had believed the 21st century could have been a very different place if she had survived Operation Snake Eater.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="90%" src="https://www.geek.com/wp-content/uploads/2016/06/Metal-Gear-Solid-3-pachinko-625x350.jpg" alt="mgs3Bridge" />
          </center>
          <br />
          <p>
          Possessing great wisdom in warfare, she was a fierce soldier that sparked fear and admiration among her enemies, colleagues, and allies. Although she held a calm and collected demeanor, she possessed such a strong and overbearing presence that even Volgin was intimidated by her whenever she questioned his mistrust towards her. Despite "The Joy" being her former codename, The Boss rarely smiled during the events of Operation Snake Eater. In contrast, her lover The Sorrow always smiled during his encounters with Naked Snake, with not one occasion where there was a frown on his face.
          <br /> <br />
          The Boss also had a lot of love and care for her apprentice Naked Snake, so much so that even after they went their separate ways and The Boss had found a new apprentice, she would often talk to Strangelove as if she was talking to Snake himself. She also protected Snake during Operation Snake Eater from Ocelot and EVA by making them promise not to kill him, and she instructed EVA to tell Snake the truth behind her final mission and death as she wanted him to know. The Boss knew that Snake would feel guilty for killing her so she told EVA to tell him to forgive himself and to let it go.
          <br /> <br />
          The Boss's grave was later placed in Arlington National Cemetery in Virginia. Snake would arrive later to pay his respects to her, by leaving a bouquet containing solely Stars of Bethlehem and the Patriot at her grave. Despite her officially being labeled as a traitor and war criminal with the intention of her being remembered that way as part of her final mission, her epitaph on her grave marker read "In memory of a patriot who saved the world."
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/da/76/5f/da765f1b28caf75fb038374c8707483e--best-games-metal-gear-solid-.jpg" alt="mgs3Bridge" />
          </center>
          </div>
          <TheBossBox />
        </Modal>
      </div>
    );
  }
}
 
